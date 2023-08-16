import React, { useEffect, useState } from "react";
import ResidentCard from "./ResidentCard";
import Pagination from "./Pagination";

const INITIAL_PAGE = 1;
const ResidentList = ({ residents, currentLocation }) => {
   const [currentPage, setCurrentPage] = useState(INITIAL_PAGE);

   //Cant limit residents x page
   const RESIDENT_PER_PAGE = 20;
   //cant total pages
   const totalPages = Math.ceil(residents.length / RESIDENT_PER_PAGE);
   //Cant residents actual page
   const sliceStart = (currentPage - 1) * RESIDENT_PER_PAGE;
   const sliceEnd = sliceStart + RESIDENT_PER_PAGE;
   const residentsInPage = residents.slice(sliceStart, sliceEnd);
   //Generation array pages
   const pages = [];
   for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
   }
   useEffect(() => {
      setCurrentPage(INITIAL_PAGE);
   }, [currentLocation]);
   return (
      <section>
         <section>
            {residentsInPage.map((resident) => (
               <ResidentCard key={resident} residentUrl={resident} />
            ))}
         </section>
         <Pagination
            pages={pages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
         />
      </section>
   );
};

export default ResidentList;
