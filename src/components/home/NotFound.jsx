import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="size-48 md:size-64 lg:size-80">
        <img src="/notFoundData.jpg" alt="not found" className="object-cover" />
      </div>
      <p className="text-xl mb-2 font-semibold">Halaman tidak ditemukan</p>
      <Link to="/" className="px-4 py-2 bg-amber-400 text-black rounded-md font-bold">
        Kembali ke Beranda
      </Link>
    </div>
  );
};

export default NotFound;
