"use client";

import { useState } from 'react';

const Search = ({ content }) => {
  const [query, setQuery] = useState('');
  const [filteredContent, setFilteredContent] = useState(content);

  const handleSearch = (e) => {
    setQuery(e.target.value);
    if (e.target.value === '') {
      setFilteredContent(content);
    } else {
      setFilteredContent(
        content.filter((item) =>
          item.title.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    }
  };

  return (
    <div className='flex justify-center items-center'>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search content..."
        className="py-2 border rounded outline-none px-2 w-[300px] mt-2 -mb-3"
      />
      <div>
        {filteredContent.length > 0 ? (
          filteredContent.map((item, index) => (
            <div key={index} className="border-b px-5 outline-none">
              <h3>{item.title}</h3>
            </div>
          ))
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
};

export default Search;
