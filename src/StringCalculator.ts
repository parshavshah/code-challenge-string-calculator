export class StringCalculator {
  add(input: string) {
    if (input === "") {
      return 0;
    }

    return parseInt(input);
  }
}
