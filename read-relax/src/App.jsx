import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Book from './components/Book';
import Modal from './components/Modal';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const searchBooks = () => {
    const apiKey = 'AIzaSyAvkiIv8uKC_n05_NqKahfTe0Swg5br6Ng';
    const maxResults = 40;
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&maxResults=${maxResults}&key=${apiKey}`;
    
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setBooks(data.items || []))
      .catch(error => console.log('Erro ao buscar livros: ', error));
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    searchBooks();
  };

  const openModal = (book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBook(null);
  };

  return (
    <div className="App">
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} handleSearchSubmit={handleSearchSubmit} />
      <div id="results">
        {books.length === 0 ? (
          <p>Nenhum resultado encontrado.</p>
        ) : (
          books.map((bookItem, index) => (
            <Book key={index} book={bookItem.volumeInfo} setSelectedBook={openModal} />
          ))
        )}
      </div>
      {!isModalOpen && selectedBook && (
        <Modal book={selectedBook} setSelectedBook={closeModal} />
      )}
    </div>
  );
}

export default App;
