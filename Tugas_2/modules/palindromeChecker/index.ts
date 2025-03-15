function palindromeChecker(word: string) {
  return word === word.split("").reverse().join("");
}

export default palindromeChecker;
