require('dotenv').config();
const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
// Static files middleware
app.use(express.static('public'));
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/img', express.static(__dirname + '/public/img'));

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get('/', (req, res) => {
    res.render('index', { error: null });
});

async function fetchInstagramData(username) {
    try {
        // First try with the Instagram API
        const response = await axios.get(`https://i.instagram.com/api/v1/users/web_profile_info/?username=${username}`, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
                'Accept-Language': 'en-US,en;q=0.5',
                'X-IG-App-ID': '936619743392459'
            }
        });

        return response.data.data.user;
    } catch (error) {
        // If first method fails, try alternative method
        const response = await axios.get(`https://www.instagram.com/${username}/?__a=1&__d=dis`, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        });

        return response.data.graphql.user;
    }
}

app.post('/analyze', async (req, res) => {
    const { username } = req.body;
    
    try {
        const userData = await fetchInstagramData(username);
        const posts = userData.edge_owner_to_timeline_media.edges;
        
        // Calculate average likes and engagement
        let totalLikes = 0;
        let totalComments = 0;
        const postCount = posts.length;

        posts.forEach(post => {
            totalLikes += post.node.edge_liked_by.count || 0;
            totalComments += post.node.edge_media_to_comment.count || 0;
        });

        const averageLikes = postCount > 0 ? Math.round(totalLikes / postCount) : 0;
        const averageComments = postCount > 0 ? Math.round(totalComments / postCount) : 0;
        
        // Calculate engagement rate (avg interactions per post / followers * 100)
        const avgInteractions = (averageLikes + averageComments);
        const engagementRate = userData.edge_followed_by.count > 0 
            ? ((avgInteractions / userData.edge_followed_by.count) * 100).toFixed(2)
            : 0;

        // Process recent posts and ensure image URLs are properly formatted
        const recentPosts = posts.slice(0, 6).map(post => {
            const node = post.node;
            return {
                likes: node.edge_liked_by.count,
                comments: node.edge_media_to_comment.count,
                thumbnail: node.thumbnail_src || node.display_url,
                shortcode: node.shortcode,
                isVideo: node.is_video
            };
        });
        
        const profileData = {
            username: userData.username,
            fullName: userData.full_name,
            followers: userData.edge_followed_by.count,
            following: userData.edge_follow.count,
            posts: userData.edge_owner_to_timeline_media.count,
            bio: userData.biography,
            profilePic: userData.profile_pic_url_hd || userData.profile_pic_url,
            averageLikes,
            averageComments,
            engagementRate,
            recentPosts
        };
        
        res.render('dashboard', { profile: profileData, error: null });
    } catch (error) {
        console.error('Error:', error.message);
        res.render('index', { 
            error: 'Unable to fetch Instagram profile. This might be due to Instagram\'s rate limiting or the profile being private. Please try again later.' 
        });
    }
});

// Proxy route for Instagram images
app.get('/proxy-image', async (req, res) => {
    try {
        const imageUrl = req.query.url;
        if (!imageUrl) {
            throw new Error('No image URL provided');
        }

        const response = await axios.get(imageUrl, {
            responseType: 'arraybuffer',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        });

        const contentType = response.headers['content-type'];
        res.setHeader('Content-Type', contentType);
        res.send(response.data);
    } catch (error) {
        console.error('Image proxy error:', error.message);
        res.status(404).send('Image not found');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
