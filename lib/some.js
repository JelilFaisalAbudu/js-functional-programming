const some = (array, fn) => {

  for (const element of array) {
    if (fn(element)) {
      return true;
    }
  }

  return false;
}