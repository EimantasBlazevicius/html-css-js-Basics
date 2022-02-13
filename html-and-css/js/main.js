let input = document.getElementById("input");
let output = document.getElementById("output");
let button = document.getElementById("button");

button.addEventListener("click", () => (output.innerText = input.value));

// let child = document.createElement("div");
// const newContent = document.createTextNode("Hi there and greetings!");
// const parent = document.getElementById("parent");

// child.appendChild(newContent);
// document.body.insertBefore(child, parent);
