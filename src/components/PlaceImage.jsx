import React from 'react';

const PlaceImage = ({ latitude, longitude }) => {
  const mapSize = '350x300'; // Adjust the size as needed
  const zoomLevel = 15;

  // Construct the API URL
  const apiUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${longitude - 0.01},${latitude - 0.01},${longitude + 0.01},${latitude + 0.01}&marker=${latitude},${longitude}&layers=M`;

  return (
    <div className="mt-4">
      <iframe
        width={mapSize.split('x')[0]}
        height={mapSize.split('x')[1]}
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src={apiUrl}
      />
    </div>
  );
};

export default PlaceImage;
