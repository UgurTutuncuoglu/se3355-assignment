import React, { useEffect, useState } from "react";
import './CurrencyBar.css'; 

export default function CurrencyBar() {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/currency")
      .then((response) => response.json())
      .then((data) => setCurrencies(data))
      .catch((error) => console.error("Failed to fetch currency data:", error));
  }, []);

  return (
    <div className="currency-bar px-3 py-2 bg-light border-top border-bottom d-flex flex-wrap justify-content-center">
      {currencies.map((currency) => (
        <span key={currency.id} className="currency me-3">
          {currency.currency} {currency.price}{" "}
          <span className={currency.arrow === "▲" ? "text-success" : "text-danger"}>
            {currency.percent} {currency.arrow}
          </span>
        </span>
      ))}
    </div>
  );
}





// import React from "react";
// import './CurrencyBar.css'; 

// export default function CurrencyBar() {
//   return (
//     <div className="currency-bar px-3 py-2 bg-light border-top border-bottom d-flex flex-wrap justify-content-center">
//       <span className="currency me-3">DOLAR 37,98 <span className="text-success"> %0.15 ▲</span></span>
//       <span className="currency me-3">EURO 41,68 <span className="text-danger"> %0.85 ▼</span></span>
//       <span className="currency me-3">STERLIN 49,01 <span className="text-danger"> %-1.65 ▼</span></span>
//       <span className="currency me-3">BITCOIN 82.671,76 <span className="text-danger"> %0.16 ▼</span></span>
//       <span className="currency me-3">BIST 100 9.379,83 <span className="text-danger"> %-1,10 ▼</span></span>
//       <span className="currency me-3">ALTIN 3.710,58 <span className="text-danger"> %-2.27 ▼</span></span>
//       <span className="currency me-3">FAİZ 45,99 <span className="text-success"> %0.00 ▲</span></span>
//     </div>
//   );
// }