import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Add() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [userData, setUserData] = useState({
    name: '',
    username: '',
    email: '',
  });

  useEffect(() => {
    id && loadUsers();
  }, [id]);

  const loadUsers = async () => {
    const result = await axios.get(`https://6459f55795624ceb21f36cbc.mockapi.io/admin/${id}`);
    setUserData(result.data);
  };
  const addUser = async () => {
    await axios.post('https://6459f55795624ceb21f36cbc.mockapi.io/admin', userData);
    navigate('/');
  };
  const Edituser = async () => {
    await axios.put(`https://6459f55795624ceb21f36cbc.mockapi.io/admin/${id}`, userData);
    navigate('/');
  };
  return (
    <div className='container'>
      <div className='mb-3 '>
        <label for='exampleFormControlInput1' className='form-label'>
          Name
        </label>
        <input
          name='first_name'
          value={userData.first_name}
          onChange={(data) => {
            setUserData({ ...userData, first_name: data.target.value });
          }}
          type='text'
          className='form-control'
          id='exampleFormControlInput1'
          placeholder='Name'
        />
      </div>

      <div className='mb-3 '>
        <label for='exampleFormControlInput1' className='form-label'>
          Last Name
        </label>
        <input
          name='last_name'
          value={userData.last_name}
          onChange={(data) => {
            setUserData({ ...userData, last_name: data.target.value });
          }}
          type='text'
          className='form-control'
          id='exampleFormControlInput1'
          placeholder='Name'
        />
      </div>

      <div className='mb-3'>
        <label for='exampleFormControlInput1' className='form-label'>
          age
        </label>
        <input
          name='age'
          value={userData.age}
          onChange={(data) => {
            setUserData({ ...userData, age: data.target.value });
          }}
          type='text'
          className='form-control'
          id='exampleFormControlInput1'
          placeholder='name@example.com'
        />
      </div>

      <button onClick={id ? Edituser : addUser} type='button' className='btn btn-primary w-100'>
        {id ? 'update Data' : 'createData'}
      </button>
    </div>
  );
}

export default Add;
