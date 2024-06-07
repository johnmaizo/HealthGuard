import { useState } from 'react';
import { TextField, Typography, Box } from '@mui/material';

import DefaultLayout from '../../layout/DefaultLayout';

const SymptomChecker = () => {
  const [symptoms, setSymptoms] = useState('');
  const [result, setResult] = useState(null);

  const diagnosisMap = {
    'fever': 'Possible Fever',
    'cough': 'Possible Respiratory Infection',
    'headache': 'Possible Headache',
    'rash': 'Possible Skin Condition',
    'nausea': 'Possible Gastrointestinal Issue',
    'sore throat': 'Possible Throat Infection',
    'shortness of breath': 'Possible Respiratory Issue',
    'chest pain': 'Possible Cardiac Issue',
    'fatigue': 'Possible Chronic Fatigue Syndrome',
    'diarrhea': 'Possible Gastroenteritis',
    'vomiting': 'Possible Food Poisoning',
    'muscle pain': 'Possible Muscle Strain',
    'joint pain': 'Possible Arthritis',
    'fever,cough': 'Possible Flu',
    'headache,nausea': 'Possible Migraine',
    'fever,rash': 'Possible Chickenpox',
    'fever,sore throat': 'Possible Strep Throat',
    'fever,shortness of breath': 'Possible Pneumonia',
    'chest pain,shortness of breath': 'Possible Heart Attack',
    'fatigue,joint pain': 'Possible Lyme Disease',
    'diarrhea,fever': 'Possible Infectious Diarrhea',
    'vomiting,diarrhea': 'Possible Gastroenteritis',
    'muscle pain,fatigue': 'Possible Fibromyalgia'
  };

  const handleCheckSymptoms = () => {
    const symptomList = symptoms.split(',').map(s => s.trim().toLowerCase());
    let diagnosis = 'Unknown';

    // Check for single symptom diagnoses
    for (const symptom of symptomList) {
      if (diagnosisMap[symptom]) {
        diagnosis = diagnosisMap[symptom];
        break;
      }
    }

    // Check for multi-symptom diagnoses
    const sortedSymptomList = symptomList.sort().join(',');
    if (diagnosisMap[sortedSymptomList]) {
      diagnosis = diagnosisMap[sortedSymptomList];
    }

    setResult(diagnosis);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleCheckSymptoms();
    }
  };

  return (
    <DefaultLayout>
      <div className="w-full max-w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-2 md:p-10">
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Symptom Checker
      </Typography>
      <TextField
        label="Enter Symptoms (comma-separated)"
        value={symptoms}
        onChange={(e) => setSymptoms(e.target.value)}
        onKeyPress={handleKeyPress}
        fullWidth
        margin="normal"
        sx={{backgroundColor: 'white'}}
      />
      {result && (
        <Typography variant="h6" sx={{ mt: 2 }}>
          Result: {result}
        </Typography>
      )}
    </Box>
    </div>
    </DefaultLayout>
  );
};

export default SymptomChecker;
