import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get('https://6459f55795624ceb21f36cbc.mockapi.io/admin');
    setUsers(result.data.reverse());
  };

  const deleteUser = async (DelId) => {
    let confirmation = window.confirm(`Are you Sure you want to  delete  this `);
    if (confirmation) {
      await axios.delete(`https://6459f55795624ceb21f36cbc.mockapi.io/admin/${DelId.id}`);
      loadUsers();
    }
  };

  return (
    <div className='container'>
      <div className='py-4'>
        <h1>Home Page</h1>
        <table class='table border shadow'>
          <thead class='thead-dark'>
            <tr>
              <th scope='col'>Name</th>
              <th scope='col'>lastname</th>
              <th scope='col'>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.age}</td>
                <td className=''>
                  <div onClick={() => navigate(`/show/${user.id}`)} class='btn btn-primary mr-2 me-2'>
                    View
                  </div>
                  <div onClick={() => navigate(`/edit/${user.id}`)} class='btn btn-primary mr-2 me-2'>
                    Edit
                  </div>
                  <div onClick={() => deleteUser(user)} class='btn btn-primary mr-2 me-2'>
                    delete
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
