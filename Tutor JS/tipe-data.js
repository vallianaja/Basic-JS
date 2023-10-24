//---------------------------- ARITHMATIC ----------------------------

// Penjumlahan (additional) -> +
// Pengurangan (Substraction) -> -
// Perkalian (Multiplication) -> *
// Pembagian (Division) -> /
// Modulus (sisa hasil bagi) -> %
// Increment (urutan dari kecil ke besar) -> ++
// Decrement (urutan dari besar ke kecl) -> --

// Comparasion Operator
// Equal to (sama dengan) -> ==
// Equal value and type (nilai dan tipenya itu sama) -> ===
// Not equal (tidak sama dengan) -> !=
// Not equal value and type (tidak sama nilai dan tipe) -> !==
// Greater than (lebih besar) -> >
// Less than (lebih kecl) -> <
// Greater than or equal to (lebih besar atau sama dengan) -> >=
// Less than or equal to (lebih besar atau sama dengan) -> <=
// Ternary (percabangan dari if atau shorthand if) -> ?


//---------------------------- TIPE DATA ----------------------------
// Tipe Data ada 8
// 1. String => tipe data yang memuar karakter : "" atau ''
// contoh string : 
var a = "Tipe Data String";
console.log(a)


// 2. Number => tipe data yang memuat angka  : 1, 2, 3
// contoh number : 
var b = 30 + 40
console.log("Tipe Data Number", b)

// 3. Bigint => tipe data bilangan bulat

// 4. Boolean => kebenaran : True or False
// contoh boolean : 
let c = true, d = false
console.log("Tipe Data Boolean")
console.log(c)
console.log(d)

// 5. Object
// tipe data object merupakan kumpulan value yang memiliki property dan value (data)
// contoh object :
 var mobil = {nama:"Arpus", merk:"Atoyot", warna:["Merah, hijau, kuning"]}
 console.log("Tipe Data Object")
 console.log(mobil)
 console.log(mobil.warna) // ini yang dipanggil yang Merknya saja yaitu Atoyot

// tipe data array
var motor = ["Mio M3","Beat","Vario","Nmax"]
console.log("Tipe Data Array")
console.log(motor)
console.log(motor[2]) // ini yang dipanggil yang Vario, karena Mio dihitung 0, lalu Beat 1, dan Vario 2
