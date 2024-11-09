import React from 'react';

const Marquee = () => {
  return (
    <div className="bg-gray-800 text-white py-4 overflow-hidden mt-10">
      <div className="whitespace-nowrap animate-marquee text-[50px]">
        <span className="mx-10">📈 Stock Market Update: The S&P 500 reaches a new all-time high!</span>
        <span className="mx-10">📉 Breaking: Major tech stocks see a downturn amidst rising interest rates.</span>
        <span className="mx-10">💡 Tip of the Day: Diversify your portfolio for better risk management.</span>
        <span className="mx-10">🔍 Research Alert: Analyst upgrades XYZ Corp to "Buy".</span>
        <span className="mx-10">🔥 Latest Stock Predictions Available Now!</span>
        <span className="mx-10">💹 Market Trends Updated Daily!</span>
        <span className="mx-10">📈 High Accuracy Rate on Predictions!</span>
        <span className="mx-10">🔔 Real-time Alerts for Premium Users!</span>
        <span className="mx-10">🚀 Start Your Free Trial Today!</span>
      </div>
    </div>
  );
};

export default Marquee;
