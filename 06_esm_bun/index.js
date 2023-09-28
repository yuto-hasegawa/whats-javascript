import { foo } from "./my-module";
// import { foo } from "./my-module.js"; // This will ALSO work
// const foo = require("./my-module.js").foo; // This will ALSO work

import chalk from "chalk@5";

// import { micromark } from "https://esm.sh/micromark@3?bundle"; // This did not work

console.log(foo);
console.log(chalk.green("Hello!"));
