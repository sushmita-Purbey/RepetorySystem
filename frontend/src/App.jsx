import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Footer from './components/Footer'; // Layout component to wrap all pages
import AboutUs from './components/AboutUs';
import Doctors from './components/Doctors';
import Appointment from './components/Appointment';
import DoctorDetails from './components/DoctorsDetails';
import Contacts from './components/Contacts';
import WelcomePage from './components/WelcomePage';
import Authority from './components/Authority';
import CreateAccount from './components/CreateAccount';
import LoginPage from './components/LoginPage';
import ForgotPassword from './components/ForgotPassword';

import DoctorsDashboard from './components/DoctorsDashboard';


import AdminsDashboard from './components/AdminsDashboard';

import BookConfirmation from './components/BookConfirmation';
// import Overview from './sidenavAdmin/Overview';
import AppointmentAdmin from './sidenavAdmin/AppointmentAdmin';
import ReportPage from './sidenavAdmin/ReportPage';
import SettingsPage from './sidenavAdmin/SettingsPage';
import HelpCenter from './sidenavAdmin/HelpCenter';
import ContactSupport from './sidenavAdmin/ContactSupport';
import Chatbot from './sidenavAdmin/Chatbot';
import BookAppointment from './components/BookAppointment';

import PaymentPage from './DOCtorDashboard/PaymentPage';
import DashboardNav from './DOCtorDashboard/DashboardNav';
import DoctorSchedule from './DOCtorDashboard/DoctorSchedule';
import PatientList from './DOCtorDashboard/PatientList';
import AppointmentRequests from './DOCtorDashboard/AppointmentRequests';






// Layout with Header, Navigation, and Footer
const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Navigation />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

// Simple layout for pages without Header, Navigation, and Footer (e.g., LoginPage, WelcomePage, and CreateAccount)
const SimpleLayout = ({ children }) => {
  return <div>{children}</div>;
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Routes that use SimpleLayout (No Header/Footer) */}
        <Route path="/" element={<SimpleLayout><WelcomePage /></SimpleLayout>} />
        <Route path="/login" element={<SimpleLayout><LoginPage /></SimpleLayout>} />
        <Route path="/create" element={<SimpleLayout><CreateAccount /></SimpleLayout>} />
        <Route path="/forgotpassword" element={<SimpleLayout><ForgotPassword/></SimpleLayout>} />
        
        <Route path="/admindashboard" element={<SimpleLayout><AdminsDashboard/></SimpleLayout>} />
        <Route path="/docappointment" element={<SimpleLayout><AppointmentRequests/></SimpleLayout>} />

        
        <Route path="/reportpage" element={<SimpleLayout><ReportPage/></SimpleLayout>} />
        <Route path="/settingsadmin" element={<SimpleLayout><SettingsPage/></SimpleLayout>} />
        <Route path="/helpcenter" element={<SimpleLayout><HelpCenter/></SimpleLayout>} />
        <Route path="/chatbot" element={<SimpleLayout><Chatbot/></SimpleLayout>} />

        <Route path="/payment" element={<SimpleLayout><PaymentPage/></SimpleLayout>} />
        <Route path="/dashboard-nav" element={<SimpleLayout><DashboardNav/></SimpleLayout>} />
        <Route path="/appointmentadmin" element={<SimpleLayout><AppointmentAdmin/></SimpleLayout>} />
        <Route path="/time-schedule" element={<SimpleLayout><DoctorSchedule/></SimpleLayout>} />
        <Route path="/patient-list" element={<SimpleLayout><PatientList/></SimpleLayout>} />
        


        <Route path="/doctordashboard" element={<SimpleLayout><DoctorsDashboard/></SimpleLayout>} />
        <Route path="/appointmentadmin" element={<SimpleLayout><AppointmentAdmin/></SimpleLayout>} />
         {/* <Route path="/appointment-doc" element={<SimpleLayout><DAppointment/></SimpleLayout>} />  */}
         {/* <Route path="/patient" element={<SimpleLayout><Patient/></SimpleLayout>} />  */}
         {/* <Route path="/settings" element={<SimpleLayout><Settings/></SimpleLayout>} />  */}
         {/* <Route path="/scheduler" element={<SimpleLayout><Scheduler/></SimpleLayout>} />  */}
         {/* <Route path="/patientreport" element={<SimpleLayout><PatientReport/></SimpleLayout>} />  */}
         {/* <Route path="/logindoc" element={<SimpleLayout><LoginDoc/></SimpleLayout>} />  */}
        
        
    
        {/* <Route path="/appointments" element={<Appointments />} />
        <Route path="/calendars" element={<Calendars />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/help-center" element={<HelpCenter />} /> */}
      
        
        {/* All other routes will use the standard layout with Header and Footer */}
        <Route path="/home" element={<Layout><Home /></Layout>} />
        <Route path="/doctors" element={<Layout><Doctors /></Layout>} />
        <Route path="/about" element={<Layout><AboutUs /></Layout>} />
        <Route path="/appointment" element={<Layout><Appointment /></Layout>} />
        <Route path="/book-appointment" element={<Layout><BookAppointment /></Layout>} />
        <Route path="/booking-confirmation" element={<Layout><BookConfirmation /></Layout>} />
        <Route path="/doctor-details/:disease" element={<Layout><DoctorDetails /></Layout>} />
        <Route path="/contact" element={<Layout><Contacts /></Layout>} />
        <Route path="/authority" element={<Layout><Authority /></Layout>} />
        <Route path="/contactsupport" element={<Layout><ContactSupport/></Layout>} />
      </Routes>
    </Router>
  )
};

export default App;
