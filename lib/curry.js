const curry = callbackFn => {
  return function curried(...args) {
    if (args.length >= callbackFn.length) {
      return callbackFn.apply(this, args);
    }

    return function(...args2) {
      return curried.apply(this, args.concat(args2));
    }
  }
}

export default curry;