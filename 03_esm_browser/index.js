import { foo } from "./my-module.js";
// import { foo } from "./my-module"; // This will not work

import { micromark } from "https://esm.sh/micromark@3?bundle";

import { micromark as micromark2 } from "micromark"; // This will work thanks to import map

console.log(foo);
console.log(micromark("## Hello, *world*!"));
console.log(micromark2("## Hello, *world*2!"));
