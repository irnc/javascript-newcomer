function* print () {
  yield "Hello";
  yield "Generators";
}

var printer = print();

console.log(printer.next());
console.log(printer.next());
console.log(printer.next());
