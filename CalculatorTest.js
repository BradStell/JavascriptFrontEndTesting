/// <reference path="Scripts/jasmine/jasmine.js"/>
/// <reference path="Calculator.js"/>

describe("calculator functionality", function () {
    it("Add two numbers", function () {
        var result = Calculator.Calculate(Operation.Add, 2, 3);
        expect(result).toBe(2 + 3);
    });

    it("Subtract two numbers", function () {
        var result = Calculator.Calculate(Operation.Subtract, 2, 3);
        expect(result).toBe(2 - 3);
    });

    it("Multiply two numbers", function () {
        var result = Calculator.Calculate(Operation.Multiply, 2, 3);
        expect(result).toBe(2 * 3);
    });

    it("Divide two numbers", function () {
        var result = Calculator.Calculate(Operation.Divide, 2, 3);
        expect(result).toBe(2 / 3);
    });
});