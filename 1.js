let money = 25000;
let destination = "Papua";

// write your code here


if (destination === "") {
    console.log(`Error! input tidak valid!`)
}  else if (destination === 'Jawa' || destination === 'Papua') {
    let hasil = ''
    let rekomen = ''
    
    if (destination === 'Jawa') {
        if (money < 20_000) {
            rekomen = 'gunung Ciremai dan Prau'
        } else if (money >= 20_000) {
            rekomen = `gunung Ciremai, Prau, Merbabu dan Semeru`
        }
    } else if (destination === 'Papua') {
        if (money < 20_000) {
            rekomen = 'gunung Jayawijaya dan Mandala'
        } else if (money >= 20_000) {
            rekomen = `gunung Jayawijaya, Mandala, Yamin dan Sumantri`
        }
    }
    
    hasil = `Dengan uang ${money}, kamu bisa menuju ke ${rekomen} di pulau ${destination}`
    console.log(hasil);
} else {
    console.log(`Pulau ${destination} belum terjangkau Go-Hiking!`);
}

