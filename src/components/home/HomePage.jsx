import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { MdOutlineEdit } from 'react-icons/md';
import { FaRegTrashAlt } from 'react-icons/fa';
import ModalDelete from '../users/ModalDelete';

const HomePage = () => {
  const [userData, setUserData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [deleteUserId, setDeleteUserId] = useState(null);

  const fetchUsers = async (pageNum) => {
    try {
      const res = await axios.get(`https://reqres.in/api/users?page=${pageNum}`, {
        headers: {
          'x-api-key': 'reqres-free-v1',
        },
      });
      setUserData(res.data.data);
      setTotalPages(res.data.total_pages);
      setIsLoading(false);
    } catch (error) {
      console.error('Gagal fetch data', error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers(page);
  }, [page]);

  const refreshUsers = () => {
    setIsLoading(true);
    fetchUsers(page);
  };

  const handlePageChange = (pageNum) => {
    if (pageNum >= 1 && pageNum <= totalPages) {
      setPage(pageNum);
    }
  };
  return (
    <section className="container font-roboto">
      <div className="flex justify-between items-center py-2 border-b border-[#E5E5E5]">
        <h1 className="font-bold">USER LIST</h1>
        <Link to={'/add'} className="px-3 py-1 bg-amber-400 rounded-md font-medium cursor-pointer text-sm">
          Add Users
        </Link>
      </div>
      <table className="table-auto w-full mt-5 md:text-base">
        <thead className="bg-slate-500 text-white">
          <tr className="text-xs">
            <th>Image</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        {isLoading ? (
          <tbody>
            {[...Array(5)].map((_, i) => (
              <tr key={i} className="animate-pulse">
                <td className="p-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                </td>
                <td className="p-4">
                  <div className="h-4 bg-gray-300 rounded w-10 mb-2 md:w-24 lg:w-32"></div>
                </td>
                <td className="p-4">
                  <div className="h-4 bg-gray-300 rounded w-10 md:w-24 lg:w-32"></div>
                </td>
                <td className="p-4">
                  <div className="h-4 bg-gray-300 rounded w-10 md:w-24 lg:w-32"></div>
                </td>
                <td className="p-4">
                  <div className="h-4 bg-gray-300 rounded w-10 md:w-24 lg:w-32"></div>
                </td>
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            {userData.map((data) => {
              return (
                <tr key={data.id} className="text-xs md:text-base">
                  <td>
                    <img src={data.avatar} alt={data.first_name} className="size-12 p-2 rounded-md object-cover md:size-18 lg:size-20" />
                  </td>
                  <td>{data.first_name}</td>
                  <td>{data.last_name}</td>
                  <td>{data.email}</td>
                  <td className="flex items-center gap-2  mt-4 lg:mt-6 lg:gap-4">
                    <Link to={`/edit/${data.id}`}>
                      <MdOutlineEdit className="text-amber-700 cursor-pointer lg:size-6" />
                    </Link>
                    <FaRegTrashAlt className="text-red-500 cursor-pointer lg:size-6" onClick={() => setDeleteUserId(data.id)} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        )}
      </table>
      {deleteUserId !== null && <ModalDelete setShowDeleteModal={setDeleteUserId} id={deleteUserId} onDeleteSuccess={refreshUsers} />}
      {/* Pagination */}
      <div className="flex justify-center mt-6 space-x-2">
        <button className="px-3 py-1 border rounded cursor-pointer disabled:opacity-50" onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
          Prev
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button key={i + 1} className={`px-3 py-1 border rounded cursor-pointer ${page === i + 1 ? 'bg-blue-500 text-white' : ''}`} onClick={() => handlePageChange(i + 1)}>
            {i + 1}
          </button>
        ))}
        <button className="px-3 py-1 border rounded cursor-pointer disabled:opacity-50" onClick={() => handlePageChange(page + 1)} disabled={page === totalPages}>
          Next
        </button>
      </div>
    </section>
  );
};

export default HomePage;
