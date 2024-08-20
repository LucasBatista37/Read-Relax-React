import React from 'react';
import './Book.css'; 

function generateRandomValue() {
  var randomValue = Math.floor(Math.random() * 9900) + 1;
  return (randomValue / 100).toFixed(2);
}

const Book = ({ book, setSelectedBook }) => {
  const { title, authors, description, imageLinks, publisher, previewLink } = book;
  const thumbnail = imageLinks ? imageLinks.thumbnail : '';

  return (
    <div className="book-box">
      {thumbnail && <img className="book-cover" src={thumbnail} alt={`${title} capa`} />}
      <h2 className="book-title">{title}</h2>
      <p className="book-value">Valor: {generateRandomValue()}</p>
      <button
        className="about-button"
        onClick={() => setSelectedBook({ title, authors, description, publisher, previewLink, thumbnail })}
      >
        Sobre
      </button>
    </div>
  );
};

export default Book;
