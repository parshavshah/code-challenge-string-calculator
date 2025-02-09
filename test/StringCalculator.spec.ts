import { expect } from "chai";
import { StringCalculator } from "../src/StringCalculator";

describe("StringCalculator Tests", () => {
  
  it("Should return 0 for empty string", () => {
    let calculator = new StringCalculator();
    expect(calculator.add("")).to.equal(0);
  });
});
