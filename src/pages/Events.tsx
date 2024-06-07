import { useState, useEffect } from 'react';
import DefaultLayout from '../layout/DefaultLayout';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import L from 'leaflet';

// import * as L from "leaflet";

// Define the custom red icon for health emergency locations
// const redIcon = new L.Icon({
//   iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x-red.png',
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
//   shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
//   shadowSize: [41, 41]
// });

const redIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-shadow.png',
  shadowSize: [41, 41]
});

const Events = () => {
  const [alertMessages, setAlertMessages] = useState([]);

  const alertOptions = [
    {
      type: 'Health Emergency',
      message: 'There is an outbreak of a contagious disease in this area. Take necessary precautions!',
      location: 'Cebu City',
      coords: [10.3157, 123.8854],
    },
    {
      type: 'Health Advisory',
      message: 'High pollution levels detected. Avoid outdoor activities.',
      location: 'Mandaue City',
      coords: [10.3353, 123.9523],
    },
    {
      type: 'Health Warning',
      message: 'Water contamination reported. Do not drink tap water.',
      location: 'Lapu-Lapu City',
      coords: [10.3103, 123.9494],
    },
    {
      type: 'Health Alert',
      message: 'COVID-19 cases rising. Follow health protocols strictly.',
      location: 'Talisay City',
      coords: [10.2444, 123.8494],
    },
    {
      type: 'Health Emergency',
      message: 'Dengue fever outbreak. Use mosquito repellent and stay indoors.',
      location: 'Naga City',
      coords: [10.215, 123.758],
    },
    {
      type: 'Health Advisory',
      message: 'Heatwave warning. Stay hydrated and avoid direct sunlight.',
      location: 'Danao City',
      coords: [10.5253, 124.0164],
    },
    {
      type: 'Health Warning',
      message: 'High levels of pollen. Those with allergies should take precautions.',
      location: 'Carcar City',
      coords: [10.1094, 123.6412],
    },
    {
      type: 'Health Alert',
      message: 'Flu season alert. Get vaccinated and avoid crowded places.',
      location: 'Toledo City',
      coords: [10.3854, 123.6412],
    },
    {
      type: 'Health Emergency',
      message: 'Measles outbreak reported. Ensure vaccinations are up-to-date.',
      location: 'Bogo City',
      coords: [11.0584, 124.0064],
    },
    {
      type: 'Health Advisory',
      message: 'Air quality index is poor. Wear masks if going outside.',
      location: 'Bantayan Island',
      coords: [11.1695, 123.7481],
    },
    {
      type: 'Health Warning',
      message: 'Rise in dengue cases. Keep surroundings clean and dry.',
      location: 'Dalaguete',
      coords: [9.7837, 123.5056], 
    },
    {
      type: 'Health Alert',
      message: 'Malaria cases detected. Use mosquito nets and repellents.',
      location: 'Santander',
      coords: [9.5247, 123.2589],
    },
    {
      type: 'Health Emergency',
      message: 'Cholera outbreak. Ensure drinking water is boiled or purified.',
      location: 'Camotes Islands',
      coords: [10.6815, 124.3900],
    },
    {
      type: 'Health Advisory',
      message: 'Asthma warning due to high smog levels. Use inhalers as needed.',
      location: 'Olango Island',
      coords: [10.2553, 123.9657],
    },
    {
      type: 'Health Alert',
      message: 'Rise in COVID-19 cases. Avoid public gatherings and wear masks.',
      location: 'Asturias',
      coords: [10.5744, 123.7828],
    },
  ];

  useEffect(() => {
    const showAlert = () => {
      const randomIndex = Math.floor(Math.random() * alertOptions.length);
      const newAlert = alertOptions[randomIndex];
      setAlertMessages((prevAlerts) => {
        if (prevAlerts.length >= 4) {
          return [...prevAlerts.slice(1), newAlert];
        }
        return [...prevAlerts, newAlert];
      });
    };

    setTimeout(showAlert, 4000);

    const alertInterval = setInterval(showAlert, 6500);

    return () => clearInterval(alertInterval);
  }, []);

  return (
    <DefaultLayout>
      <div className="w-full max-w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-2 md:p-10">
        <h2 className="text-3xl font-bold pb-10">Health Alerts</h2>

        {alertMessages.map((alert, index) => (
          <div key={index} role="alert" className="rounded border-s-4 border-red-500 bg-red-50 p-4 mb-4">
            <div className="flex items-center gap-2 text-red-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clipRule="evenodd"
                />
              </svg>

              <strong className="block font-medium">{alert.type} Alert</strong>
            </div>

            <p className="mt-2 text-sm text-red-700">{alert.message}</p>
            <p className="mt-2 text-sm text-red-700">Location: {alert.location}</p>
          </div>
        ))}

        <MapContainer center={[10.3157, 123.8854]} zoom={10} style={{ height: '400px', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {alertMessages.map((alert, index) => (
            <Marker key={index} position={alert.coords} icon={redIcon}>
              <Popup>
                <strong>{alert.type} Alert</strong>
                <br />
                {alert.message}
                <br />
                Location: {alert.location}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </DefaultLayout>
  );
};

export default Events;
