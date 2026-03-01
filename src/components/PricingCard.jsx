function PricingCard({ plan, billing, currency, conversionRates }) {
  const basePrice =
    billing === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;

  const convertedPrice = (
    basePrice * conversionRates[currency]
  ).toFixed(0);

  const symbol = currency === "USD" ? "$" : "₹";

  const billingText =
    billing === "monthly" ? "per month" : "per year";

  return (
    <div className={`card ${plan.recommended ? "recommended" : ""}`}>
      
      {plan.recommended && (
        <div className="badge">Recommended</div>
      )}

      <h2>{plan.name}</h2>

      <h3 className="price">
        {symbol}{convertedPrice}
      </h3>
       
      <p className="billing">{billingText}</p>

      <ul>
        {plan.features.map((feature, index) => (
          <li key={index}>✓ {feature}</li>
        ))}
      </ul>

      <button className="btn" aria-label={`Choose ${plan.name} plan`}>
  Choose Plan
</button>
    </div>
  );
}

export default PricingCard;