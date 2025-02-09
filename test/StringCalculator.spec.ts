import { expect } from "chai";
import { StringCalculator } from "../src/StringCalculator";

describe("StringCalculator Tests", () => {
  it("Should return 0 for empty string", () => {
    let calculator = new StringCalculator();
    expect(calculator.add("")).to.equal(0);
  });

  it("Should return number for given string number", () => {
    let calculator = new StringCalculator();
    expect(calculator.add("1")).to.equal(1);
  });

  it("Should return sum for given two string number", () => {
    let calculator = new StringCalculator();
    expect(calculator.add("1,2")).to.equal(3);
  });

  it("Should return sum for given multiple string number", () => {
    let calculator = new StringCalculator();
    expect(calculator.add("1,2,1,1")).to.equal(5);
  });

  it("Should return sum if delimiter is new line", () => {
    let calculator = new StringCalculator();
    expect(calculator.add("1\n2\n1\n1")).to.equal(5);
  });

  it("Should return sum if delimiter is new line", () => {
    let calculator = new StringCalculator();
    expect(calculator.add("1\n2\n1\n1")).to.equal(5);
  });

  it("Should throw an error if have negative number", () => {
    let calculator = new StringCalculator();
    expect(() => calculator.add("-1,2,-3")).to.throw(
      "Negative numbers not allowed: -1, -3"
    );
  });


  // Extra points
  it("Should return sum if have different delimiters", () => {
    let calculator = new StringCalculator();
    expect(calculator.add("//;1;2;1\n1")).to.equal(5);
  });

  it("Should ignore numbers greater than 1000", () => {
    let calculator = new StringCalculator();
    expect(calculator.add("//;1;2;2000\n1")).to.equal(4);
  });

  it("Should support multi-character delimiters", () => {
    let calculator = new StringCalculator();
    expect(calculator.add("//[***]\n1***2***3")).to.equal(6);
    expect(calculator.add("//[###]\n4###5###6")).to.equal(15);
  });

  it("Should support multiple delimiters", () => {
    let calculator = new StringCalculator();
    expect(calculator.add("//[*][%]\n1*2%3")).to.equal(6);
    expect(calculator.add("//[##][@@]\n4##5@@6")).to.equal(15);
  });

  
});
