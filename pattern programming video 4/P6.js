let prompt = require("prompt-sync")();
let n = Number(prompt("Enter a number"));
for (let i = 1; i <= n; i++) {
  //INVERTED
  for (let j = 1; j <= n - i; j++) {
    process.stdout.write(" ");
  }
  //right
  for (let j = 1; j <= i; j++) {
    process.stdout.write("* ");
  }
  console.log();
}
