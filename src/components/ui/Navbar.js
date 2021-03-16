import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar navbar-dark bg-dark mb-4">
      <span className="navbar-brand">
        Javier
      </span>

      <button className="btn btn-outline-danger">
        <i className="fas fa-sign-out-alt mr-2"></i>
        <span>Salir</span>
      </button>
    </div>
  )
}

export default Navbar
