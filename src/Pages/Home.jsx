import React, { useState } from 'react';
// import Header from "./Components/header";
import HowItWorks from "../Components/Steps";
import CheckScore from "../Components/CheckScoreButton";
import AnimatedCardsGrid from "../Components/Cards";
import ServicesSection from "../Components/Services";
import WhyChooseUs from "../Components/WhyChooseUS";
import FAQ from "../Components/FAQ";
import TestimonialSection from "../Components/Testimonial";
import ContactSection from "../Components/ReachUS";
import FinancePopupForm from "../Components/PopupForm";
import Popup from "../Components/PopUbBox";
function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    //pop up form triggered code

    <div className='overflow-hidden'>
      
      <HowItWorks onTriggerPopup={openPopup} />
      <CheckScore onTriggerPopup={openPopup} />
      <AnimatedCardsGrid onTriggerPopup={openPopup} />
      <ServicesSection onTriggerPopup={openPopup} />
      <WhyChooseUs onTriggerPopup={openPopup} />
      <FAQ onTriggerPopup={openPopup} />
      <TestimonialSection onTriggerPopup={openPopup} />
      <ContactSection onTriggerPopup={openPopup} />
      <FinancePopupForm isOpen={isPopupOpen} onClose={closePopup} />
     
    </div>

    );
}

export default App;

