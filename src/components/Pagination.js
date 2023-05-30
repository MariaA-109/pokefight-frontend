import React from "react";
import PropTypes from "prop-types";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  onNextPage,
  onPrevPage,
}) => {
  const visiblePageNumbers = [];
  const maxVisiblePages = 5;
  const halfMaxVisiblePages = Math.floor(maxVisiblePages / 2);

  // Logic to determine the visible page numbers
  let startPage = Math.max(1, currentPage - halfMaxVisiblePages);
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
  startPage = Math.max(1, endPage - maxVisiblePages + 1);

  for (let i = startPage; i <= endPage; i++) {
    visiblePageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination flex justify-center  my-4">
        <li className="px-10 py-1">
          <button
            onClick={onPrevPage}
            disabled={currentPage === 1}
            className="disabled:opacity-50"
          >
            Prev
          </button>
        </li>
        {visiblePageNumbers.map((number) => (
          <li
            key={number}
            className={`px-4 py-1 ${
              currentPage === number ? "bg-rose-500 text-white" : ""
            }`}
          >
            <button onClick={() => onPageChange(number)}>{number}</button>
          </li>
        ))}
        <li className="px-10 py-1">
          <button
            onClick={onNextPage}
            disabled={currentPage === totalPages}
            className="disabled:opacity-50"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  onNextPage: PropTypes.func.isRequired,
  onPrevPage: PropTypes.func.isRequired,
};

export default Pagination;
