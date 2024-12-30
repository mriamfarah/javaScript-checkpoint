// Reverse a String
function reverseString(str) {
    return str.split("").reverse().join("");
}

// Count Characters
function countCharacters(str) {
    return str.length;
}

// Capitalize Words
function capitalizeWords(sentence) {
    return sentence
        .split(" ")
        .map(word => word.toUpperCase())
        .join(" ");
}

console.log(reverseString("hello javaScript!")); 
console.log(countCharacters("mariam")); 
console.log(capitalizeWords("hello world"));