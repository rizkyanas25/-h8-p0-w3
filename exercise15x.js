function groupAnimals(animals) {
  var result = [];
  var find = false

  for (var i = 0 ; i < animals.length ; i++){ 
    var temp = []
    for (var j = 0 ; j < result.length; j++){
      if (animals[i][0] === result[j][0][0]){
        result[j].push(animals[i])
        find = true
      }  
    }  
    if (find === false){
      temp.push(animals[i])
      result.push(temp)
      find = false
    }
  }

var tmp
for(var i = 0; i < result.length; i++){
    for(var j = i + 1; j < result.length; j++){
    if(result[i] > result[j]){
      tmp = result[i]
      result[i] = result[j]
      result[j] = tmp
        }
    }
  }

  return result
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));