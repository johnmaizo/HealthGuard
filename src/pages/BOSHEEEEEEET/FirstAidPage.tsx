import DefaultLayout from '../../layout/DefaultLayout';
import { Container, Paper, Typography, Divider, Box, Link } from '@mui/material';
import { styled } from '@mui/material/styles';

const NumberedStep = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  marginBottom: theme.spacing(2),
}));

const NumberCircle = styled(Box)(({ theme }) => ({
  width: 40,
  height: 40,
  borderRadius: '50%',
  backgroundColor: theme.palette.error.main,
  color: theme.palette.common.white,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 'bold',
  padding: theme.spacing(3),
  marginRight: theme.spacing(2),
}));

const FirstAidPage = () => {
  return (
    <DefaultLayout>
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ padding: 4, marginTop: 4 }}>
          <Typography variant="h4" gutterBottom align="center">
            First Aid Tips
          </Typography>
          
          <Divider sx={{ marginBottom: 4 }} />

          <NumberedStep>
            <NumberCircle>1</NumberCircle>
            <Typography variant="body1">
              CHECK the scene for safety, form an initial impression, obtain consent, and use personal protective equipment (PPE)
            </Typography>
          </NumberedStep>

          <Divider sx={{ marginY: 2 }} />

          <NumberedStep>
            <NumberCircle>2</NumberCircle>
            <Typography variant="body1">
              If the person appears unresponsive, CHECK for responsiveness, breathing, life-threatening bleeding, or other life-threatening conditions using shout-tap-shout. Note: CHECK for no more than 10 seconds.
            </Typography>
          </NumberedStep>

          <Divider sx={{ marginY: 2 }} />

          <NumberedStep>
            <NumberCircle>3A</NumberCircle>
            <Typography variant="body1">
              If the person does not respond, responds but is not fully awake, is not breathing or is only gasping, or has life-threatening bleeding or another obvious life-threatening condition, CALL 9-1-1 and get equipment, or tell someone to do so. Then, give CARE based on the condition found and your level of training and continue your check to determine if additional care is needed.
              <br /><br />
              <strong>Note:</strong> For a person who is unresponsive and not breathing, <Link href="https://www.redcross.org/take-a-class/cpr/performing-cpr/cpr-steps" target="_blank" rel="noopener"><strong>start CPR</strong></Link> and <Link href="https://www.redcross.org/take-a-class/aed/using-an-aed/aed-steps" target="_blank" rel="noopener"><strong>use an AED</strong></Link> immediately.
            </Typography>
          </NumberedStep>

          <Divider sx={{ marginY: 2 }} />

          <NumberedStep>
            <NumberCircle>3B</NumberCircle>
            <Typography variant="body1">
              If the person is responsive or responds to stimulation and is fully awake and does not appear to have a life-threatening condition:
              <ul>
                <li>Interview the person (or bystanders, if necessary), ask questions about signs and symptoms, allergies, medications, and medical conditions (SAM).</li>
                <li>Do a focused check based on what the person told you, how the person is acting, and what you see.</li>
              </ul>
              <strong>Note:</strong> Do not ask the person to move if you suspect a head, neck, or spinal injury. Do not ask the person to move any area of the body that causes discomfort or pain.
              <br />
              <strong>Note:</strong> As you check the person, take note of any medical identification tags.
            </Typography>
          </NumberedStep>
        </Paper>
      </Container>
    </DefaultLayout>
  );
};

export default FirstAidPage;
