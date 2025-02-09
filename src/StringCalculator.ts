export class StringCalculator {
  add(input: string) {
    if (input === "") {
      return 0;
    }

    // replace different delimiters with ","
    if (input.slice(0, 2) === "//") {
      const delimiter = new RegExp(input[2], "g");
      input = input.replace(`//${input[2]}`, "").split(delimiter).join(",");
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
