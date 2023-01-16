let id = "3888-I-0197621";
let totalMember = 21;
// write your code here

let citizen = ''

// cek I dan A pada id
for (let i = 0; i < id.length; i++) {
   if (id[i] === 'I') {
       citizen = 'wni'
   } else if (id[i] === 'A') {
       citizen = 'wna'
   }
}
// console.log(citizen);

// cek jumlah anggota dan harga
if (citizen.length === 0) {
    console.log(`Anda tidak terdaftar`);

} else {
    let totalHarga
    let hasil
    
    if (citizen === 'wni') {
        let harga = 20_000 // per orang
        let hargaDasar = harga * totalMember
    
        if (totalMember > 20) {
            totalHarga = hargaDasar - (0.2 * hargaDasar)
        } else {
            totalHarga = hargaDasar
        }
        
    } else if (citizen === 'wna') {
        let harga = 50_000 // per orang
        let hargaDasar = harga * totalMember
    
        if (totalMember > 30) {
            totalHarga = hargaDasar - (0.2 * hargaDasar)
        } else {
            totalHarga = hargaDasar
        }
    } 
    
    hasil = `Karena anda adalah ${citizen}, maka tagihan untuk id ${id} adalah ${totalHarga}`
    console.log(hasil);
}
