
function multiply() {
  if (arguments.length === 0) return 0;

  let res = 1;
  for (let i = 0; i < arguments.length; i++) {
    res *= arguments[i];
  }
  console.log(res);
  return res;
}

multiply(2, 4, 6, 8);