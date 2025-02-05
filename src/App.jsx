import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Footer from './components/Footer'; // Layout component to wrap all pages
import AboutUs from './components/Aboutus';
import Doctors from './components/Doctors';
import Appointment from './components/Appointment';
import DoctorDetails from './components/DoctorsDetails';
import Contacts from './components/Contacts';
import WelcomePage from './components/WelcomePage';
import Authority from './components/Authority';
import CreateAccount from './components/CreateAccount';
import LoginPage from './components/LoginPage';
import ForgotPassword from './components/ForgotPassword';
import AdminDashboard from './components/AdminDashboard';
import DoctorDashboard from './components/DoctorDashboard';

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
        <Route path="/admindashboard" element={<SimpleLayout><AdminDashboard/></SimpleLayout>} />
        <Route path="/doctordashboard" element={<SimpleLayout><DoctorDashboard/></SimpleLayout>} />
        
        {/* All other routes will use the standard layout with Header and Footer */}
        <Route path="/home" element={<Layout><Home /></Layout>} />
        <Route path="/doctors" element={<Layout><Doctors /></Layout>} />
        <Route path="/about" element={<Layout><AboutUs /></Layout>} />
        <Route path="/appointment" element={<Layout><Appointment /></Layout>} />
        <Route path="/doctor-details/:disease" element={<Layout><DoctorDetails /></Layout>} />
        <Route path="/contact" element={<Layout><Contacts /></Layout>} />
        <Route path="/authority" element={<Layout><Authority /></Layout>} />
      </Routes>
    </Router>
  );
};

export default App;
