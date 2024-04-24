import React, { useState } from 'react';
import SearchBox from './SearchBox';
import naturalCompare from 'natural-compare-lite';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Sample data
  const sampleNames = [
    'John',
    'Jane',
    'Alice',
    'Bob',
    'Michael',
    'Emily',
    'David',
    'Sarah',
    'Chris',
    'Emma',
  ];

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <h1>Search Box App</h1>
      <SearchBox options={sampleNames} onSearch={handleSearch} />
    </div>
  );
};

export default App;
