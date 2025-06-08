import { Card, CardContent, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function PostCard({ post }) {
  const navigate = useNavigate();

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{post.title}</Typography>
        <Typography>{post.body}</Typography>
        <Button onClick={() => navigate(`/dados/${post.id}`)}>Ver detalhes</Button>
      </CardContent>
    </Card>
  );
}