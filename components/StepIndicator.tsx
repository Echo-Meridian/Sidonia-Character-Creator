
import React from 'react';

interface StepIndicatorProps {
  currentStep: number;
  steps: string[];
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep, steps }) => {
  return (
    <div className="flex justify-center items-center space-x-2 sm:space-x-4 p-4 overflow-x-auto">
      {steps.map((step, index) => (
        <React.Fragment key={step}>
          <div className="flex items-center">
            <div
              className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-sm sm:text-base transition-colors duration-300 ${
                index === currentStep
                  ? 'bg-amber-500 text-slate-900 ring-2 ring-amber-400 ring-offset-2 ring-offset-slate-800'
                  : index < currentStep
                  ? 'bg-cyan-600 text-white'
                  : 'bg-slate-700 text-slate-400'
              }`}
            >
              {index + 1}
            </div>
            <div className={`ml-2 hidden lg:block ${index === currentStep ? 'text-amber-400 font-semibold' : 'text-slate-400'}`}>
              {step}
            </div>
          </div>
          {index < steps.length - 1 && (
            <div className={`flex-1 h-1 rounded ${index < currentStep ? 'bg-cyan-600' : 'bg-slate-700'}`}></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default StepIndicator;
