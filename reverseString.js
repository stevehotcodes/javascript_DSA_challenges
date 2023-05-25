 function reverseString(str) {
  let rStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rStr += str.charAt(i);
  }
  return rStr;
}
reverseString("steve")
module.exports = reverseString
// module exports{} "reverseString"

