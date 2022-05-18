const plusMinus = require("./plusMinus");

describe('plusMinus', () => {
    test("should print proportion positive", () => {
        const expected = "0.500000"
        const result = plusMinus([-4, 3, -9, 0, 4, 1])
        expect(expected).toBe(result);
    })
    test("should print proportion negative", () => {
        const expected = "0.333333"
        const result = plusMinus([-4, 3, -9, 0, 4, 1])
        expect(expected).toBe(result);
    })
})