// BookContext.js
import React, { createContext, useState } from 'react';

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([
    {
      title: 'Sample Book 1',
      author: 'Author 1',
      year: 2022,
      example: 'Fiction',
      cover: 'https://via.placeholder.com/150',
      description: 'Description of Sample Book 1',
    },
    // Add more sample books if needed
  ]);

  return (
    <BookContext.Provider value={{ books, setBooks }}>
      {children}
    </BookContext.Provider>
  );
};
