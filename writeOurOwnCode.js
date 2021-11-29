
// 1) sum of zero
function sumOfZero(arr){
    let answer = [];
    for(let i = 0; i < arr.length; i++){
      for(let j = 0; j < arr.length; j++){
        if(arr[i]+arr[j]=== 0){
          answer.push(arr[i])
        } if(answer.length>0){
          return true
        } 
     } return false
    }
  }
  console.log(sumOfZero([-2,2]))
// I beleive this solutions runtime would be O of N squared as it grows exponentially due to it having a nested for loop.


// 2) unique characters
function uniqueChars(str){
    for (char in str){
            if (str.indexOf(str[char]) != str.lastIndexOf(str[char])){
                return false
            }
        }
        return true
    }
    
    uniqueChars('five')

// I beleive this solutions runtime would be O of N as it only searches for the first instance of a character in the string
// and this only grows linearly based on the size of the string.

// 3) panagram sentence

function panagramSentence(str){
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

for(letter in alphabet){
  if(!str.includes(alphabet[letter])){
    return false
        }
    } return true
}

// I beleive this solutions runtime would be O of N as it only loops through the string once and that only grows linearly based on
// the size of the string

// 4) longest word

function find_longest_word(arr){
    let longestWord= ""
    for(word in arr){
      if(arr[word].length > word.length){
        longestWord= arr[word]
      }
    } return longestWord
  }

//   I belive this would be O of N as it once again only grows linearly based on the size of the array passed in as an argument.
