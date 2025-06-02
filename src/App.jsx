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
function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/our-services" element={<Services />} />
        <Route path="/our-services/:title" element={<ServiceDetail />} />
        <Route path="/blogs" element={<Blog/>} />
        <Route path="/blog/:id" element={<BlogDetail/> } />
        <Route path="/contact-us" element={<ContactUs/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
