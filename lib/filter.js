const filter = (array, fn) => {
  let result = [];

  for (const element of array) {
    fn(element) ? (result = [...result, element]) : undefined;
  }

  return result;
}

export default filter;