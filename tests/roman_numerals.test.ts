import { numToRomanNumerals } from "../src/roman_numerals";

describe("numToRomanNumerals", () => {
  test("throws an error if a negative number passed", () => {
    expect(() => {
      numToRomanNumerals(-2)
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
    expect(numToRomanNumerals(number)).toEqual(result)
  })
})