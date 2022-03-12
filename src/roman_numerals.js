"use strict";
exports.__esModule = true;
exports.numToRomanNumerals = void 0;
var numToRomanNumerals = function (num) {
    if (num < 0)
        throw new Error("A positive number is required");
    var romanNumerals = "";
    var numsAndRomans = { "M": 1000, "CM": 900, "D": 500, "CD": 400, "C": 100, "XC": 90, "L": 50, "XL": 40, "X": 10, "IX": 9, "V": 5, "IV": 4, "I": 1 };
    var getKeys = Object.keys;
    if (num > 3000)
        return romanNumerals;
    getKeys(numsAndRomans).forEach(function (key) {
        while (num >= numsAndRomans[key]) {
            romanNumerals += key;
            num -= numsAndRomans[key];
        }
    });
    return romanNumerals;
};
exports.numToRomanNumerals = numToRomanNumerals;
