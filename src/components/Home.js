import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { GetUserData } from '../redux/slice';

function Home() {
  const { userData } = useSelector((state) => state.counter);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get('https://6459f55795624ceb21f36cbc.mockapi.io/admin');
    dispatch(GetUserData(result.data.reverse()));
  };

  const deleteUser = async (DelId) => {
    let confirmation = window.confirm(`Are you Sure you want to  delete  this `);
    if (confirmation) {
      await axios.delete(`https://6459f55795624ceb21f36cbc.mockapi.io/admin/${DelId.id}`);
      loadUsers();
    }
  };

  const renderBody = () => {
    return (
      <>
        <div className='container'>
          <div className='py-4'>
            <h1>Users</h1>
            <table className='table border shadow'>
              <thead className='thead-dark'>
                <tr>
                  <th scope='col'>Sr. No.</th>
                  <th scope='col'>Name</th>
                  <th scope='col'>lastname</th>
                  <th scope='col'>Age</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {userData.map((user, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.age}</td>
                    <td className=''>
                      <div onClick={() => navigate(`/show/${user.id}`)} className='btn btn-primary mr-2 me-2'>
                        View
                      </div>
                      <div onClick={() => navigate(`/add/${user.id}`)} className='btn btn-primary mr-2 me-2'>
                        Edit
                      </div>
                      <div onClick={() => deleteUser(user)} className='btn btn-primary mr-2 me-2'>
                        delete
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  };

  return <>{<div className='text-center'>{userData.length > 0 ? renderBody() : 'Data Not Found'}</div>}</>;
}

export default Home;
