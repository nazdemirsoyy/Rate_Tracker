import React from 'react';
import styles from './CurrencyCard_module.css';

const CurrencyCard = ({ currency, rate, change, changePercentage }) => {
  return (
    <div className="currency-card">
      <div className="currency-info">
        <span className="currency-name">{currency}</span>
        <span className="currency-rate">1 USD equals to {rate}</span>
        <span className="currency-change">{change} ({changePercentage}%) Weekly</span>
      </div>
      <button className="view-chart-btn">View chart →</button>
    </div>
  );
};

export default CurrencyCard;
