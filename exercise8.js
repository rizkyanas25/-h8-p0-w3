function pasanganTerbesar(num) {
  // you can only write your code here!
  var angka = String(num).split('')
  var banding = angka[0]+angka[1]
  for(var i =0; i<angka.length; i++){
    if(angka[i]>banding){
      banding=angka[i]+angka[i+1]
    }
   // console.log(banding)
  }
  return Number(banding)
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99