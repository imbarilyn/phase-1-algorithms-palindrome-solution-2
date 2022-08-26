function isPalindrome(word) {
  const reversedWord = reversedString(word);
  if(reversedWord === word){
    return true;
  }
  else{
    return false;
  }

  // Write your algorithm here
}

function reversedString(word){
  return word.split("").reverse().join("")
}

/* 
  Add your pseudocode here
  function reversedString(word){
    return (reversedString)
  }
  function isPalindrome(word){
    const reversedWord = reversedString(word);
    if(word ===reversedWord ){
      return true;
      else{ false}
    }
  }

  }
*/

/*
  Add written explanation of your solution here
 1. First I will change the word to an array
 2.then reverse it 
 3.Then chanf=ge it to a string
 4. Then test if it is the same as the initial word 
 5. If same then it's a palindrome
 6. Otherswise it's not.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
