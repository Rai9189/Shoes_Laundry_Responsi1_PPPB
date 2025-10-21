# Shoes_Laundry_Responsi1_PPPB 👟

## Deskripsi Umum Proyek 🗒️
Proyek ini bertujuan untuk membuat REST API dengan JavaScript, memungkinkan pengelolaan data secara efisien dan interaktif.
API ini dibangun menggunakan Node.js dan Express.js, dengan tujuan utama untuk mengelola data sepatu yang sedang dicuci pada layanan jasa cuci sepatu.

API ini memungkinkan pengguna untuk melakukan proses pencatatan, pemantauan, dan pembaruan status cucian sepatu secara digital melalui antarmuka REST API sederhana.

## Tujuan dan Fitur Utama 📝
### Tujuan Proyek 🎯 
1. Mengimplementasikan konsep CRUD (Create, Read, Update, Delete) dalam REST API.
2. Meningkatkan pemahaman penggunaan Express.js sebagai framework backend.
3. Mengelola data menggunakan format JSON sebagai penyimpanan sederhana.
4. Membangun sistem pencatatan yang relevan dengan kebutuhan bisnis nyata, seperti layanan laundry sepatu.

### Fitur Utama ⚙️
| Metode | Endpoint   | Deskripsi                                                                |
| ------ | ---------- | ------------------------------------------------------------------------ |
| GET    | /items     | Menampilkan seluruh daftar sepatu.                                       |
| GET    | /items/:id | Menampilkan detail sepatu berdasarkan ID.                                |
| GET    | /items?status=<status> | Menampilkan daftar sepatu berdasarkan status tertentu (contoh: /items?status=Selesai).                              |
| POST   | /items     | Menambahkan data sepatu baru ke dalam daftar.                            |
| PUT    | /items/:id | Memperbarui data sepatu (misalnya dari *Sedang Dicuci* menjadi *Selesai*). |
| DELETE | /items/:id | Menghapus data sepatu.                                                   |
| DELETE | /items     | Menghapus beberapa data sepatu sekaligus berdasarkan array `id`.         |

## Struktur Data 📊
Struktur data API ini digunakan untuk merepresentasikan informasi setiap item sepatu yang terdaftar dalam sistem Shoes Laundry.

Berikut merupakan struktur data dalam bentuk tabel pada Supabase 
| Kolom | Tipe    | 
| ------ | ---------- | 
| id    | text     | 
| name    | text | 
| status   | text     | 
| price    | numeric | 
| owner | text | 

Berikut merupakan struktur data dalam format JSON
```
{
  "id": "1",
  "name": "Nike Air Force 1",
  "status": "Selesai",
  "price": 1850000,
  "owner": "Rai"
}
```
Keterangan :
- id → ID unik untuk setiap item
- name → Nama sepatu yang dicuci
- status → Status pengerjaan sepatu yang terbagi menjadi tiga kategori, yaitu “Belum Dimulai”, “Dalam Proses”, dan “Selesai”
- price → Harga layanan cuci sepatu
- owner → Nama pemilik sepatu

## Contoh Request dan Response 📥
### GET /items 🏷️
Menampilkan seluruh daftar sepatu.

Request:
```
GET /items
```

Response:
```
[
  {
    "id": "1",
    "name": "Nike Air Force 1",
    "status": "Selesai",
    "price": 1850000,
    "owner": "Rai"
  },
  {
    "id": "2",
    "name": "Adidas Superstar",
    "status": "Dalam Proses",
    "price": 1500000,
    "owner": "Aulia"
  }
]
```

### GET /items/:id 🔍
Menampilkan detail sepatu berdasarkan ID.

Request:
```
GET /items/1
```

Response:
```
{
  "id": "1",
  "name": "Nike Air Force 1",
  "status": "Selesai",
  "price": 1850000,
  "owner": "Rai"
}
```

### GET /items?status=<status> 📂
Menampilkan daftar sepatu berdasarkan status tertentu (contoh: /items?status=Selesai).

Request:
```
GET /items?status=Selesai
```

Response:
```
[
  {
    "id": "1",
    "name": "Nike Air Force 1",
    "status": "Selesai",
    "price": 1850000,
    "owner": "Rai"
  }
]
```

### POST /items ➕
Menambahkan data sepatu baru ke dalam daftar.

Request Body (JSON):
```
{
  "id": "3",
  "name": "Puma RS-X",
  "status": "Belum Dimulai",
  "price": 1200000,
  "owner": "Budi"
}
```

Response:
```
[
  {
    "id": "3",
    "name": "Puma RS-X",
    "status": "Belum Dimulai",
    "price": 1200000,
    "owner": "Budi"
  }
]
```

### PUT /items/:id 🔄
Memperbarui data sepatu (misalnya dari Sedang Dicuci menjadi Selesai).

Request:
```
PUT /items/3
```

Request Body (JSON):
```
{
  "status": "Selesai"
}
```

Response:
```
{
  "id": "3",
  "name": "Puma RS-X",
  "status": "Selesai",
  "price": 1200000,
  "owner": "Budi"
}
```

### DELETE /items/:id ❌
Menghapus data sepatu.

Request:
```
DELETE /items/3
```

Response:
```
{
  "message": "Deleted successfully"
}
```

### DELETE /items 🗑️
Menghapus beberapa data sepatu sekaligus berdasarkan array id.

Request:
```
DELETE /items
```

Request Body (JSON):
```
["1", "2"]
```

Response:
```
{
  "message": "Deleted successfully"
}
```

## Langkah Instalasi dan Cara Menjalankan API 🛠️
1. Clone Repository 👥
```
git clone https://github.com/username/Shoes_Laundry_Responsi1_PPPB.git
cd Shoes_Laundry_Responsi1_PPPB
```
Mengambil seluruh kode proyek ke komputer lokal.

2. Inisialisasi Project 📦
```
npm init -y
```
Membuat file package.json untuk mengelola dependencies dan script.

3. Install Dependencies ⚡
```
npm install express @supabase/supabase-js dotenv
npm install --save-dev nodemon
```
Menginstal library utama untuk backend (express), integrasi Supabase, pengaturan environment (dotenv), dan nodemon untuk auto-reload saat development.

Jika sudah ada package.json dan node_modules, cukup jalankan:
```
npm install
```
Menginstal semua dependencies sesuai yang tercantum di package.json.

4. Konfigurasi Supabase 🔑

Buat file .env di root folder dan isi:
```
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_anon_key
```
Mengatur koneksi ke database Supabase.

5. Menjalankan API 🚀
```
npm run dev
```
Menjalankan server backend dengan auto-reload di http://localhost:3000.

6. Mengakses Endpoint 🌐

Gunakan Postman, Insomnia, atau browser:
```
GET http://localhost:3000/items
```

Untuk menguji API dan melihat data sepatu.

7. Testing API 🧪

Coba setiap endpoint sesuai dokumentasi:
- GET /items → Lihat seluruh data sepatu
- GET /items/:id → Lihat detail sepatu berdasarkan ID
- GET /items?status= → Lihat sepatu berdasarkan status
- POST /items → Tambah sepatu baru
- PUT /items/:id → Update data sepatu
- DELETE /items/:id → Hapus sepatu
- DELETE /items → Hapus banyak sepatu sekaligus

## Link deploy (Vercel) 🔗
Berikut merupakan link Vercel proyek ini: https://shoes-laundry-responsi1-pppb.vercel.app/

## Author 🧑‍💻
Nama     : Rafi Rai Pasha Afandi  
NIM      : 21120123130073  
Kelompok : 19  
Shift    : 1
