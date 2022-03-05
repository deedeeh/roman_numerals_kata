import { numberToRomanNumerals } from "./roman_numerals.js";

describe("numberToRomanNumerals", () => {
  test("throws an error if no number passed", () => {
    expect(() => {
      numberToRomanNumerals()
    }).toThrow("number is required");

    expect(() => {
      numberToRomanNumerals("")
    }).toThrow("A Number type is required");
  })

  test("throws an error if a negative number passed", () => {
    expect(() => {
      numberToRomanNumerals(-2)
    }).toThrow("A positive number is required")
  });

  test.each([
    [1, "I"],
    [2, "II"],
    [451, "CDLI"],
    [267, "CCLXVII"],
    [1899, "MDCCCXCIX"],
    [3000, "MMM"],
    [0, ""],
    [3200, ""]
  ])(
    `returns the correct result when given an argument: %i`,
  (number, result) => {
    expect(numberToRomanNumerals(number)).toEqual(result)
  })
})