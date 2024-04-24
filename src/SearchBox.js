import React, { useState } from 'react';
import './SearchBox.css';

const SearchBox = ({ options, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    setIsOpen(false);
    onSearch('');
  };

  const handleSelectOption = (option) => {
    setSearchTerm(option);
    setIsOpen(false);
    onSearch(option);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClearClick = (e) => {
    e.stopPropagation();
    handleClearSearch();
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
        onClick={toggleDropdown}
        className="search-box"
        autoFocus // Autofocus added here
      />
      {isOpen && (
        <div className="dropdown">
          {options
            .filter(option =>
              option.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((option, index) => (
              <div
                key={index}
                className="search item"
                onClick={() => handleSelectOption(option)}
              >
                {option}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-x"
                  onClick={handleClearClick}
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default SearchBox;
