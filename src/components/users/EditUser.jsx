import React, { useState, useEffect } from 'react';

const EditUser = () => {
  const [inputData, setInputData] = useState({
    name: '',
    job: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setInputData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(inputData.job);
  };

  useEffect(() => {}, []);
  return (
    <section className="flex items-center justify-center min-h-screen w-full bg-gray-300 font-roboto">
      <div className="bg-gray-200 rounded-xl flex flex-col gap-2 p-4 max-w-[300px] md:max-w-[475px] w-full md:gap-6">
        <h1 className="font-bold text-center text-2xl md:text-3xl text-slate-700">Edit User</h1>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Username</label>
            <input type="text" name="name" onChange={handleChange} className="border rounded-md p-1" placeholder="Enter Name" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Job</label>
            <input type="text" name="job" onChange={handleChange} className="border rounded-md p-1" placeholder="Enter Job" />
          </div>

          <button className="bg-amber-400 rounded-md py-2 font-bold" type="submit">
            Add User
          </button>
        </form>
      </div>
    </section>
  );
};

export default EditUser;
