function targetTerdekat(arr) {
  // you can only write your code here!
  var positionO = []
  var positionX = []
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 'x') {
      positionX.push(i)
    } else if (arr[i] === 'o') {
      positionO.push(i)
    }
  }
  //position of x and o
  // console.log(positionX)
  // console.log(positionO)
  if (positionX.length === 0) { //if x is not found
    return 0
  } else {
    if (positionX[0] < positionO[0]) {
      return Math.abs(positionX[positionX.length-1] - positionO[0])
    } else {
      return Math.abs(positionO[positionO.length-1] - positionX[0])
    }
  }
}

// TEST CASES
console.log(targetTerdekat(['', '', 'o', '', '', 'x', '', 'x'])); // 3
console.log(targetTerdekat(['o', '', '', '', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', '', '', '', 'x', 'x', 'o', ''])); // 1
console.log(targetTerdekat(['', '', 'o', ''])); // 0
console.log(targetTerdekat(['', 'o', '', 'x', 'x', '', '', 'x'])); // 2