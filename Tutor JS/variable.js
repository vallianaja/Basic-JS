// Lets first Code

//---------------------------- VARIABLE ----------------------------
// Deklarasi sebuah variable ada 4 cara:
// 1. automatic
// 2. var
// 3. let
// 4. const

//------------------ automatic Variable
x = 1;
y = 3;
// Automatic Variable itu tidak memakai apa-apa, langsung dengan tulisan/apa aja = nilai
z = x+y;
console.log("...")
console.log("Ini automatic Variable")
console.log(z)

//------------------ var Variable
// Kelebihan dari Variable var adalah var bisa dideklerasikan ulang
var a = 20;
var b = 30;
console.log("...")
console.log("Ini var Variable")
console.log(a+b)
// Perlu diperhatikan kalau bahasa pemograman itu dihitung dari atas sampai bawah, jadi yang ini akan kebaca 20+30

var a = 50;
// Kalau yang ini saat di run maka masuknnya variable a = 50 jadi 50+30

console.log(a+b)

// Variable juga bisa seperti ini
var k
var l

var k = 10
var l = 20
// Karena Variable var bisa di deklerasikan ulang


//------------------ let Variable
// Variable Let itu sama seperti val di kotlin, jadi variable let tidak bisa diubah, tetapi nilainya bisa diubah dengan menggunakan automatic Variable
let d = 30;
let e = 40;
console.log("...")
console.log("Ini let Variable")
console.log(d+e)
// Hasil dari ini akan menjadi 30 + 40

d = 45;

console.log(d+e)
// Hasil dari ini akan menjadi 45 + 40 karena telah diubah dengan automatic Variable

// Variable let juga bisa seperti Variable var, tetapi caranya bukan dipanggil lagi letnya, tetapi dengan automatic variable
let h
let r

h = 9
r = 3
console.log(h+r)



//------------------ const Variable
// Variable const adalah satu variable yang tidak bisa diubah-ubah sama sekali, baik dengan automatic, var, dan let tidak akan bisa
// Biasanya Variable const digunakan untuk API

const f = 3
const g = 5
console.log("...")
console.log("Ini const Variable")
console.log(f*g)

// f = 2
// Jika ini di console.log(f*g) maka akan error karena tidak bisa diganti dengan automatic variable ataupun yang lainnya
console.log("...")

//------------------ Ada juga cara penulisan syntax variable
var z = 30, x = 20, m = 50
// ini artinya var z = 30, var x = 20, dan var m = 50, bisa dengan 1 line dipotong dengan comma
console.log("Variable 1 baris")
console.log(z+x*m)
