import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/Home";
import SerenityPage from "./pages/Serenity";
import ExoticaPgage from "./pages/Exotica";
import ContactPage from "./pages/Contact";
import NotFound from "./components/NotFound";
import FloatingEnquiryForm from "./components/FloatingEnquiryForm";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <FloatingEnquiryForm className="z-[25]" />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="exotica" element={<ExoticaPgage />} />
        <Route path="serenity" element={<SerenityPage />} />
        <Route path="contact-us-ver4/" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
