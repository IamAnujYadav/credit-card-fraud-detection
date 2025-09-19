import React from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./Dashboard.css";

const Dashboard = () => {
  const summary = {
    total: 1250,
    fraud: 45,
    accuracy: "96.4%",
    users: 320,
  };

  const transactionsOverTime = [
    { date: "Mon", transactions: 200 },
    { date: "Tue", transactions: 300 },
    { date: "Wed", transactions: 250 },
    { date: "Thu", transactions: 400 },
    { date: "Fri", transactions: 500 },
    { date: "Sat", transactions: 350 },
    { date: "Sun", transactions: 450 },
  ];

  const fraudRatio = [
    { name: "Fraud", value: 45 },
    { name: "Legit", value: 1205 },
  ];

  const fraudByLocation = [
    { location: "Delhi", frauds: 12 },
    { location: "Mumbai", frauds: 9 },
    { location: "Chennai", frauds: 8 },
    { location: "Bangalore", frauds: 6 },
    { location: "Kolkata", frauds: 10 },
  ];

  const transactions = [
    { id: "TXN1001", amount: 2500, location: "Delhi", status: "Fraud" },
    { id: "TXN1002", amount: 1200, location: "Mumbai", status: "Legit" },
    { id: "TXN1003", amount: 5000, location: "Chennai", status: "Fraud" },
    { id: "TXN1004", amount: 900, location: "Bangalore", status: "Legit" },
    { id: "TXN1005", amount: 1500, location: "Kolkata", status: "Legit" },
  ];

  const COLORS = ["#FF4C4C", "#4CAF50"];

  return (
    <div className="dashboard">
      {/* ✅ Summary Cards */}
      <div className="dashboard-cards">
        <div className="dashboard-card card-blue">
          <h3>Total Transactions</h3>
          <p>{summary.total}</p>
        </div>
        <div className="dashboard-card card-red">
          <h3>Fraudulent Transactions</h3>
          <p>{summary.fraud}</p>
        </div>
        <div className="dashboard-card card-green">
          <h3>Accuracy / Detection Rate</h3>
          <p>{summary.accuracy}</p>
        </div>
        <div className="dashboard-card card-purple">
          <h3>Active Users</h3>
          <p>{summary.users}</p>
        </div>
      </div>

      {/* ✅ Charts Section */}
      <div className="dashboard-charts">
        <div className="chart-box">
          <h3>Transactions Over Time</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={transactionsOverTime}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="transactions" stroke="#2563eb" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-box">
          <h3>Fraud vs Legit Ratio</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={fraudRatio}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {fraudRatio.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-box">
          <h3>Fraud by Location</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={fraudByLocation}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="location" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="frauds" fill="#ef4444" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* ✅ Recent Transactions Table */}
      <div className="transactions">
        <h3>Recent Transactions</h3>
        <table>
          <thead>
            <tr>
              <th>Transaction ID</th>
              <th>Amount</th>
              <th>Location</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn) => (
              <tr
                key={txn.id}
                className={txn.status === "Fraud" ? "fraud-row" : ""}
              >
                <td>{txn.id}</td>
                <td>₹{txn.amount}</td>
                <td>{txn.location}</td>
                <td
                  className={
                    txn.status === "Fraud" ? "fraud-status" : "legit-status"
                  }
                >
                  {txn.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
