let spinners = ['|', '/', '-', '\\', '|', '\n'];
let delay = 100;
for (const spin of spinners) {
  setTimeout(() => {
    process.stdout.write(`\r${spin}`);
  }, delay);
  delay += 100;
}