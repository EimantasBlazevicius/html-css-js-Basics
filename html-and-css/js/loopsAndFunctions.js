// for loop
for (let i = 0; i < 3; i++) {
  console.log(i);
}

let i = 0;
while (true) {
  console.log(i);
  //   if (i === 6) {
  //     continue;
  //   }
  i += 1;
  if (i > 10) {
    break;
  }
}

// anonymous function
(function (a, b) {
  return a + b;
})(10, 20);

// Best way to do functions
const myFunction = function aFunctionThatAddsIdAndBTogetherForSomeReason(
  id,
  b
) {
  console.log(id + b);
};

myFunction(15, 16); // function call

// Arrow functions
const func2 = (id, b) => {
  console.log(id + b);
};

func2(15, 16); // function call
