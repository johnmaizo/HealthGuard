import { Link } from 'react-router-dom';
import DefaultLayout from '../../layout/DefaultLayout';

import Exercise from '../../assets/images/educ/exercise.jpg';
import Wellness from '../../assets/images/educ/wellness.jpg';
import Fitness from '../../assets/images/educ/fitness.jpg';
import Medical from '../../assets/images/educ/medicalAdvice.jpg';
import Healthy from '../../assets/images/educ/healthy.jpg';

const blogPosts = [
  {
    title: 'The Benefits of Regular Exercise',
    excerpt:
      'Discover how regular physical activity can improve your overall health and well-being.',
    link: '/health-education/benefits-of-regular-exercise',
    photo: Exercise,
  },
  {
    title: 'Fitness Routines for Beginners',
    excerpt:
      'Start your fitness journey with these beginner-friendly routines.',
    link: '/health-education/fitness-routines-for-beginners',
    photo: Fitness,
  },
  {
    title: 'Medical Advice: When to See a Doctor',
    excerpt:
      "Learn when it's important to consult a healthcare professional for medical issues.",
    link: '/health-education/medical-advice',
    photo: Medical,
  },
  {
    title: 'Healthy Eating Habits for a Better You',
    excerpt:
      'Incorporate these healthy eating habits into your diet to enhance your health.',
    link: '/health-education/healthy-eating-habits',
    photo: Healthy,
  },
];

const HealthEducPage = () => {
  return (
    <DefaultLayout>
      <div className="w-full max-w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-2 md:p-10">
        <h2 className=" text-3xl font-bold pb-10">Health Education</h2>

        <ul className="grid gap-4 grid_auto_fit">
          {blogPosts.map((post, index) => (
            <li
              key={index}
              className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-3"
            >
              <img src={post.photo} alt={post.title} className="w-full aspect-square object-cover" />
              <h2 className=" pt2
              text-2xl font-semibold">{post.title}</h2>
              <p>{post.excerpt}</p>
              <Link to={post.link} className=" hover:underline text-blue-700">
                Read more
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </DefaultLayout>
  );
};

export default HealthEducPage;
