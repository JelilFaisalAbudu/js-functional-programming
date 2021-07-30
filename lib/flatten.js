const flatten = (array,) => {
  let result = [];

  for (const element of array) {
    result = [...result, ...element];
  }

  return result;
}

export default flatten;