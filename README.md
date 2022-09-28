# Bookself App

#### _Front-end Pemula Dicoding_
### _Beasiswa Lintasarta Digischool 2022_
Ini adalah aplikasi penyimpan buku yang dibangun dengan memanfaatkan Browser Object Model (BOM), Document Object Model (DOM), dan Event. Untuk mencegah data tidak hilang dari aplikasi maka dimanfaatkan fungsi web storage dari web clien supaya aplikasi dapat berjalan dengan optimal

Feature Aplikasi Bookselft
- 

## Kriteria App
App ini dibangun haruslah memenuhi beberapa kriteria ini agar supaya dapat memenuhi persyaratan lulus:
1. Memasukan data buku ke dalam rak
2. Memindahkan data buku antar rak
3. Menghapus data buku dari rak. 

Terdapat 5 kriteria utama yaitu:
Kriteria 1: Mampu Menambahkan Data Buku

Data buku yang disimpan merupakan objek JavaScript dengan struktur berikut:
{
  id: string | number,
  title: string,
  author: string,
  year: number,
  isComplete: boolean,
}

Catatan:
Untuk id buku pada tiap buku yang disimpan haruslah unik. Tips dalam menetapkan nilai untuk adalah Anda bisa memanfaatkan nilai timestamp. Untuk mendapatkan nilai timestamp di JavaScript cukup mudah, cukup dengan menuliskan expressions +new Date().

Kriteria 2: Memiliki Dua Rak Buku
Bookshelf Apps harus memiliki 2 Rak buku. Yaitu:
1. Belum selesai dibaca (Jika properti isComplete bernilai false)
2. Selesai dibaca (Jika properti isComplete bernilai true)

Kriteria 3: Dapat Memindahkan Buku antar Rak
Buku yang ditampilkan pada rak, baik itu "Belum selesai dibaca" maupun "Selesai dibaca" harus dapat dipindahkan di antara keduanya.

Kriteria 4: Dapat Menghapus Data Buku
Buku yang ditampilkan pada rak, baik itu "Belum selesai dibaca" maupun "Selesai dibaca" harus dapat dihapus.

Kriteria 5: Manfaatkan localStorage dalam Menyimpan Data Buku
Data buku yang ditampilkan pada rak, baik itu "Belum selesai dibaca" maupun "Selesai dibaca" harus dapat bertahan walaupun halaman web ditutup.
Dengan begitu, Anda harus menyimpan data buku pada localStorage.
## Features Katalog Restaurant App
1. Memasukan data buku ke dalam rak
2. Memindahkan data buku antar rak
3. Menghapus data buku dari rak
4. Data disimpan pada web storage

## Installation
- clone app
- Extrak file
- Masuk ke dalam folder app
- Jalankan app di browser

## Tampilan App
![image](https://user-images.githubusercontent.com/55346618/192542203-be403cd2-860e-4a22-a29a-fca7ecbda191.png)

## License

MIT
