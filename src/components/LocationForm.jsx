import React from "react";

const LocationForm = ({ handleSubmit }) => {
   return (
      <form
         onSubmit={handleSubmit}
         className="font-medium flex w-[90%] sm:w-[40%] "
      >
         <input
            className="text-black w-full"
            min={1}
            id="newLocation"
            max={126}
            placeholder="Type a location id ..."
            type="number"
         />
         <button className="flex items-center justify-center bg-[#8EFF8B]/50  w-[103px] h-[60px] border-2 border-solid border-[#8EFF8B]">
            <img src="/images/iconbutton.png" alt="" />
         </button>
      </form>
   );
};

export default LocationForm;
