import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import Events from './pages/Events';
import EmergencyContacts from './pages/BOSHEEEEEEET/EmergencyContacts';
import AboutPage from './pages/BOSHEEEEEEET/AboutPage';
import HealthCarePage from './pages/SubPages/HealthCarePage';
import Maps from './pages/Maps';
import SymptomChecker from './pages/BOSHEEEEEEET/SymptomChecker';
import FirstAidPage from './pages/BOSHEEEEEEET/FirstAidPage';
import HealthEducPage from './pages/BOSHEEEEEEET/HealthEducPage';
import TheBenefitsOfRegularExercise from './pages/BOSHEEEEEEET/HealthEducation/TheBenefitsOfRegularExercise';
import FitnessRoutinesForBeginners from './pages/BOSHEEEEEEET/HealthEducation/FitnessRoutinesForBeginners;';
import MedicalAdviceWhenToSeeADoctor from './pages/BOSHEEEEEEET/HealthEducation/MedicalAdviceWhenToSeeADoctor;';
import HealthyEatingHabitsForABetterYou from './pages/BOSHEEEEEEET/HealthEducation/HealthyEatingHabitsForABetterYou';
import Collaborate from './pages/BOSHEEEEEEET/HealthEducation/Collaborate';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route
          index
          element={
            <>
              <PageTitle title="Home Page | Cebu Health Guard" />
              {/* <ECommerce /> */}
              {/* <EmergencyContacts /> */}
              {/* <HomePage /> */}
              <HealthEducPage />
            </>
          }
        />
        <Route
          path="/health-care/maps"
          element={
            <>
              <PageTitle title="Maps | Cebu Health Guard" />
              <Maps />
            </>
          }
        />

        <Route
          path="/about"
          element={
            <>
              <PageTitle title="About | Cebu Health Guard" />
              <AboutPage />
            </>
          }
        />

        <Route
          path="/emergency-contacts"
          element={
            <>
              <PageTitle title="Emergency Contacts | Cebu Health Guard" />
              <EmergencyContacts />
            </>
          }
        />

        <Route
          path="/emergency-alerts"
          element={
            <>
              <PageTitle title="Emergency Alerts | Cebu Health Guard" />
              <Events />
            </>
          }
        />

        {/* <Route
          path="/health-care/maps"
          element={
            <>
              <PageTitle title="Health Care | Cebu Health Guard" />
              <HealthCarePage />
            </>
          }
        /> */}

        <Route
          path="/symptom-checker"
          element={
            <>
              <PageTitle title="Symptom Checker | Cebu Health Guard" />
              <SymptomChecker />
            </>
          }
        />
        <Route
          path="/health-care/nearest-hospital"
          element={
            <>
              <PageTitle title="Nearest Hospital | Cebu Health Guard" />
              <HealthCarePage />
            </>
          }
        />

        <Route
          path="/first-aid-tips"
          element={
            <>
              <PageTitle title="First Aid Tips | Cebu Health Guard" />
              <FirstAidPage />
            </>
          }
        />

        <Route
          path="/health-education"
          element={
            <>
              <PageTitle title="Health Education | Cebu Health Guard" />
              <HealthEducPage />
            </>
          }
        />

        <Route
          path="/health-education/benefits-of-regular-exercise"
          element={
            <>
              <PageTitle title="The Benefits of Regular Exercise | Cebu Health Guard" />
              <TheBenefitsOfRegularExercise />
            </>
          }
        />

        <Route
          path="/health-education/fitness-routines-for-beginners"
          element={
            <>
              <PageTitle title="Fitness Routines For Beginners | Cebu Health Guard" />
              <FitnessRoutinesForBeginners />
            </>
          }
        />

        <Route
          path="/health-education/medical-advice"
          element={
            <>
              <PageTitle title="Medical Advice When To See A Doctor | Cebu Health Guard" />
              <MedicalAdviceWhenToSeeADoctor />
            </>
          }
        />

        <Route
          path="/health-education/healthy-eating-habits"
          element={
            <>
              <PageTitle title="Healthy Eating Habits for a Better You | Cebu Health Guard" />
              <HealthyEatingHabitsForABetterYou />
            </>
          }
        />

        <Route
          path="/collaborate"
          element={
            <>
              <PageTitle title="Collaborate | Cebu Health Guard" />
              <Collaborate />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
