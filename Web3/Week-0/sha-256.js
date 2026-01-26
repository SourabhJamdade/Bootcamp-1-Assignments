const crypto = require("crypto");

const input = 1;
let hash;
let count = 0;
let prefix = "100xdevs";
do {
  hash = crypto
    .createHash("sha256")
    .update(prefix + count.toString())
    .digest("hex");
  console.log(prefix + count.toString());
  count++;
} while (!hash.startsWith("0000"));
console.log(hash);
