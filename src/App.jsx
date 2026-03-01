import { useEffect, useState } from "react";
import "./styles.css";
import PricingCard from "./components/PricingCard";

function App() {
  const [plans, setPlans] = useState([]);
  const [billing, setBilling] = useState("monthly");
  const [currency, setCurrency] = useState("USD");

  const conversionRates = {
    USD: 1,
    INR: 83
  };

  useEffect(() => {
    fetch("/pricing.json")
      .then((res) => res.json())
      .then((data) => setPlans(data.plans))
      .catch((error) => console.error("Error loading pricing:", error));
  }, []);

return (
  <>
    {/* Background Layers */}
    <div className="background-layer"></div>
    <div className="overlay-layer"></div>

    {/* Main Content */}
    <div className="app-container">
      <h1>StreamX Premium Plans</h1>

      <p className="subtitle">
        Watch unlimited movies and series anywhere, anytime.
      </p>

      {/* Billing Toggle + Currency */}
      <div className="top-controls">
        <div className="toggle-container">
          <button
            className={billing === "monthly" ? "active-toggle" : ""}
            onClick={() => setBilling("monthly")}
          >
            Monthly
          </button>

          <button
            className={billing === "yearly" ? "active-toggle" : ""}
            onClick={() => setBilling("yearly")}
          >
            Yearly (Save 20%)
          </button>
        </div>

        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="currency-select"
          aria-label="Select Currency"
        >
          <option value="USD">USD ($)</option>
          <option value="INR">INR (₹)</option>
        </select>
      </div>

      {plans.length === 0 ? (
        <p className="loading">Loading plans...</p>
      ) : (
        <div className="card-container">
          {plans.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              billing={billing}
              currency={currency}
              conversionRates={conversionRates}
            />
          ))}
        </div>
      )}
    </div>
  </>
);
}

export default App;