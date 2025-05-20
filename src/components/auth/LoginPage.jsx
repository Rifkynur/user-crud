import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [inputData, setInputData] = useState({
    username: '',
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
        'https://reqres.in/api/login',
        {
          email: inputData.email,
          password: inputData.password,
        },
        {
          headers: {
            'x-api-key': 'reqres-free-v1', // jika kamu ingin menambahkan header ini
          },
        }
      );
      toast.success('Berhasil login');
      login(response.data.token);
      navigate('/');
    } catch (error) {
      toast.success('gagal login', error.response?.data.error || error.message);
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
        <h1 className="font-bold text-center text-2xl md:text-3xl text-slate-700">Login</h1>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="font-semibold">
              Email
            </label>
            <input type="email" name="email" onChange={handleChange} value={inputData.email} className="border rounded-md p-1" placeholder="Enter Your Email" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="font-semibold">
              Password
            </label>
            <input type="password" name="password" onChange={handleChange} value={inputData.password} className="border rounded-md p-1" placeholder="Enter Your Password" />
          </div>
          <button className="bg-amber-400 rounded-md py-2 font-bold cursor-pointer" type="submit">
            Login
          </button>
          <button className="bg-amber-400 rounded-md py-2 font-bold cursor-pointer" type="button" onClick={handleGuest}>
            Guest Login
          </button>
        </form>
        <div>
          <p className="text-center">
            Don't have an account ?{' '}
            <Link to={'/register'} className="text-amber-500 font-semibold">
              Register
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
