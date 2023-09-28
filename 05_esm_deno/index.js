import { foo } from "./my-module.js";
// import { foo } from "./my-module"; // This will not work

import chalk from "npm:chalk@5";

import fs from "node:fs";
import * as npmAsync from "npm:async"; // Async is a CommonJS module and it works

console.log(foo);
console.log(chalk.green("Hello!"));

npmAsync.map(["index.js", "my-module.js"], fs.stat, function (err, results) {
  console.log(err, results);
});
