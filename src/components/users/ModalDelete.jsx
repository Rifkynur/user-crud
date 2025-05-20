import React from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

const ModalDelete = ({ setShowDeleteModal, id, onDeleteSuccess }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`https://reqres.in/api/users/${id}`, {
        headers: {
          'x-api-key': 'reqres-free-v1',
        },
      });
      toast.success('User berhasil dihapus');
      setShowDeleteModal(null);
      onDeleteSuccess();
    } catch (error) {
      toast.error('Gagal menghapus user', error.message);
    }
  };
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-80">
        <h2 className="text-lg font-bold mb-4">Konfirmasi Hapus</h2>
        <p className="mb-4">Apakah Anda yakin ingin menghapus user ini?</p>
        <div className="flex justify-end gap-2">
          <button onClick={() => setShowDeleteModal(null)} className="px-4 py-2 bg-gray-300 rounded cursor-pointer">
            Batal
          </button>
          <button onClick={handleDelete} className="px-4 py-2 bg-red-500 text-white rounded cursor-pointer">
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;
