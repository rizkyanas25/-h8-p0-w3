function palindrome(kata) {
    // you can only write your code here!
    var reverse = ''
    var isPalindrome = false
    for(var i = 0; i < kata.length; i++ ) {
        reverse = kata[i] + reverse
    }
    if(reverse === kata) {
      isPalindrome = true
    }
    return isPalindrome
  }

  
// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false