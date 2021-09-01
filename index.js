import process from "process";

// console.log(process.argv);
const arg = process.argv.slice(2);
const [key, ...num] = arg;

const number = num.map((res) => parseFloat(res));
console.log(process.argv[2]);
// console.log(number);
console.log(key);
console.log(process.argv);

if (key === "sum") {
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    console.log(number[i]);
    sum += number[i];
    if (number[i] === "") {
      console.log(
        `Sorry, the argument ${number} is not a number, please try again`
      );
      process.exit();
    }
  }
  console.log("Sum:", sum);

  // console.log(number);

  // if (number === "number") {
  //   console.log(
  //     ` Sorry, the argument ${} is not a number, please try again`
  //   );
  // }
} else if (process.argv[2] === "avg") {
  var total = 0;
  var count = 0;

  for (let i = 3; i < process.argv.length; i++) {
    isNaN(parseInt(process.argv[i]));
    console.log(process.argv[i]);
    total += parseInt(process.argv[i]);
    count++;
  }

  const arg = process.argv.slice(2);
  const [key, ...num] = arg;

  const number = num.map((res) => parseFloat(res));
  console.log(number);

  console.log("avg:", total / count);

  if (total / count !== "number") {
    console.log(
      ` Sorry, the argument ${total / count} is not a number, please try again`
    );
  }
} else if (process.argv[2] !== "avg" || process.argv[2] !== "sum") {
  console.log(
    // `Sorry, the argument ${process.argv[2]} is not a number, please try again`
    `I cannot calculate that, please type either "sum" (to calculate the sum) or "avg" (To calculate the Average)`
  );
} else {
  const arg = process.argv.slice(2);
  const [key, ...num] = arg;
  const number = parseFloat(num);
  console.log("num: ", number);
  for (let i = 0; i < number.length; i++) {
    if (number[i] !== "number") {
      console.log(
        ` the argument ${number[i]} is not a number, please try again`
      );
    }
  }
}
