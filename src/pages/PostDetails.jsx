import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';
import { Container, Typography, Card, CardContent } from '@mui/material';

export default function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    api.get(`/posts/${id}`)
      .then(response => setPost(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!post) return <Typography>Carregando publicação...</Typography>;

  return (
    <Container>
      <Card>
        <CardContent>
          <Typography variant="h4" gutterBottom>Título: {post.title}</Typography>
          <Typography>Conteúdo: {post.body}</Typography>

        </CardContent>
      </Card>
    </Container>
  );
}