import { describe, expect, it } from "vitest";

import { sum } from "#utils/sum.js";

describe("sum function", () => {
    it("should add two positive numbers correctly", () => {
        expect(sum(2, 3)).toBe(5);
    });

    it("should add a positive and a negative number correctly", () => {
        expect(sum(5, -2)).toBe(3);
    });

    it("should add two negative numbers correctly", () => {
        expect(sum(-4, -6)).toBe(-10);
    });
});