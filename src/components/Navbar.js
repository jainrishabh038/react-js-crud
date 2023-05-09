import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  return (
    <div>
      <nav className='navbar bg-body-tertiary'>
        <div className='container-fluid'>
          <a className='navbar-brand'>React Crud</a>
          <button onClick={() => navigate('/add')} className='btn btn-outline-success ' type='submit'>
            Add User
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
