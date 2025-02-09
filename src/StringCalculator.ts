export class StringCalculator {
  add(input: string) {
    if (input === "") {
      return 0;
    }

    // replace new line with comma
    if (input.includes("\n")) {
      input = input.split("\n").join(",");
    }

    if (input.includes(",")) {
      const numbers = input.split(",").map((e) => parseInt(e));

      const negative = numbers.filter((e) => e < 0);

      if (negative.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negative.join(", ")}`);
      }

      return numbers.reduce((a, b) => a + b);
    }

    return parseInt(input);
  }
}
