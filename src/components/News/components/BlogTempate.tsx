import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { 
  Container, Typography, Box, Breadcrumbs, Divider, 
  Avatar, Chip, Stack, Paper, Button 
} from '@mui/material';
import Grid from '@mui/material/Grid'; // Optimized Grid
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { blogs } from './blogData';

const BlogTemplate: React.FC = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = blogs.find((b) => b.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) return <Typography variant="h4" sx={{ p: 10, textAlign: 'center' }}>Article not found.</Typography>;

  return (
    <Box sx={{ bgcolor: 'white', pb: 10 }}>
      {/* Editorial Header */}
      <Box sx={{ bgcolor: '#F8F9FA', py: { xs: 6, md: 10 }, borderBottom: '1px solid #ECEEF0' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 8 }}>
              <Breadcrumbs sx={{ mb: 3, fontSize: '0.85rem' }}>
                <Link to="/" style={{ textDecoration: 'none', color: '#888' }}>HOME</Link>
                <Link to="/news" style={{ textDecoration: 'none', color: '#888' }}>RESOURCES</Link>
                <Typography color="primary" sx={{ fontSize: '0.85rem', fontWeight: 700 }}>
                  {post.category.toUpperCase()}
                </Typography>
              </Breadcrumbs>

              <Typography variant="h2" component="h1" sx={{ 
                fontWeight: 900, mb: 3, fontSize: { xs: '2.2rem', md: '3.5rem' }, 
                lineHeight: 1.1, letterSpacing: '-0.02em'
              }}>
                {post.title}
              </Typography>

              <Stack direction="row" alignItems="center" spacing={2}>
                <Avatar sx={{ bgcolor: '#01B0F0', width: 48, height: 48, fontWeight: 700 }}>
                  {post.author.charAt(0)}
                </Avatar>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, lineHeight: 1.2 }}>{post.author}</Typography>
                  <Typography variant="caption" color="text.secondary">
                    Published {post.date} • {post.readTime}
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Hero Image */}
      <Container maxWidth="lg" sx={{ mt: -6 }}>
        <Box
          component="img"
          src={post.image}
          sx={{ width: '100%', height: { xs: 350, md: 600 }, objectFit: 'cover', borderRadius: 0, border: '1px solid #ECEEF0' }}
        />
      </Container>

      {/* Main Content Area */}
      <Container maxWidth="lg" sx={{ mt: 8 }}>
        <Grid container spacing={8}>
          
          {/* Left Side: Article Body */}
          <Grid size={{ xs: 12, md: 8 }}>
            <Box sx={{ 
              "& p": { mb: 4, lineHeight: 1.9, fontSize: '1.2rem', color: '#2D3436', fontFamily: '"Georgia", serif' },
              "& h4": { mt: 6, mb: 3, fontWeight: 800, color: '#1A1A1A', fontSize: '1.75rem' }
            }}>
              {post.body.map((section, index) => {
                switch(section.type) {
                  case 'paragraph': 
                    return <Typography key={index} variant="body1">{section.text}</Typography>;
                  
                  case 'subheading': 
                    return <Typography key={index} variant="h4">{section.text}</Typography>;

                  case 'wrap-section':
                    return (
                      <Box key={index} sx={{ display: 'block', mb: 4 }}>
                        <Box 
                          component="img" 
                          src={section.url} 
                          sx={{ 
                            width: { xs: '100%', sm: '45%' }, 
                            float: { sm: 'left' }, 
                            mr: { sm: 4 }, 
                            mb: { xs: 2, sm: 2 },
                            border: '1px solid #EEE'
                          }} 
                        />
                        <Typography variant="body1">{section.text}</Typography>
                        {/* Clearfix ensures subsequent paragraphs (type: 'paragraph') start below this section if they exceed the image height */}
                        <Box sx={{ clear: 'both' }} />
                      </Box>
                    );

                  case 'quote':
                    return (
                      <Box key={index} sx={{ borderLeft: '5px solid #01B0F0', pl: 4, my: 7, py: 1, bgcolor: '#F0F9FF', pr: 2 }}>
                        <Typography variant="h5" sx={{ fontStyle: 'italic', fontWeight: 500, color: '#003366' }}>
                          "{section.text}"
                        </Typography>
                      </Box>
                    );

                  case 'list':
                    return (
                      <Box component="ul" key={index} sx={{ mb: 5, pl: 3 }}>
                        {section.items?.map((item, i) => (
                          <Typography component="li" key={i} sx={{ mb: 2, fontSize: '1.15rem', color: '#2D3436', '&::marker': { color: '#01B0F0' } }}>
                            {item}
                          </Typography>
                        ))}
                      </Box>
                    );

                  default: return null;
                }
              })}

              {/* Final CTA Section (Preserved per your request) */}
              <Box sx={{ mt: 10, p: 5, bgcolor: '#ffffff', border: '1px solid #EEE', textAlign: 'center' }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 2, color: '#1A1A1A' }}>
                  Ready to optimize your systems?
                </Typography>
                <Typography variant="body1" sx={{ color: '#666', mb: 4, fontFamily: 'sans-serif !important' }}>
                  Speak with our engineering team today to discuss your specific high-pressure requirements.
                </Typography>
                <Button 
                  variant="contained" 
                  size="large"
                  onClick={() => navigate('/contact')}
                  endIcon={<ArrowForwardIcon />}
                  sx={{ 
                    bgcolor: '#01B0F0', 
                    borderRadius: 0, 
                    px: 6, py: 2, 
                    fontWeight: 700,
                    '&:hover': { bgcolor: '#0099d1' }
                  }}
                >
                  Contact Our Experts
                </Button>
              </Box>
            </Box>

            <Divider sx={{ my: 8 }} />

            <Stack direction="row" spacing={1} flexWrap="wrap">
              <Chip label={post.category} sx={{ bgcolor: '#000', color: '#fff', borderRadius: 0 }} />
              <Chip label="Technical Consulting" variant="outlined" sx={{ borderRadius: 0 }} />
              <Chip label="High Pressure Systems" variant="outlined" sx={{ borderRadius: 0 }} />
            </Stack>
          </Grid>

          {/* Right Side: Sidebar */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack spacing={4} sx={{ position: 'sticky', top: 100 }}>
              <Paper variant="outlined" sx={{ p: 3, bgcolor: '#FBFBFB', borderRadius: 0 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 800, mb: 2 }}>
                  Key Takeaways
                </Typography>
                <Stack spacing={2}>
                  <Typography variant="body2" color="text.secondary">• Integrated safety protocols.</Typography>
                  <Typography variant="body2" color="text.secondary">• Material fatigue analysis.</Typography>
                  <Typography variant="body2" color="text.secondary">• Industry 4.0 compliance.</Typography>
                </Stack>
              </Paper>

              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 800, mb: 2 }}>
                  Share this Article
                </Typography>
                <Stack direction="row" spacing={1}>
                  <Chip label="LinkedIn" onClick={() => {}} sx={{ cursor: 'pointer', borderRadius: 0 }} />
                  <Chip label="Copy Link" onClick={() => {}} sx={{ cursor: 'pointer', borderRadius: 0 }} />
                </Stack>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BlogTemplate;