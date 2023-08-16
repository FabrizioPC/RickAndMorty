import React from "react";

const LocationInfo = ({ currentLocation }) => {
   return (
      <section className="text-center">
         <h2>{currentLocation?.name}</h2>
         <ul>
            <li>Type: {currentLocation?.type}</li>
            <li>Dimension: {currentLocation?.dimension}</li>
            <li>Population: {currentLocation?.residents.length}</li>
         </ul>
      </section>
   );
};

export default LocationInfo;
