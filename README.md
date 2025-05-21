# React CRUD & Authentication with reqres.in

Proyek ini adalah aplikasi frontend sederhana menggunakan React yang mendemonstrasikan:

- **Autentikasi (Login & Register)**
- **CRUD (Create, Read, Update, Delete)** data user
- Menggunakan API dummy dari [https://reqres.in](https://reqres.in)

---

## 🔧 Fitur

### ✅ Autentikasi
- **Login**: Menggunakan akun dummy dari reqres.in (email: `eve.holt@reqres.in`)
- **Register**: Simulasi register dengan API reqres.in
- **Token** disimpan di localStorage menggunakan zustand

### ✅ CRUD User
- **Read (GET)**: Ambil daftar user
- **Create (POST)**: Simulasi tambah user baru
- **Update (PATCH)**: Edit user (reqres hanya terima `name` dan `job`)
- **Delete (DELETE)**: Simulasi hapus user (response kosong, tapi dianggap berhasil)

---

## 🚀 Teknologi

- React
- React Router DOM
- Axios
- Zustand
- Tailwind CSS

---
## 🧪 Akun Login (Dari reqres.in)

> Reqres hanya menerima akun tertentu untuk login/register.

- **Email:** `eve.holt@reqres.in`
- **Password:** bebas
Contoh request:

```json
POST /api/login
{
  "email": "eve.holt@reqres.in",
  "password": "cityslicka"
}
---
## Instalasi di lokal

```bash
git clone https://github.com/Rifkynur/user-crud.git
cd user-crud

npm install
# or
yarn install

npm run dev
# or
yarn dev
```
buka browser dan kunjungi
http://localhost:5173
