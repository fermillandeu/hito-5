import React from 'react';
import './header.css'; // Asegúrate de importar el archivo CSS
import headerImage from '../../assets/img/Header.jpg';

const Header = () => {
  return (
    <header className="header text-center py-5">
      <div className="header-overlay">
        <h1>¡Bienvenidos a Pizzería Mamma Mia!</h1>
        <p>Las mejores pizzas de la ciudad, hechas con cariño italiano</p>
      </div>
    </header>
  );
}

export default Header;
