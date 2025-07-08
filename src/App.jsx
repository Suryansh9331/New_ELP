// import React, { useState } from 'react';
// import Header from "./Components/header";
// import HowItWorks from "./Components/Steps";
// import CheckScore from "./Components/CheckScoreButton";
// import AnimatedCardsGrid from "./Components/Cards";
// import ServicesSection from "./Components/Services";
// import WhyChooseUs from "./Components/WhyChooseUS";
// import FAQ from "./Components/FAQ";
// import TestimonialSection from "./Components/Testimonial";
// import ContactSection from "./Components/ReachUS";
// import FinancePopupForm from "./Components/PopupForm";
// import Popup from "./Components/PopUbBox";
// function App() {
//   const [isPopupOpen, setIsPopupOpen] = useState(false);

//   const openPopup = () => setIsPopupOpen(true);
//   const closePopup = () => setIsPopupOpen(false);

//   return (
//     //pop up form triggered code

//     <div className='overflow-hidden'>
//       <Header onTriggerPopup={openPopup} />
//       <HowItWorks onTriggerPopup={openPopup} />
//       <CheckScore onTriggerPopup={openPopup} />
//       <AnimatedCardsGrid onTriggerPopup={openPopup} />
//       <ServicesSection onTriggerPopup={openPopup} />
//       <WhyChooseUs onTriggerPopup={openPopup} />
//       <FAQ onTriggerPopup={openPopup} />
//       <TestimonialSection onTriggerPopup={openPopup} />
//       <ContactSection onTriggerPopup={openPopup} />
//       <FinancePopupForm isOpen={isPopupOpen} onClose={closePopup} />
//       <Popup onTriggerPopup={openPopup}/>
//     </div>

//     //component for direct call now button not there is no  popup form is triggered
//   //   <div className="overflow-hidden">
//   //     <Header />
//   //     <HowItWorks />
//   //     <CheckScore />
//   //     <AnimatedCardsGrid />
//   //     <ServicesSection />
//   //     <WhyChooseUs />
//   //     <FAQ />
//   //     <TestimonialSection />
//   //     <ContactSection />
//   //     {/* <FinancePopupForm isOpen={isPopupOpen} onClose={closePopup} /> */}
//   //     <Popup />
//   //   </div>
//   );
// }

// export default App;

import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsOfUse from "./Pages/TermsConditions";
import Header from "./Components/header"
import ContactSection from "./Components/ReachUS";
import FinancePopupForm from "./Components/PopupForm";
import Popup from "./Components/PopUbBox";
const App = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <Router>
      <div>
        <Header onTriggerPopup={openPopup} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Terms-and-conditions" element={<TermsOfUse />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          {/* <Route path="/aboutus" element={<AboutUsFooter />} /> */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
        <ContactSection onTriggerPopup={openPopup} />
        <FinancePopupForm isOpen={isPopupOpen} onClose={closePopup} />
        <Popup onTriggerPopup={openPopup} />
      </div>
    </Router>
  );
};

export default App;
