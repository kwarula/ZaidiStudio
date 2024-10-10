import React, { useState } from 'react';
import { Button } from './ui/button';
import { Check } from 'lucide-react';
import Toggle from './Toggle';

const plans = [
  {
    name: 'Starter',
    monthlyPrice: 5000,
    features: [
      'Up to 1,000 customers',
      'Basic automation workflows',
      'Email support',
      '5 team members',
    ],
  },
  {
    name: 'Professional',
    monthlyPrice: 10000,
    features: [
      'Up to 10,000 customers',
      'Advanced automation workflows',
      'Priority email & chat support',
      'Unlimited team members',
      'Custom integrations',
    ],
  },
  {
    name: 'Enterprise',
    monthlyPrice: null,
    features: [
      'Unlimited customers',
      'Custom automation solutions',
      '24/7 phone & email support',
      'Dedicated account manager',
      'On-premise deployment option',
    ],
  },
];

const PricingPlans = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const calculatePrice = (monthlyPrice) => {
    if (monthlyPrice === null) return 'Custom';
    const annualPrice = monthlyPrice * 12 * 0.8; // 20% discount for annual
    return isAnnual
      ? `KES ${(annualPrice / 12).toLocaleString()} /mo`
      : `KES ${monthlyPrice.toLocaleString()} /mo`;
  };

  const calculateSavings = (monthlyPrice) => {
    if (monthlyPrice === null) return null;
    const annualSavings = monthlyPrice * 12 * 0.2; // 20% savings for annual
    return `Save KES ${annualSavings.toLocaleString()} annually`;
  };

  return (
    <div className="mt-16">
      <div className="flex justify-center items-center mb-8">
        <span className="mr-4 text-gray-600">Monthly</span>
        <Toggle enabled={isAnnual} setEnabled={setIsAnnual} />
        <span className="ml-4 text-gray-600">Annual</span>
      </div>
      <div className="grid gap-8 lg:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="rounded-lg shadow-lg overflow-hidden bg-white"
          >
            <div className="px-6 py-8">
              <h3 className="text-2xl font-semibold text-gray-900">{plan.name}</h3>
              <p className="mt-4 text-4xl font-extrabold text-gray-900">
                {calculatePrice(plan.monthlyPrice)}
              </p>
              {isAnnual && plan.monthlyPrice && (
                <p className="mt-1 text-sm text-green-600">
                  {calculateSavings(plan.monthlyPrice)}
                </p>
              )}
              <p className="mt-1 text-sm text-gray-500">
                {plan.monthlyPrice === null ? 'Contact us for pricing' : 'per month'}
              </p>
              <Button className="mt-6 w-full">
                {plan.monthlyPrice === null ? 'Contact Sales' : 'Get Started'}
              </Button>
            </div>
            <div className="px-6 pt-6 pb-8">
              <h4 className="text-sm font-semibold text-gray-900 tracking-wide uppercase">
                What's included
              </h4>
              <ul className="mt-6 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-6 w-6 text-green-500" />
                    </div>
                    <p className="ml-3 text-base text-gray-700">{feature}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;