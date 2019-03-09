function groupAnimals(animals) {
  animals.sort();
  var result = [];
  var first = animals[0][0];
  var temp = [];
  for (var i = 0; i < animals.length; i++) {
    if (animals[i][0] === first) {
      temp.push(animals[i]);
    } else {
      result.push(temp);
      temp = [];
      first = animals[i][0];
      temp.push(animals[i]);
    }
    
    if (i === animals.length-1) {
      result.push(temp);
    }
  }
  return result;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]