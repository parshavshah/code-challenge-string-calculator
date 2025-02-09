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
      return numbers.reduce((a, b) => a + b);
    }

    return parseInt(input);
  }
}
