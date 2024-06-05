import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



import HomePage from './Components/Pages/HomePage';
import ContactPage from './Components/Pages/ContactPage';
import AboutPage from './Components/Pages/AboutPage';
import AppointmentPage from './Components/Pages/AppointmentPage';
import AttorneyDetailsPage from './Components/Pages/AttorneyDetailsPage';
import FAQPage from './Components/Pages/FAQPage';
import TestimonialPage from './Components/Pages/TestimonialPage';
import NotFound from './Components/Pages/NotFound';



import Loader from './Components/SingleComponents/Loader';
import Footer from './Components/SingleComponents/Footer'
import Navbar from './Components/SingleComponents/Navbar'
function App() {
  return (
    <Router>
      <div className="App">
        <Loader />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/appointment" element={<AppointmentPage />} />
          <Route path="/ilayda-ikizoglu" element={<AttorneyDetailsPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/testimonial" element={<TestimonialPage />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
