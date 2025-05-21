import React from 'react';
import { useAuthStore } from '../../store/useAuthStore';
import { toast } from 'react-toastify';

const ModalLogout = ({ setIsOpen }) => {
  const { logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    toast.success('logout berhasil');
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
      <div className="bg-white rounded shadow-lg p-6 w-80">
        <h2 className="text-lg font-semibold mb-4"></h2>
        <p className="mb-6">Apakah Anda yakin ingin Logout?</p>
        <div className="flex justify-end gap-2">
          <button onClick={() => setIsOpen(false)} className="px-4 py-2 bg-gray-300 rounded cursor-pointer">
            Batal
          </button>
          <button onClick={handleLogout} className="px-4 py-2 bg-red-600 text-white rounded cursor-pointer">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalLogout;
