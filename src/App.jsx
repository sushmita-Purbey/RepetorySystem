import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Home from "./components/Home";

import Footer from './components/Footer';// Layout component to wrap all pages
import AboutUs from './components/Aboutus';
import Doctors from './components/Doctors';
import Appointment from './components/Appointment';
import DoctorDetails from './components/DoctorsDetails';
import Contacts from './components/Contacts';
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

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/doctor-details/:disease" element={<DoctorDetails />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;