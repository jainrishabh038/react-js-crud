import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  console.warn('dwsd', navigate);
  return (
    <div>
      <nav class='navbar bg-body-tertiary'>
        <div class='container-fluid'>
          <a class='navbar-brand'>React Crud</a>
          <button onClick={() => navigate('/add')} class='btn btn-outline-success ' type='submit'>
            Add User
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
