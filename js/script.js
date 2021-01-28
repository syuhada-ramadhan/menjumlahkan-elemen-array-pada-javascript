// array nomor
const nomor = [1, 4, 5];

// accumulator = 0 + currentValue = 1 = 1
// accumulator = 1 + currentValue = 4 = 5
// accumulator = 5 + currentValue = 5 = 10

// method reduce()
const total = nomor.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

// cetak variabel total
console.log(total);
