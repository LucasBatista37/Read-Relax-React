import React from 'react';
import './Modal.css';

const Modal = ({ book, setSelectedBook }) => {
  const { title, authors, publisher, description, previewLink, thumbnail, price } = book;

  return (
    <div id="bookModal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={() => setSelectedBook(null)}>&times;</span>
        <h2 id="modalTitle" className="modal-title">{title}</h2>
        <p id="modalAuthors" className="modal-authors">{authors ? authors.join(', ') : 'Autor desconhecido'}</p>
        <p id="modalPublisher" className="modal-publisher">{publisher}</p>
        {thumbnail && <img id="modalImage" src={thumbnail} alt="Imagem do livro" className="modal-image" />}
        <p id="modalDescription" className="modal-description">{description || 'Descrição não disponível'}</p>
        <p id="modalPrice" className="modal-price">Preço: R${price}</p> {/* Exibe o preço */}
        {previewLink && (
          <a id="modalPreviewLink" href={previewLink} target="_blank" rel="noopener noreferrer" className="modal-link">
            <button className="modal-button">Amostra gratuita</button>
          </a>
        )}
      </div>
    </div>
  );
};

export default Modal;
