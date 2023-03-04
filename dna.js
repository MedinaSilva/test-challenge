// Write a function that takes in a DNA string (for example 'CTAGGGTA') and returns a new string with any non-canonical DNA base values removed. Canonical base values are single characters: 'C', 'T', 'A', and 'G' only. Make the function case sensitive - meaning 'c' (lower case) should be removed from the string, but 'C' (upper case) is a good value and should remain. If the DNA string is empty, just return an empty string.

let dna = 'CTAGGGTA';

const string1 = 'azbyrcd';
const string2 = 'asdfggggggdddddddddddxxxxxdddgxxdgdxxxxx';
const longest = (str2) => { 
    // const str1Unique = [...new Set(str1.split(''))]; 
    // const str2Unique = [...new Set(str2.split(''))]; 
    // const str2Unique = [dna.split('')]; 
    // console.log(str2Unique);
    let result =str2.filter((item,index) => {
        return str2.indexOf(item) === index;
    })
    // console.log(result);

    longest(dna);
    
    // const result = str1Unique.length >= str2Unique.length ? str1Unique : str2Unique; 
    // return result.sort().join('');
}
    
    // console.log(`La cadena más larga es ${longest(string1, string2)}`);
    longest(dna);