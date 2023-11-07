function even(num) {
    return num/2
}

let x = 19;
let y
let z

console.log("angka : "+ x)
console.log("Hasil : ")

if (x%2 == 0) {
    y = even(x)
    z = even(x)
} else {
    y = even(x) + 0.5
    z = even(x) - 0.5
}

console.log("Hasil jumlah bilangan ganjil : " + y)
console.log("Hasil jumlah bilangan genap : " + z)
