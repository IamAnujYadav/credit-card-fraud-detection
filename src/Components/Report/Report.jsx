import React from "react";
import "./Report.css";

const Report = () => {
  const reports = [
    { id: 1, month: "January", total: 200, fraud: 15, highest: 12000, topCity: "Delhi", avgFraud: 3500 },
    { id: 2, month: "February", total: 180, fraud: 12, highest: 9500, topCity: "Mumbai", avgFraud: 2900 },
    { id: 3, month: "March", total: 220, fraud: 20, highest: 15000, topCity: "Chennai", avgFraud: 4200 },
    { id: 4, month: "April", total: 210, fraud: 18, highest: 13400, topCity: "Bangalore", avgFraud: 3700 },
  ];

  return (
    <div id="report" className="report-container">
      <p className="report-subtitle">Detailed insights on fraudulent transactions (Monthly)</p>

      <div className="table-container">
        <table className="report-table">
          <thead>
            <tr>
              <th>Month</th>
              <th>Total Transactions</th>
              <th>Fraudulent Transactions</th>
              <th>Highest Fraud (₹)</th>
              <th>Top City</th>
              <th>Avg Fraud Size (₹)</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((r) => (
              <tr key={r.id}>
                <td>{r.month}</td>
                <td>{r.total}</td>
                <td className="fraud">{r.fraud}</td>
                <td className="highlight">₹{r.highest}</td>
                <td>{r.topCity}</td>
                <td>₹{r.avgFraud}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Report;
