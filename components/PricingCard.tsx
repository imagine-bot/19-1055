// ./components/PricingCard.tsx
import React, { useState } from 'react';
import Image from 'next/image';

type PricingPlan = {
  title: string;
  monthlyPrice: number;
  annualPrice: number;
};

const plans: PricingPlan[] = [
  { title: 'Basic', monthlyPrice: 10, annualPrice: 100 },
  { title: 'Pro', monthlyPrice: 20, annualPrice: 200 },
  { title: 'Premium', monthlyPrice: 30, annualPrice: 300 },
];

export const PricingCard: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [isSignedUp, setIsSignedUp] = useState([false, false, false]);

  const toggleSignup = (index: number) => {
    const newSignupState = [...isSignedUp];
    newSignupState[index] = !newSignupState[index];
    setIsSignedUp(newSignupState);
  };

  return (
    <div className="flex justify-center">
      <button
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setIsAnnual(!isAnnual)}
      >
        Switch to {isAnnual ? 'Monthly' : 'Annual'}
      </button>
      <div className="flex space-x-4">
        {plans.map((plan, index) => (
          <div key={plan.title} className="border rounded p-4 w-64">
            <Image
              src={`https://source.unsplash.com/random?${plan.title}`}
              alt={plan.title}
              width={256}
              height={256}
            />
            <h2 className="text-xl font-bold">{plan.title}</h2>
            <p className="text-gray-500">
              {isAnnual ? plan.annualPrice : plan.monthlyPrice} per{' '}
              {isAnnual ? 'year' : 'month'}
            </p>
            <button
              className={`mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded ${
                isSignedUp[index] ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              onClick={() => toggleSignup(index)}
              disabled={isSignedUp[index]}
            >
              {isSignedUp[index] ? 'Signed Up' : 'Sign Up'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};