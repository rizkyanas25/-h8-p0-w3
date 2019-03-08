function angkaPalindrome(num) {
    // you can only write your code here!
    var isPalindrome  = false
    while(isPalindrome === false) {
      num += 1
      var newNum = num.toString();
      var reverse = ''
      for(var i = 0; i < newNum.length; i++) {
        reverse = newNum[i] + reverse
        if (newNum === reverse) {
          isPalindrome = true
          
        } 
      }
    }return num
  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001