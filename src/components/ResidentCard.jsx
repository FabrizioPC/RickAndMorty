import axios from "axios";
import React, { useEffect, useState } from "react";

const ResidentCard = ({ residentUrl }) => {
   const [residentInfo, setResidentInfo] = useState(null);
   const residentStatus = {
      Alive: "bg-green-500",
      Dead: "bg-red-500",
      unknown: "bg-yellow-500",
   };
   useEffect(() => {
      axios
         .get(residentUrl)
         .then(({ data }) => setResidentInfo(data))
         .catch((err) => console.log(err));
   }, []);
   return (
      <article className="flex flex-col max-w-[402px] max-h-[640px] items-center border-2 border-[#8EFF8B] m-4">
         <header>
            <div className="border-2 border-[#8EFF8B]">
               <img
                  className="w-[437px] max-h-[402px] "
                  src={residentInfo?.image}
                  alt=""
               />
            </div>
            <div className="flex items-center gap-2 p-2 justify-center">
               <div
                  className={`h-[10px] aspect-square rounded-full  ${
                     residentStatus[residentInfo?.status]
                  }`}
               ></div>
               {residentInfo?.status}
            </div>
         </header>
         <section className="flex flex-col">
            <h3 className="font-bold text-xl">{residentInfo?.name}</h3>

            <ul>
               <li className="flex space-x-5">
                  <p className="text-[#938686]">Species </p>
                  <p>{residentInfo?.species}</p>
               </li>
               <li className="flex space-x-5">
                  <p className="text-[#938686]">Origin </p>
                  <p>{residentInfo?.origin.name}</p>
               </li>
               <li className="flex space-x-5">
                  <p className="text-[#938686]">Times appear </p>
                  <p>{residentInfo?.episode.length}</p>
               </li>
            </ul>
         </section>
      </article>
   );
};

export default ResidentCard;
