import React from 'react';
import styles from './RateTable_module.css';

const RateTable = ({ rates }) => {
  return (
    <div className="rate-table">
      <h2>Live Currency Rates</h2>
      <table>
        <thead>
          <tr>
            <th>Currency</th>
            <th>Rate</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>
          {rates.map((rate, index) => (
            <tr key={index}>
              <td>{rate.pair}</td>
              <td>{rate.value}</td>
              <td>
                <span className={rate.change > 0 ? 'rate-up' : 'rate-down'}>
                  {rate.change > 0 ? '▲' : '▼'}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RateTable;
