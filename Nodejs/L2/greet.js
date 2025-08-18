const fn = function (a, b) {
  console.log("Hello from greet.js", a + b);
};

const sub = function (c, d) {
  const res = c > d ? c - d : d - c;
  console.log("sub is: ", res);
  return res;
};

module.exports = { fn, sub };
