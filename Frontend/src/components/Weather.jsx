import React, { useEffect, useState } from 'react';
import './Weather.css'; // Optional: for custom styles if needed

export default function Weather() {
   const [city, setCity] = useState("");

    const [current, setCurrent] = useState({ temperature: 0, warning: "" });
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/weather")
      .then((response) => response.json())
      .then((data) => {
        
        setCity(data.city);
        setCurrent({
          temperature: data.temperature,
          warning: data.warning , 
        });
        setForecast(data.forecast); 
      })
      .catch((error) => console.error("Failed to fetch weather data:", error));
  }, []);

  return (
    <div className="col-lg-12 order-4 order-md-2 mb-4 d-flex flex-column">
      <div className="weather-container p-3 border rounded shadow-sm bg-light">
        <div className="current-weather fw-bold mb-2">
          📍 {city} - {current.temperature}°C ☀️
        </div>
        {current.warning && (
          <div className="alert text-danger mb-3">
            🌡️ {current.warning}
          </div>
        )}

        <div className="forecast d-flex justify-content-between text-center">
          {forecast.map((day) => (
            <div key={day.id} className="day mx-1">
              <div className="fw-semibold">{day.day}</div>
              <div style={{ fontSize: '1.5rem' }}>{day.icon}</div>
              <div className="temp text-danger">{day.high}°</div>
              <div className="temp text-primary">{day.low}°</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}



// import React from 'react';
// import './Weather.css'; // Optional: for custom styles if needed

// export default function Weather() {
//   const city = "İstanbul";
//   const current = {
//     temperature: 28,
//     warning: "Yüksek sıcaklık uyarısı!"
//   };

//   const forecast = [
//     { day: "Pzt", icon: "☀️", high: 31, low: 23 },
//     { day: "Sal", icon: "⛅", high: 29, low: 21 },
//     { day: "Çar", icon: "🌧️", high: 26, low: 19 },
//     { day: "Per", icon: "⛈️", high: 24, low: 18 },
//     { day: "Cum", icon: "☁️", high: 25, low: 20 }
//   ];

//   return (
//     <div className="col-lg-12 order-4 order-md-2 mb-4 d-flex flex-column">
//       <div className="weather-container p-3 border rounded shadow-sm bg-light">
//         <div className="current-weather fw-bold mb-2">
//           📍 {city} - {current.temperature}°C ☀️
//         </div>
//         <div className="alert text-danger mb-3">
//           🌡️ {current.warning}
//         </div>

//         <div className="forecast d-flex justify-content-between text-center">
//           {forecast.map((day, idx) => (
//             <div key={idx} className="day mx-1">
//               <div className="fw-semibold">{day.day}</div>
//               <div style={{ fontSize: '1.5rem' }}>{day.icon}</div>
//               <div className="temp text-danger">{day.high}°</div>
//               <div className="temp text-primary">{day.low}°</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
