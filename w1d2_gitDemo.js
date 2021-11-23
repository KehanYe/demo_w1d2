const getArguments = function (){
  const args = process.argv.slice(2);
  console.log("args", args);

  if (args.length < 2) {
  console.log("Please proviide at least 2 numbers");
  process.exit(); // process.exit STOPS scripits. Return is normally resevered for functions
  }
  return args;
}

const sum = function(numbers) {
  let total = 0;

  for (let num of numbers) {
  const nb = Number(num);
  
    if (Number.isInteger(nb)) {
      total += Number(num);

    } if (isNaN(num)) {
      console.log("Please only add numbers");
      proess.ext();
    }
  console.log("num", num, "total", total, "type", typeof Number(num))
  }
  return total;
}


const result = sum(getArguments());
console.log("Total", result);

