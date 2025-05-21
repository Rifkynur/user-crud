import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useAuthStore } from '../../store/useAuthStore';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [inputData, setInputData] = useState({
    email: '',
    password: '',
  });

  const { login } = useAuthStore();
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setInputData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://reqres.in/api/register',
        {
          email: inputData.email,
          password: inputData.password,
        },
        {
          headers: {
            'x-api-key': 'reqres-free-v1',
          },
        }
      );
      toast.success('Register Berhasil');
      login(response.data.token);
      navigate('/');
    } catch (error) {
      toast.error('Gagal Register', error.response?.data.error || error.message);
    }
  };
  const handleGuest = () => {
    setInputData({
      email: 'eve.holt@reqres.in',
      password: 'pistol',
    });
  };
  return (
    <section className="flex items-center justify-center min-h-screen w-full bg-gray-300 font-roboto">
      <div className="bg-gray-200 rounded-xl flex flex-col gap-2 p-4 max-w-[300px] md:max-w-[475px] w-full md:gap-6">
        <h1 className="font-bold text-center text-2xl md:text-3xl text-slate-700">Register</h1>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="font-semibold">
              Email
            </label>
            <input value={inputData.email} type="email" name="email" onChange={handleChange} className="border rounded-md p-1" placeholder="Enter Your Email" required />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="font-semibold">
              Password
            </label>
            <input value={inputData.password} type="password" name="password" onChange={handleChange} className="border rounded-md p-1" placeholder="Enter Your Password" required />
          </div>
          <button className="bg-amber-400 rounded-md py-2 font-bold cursor-pointer" type="submit">
            Register
          </button>
          <button className="bg-amber-400 rounded-md py-2 font-bold cursor-pointer" type="button" onClick={handleGuest}>
            Guest account
          </button>
        </form>
        <div>
          <p className="text-center">
            Have an account ?{' '}
            <Link to={'/login'} className="text-amber-500 font-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
