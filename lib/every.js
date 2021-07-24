const every = (array, fn) => {

  for (const element of array) {
    if (!fn(element)) {
      return false;
    }
  }

  return true;

}