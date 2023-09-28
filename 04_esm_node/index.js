import { foo } from "./my-module.js";

// import { foo } from "./my-module"; // This will not work

import { micromark } from "micromark";

import fs from "node:fs";
import * as npmAsync from "async"; // Async is a CommonJS module and it works
// const npmAsync = require("async"); // This will not work in ESM

console.log(foo);
console.log(micromark("## Hello, *world*!"));

npmAsync.map(["index.js", "my-module.js"], fs.stat, function (err, results) {
  console.log(err, results);
});
