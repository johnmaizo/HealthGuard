import { useState } from 'react';
import { TextField, Typography, Box, Container, Paper, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import DefaultLayout from '../../layout/DefaultLayout';

const SymptomChecker = () => {
  const [symptoms, setSymptoms] = useState('');
  const [result, setResult] = useState(null);
  const [prevention, setPrevention] = useState(null);

  const diagnosisMap = {
    'fever': {
      diagnosis: 'Possible Fever',
      prevention: 'Stay hydrated, get plenty of rest, and avoid close contact with sick individuals. Wash hands frequently and maintain good hygiene.'
    },
    'cough': {
      diagnosis: 'Possible Respiratory Infection',
      prevention: 'Avoid smoking, stay hydrated, and use a humidifier. Practice good hand hygiene and avoid close contact with sick individuals.'
    },
    'headache': {
      diagnosis: 'Possible Headache',
      prevention: 'Maintain a regular sleep schedule, stay hydrated, manage stress, and avoid known headache triggers.'
    },
    'rash': {
      diagnosis: 'Possible Skin Condition',
      prevention: 'Avoid irritants and allergens, keep skin moisturized, and practice good skin hygiene. Use sunscreen to protect against UV rays.'
    },
    'nausea': {
      diagnosis: 'Possible Gastrointestinal Issue',
      prevention: 'Eat small, frequent meals, avoid spicy and greasy foods, stay hydrated, and avoid known triggers.'
    },
    'sore throat': {
      diagnosis: 'Possible Throat Infection',
      prevention: 'Avoid close contact with sick individuals, practice good hand hygiene, and avoid irritants like smoke.'
    },
    'shortness of breath': {
      diagnosis: 'Possible Respiratory Issue',
      prevention: 'Avoid smoking, manage chronic conditions, and avoid allergens and pollutants. Practice breathing exercises.'
    },
    'chest pain': {
      diagnosis: 'Possible Cardiac Issue',
      prevention: 'Maintain a healthy diet, exercise regularly, avoid smoking, and manage stress. Regular check-ups with a healthcare provider are essential.'
    },
    'fatigue': {
      diagnosis: 'Possible Chronic Fatigue Syndrome',
      prevention: 'Maintain a regular sleep schedule, manage stress, stay active, and eat a balanced diet.'
    },
    'diarrhea': {
      diagnosis: 'Possible Gastroenteritis',
      prevention: 'Practice good hand hygiene, avoid contaminated food and water, and stay hydrated.'
    },
    'vomiting': {
      diagnosis: 'Possible Food Poisoning',
      prevention: 'Avoid undercooked foods, practice good food hygiene, and stay hydrated.'
    },
    'muscle pain': {
      diagnosis: 'Possible Muscle Strain',
      prevention: 'Warm up before exercise, practice good posture, and avoid overexertion.'
    },
    'joint pain': {
      diagnosis: 'Possible Arthritis',
      prevention: 'Maintain a healthy weight, stay active, and avoid joint injuries.'
    },
    'fever,cough': {
      diagnosis: 'Possible Flu',
      prevention: 'Get vaccinated annually, practice good hand hygiene, avoid close contact with sick individuals, and maintain a healthy lifestyle.'
    },
    'headache,nausea': {
      diagnosis: 'Possible Migraine',
      prevention: 'Avoid known migraine triggers, maintain a regular sleep schedule, manage stress, and stay hydrated.'
    },
    'fever,rash': {
      diagnosis: 'Possible Chickenpox',
      prevention: 'Get vaccinated, avoid close contact with infected individuals, and maintain good hygiene.'
    },
    'fever,sore throat': {
      diagnosis: 'Possible Strep Throat',
      prevention: 'Avoid close contact with infected individuals, practice good hand hygiene, and avoid sharing personal items.'
    },
    'fever,shortness of breath': {
      diagnosis: 'Possible Pneumonia',
      prevention: 'Get vaccinated, avoid smoking, practice good hand hygiene, and stay healthy with a balanced diet and regular exercise.'
    },
    'chest pain,shortness of breath': {
      diagnosis: 'Possible Heart Attack',
      prevention: 'Maintain a healthy diet, exercise regularly, avoid smoking, manage stress, and have regular check-ups with a healthcare provider.'
    },
    'fatigue,joint pain': {
      diagnosis: 'Possible Lyme Disease',
      prevention: 'Avoid tick-infested areas, use tick repellents, wear protective clothing, and check for ticks after outdoor activities.'
    },
    'diarrhea,fever': {
      diagnosis: 'Possible Infectious Diarrhea',
      prevention: 'Practice good hand hygiene, avoid contaminated food and water, and stay hydrated.'
    },
    'vomiting,diarrhea': {
      diagnosis: 'Possible Gastroenteritis',
      prevention: 'Practice good hand hygiene, avoid contaminated food and water, and stay hydrated.'
    },
    'muscle pain,fatigue': {
      diagnosis: 'Possible Fibromyalgia',
      prevention: 'Maintain a healthy lifestyle, manage stress, stay active, and get adequate rest.'
    }
  };

  const handleCheckSymptoms = () => {
    const symptomList = symptoms.split(',').map(s => s.trim().toLowerCase());
    let diagnosis = 'Unknown';
    let preventionAdvice = 'No specific prevention advice available.';

    // Check for single symptom diagnoses
    for (const symptom of symptomList) {
      if (diagnosisMap[symptom]) {
        diagnosis = diagnosisMap[symptom].diagnosis;
        preventionAdvice = diagnosisMap[symptom].prevention;
        break;
      }
    }

    // Check for multi-symptom diagnoses
    const sortedSymptomList = symptomList.sort().join(',');
    if (diagnosisMap[sortedSymptomList]) {
      diagnosis = diagnosisMap[sortedSymptomList].diagnosis;
      preventionAdvice = diagnosisMap[sortedSymptomList].prevention;
    }

    setResult(diagnosis);
    setPrevention(preventionAdvice);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleCheckSymptoms();
    }
  };

  return (
    <DefaultLayout>
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ padding: 4, marginTop: 4 }}>
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <Typography variant="h4" gutterBottom>
              Symptom Checker
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Enter your symptoms to get a preliminary health assessment and prevention tips.
            </Typography>
          </Box>
          <TextField
            label="Enter Symptoms (comma-separated)"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            onKeyPress={handleKeyPress}
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <Box sx={{ textAlign: 'center', mt: 2 }}>
            <Button variant="contained" color="primary" onClick={handleCheckSymptoms}>
              Check Symptoms
            </Button>
          </Box>
          {result && (
            <Paper elevation={2} sx={{ padding: 2, marginTop: 3, backgroundColor: '#f0f0f0' }}>
              <Typography variant="h6">
                Result: {result}
              </Typography>
              <Typography variant="body1" sx={{ marginTop: 1 }}>
                Prevention: {prevention}
              </Typography>
            </Paper>
          )}
        </Paper>
      </Container>
    </DefaultLayout>
  );
};

export default SymptomChecker;
