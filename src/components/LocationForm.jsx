import React from "react";

const LocationForm = ({ handleSubmit }) => {
   return (
      <form onSubmit={handleSubmit}>
         <input
            className="text-black"
            min={1}
            id="newLocation"
            max={126}
            placeholder="Type a location id ..."
            type="number"
         />
         <button>Search</button>
      </form>
   );
};

export default LocationForm;
