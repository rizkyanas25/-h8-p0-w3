function hitungJumlahKata(kalimat) {
  // you can only write your code here!
  var counter = 0
  for(var i = 0; i < kalimat.length; i++) {
    if(kalimat[i] === ' ' 
    && kalimat[i+1] !== ' '
    && i < kalimat.length-1) {
      counter += 1
    }
  }
  return counter+1
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5