import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import CartPage from "./Pages/CartPage";
import CheckoutStep1 from "./Pages/CheckoutStep1";
import CheckoutStep2 from "./Pages/CheckoutStep2";
import CheckoutStep3 from "./Pages/CheckoutStep3";
import Breadcrumbs from "./Components/Breadcrumbs";

const App = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    { name: "Contact information", link: "/checkout/step-1" },
    { name: "Delivery address", link: "/checkout/step-2" },
    { name: "Payment method", link: "/checkout/step-3" },
  ];

  return (
    <Router>
      <div>
        {}
        <Breadcrumbs
          steps={steps}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout/step-1" element={<CheckoutStep1 />} />
          <Route path="/checkout/step-2" element={<CheckoutStep2 />} />
          <Route path="/checkout/step-3" element={<CheckoutStep3 />} />
        </Routes>
      </div>
    </Router>
  );
};


export default App;
