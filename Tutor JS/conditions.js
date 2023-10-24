// Percabangan (if, else, elsei if, switch, case, etc);

// Contoh :
// vallian ingin mengikuti sebuah seminar, yang mana seminarnya tersebut memiliki aturan :
// 1. jika umurnya kurang dari 13 tahun, maka harus masuk ke ruangan A
// 2. jika umurnya lebih dari 13 tahun dan kurang dari 17 tahun, maka harus masuk ke ruangan B
// 3. jika umurnya lebih dari 17 tahun, maka harus asuk ke ruangan C

// var vallian = 17;

// if (vallian < 13) {
//     console.log("Vallian harus masuk ke ruangan A");
// } else if (vallian > 13 && vallian <= 17) {
//     console.log("Vallian harus mausk ke ruangan B")
// } else {
//     console.log("Vallian harus masuk ke ruangan C")
// }

// // Disebuah kursus ada sebuah jadwal materi, senin : pemograman web, selasa : android, rabu : python, kamis - minggu : libur

// var hari = prompt("Masukkan Nama Hari")

// if (hari == 'senin') {
//     alert('Materi hari ini adalah pemograman web');
// } else if (hari == 'selasa') {
//     alert('Materi hari ini adalah android');
// } else if (hari == 'rabu') {
//     alert('Materi hari ini adalah python');
// } else if ( hari == 'kamis'|| hari == 'jumat'|| hari == 'sabtu'|| hari == 'ahad') {
//     alert('Course hari ini libur');
// } else {
//     alert('Masukkan input yang benar');
// }

// Challenge
// 1. Menentukan bilangan genap dan ganjil
// 2. Jadwal Pelajaran

var angka = prompt("Masukkan Angka")

if (angka % 2 == 0) {
    alert('Ini adalah angka genap')
} else {
    alert('Ini adalah angka ganjil')
}

var hari = prompt("Masukkan Nama Hari")

