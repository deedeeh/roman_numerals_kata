/* The Kata says you should write a function to convert from normal numbers to Roman Numerals: eg
1 --> I
4 --> IV
5 --> V
9 --> IX
10 --> X
40 --> XL
50 --> L
90 --> XC
100 --> C
400 --> CD
500 --> D
900 --> CM
1000 --> M
--
7 --> VII
There is no need to be able to convert numbers larger than about 3000. (The Romans themselves didn’t tend to go any higher)
*/

//create an object
//iterate 
//while loop
//create a string variable to hold the result

export const numberToRomanNumerals = number => {
  if(number === undefined) throw new Error("number is required");
  if(typeof number !== 'number') throw new Error("A Number type is required");
  if(number < 0) throw new Error("A positive number is required");
  let romanNumerals = "";
  const numbersAndRomans = {"M": 1000, "CM": 900, "D": 500, "CD": 400, "C": 100, "XC": 90, "L": 50, "XL": 40, "X": 10, "IX": 9, "V": 5, "IV": 4, "I": 1};
  if(number > 3000) return romanNumerals;
  Object.keys(numbersAndRomans).forEach(key => {
    while(number >= numbersAndRomans[key]) {
      romanNumerals += key
      number -= numbersAndRomans[key]
    }
  })
  return romanNumerals;
}