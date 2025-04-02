import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/main.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Practice from './pages/Practice';
import Faq from './pages/Faq';
import Case from './pages/Case';
import Contact from './pages/Contact';
// import PromosGalleryModal from './pages/PromosGalleryModal';
import ScrollToTop from './components/ScrollToTop';

// const TRACKING_ID = "G-PS4R3NZR8Y"; // Replace with your actual Measurement ID
// ReactGA.initialize(TRACKING_ID);

// Track page views when the route changes
// function Analytics() {
//   const location = useLocation();

//   useEffect(() => {
//     ReactGA.send({ hitType: "pageview", page: location.pathname });
//   }, [location]);

//   return null;
// }

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* To ensure that the page scrolls to the top when navigating between routes */}
      {/* Ensures analytics runs on every page change */}
      <div id="top" className="App app-container">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/practice-areas" element={<Practice />} />
            <Route path="/case-studies" element={<Case />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
