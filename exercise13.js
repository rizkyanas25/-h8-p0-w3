function targetTerdekat(arr) {
  // you can only write your code here!
  var positionO = arr.indexOf('o');
  //console.log(positionO);
  var positionX = []
  for(var i =0; i<arr.length;i++){
    if(arr[i]==='x'){
      positionX.push(i)
    }
  }
  //console.log(positionX);
  var nearest = []
  for(var j =0; j<positionX.length;j++){
    var range = Math.abs(positionX[j]-positionO);
    nearest.push(range)
  }
  //console.log(nearest);
  var nearestRange = nearest[0]
  if(nearest.length<1){
    return 0
  }else{
  for(var k =0; k<nearest.length; k++){
    if(nearest[k]<nearestRange){
      nearestRange=nearest[k]
    }
  }  
  }
  
  return nearestRange;
}

// TEST CASES
console.log(targetTerdekat(['', '', 'o', '', '', 'x', '', 'x'])); // 3
console.log(targetTerdekat(['o', '', '', '', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', '', '', '', 'x', 'x', 'o', ''])); // 1
console.log(targetTerdekat(['', '', 'o', ''])); // 0
console.log(targetTerdekat(['', 'o', '', 'x', 'x', '', '', 'x'])); // 2