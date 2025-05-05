import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = ({
  steps = [],
  currentStep = 0,
  setCurrentStep = () => {},
}) => {
  return (
    <nav aria-label="breadcrumbs">
      {steps.map((step, index) => (
        <span key={index}>
          {index <= currentStep ? (
            <Link to={step.link} onClick={() => setCurrentStep(index)}>
              {step.name}
            </Link>
          ) : (
            <span>{step.name}</span>
          )}
          {index < steps.length - 1 && " > "}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
