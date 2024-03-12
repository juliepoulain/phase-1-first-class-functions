function receivesAFunction(callback) {
  return callback();
}

function returnsANamedFunction() {
  const namedFunction = (a) => a + a;
  return namedFunction;
}

function returnsAnAnonymousFunction() {
  return function () {
    return `test`;
  };
}
