import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const SetupMap = ({ institutes }) => {
  const map = useMap();

  useEffect(() => {
    // Create a custom icon using SVG
    const customIcon = L.divIcon({
      html: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FF0000" width="24" height="24">
          <path d="M12 0C7.03 0 3 4.03 3 9c0 5.25 9 15 9 15s9-9.75 9-15c0-4.97-4.03-9-9-9zm0 13c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
        </svg>
      `,
      className: '',
      iconSize: [24, 24],
      iconAnchor: [12, 24],
    });

    // Set the custom icon as default
    L.Marker.prototype.options.icon = customIcon;

    // Add markers
    institutes.forEach((institute, index) => {
      L.marker(institute.position)
        .addTo(map)
        .bindPopup(institute.name);
    });
  }, [map, institutes]);

  return null;
};

const MapComponent = ({ className }) => {
  const position = [33.5969, 73.0528]; // Coordinates for Rawalpindi, Pakistan
  const institutes = [
    { name: "Imagine Institute of Science", position: [33.5969, 73.0528] },
    { name: "Awais Institute of Multimedia Arts", position: [33.5959, 73.0518] },
    { name: "MONTAASH Institute", position: [33.5979, 73.0538] },
  ];

  return (
    <div className={className}>
      <MapContainer center={position} zoom={14} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <SetupMap institutes={institutes} />
      </MapContainer>
    </div>
  );
};

export default MapComponent;