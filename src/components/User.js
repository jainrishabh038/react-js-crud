import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function User() {
  const [user, setUser] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get(`https://6459f55795624ceb21f36cbc.mockapi.io/admin/${id}`);
    setUser(result.data);
  };

  return (
    <div className='container mt-5'>
      <div className='card' styles='width: 18rem;'>
        <div className='card-body'>
          <h5 className='card-title text-center ' style={{ fontSize: '30px' }}>
            First Name : {user.first_name}
          </h5>
          <h5 className='card-title text-center ' style={{ fontSize: '30px' }}>
            Last Name : {user.last_name}
          </h5>
          <h5 className='card-title text-center ' style={{ fontSize: '30px' }}>
            User Age : {user.age}
          </h5>
        </div>
      </div>
    </div>
  );
}

export default User;
