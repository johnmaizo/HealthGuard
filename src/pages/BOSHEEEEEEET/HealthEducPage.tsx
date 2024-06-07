import { Link } from 'react-router-dom';
import DefaultLayout from '../../layout/DefaultLayout';
import { Container, Paper, Typography, Grid, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';

import Exercise from '../../assets/images/educ/exercise.jpg';
import Fitness from '../../assets/images/educ/fitness.jpg';
import Medical from '../../assets/images/educ/medicalAdvice.jpg';
import Healthy from '../../assets/images/educ/healthy.jpg';

const blogPosts = [
  {
    title: 'The Benefits of Regular Exercise',
    excerpt: 'Discover how regular physical activity can improve your overall health and well-being.',
    link: '/health-education/benefits-of-regular-exercise',
    photo: Exercise,
  },
  {
    title: 'Fitness Routines for Beginners',
    excerpt: 'Start your fitness journey with these beginner-friendly routines.',
    link: '/health-education/fitness-routines-for-beginners',
    photo: Fitness,
  },
  {
    title: 'Medical Advice: When to See a Doctor',
    excerpt: "Learn when it's important to consult a healthcare professional for medical issues.",
    link: '/health-education/medical-advice',
    photo: Medical,
  },
  {
    title: 'Healthy Eating Habits for a Better You',
    excerpt: 'Incorporate these healthy eating habits into your diet to enhance your health.',
    link: '/health-education/healthy-eating-habits',
    photo: Healthy,
  },
];

const HealthEducPage = () => {
  return (
    <DefaultLayout>
      <Container maxWidth="lg" sx={{ marginTop: 4 }}>
        <Typography variant="h4" gutterBottom align="center">
          Health Education
        </Typography>

        <Grid container spacing={4}>
          {blogPosts.map((post, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  alt={post.title}
                  height="200"
                  image={post.photo}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {post.excerpt}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    component={Link}
                    to={post.link}
                    size="small"
                    color="primary"
                  >
                    Read more
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </DefaultLayout>
  );
};

export default HealthEducPage;
