import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useEffect } from "react";
import About from "./Pages/About";
import Services from "./Pages/Services";
import ServiceDetail from "./Pages/ServicesDetails";
import Blog from "./Pages/Blog";
import BlogDetail from "./Pages/BlogDetails";
import ContactUs from "./Pages/ContactUs";
import Career from "./Pages/Career";
import Gallery from "./Pages/Gallery";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import MediaPage from "./Pages/MediaPage";
import WhatWeDo from "./Pages/WhatWeDo";
import DailyNewsPage from "./Pages/DailyNews";
function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/what-we-do" element={<WhatWeDo/>} />
        <Route path="/our-services" element={<Services />} />
        <Route path="/our-services/:url" element={<ServiceDetail />} />
        <Route path="/blogs" element={<Blog/>} />
        <Route path="/blog/:url" element={<BlogDetail/> } />
        <Route path="/contact-us" element={<ContactUs/>} />
        <Route path="/career" element={<Career/>} />
        <Route path="/gallery" element={<Gallery/>} />


        <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
        <Route path="/newsandmedia" element={<MediaPage/>} />
        <Route path="/dailynewspage" element={<DailyNewsPage/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
