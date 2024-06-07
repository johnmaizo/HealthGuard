import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';

import DefaultLayout from '../../layout/DefaultLayout';

const SymptomChecker = () => {
  const [symptoms, setSymptoms] = useState('');
  const [result, setResult] = useState(null);

  const handleCheckSymptoms = () => {
    const symptomList = symptoms.split(',').map((s) => s.trim().toLowerCase());
    let diagnosis = 'Unknown';

    if (symptomList.includes('fever') && symptomList.includes('cough')) {
      diagnosis = 'Possible Flu';
    } else if (
      symptomList.includes('headache') &&
      symptomList.includes('nausea')
    ) {
      diagnosis = 'Possible Migraine';
    } else if (symptomList.includes('fever') && symptomList.includes('rash')) {
      diagnosis = 'Possible Chickenpox';
    }

    setResult(diagnosis);
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
            fullWidth
            margin="normal"
            sx={{ backgroundColor: 'white' }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleCheckSymptoms}
            sx={{ mt: 2 }}
          >
            Check Symptoms
          </Button>
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
