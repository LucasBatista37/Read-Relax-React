import React from 'react';
import './Navbar.css';

const Navbar = ({ searchQuery, setSearchQuery, handleSearchSubmit }) => {
  return (
    <header className="header">
      <div className="header-1">
        <a href="/" className="logo">
          <i className="fas fa-book"> Read & Relax</i>
        </a>

        <form action="" className="pesquisa-formulario" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Digite alguma coisa..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <label htmlFor="campo-pesquisa" className="fas fa-search"></label>
        </form>

        <div className="icones">
          <div id="pesquisa-btn" className="fas fa-search"></div>
          <a href="#" className="fas fa-heart"></a>
          <a href="#" className="fas fa-shopping-cart"></a>
          <div id="login-btn" className="fas fa-user"></div>
        </div>
      </div>
      <div className="header-2">
        <nav className="navbar">
          <a href="#home">home</a>
          <a href="#reecursos">recursos</a>
          <a href="#chegadas">chegadas</a>
          <a href="#avaliacoes">avaliações</a>
          <a href="#contato">contato</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
