//------------- Function Paling Simple

// function saya() {
//     var me = "Vallian Transyogi"
//     return me
// }
// saya()

// console.log("siapakah nama saya? " + saya())


//------------ Function Menggunakan Parameter

// function aku(a) {
//     var nama = a;
//     return nama;
// }
// aku();
// console.log(aku("Vallian Sagoiloc"));
// console.log(aku("Kak Fahmi"));


//------------ Function Arithmatic Persegi Panjang

// function keliling(p, l) {
//     var kel = (p+l)*2;
//     return kel;
// }
// console.log(keliling(10, 15))


//----------- Function Pada Suatu Tombol

function nama() {
    alert("Nama Saya Vallian");
}


// ------------- Penulisan Function Yang Sama Tapi Lebih Baik Yang Bawah
var namaFunction = () => {
    console.log("Hello Vallian");
}

function namaFunction() {
    console.log("Hello Vallian");
}


//---------------- Murojaah Function

// Function dibagi menjadi 2 jenis :

// 1. Built-in Function = Fungsi Bawaan Dari JS

// alert(), date(), confirm(), prompt() -> bisa search di w3.school / di dev.mozilla

// 2. User-Defined Function = Fungsi Yang Kita Buat Sendiri

// Contoh Function :

// function yourName() {
//     console.log("Saya Sedang Belajar JavaScript")
//     return nama
// }
// nama()


// Function Array

// function nama() {
//     var x = "Nama Saya adalah Ikiii";
//     var y = "Nama Saya adalah Imam";
//     var z = "Nama Saya adalah Vallian";

//     // bisa dengan ini
//     // var semua = x+','+y+','+z;

//     // atau bisa dengan cara Array
//     var semua = [x, y, z]

//     return semua
// }

// var tampil = nama()
// tampil[0] maksudnya yang akan di console log berarti yang x atau yang iki saja karena yang pertama yang dipanggil(array)
// console.log(tampil[0])
// console.log(tampil[1])
// console.log(tampil[2])


// Parameter Array di Return
// function mobil(warna, jenis) {
//     var t = warna;
//     var r = jenis;
//     return [t, r];
// }
// console.log(mobil('Merah', 'Sport'));


// Contoh Yang Serupa dgn Alert
// function motor(jenis, cc) {
//     var rr = prompt('Masukkan Jenis Kendaraan');
//     var tt = prompt('Masukkan CC Kendaraan');
//     return ['Jenis : '+rr, 'CC : '+tt];
// }
// alert(motor());


// Function Penjumlahan di Argumen
// function penjumlahan(bil1, bil2) {
//     return bil1+bil2
// }
// var ab = 10;
// var ba = 60;
// hasil = penjumlahan(10+ba, 20*ab)
// console.log(hasil)


// Function Perkalian dan Prompt
function perkalian(angka1, angka2) {
    return angka1 * angka2
}
var aaa = prompt('Masukkan Angka Ke 1 : ');
var aab = prompt('Masukkan Angka Ke 2 : ');
var result = perkalian(aaa, aab);
alert(result);