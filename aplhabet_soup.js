/*
ALPHABET SOUP (from https://www.coderbyte.com/editor/guest:Alphabet%20Soup:JavaScript)

Have the function AlphabetSoup(str) take the str string parameter being passed and return the string with the letters in alphabetical order (ie. hello becomes ehllo). 
Assume numbers and punctuation symbols will not be included in the string. 
*/

let ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let alpha = [];

let AlphabetSoup = prompt("Input String");
for (i in AlphabetSoup) {
    for (j in ALPHABET) {
        if (AlphabetSoup.charAt(i) == alphabet[j]) {
            alpha.push(AlphabetSoup.charAt(i));
        } else if (AlphabetSoup.charAt(i) == ALPHABET[j]) {
            alpha.push(AlphabetSoup.charAt(i).toLowerCase());
        }
    }
}
alpha.sort();
AlphabetSoup = "";
for (i in alpha) {
    AlphabetSoup = AlphabetSoup + alpha[i];
}
alert(AlphabetSoup);
