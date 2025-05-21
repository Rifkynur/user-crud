import React, { useState, useEffect } from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditUser = () => {
  const [inputData, setInputData] = useState({
    name: '',
    job: '',
  });
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
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
      await axios.put(
        `https://reqres.in/api/users/${id}`,
        { inputData },
        {
          headers: {
            'x-api-key': 'reqres-free-v1',
          },
        }
      );
      setLoading(false);
      toast.success('Berhasil mengedit user!');
      navigate('/');
    } catch (error) {
      console.error('Gagal mengedit user !:', error);
      setLoading(false);
      toast.error('Terjadi kesalahan!');
    }
  };

  useEffect(() => {
    axios
      .get(`https://reqres.in/api/users/${id}`, {
        headers: {
          'x-api-key': 'reqres-free-v1',
        },
      })
      .then((response) => {
        const user = response.data.data;
        setInputData({ name: `${user.first_name} ${user.last_name}`, job: '' });
      });
  }, [id]);

  return (
    <section className="flex items-center justify-center min-h-screen w-full bg-gray-300 font-roboto">
      <div className="bg-gray-200 rounded-xl flex flex-col gap-2 p-4 max-w-[300px] md:max-w-[475px] w-full md:gap-6">
        <div className="flex justify-between">
          <h1 className="font-bold text-center text-2xl md:text-3xl text-slate-700">Edit User</h1>
          <IoIosCloseCircleOutline className="size-6 cursor-pointer" onClick={() => navigate('/')} />
        </div>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Username</label>
            <input type="text" name="name" onChange={handleChange} className="border rounded-md p-1" placeholder="Enter Name" value={inputData.name} required />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Job</label>
            <input type="text" name="job" onChange={handleChange} className="border rounded-md p-1" placeholder="Enter Job" value={inputData.job} required />
          </div>

          <button className="bg-amber-400 rounded-md py-2 font-bold cursor-pointer disabled:bg-amber-600 disabled:cursor-auto" type="submit" disabled={loading}>
            Edit User
          </button>
        </form>
      </div>
    </section>
  );
};

export default EditUser;
