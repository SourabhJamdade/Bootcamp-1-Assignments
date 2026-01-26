//find hash with starts with 00000 with prefix (100xdevs)
const crypto = require("crypto");

function findHash(prefix, nonce) {
  let count = 0;
  let hash;
  while (true) {
    let input = prefix + count.toString();
    hash = crypto.createHash("sha256").update(input).digest("hex");
    //console.log(hash);

    if (hash.startsWith(nonce)) {
      return { inputStr: input, hash: hash };
    }
    console.log(count);

    count++;
  }
}
const result = findHash("100xDevs", "00000");
console.log("Input String : ", result.inputStr);
console.log("SHA-256 Hash : ", result.hash);
