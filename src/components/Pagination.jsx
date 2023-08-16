import React from "react";

const Pagination = ({ pages, currentPage, setCurrentPage }) => {
   return (
      <ul>
         {pages.map((page) => (
            <li
               className={`${currentPage === page && "text-red-500"}`}
               key={page}
               onClick={() => setCurrentPage(page)}
            >
               {page}
            </li>
         ))}
      </ul>
   );
};

export default Pagination;
