import React from 'react';
import Image from '../../components/base/Image';
import Cta from '../../components/base/Cta';


const Navbar = () => {
  return (
    <>
    <nav className="navbar">
      <div className="navbar__container">
        <Image
          classNameImage="image__navbar-logo"
          src="/white_logo.png"
          alt="Logo Conexão"
        />
        <div className="navbar__icons">
          <Cta
            href="/profile"
            icon="fas fa-user-circle"
            text="Perfil"
            classNameCta="cta__navbar"
          />
          <Cta 
            href="/mentorship"
            icon="fas fa-solid fa-comments"
            text="Conectar"
            classNameCta="cta__navbar"
          />
          <Cta 
            href="/"
            icon="fas fa-door-open"
            text="Sair"
            classNameCta="cta__navbar"
          />
        </div>
      </div>
    </nav>
    </>
    
  )
}

export default Navbar;