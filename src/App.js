import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import TopBar from "./Components/TopBar";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import HeroSection from "./Components/HeroSection";
import OurServices from "./Components/OurServices";
import About from "./Components/About";
import ResourceLinkSection from "./Components/ResourceLinkSection";
import CSAwareness from "./Components/CSAwareness";
import MissionVision from "./Components/MissionVision";
import Footer from "./Components/Footer";

// 🌐 Lazy Loaded Pages – Network
const DCCBBranches = lazy(() => import("./Pages/Network/DCCBBranches"));
const PACS = lazy(() => import("./Pages/Network/PACS"));

// 📰 Lazy Loaded Page – Notifications
const Notifications = lazy(() => import("./Pages/Notifications"));

// 🧱 Lazy Loaded Page – Tenders
const Tenders = lazy(() => import("./Pages/Tenders"));

// 💻 Lazy Loaded Page – Digital
const Digital = lazy(() => import("./Pages/Digital"));

// 🖼️ Lazy Loaded Page – Gallery
const Gallery = lazy(() => import("./Pages/Gallery"));

// 📞 Lazy Loaded Page – Contact Us
const ContactUs = lazy(() => import("./Pages/ContactUs"));

// 📘 Lazy Loaded Pages – Resource Links
const ResourceLinksSection = lazy(() => import("./Components/ResourceLinkSection"));
const Careers = lazy(() => import("./Pages/ResourceLinks/Careers"));

// 🧭 Lazy Loaded Pages – About Us
const AboutUs = lazy(() => import("./Pages/AboutUsF/AboutUs"));
const AboutMissionVision = lazy(() => import("./Pages/AboutUsF/DCCBMndV"));
const AboutBoard = lazy(() => import("./Pages/AboutUsF/BofM"));
const AboutOrgChart = lazy(() => import("./Pages/AboutUsF/OChart"));
const AboutEmails = lazy(() => import("./Pages/AboutUsF/Emails"));
const AboutAddresses = lazy(() => import("./Pages/AboutUsF/Addresses"));
const AboutFinancials = lazy(() => import("./Pages/AboutUsF/AFStatements"));

// 💼 Lazy Loaded Pages – Services
const Services = lazy(() => import("./Pages/Services/Services"));
const DepositSchemes = lazy(() => import("./Pages/Services/DepositSchemes"));
const LoanSchemes = lazy(() => import("./Pages/Services/LoanSchemes"));
const OnlinePayments = lazy(() => import("./Pages/Services/OnlinePayments"));
const OtherServices = lazy(() => import("./Pages/Services/OtherServices"));

// ⚖️ Lazy Loaded Page – Privacy Policy
const PrivacyPolicy = lazy(() => import("./Pages/PrivacyPolicy"));

// 🌀 Scroll to Top Component (for smooth route transitions)
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <TopBar />
      <Header />
      <NavBar />

      <Suspense
        fallback={
          <div
            style={{
              textAlign: "center",
              marginTop: "50px",
              fontSize: "1.2rem",
              color: "#555",
            }}
          >
            Loading...
          </div>
        }
      >
        <Routes>
          {/* 🏠 Home */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <OurServices />
                <About />
                <ResourceLinkSection />
                <CSAwareness />
                <MissionVision />
              </>
            }
          />

          {/* 🌐 Network Routes */}
          <Route path="/network/dccb-branches" element={<DCCBBranches />} />
          <Route path="/network/pacs" element={<PACS />} />

          {/* 💻 Digital Services */}
          <Route path="/digital" element={<Digital />} />

          {/* 🖼️ Gallery */}
          <Route path="/gallery" element={<Gallery />} />

          {/* 🔔 Notifications */}
          <Route path="/notifications" element={<Notifications />} />

          {/* 🧱 Tenders */}
          <Route path="/tenders" element={<Tenders />} />

          {/* 📘 Resource Links */}
          <Route path="/resource-links" element={<ResourceLinksSection />} />
          <Route path="/resource-links/careers" element={<Careers />} />

          {/* 📞 Contact Us */}
          <Route path="/contact-us" element={<ContactUs />} />

          {/* 🧭 About Us Routes */}
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/about/mission-vision" element={<AboutMissionVision />} />
          <Route path="/about/board-of-management" element={<AboutBoard />} />
          <Route path="/about/org-chart" element={<AboutOrgChart />} />
          <Route path="/about/emails" element={<AboutEmails />} />
          <Route path="/about/addresses" element={<AboutAddresses />} />
          <Route path="/about/financial-statements" element={<AboutFinancials />} />

          {/* 💼 Services Routes */}
          <Route path="/services" element={<Services />} />
          <Route path="/services/deposit-schemes" element={<DepositSchemes />} />
          <Route path="/services/loan-schemes" element={<LoanSchemes />} />
          <Route path="/services/online-payments" element={<OnlinePayments />} />
          <Route path="/services/other-services" element={<OtherServices />} />

          {/* ⚖️ Privacy Policy */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </Suspense>

      <Footer />
    </Router>
  );
}

export default App;
