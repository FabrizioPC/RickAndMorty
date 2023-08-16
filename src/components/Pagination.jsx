import React from "react";

const Pagination = ({ pages, currentPage, setCurrentPage }) => {
   return (
      <ul className="flex justify-center">
         {pages.map((page) => (
            <li
               className={`m-1 p-4  sm:m-2 sm:p-5 ${
                  currentPage === page && " bg-[#062226]"
               } hover:bg-[#062226]/50`}
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
