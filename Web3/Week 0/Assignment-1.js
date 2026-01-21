//find hash with starts with 00000
const crypto = require("crypto");

function findHash(prefix) {
  let count = 0;
  while (true) {
    hash = crypto.createHash("sha256").update(count.toString()).digest("hex");
    if (hash.startsWith(prefix)) {
      return { inputStr: count, hash: hash };
    }
    count++;
  }
}
const result = findHash("00000");
console.log("Input String : ", result.inputStr);
console.log("SHA-256 Hash : ", result.hash);
