import { useEffect, useState } from 'react';
import api from '../services/api';
import { Container, Typography, Grid } from '@mui/material';
import PostCard from '../components/PostCard';

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get('/posts')
      .then(response => setPosts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Lista de Posts</Typography>
      <Grid container spacing={2}>
        {posts.map(post => (
          <Grid item xs={12} md={6} key={post.id}>
            <PostCard post={post} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}