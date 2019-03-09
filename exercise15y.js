function groupAnimals(animals) {
var result = []
var check = ['abcdefghijklmnopqrztuvwxyz']
var first = check[0][0]
var temp = []
for(var i = 0; i < animals.length; i++) {
    console.log(animals[i])
    if(animals[i][0] === first) {
        temp.push(animals[i])
    } 
    
    if(animals[i][0] !== first){
        result.push(temp)
        temp = []
        first = animals[i][0]
        temp.push(animals[i])
    }
    
    }

    return result
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]