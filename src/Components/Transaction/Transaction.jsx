import React, { useState } from "react";
import "./Transaction.css"; // Import the CSS file for styling

const Transaction = () => {
  const [form, setForm] = useState({
    amount: "",
    time: "Morning (06:00 – 11:59)",
    type: "POS Purchase (Shop/Store Swipe)",
    merchantType: "Grocery / Supermarket",
    location: "Same City",
    device: "Registered Mobile",
    pastCount: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Transaction submitted!");
  };

  return (
    <div className="transaction-container">
      <form className="transaction-form" onSubmit={handleSubmit}>
        <h2 className="transaction-title">Transaction Details</h2>
        <label className="transaction-label">
          Transaction Amount:
          <input
            className="transaction-input"
            type="number"
            name="amount"
            value={form.amount}
            onChange={handleChange}
            placeholder="Enter amount"
            required
          />
        </label>
        <br />
        <label className="transaction-label">
          Transaction Time:
          <select
            className="transaction-select"
            name="time"
            value={form.time}
            onChange={handleChange}
          >
            <option value="Morning (06:00 – 11:59)">Morning (06:00 – 11:59)</option>
            <option value="Afternoon (12:00 – 17:59)">Afternoon (12:00 – 17:59)</option>
            <option value="Evening (18:00 – 22:59)">Evening (18:00 – 22:59)</option>
            <option value="Night (23:00 – 05:59)">Night (23:00 – 05:59)</option>
          </select>
        </label>
        <br />
        <label className="transaction-label">
          Transaction Type:
          <select
            className="transaction-select"
            name="type"
            value={form.type}
            onChange={handleChange}
          >
            <option value="POS Purchase (Shop/Store Swipe)">POS Purchase (Shop/Store Swipe)</option>
            <option value="ATM Withdrawal">ATM Withdrawal</option>
            <option value="Online Purchase (E-commerce, Digital Payment)">Online Purchase (E-commerce, Digital Payment)</option>
            <option value="UPI / Wallet Transfer (PhonePe, GPay, Paytm, etc.)">UPI / Wallet Transfer (PhonePe, GPay, Paytm, etc.)</option>
            <option value="Refund / Reversal">Refund / Reversal</option>
            <option value="International Transaction">International Transaction</option>
          </select>
        </label>
        <br />
        <label className="transaction-label">
          Merchant Type:
          <select
            className="transaction-select"
            name="merchantType"
            value={form.merchantType}
            onChange={handleChange}
          >
            <option value="Grocery / Supermarket">Grocery / Supermarket</option>
            <option value="Electronics Store">Electronics Store</option>
            <option value="Restaurant / Food">Restaurant / Food</option>
            <option value="Travel / Transport">Travel / Transport</option>
            <option value="Online Shopping">Online Shopping</option>
            <option value="Utility Payments">Utility Payments</option>
            <option value="International Merchant">International Merchant</option>
          </select>
        </label>
        <br />
        <label className="transaction-label">
          Transaction Location:
          <select
            className="transaction-select"
            name="location"
            value={form.location}
            onChange={handleChange}
          >
            <option value="Same City">Same City</option>
            <option value="Different City (Domestic)">Different City (Domestic)</option>
            <option value="International">International</option>
          </select>
        </label>
        <br />
        <label className="transaction-label">
          Device Used:
          <select
            className="transaction-select"
            name="device"
            value={form.device}
            onChange={handleChange}
          >
            <option value="Registered Mobile">Registered Mobile</option>
            <option value="Known Device (Laptop/PC)">Known Device (Laptop/PC)</option>
            <option value="Unknown Device">Unknown Device</option>
            <option value="ATM">ATM</option>
          </select>
        </label>
        <br />
        <label className="transaction-label">
          Past Transaction Count (24h):
          <input
            className="transaction-input"
            type="number"
            name="pastCount"
            value={form.pastCount}
            onChange={handleChange}
            placeholder="e.g. 2"
            required
          />
        </label>
        <br />
        <button className="transaction-button" type="submit">
          Submit Transaction
        </button>
      </form>
    </div>
  );
};

export default Transaction;