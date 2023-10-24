// object

// 1. penulisan template literal. 
// var motor = {
//     nama : "Kawasaki Ninja", //Property
//     warna : "Hijau",
//     cc : "250cc",
//     cylinder : "4 cylinder",
//     kerangka : {
//         jenis : 'Twin Tunnel',
//         berat : '10kg',
//         bahan : 'Platinum Aloy'
//     }
// }
// Object.values(motor).forEach((row) => {
//     console.log(row);
// });

// var a = motor.kerangka
// Object.values(a).forEach((row2) => {
//     console.log(row2);
// })


// 2. buat object dengan function declaration.
function mobil(nama, warna, tahun, merk, kerangka) {
    var data = {};
    data.nama = nama;
    data.warna = warna;
    data.tahun = tahun;
    data.merk = merk;
    data.kerangka = kerangka;
    return data;
}
var mobil1 = mobil(
    'Aprus',
    'Merah',
    '2020',
    'Toyota',
    kerangka = {
        jenis: 'Esaf',
        berat: '500kg',
        bahan: 'Carbon Platinum',
        warna: 'Hitam Metalic'
    });
var mobil2 = mobil('Losbak', 'Hitam', '2012', 'Pick-up')
// console.log(mobil1)

// console.log(mobil1, '\n', mobil2);


// constructor
function siswa(nama, kelas, nis, nisn, jurusan) {
    this.nama = nama;
    this.kelas = kelas
    this.nis = nis
    this.nisn = nisn
    this.jurusan = jurusan
}

var dataSiswa = new siswa('Ikal', '10', '0011023', '0013029', 'Rekayasa Perangkat Lunak')
var dataSiswa2 = new siswa('Fatih', '10', '0123021', '0420123', 'Rekayasa Perangkat Lunak')
// console.log(dataSiswa, dataSiswa2)

// Challenge
// buat sebuah data object nama nma bus beserta data nya.
// contoh : 
// nama : Sinar Jaya
// tujuan : Jakarta - Wonosobo
// kode bus : sn-149
// no polisi : AA 1213 BB
// fasilitas : {
//    makan : rest area subang
//    sheat : sleeper sheat
//    toilet : duduk
// }
// tambahan : [ac, audio karaoke, selimut, bantal, televisi]

function bus(nama, tujuan, kodeBus, noPolisi, fasilitas, tambahan) {
    var dataBus = {};
    dataBus.nama = nama;
    dataBus.tujuan = tujuan;
    dataBus.kodeBus = kodeBus;
    dataBus.noPolisi = noPolisi;
    dataBus.fasilitas = fasilitas;
    dataBus.tambahan = tambahan;
    return dataBus;
}

var bus1 = bus(
    'Sinar Jaya',
    'Jakarta - Winosobo',
    'sn-149',
    'AA 1213 BB',
    fasilitas = {
        makan: 'rest area subang',
        sheat: 'sleeper sheat',
        toilet: 'toilet duduk'
    },
    tambahan = [
        'ac', 
        'audio karaoke', 
        'selimut', 
        'bantal', 
        'televisi'
    ]
)



var bus2 = bus(
    'Tayo',
    'Depok - Mana Aja',
    'rt-320',
    'B 0808 AA',
    fasilitas = {
        makan: 'solaria',
        sheat: 'sleeper sheat++',
        toilet: 'toilet jongkok'
    },
    tambahan = [
        'kipas angin', 
        'televisi jadul', 
        'guling', 
        'bantal', 
        'kasur'
    ]
)



var bus3 = bus(
    'Bus Upin',
    'Malaysia - Indonesia',
    'yp-180',
    'P 1203 ABC',
    fasilitas = {
        makan: 'ayam goreng',
        sheat: 'gak ada',
        toilet: 'toilet berdiri'
    },
    tambahan = [
        'ayam betutu', 
        'rumah opah', 
        'pistol', 
        'pisau', 
        'Ipin'
    ]
)



var bus4 = bus(
    'Bus Sekolah',
    'Inggris - London',
    'QR-999',
    'SD 1234 ZXW',
    fasilitas = {
        makan: 'spaghetti',
        sheat: 'double sleeper sheat',
        toilet: 'golden seat toilet'
    },
    tambahan = [
        'wagyu A5', 
        'air conditioner', 
        'fork', 
        'spoon', 
        'plate'
    ]
)



var bus5 = bus(
    'Bus Mainan',
    'Jakarta - Rumah',
    'xc-122',
    'AB 1234 CD',
    fasilitas = {
        makan: 'sampah',
        sheat: 'sheat kecil',
        toilet: 'toilet jongkok'
    },
    tambahan = [
        'air', 
        'udara', 
        'segar', 
        'ngantuk', 
        'gak tau apalagi'
    ]
)

console.log(bus1, bus2, bus3, bus4, bus5)