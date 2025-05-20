import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
  const [inputData, setInputData] = useState({
    name: '',
    job: '',
  });
  const [loading, setLoading] = useState(false);
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
      setLoading(true);
      await axios.post(
        'https://reqres.in/api/users',
        { inputData },
        {
          headers: {
            'x-api-key': 'reqres-free-v1', // jika kamu ingin menambahkan header ini
          },
        }
      );
      setLoading(false);
      toast.success('User berhasil ditambahkan!');
      navigate('/');
    } catch (error) {
      console.error('Gagal menambahkan data:', error);
      setLoading(false);
      toast.error('Terjadi kesalahan!');
    }
  };
  return (
    <section className="flex items-center justify-center min-h-screen w-full bg-gray-300 font-roboto">
      <div className="bg-gray-200 rounded-xl flex flex-col gap-2 p-4 max-w-[300px] md:max-w-[475px] w-full md:gap-6">
        <h1 className="font-bold text-center text-2xl md:text-3xl text-slate-700">Add User</h1>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Username</label>
            <input type="text" name="name" onChange={handleChange} className="border rounded-md p-1" placeholder="Enter Name" required />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Job</label>
            <input type="text" name="job" onChange={handleChange} className="border rounded-md p-1" placeholder="Enter Job" required />
          </div>

          <button className="bg-amber-400 rounded-md py-2 font-bold cursor-pointer disabled:bg-amber-600 disabled:cursor-auto" type="submit" disabled={loading}>
            Add User
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddUser;
