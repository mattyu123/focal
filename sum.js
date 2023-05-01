const args = process.argv;
const newArg = (args.slice(2));

let total = 0;

for (let i = 0; i < newArg.length; i++) {
  total += Number(newArg[i]);
}

console.log(total);

