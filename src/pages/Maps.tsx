import React, { useState, useEffect } from 'react';
import DefaultLayout from '../layout/DefaultLayout';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Import your custom hospital icon
import hospitalIconUrl from '../assets/images/ambulance-cross-hospital-icon-11.png';

// Create a custom icon for hospitals
const hospitalIcon = new L.Icon({
  iconUrl: hospitalIconUrl,
  iconSize: [25, 25], // size of the icon
  iconAnchor: [12, 25], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -25], // point from which the popup should open relative to the iconAnchor
});

const Maps = () => {
  const [currentPosition, setCurrentPosition] = useState(null);
  const [hospitals, setHospitals] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Get current position
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setCurrentPosition([latitude, longitude]);

      // Fetch nearby hospitals
      const overpassUrl = `https://overpass-api.de/api/interpreter?data=[out:json];node(around:5000,${latitude},${longitude})[amenity=hospital];out;`;

      fetch(overpassUrl)
        .then(response => response.json())
        .then(data => {
          const hospitalsData = data.elements.map(element => ({
            id: element.id,
            name: element.tags.name,
            position: [element.lat, element.lon],
          }));
          setHospitals(hospitalsData);
        })
        .catch(error => console.error('Error fetching hospitals data:', error));
    });
  }, []);

  // Filter hospitals based on search query
  const filteredHospitals = hospitals.filter(hospital =>
    hospital.name && hospital.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <DefaultLayout>
      <div className="w-full max-w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-2 md:p-10">
        <h2 className="text-3xl font-bold pb-10">Maps</h2>
        <input
          type="text"
          placeholder="Search hospitals..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="mb-4 p-2 border border-gray-300 rounded"
        />
        {currentPosition ? (
          <MapContainer center={currentPosition} zoom={13} style={{ height: '480px', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={currentPosition}>
              <Popup>You are here</Popup>
            </Marker>
            {filteredHospitals.map(hospital => (
              <Marker key={hospital.id} position={hospital.position} icon={hospitalIcon}>
                <Popup>{hospital.name || 'Unnamed Hospital'}</Popup>
              </Marker>
            ))}
          </MapContainer>
        ) : (
          <p>Loading map...</p>
        )}
      </div>
    </DefaultLayout>
  );
};

export default Maps;
