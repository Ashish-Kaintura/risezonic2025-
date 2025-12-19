import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useEffect, lazy, Suspense } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import WhatsAppSticky from "./components/WhatsappSticky";
import Loader from "./Pages/Loader";

// Lazy load pages
const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const Services = lazy(() => import("./Pages/Services"));
const ServiceDetail = lazy(() => import("./Pages/ServicesDetails"));
const Blog = lazy(() => import("./Pages/Blog"));
const BlogDetail = lazy(() => import("./Pages/BlogDetails"));
const ContactUs = lazy(() => import("./Pages/ContactUs"));
const Career = lazy(() => import("./Pages/Career"));
const Gallery = lazy(() => import("./Pages/Gallery"));
const PrivacyPolicy = lazy(() => import("./Pages/PrivacyPolicy"));
const MediaPage = lazy(() => import("./Pages/MediaPage"));
const WhatWeDo = lazy(() => import("./Pages/WhatWeDo"));
const DailyNewsPage = lazy(() => import("./Pages/DailyNews"));

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: false, // Whether animation should happen only once
      dataaosEasing: "ease-in-sine",
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Router>
      {/* Suspense for fallback UI during lazy loading */}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/our-services" element={<Services />} />
          <Route path="/our-services/:url" element={<ServiceDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:url" element={<BlogDetail />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/career" element={<Career />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/newsandmedia" element={<MediaPage />} />
          <Route path="/dailynewspage" element={<DailyNewsPage />} />
        </Routes>
      </Suspense>
      <WhatsAppSticky />
      <Footer />
    </Router>
  );
}

export default App;
