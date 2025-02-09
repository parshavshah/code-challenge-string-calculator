export class StringCalculator {
  add(input: string) {
    if (input === "") {
      return 0;
    }

    if (input.includes(",")) {
      const numbers = input.split(",").map((e) => parseInt(e));
      return numbers[0] + numbers[1];
    }

    return parseInt(input);
  }
}
