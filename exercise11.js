function tentukanDeretAritmatika(arr) {
    // you can only write your code here!
    var arith = arr[1]-arr[0]
    //console.log(arit)
    var jumlah = 0
    for(var i=0; i<arr.length;i++){
      if((arr[i+1]-arr[i]) === arith){
        jumlah++
       // return true
      }
    }
    if(jumlah===arr.length-1){
      return true
    }else{
      return false
    }
    
  }
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false