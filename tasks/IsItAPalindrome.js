// Write a function that checks if a given string (case insensitive) is a palindrome.
function isPalindrome(x) {
    // your code here
    x = x.toLowerCase();
    const lastIndex = x.length - 1;
    for (let i = 0; i < x.length / 2; i++) {
        if (x[i] !== x[lastIndex - i]) {
            return false;
        } else
        return true;
    }
  }
  isPalindrome("aavavavava");
console.log(isPalindrome("aavavavava"));