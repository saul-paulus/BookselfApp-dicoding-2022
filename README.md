Bookself App


Ini adalah aplikasi yang dibuat untuk dapat lulus dari kelas Belajar Membuat Front-End Web untuk Pemula,

Kriteria Bookshelf Apps
Buatlah aplikasi web yang dapat:
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


![Screenshot from 2022-09-27 22-31-27](https://user-images.githubusercontent.com/55346618/192540226-33d10aef-ec98-402b-8050-5e49c64e4935.png)


