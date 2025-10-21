# Shoes_Laundry_Responsi1_PPPB

## Deskripsi Umum Proyek
Proyek ini merupakan tugas responsi untuk modul Pembuatan API dengan JavaScript.
API ini dibangun menggunakan Node.js dan Express.js, dengan tujuan utama untuk mengelola data sepatu yang sedang dicuci pada layanan jasa cuci sepatu.

API ini memungkinkan pengguna untuk melakukan proses pencatatan, pemantauan, dan pembaruan status cucian sepatu secara digital melalui antarmuka REST API sederhana.

## Tujuan dan Fitur Utama
### Tujuan Proyek 🎯 
1. Mengimplementasikan konsep CRUD (Create, Read, Update, Delete) dalam REST API.
2. Meningkatkan pemahaman penggunaan Express.js sebagai framework backend.
3. Mengelola data menggunakan format JSON sebagai penyimpanan sederhana.
4. Membangun sistem pencatatan yang relevan dengan kebutuhan bisnis nyata, seperti layanan laundry sepatu.

### Fitur Utama (Endpoint `/items`)
| Metode | Endpoint   | Deskripsi                                                                |
| ------ | ---------- | ------------------------------------------------------------------------ |
| GET    | /items     | Menampilkan seluruh daftar sepatu yang sedang dicuci.                    |
| GET    | /items/:id | Menampilkan detail sepatu berdasarkan ID.                                |
| GET    | /items?status= | Menampilkan daftar sepatu berdasarkan status tertentu (contoh: /items?status=Selesai).                              |
| POST   | /items     | Menambahkan data sepatu baru ke dalam daftar.                            |
| PUT    | /items/:id | Memperbarui status sepatu (misalnya dari *Sedang Dicuci* menjadi *Selesai*). |
| DELETE | /items/:id | Menghapus data sepatu yang sudah selesai dicuci.                         |
| DELETE | /items     | Menghapus beberapa data sepatu sekaligus berdasarkan array `id`.          |

## Struktur Data
Struktur data API ini digunakan untuk merepresentasikan informasi setiap item sepatu yang terdaftar dalam sistem Shoes Laundry. Data disimpan pada tabel di Supabase dan diakses melalui endpoint API.

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
- name → Nama sepatu atau jenis barang yang dicuci
- status → Status pengerjaan sepatu yang terbagi menjadi tiga kategori, yaitu “Belum Dimulai”, “Dalam Proses”, dan “Selesai”
- price → Harga layanan cuci sepatu
- owner → Nama pemilik sepatu
