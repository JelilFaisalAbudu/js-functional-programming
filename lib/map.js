const map = (array, fn) => {
  let result = [];

  for (const element of array) {
    result = [...result, fn(element)];
  }

  return result;
}

export default map;