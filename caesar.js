const caesar = function(string, shift) {
     return string
          .split("")
          .map(letter => shiftLetter(letter, shift))
          .join("")
}
const bigLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I",
"J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V",
 "W", "X", "Y", "Z"]

const smallLetters = bigLetters.map(letter => letter.toLowerCase())

function shiftLetter(letter, shift){
    let index 
    function checkForLetters(letter) {
        return letter.toString().match("[a-zA-Z]+")
    }

    if (checkForLetters(letter) !== null){

        if (letter.toString().toLowerCase() == letter.toString()){
            index = smallLetters.indexOf(letter)
            letterIndex = index + shift
            while(letterIndex > 25){
                letterIndex = letterIndex - 26
            }
            while (letterIndex < 0) {
                letterIndex = letterIndex + 26
            }
            return smallLetters[letterIndex]
        } else {
            index = bigLetters.indexOf(letter)
            letterIndex = index + shift
            while(letterIndex > 25){
                letterIndex = letterIndex - 26
            }
            while (letterIndex < 0) {
                letterIndex = letterIndex + 26
            }
            return bigLetters[letterIndex]
        }
    } else {
        return letter
    }

}

console.log(caesar("Kocham cie alansko!", 75 ))
                    

module.exports = caesar
