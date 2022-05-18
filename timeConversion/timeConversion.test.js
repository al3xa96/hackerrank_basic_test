const timeConversion = require("./timeConversion");

describe('timeConversion', () => {
    test("should print hour AM on 24 format", () => {
        const expected = "00:59:59"
        const result = timeConversion("12:59:59AM")
        expect(expected).toBe(result);
    })
    test("should print hour PM on 24 format", () => {
        const expected = "12:59:59"
        const result = timeConversion("12:59:59PM")
        expect(expected).toBe(result);
    })
})