function pasanganTerbesar(num) {
  // you can only write your code here!
  var newNum = String(num)
  var biggest = newNum[0]+newNum[1]
  for(var i = 0; i < newNum.length; i++) {
    if(newNum[i] > biggest) {
      biggest = newNum[i] + newNum[i+1]
    }
   // console.log(biggest)
  }
  return Number(biggest)
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99