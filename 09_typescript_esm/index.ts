// import { foo } from "./my-module"; // This will not work
// import { foo } from "./my-module.ts"; // An import path can only end with a '.ts' extension when 'allowImportingTsExtensions' is enabled.
import { foo } from "./my-module.js"; // This will work

console.log(foo); // "bar"
