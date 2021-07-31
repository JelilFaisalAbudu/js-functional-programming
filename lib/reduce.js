const reduce = (array, fn, initialValue) => {
  let accumulator;
  
  if (initialValue !== undefined) {
    accumulator = initialValue;

    for (const element of array) {
      accumulator = fn(accumulator, element);
    }
  } else {
    accumulator = array[0];

    for (let index = 1; index < array.length; index++) {
      accumulator = fn(accumulator, array[index]);
    }
  }

  return [accumulator];
}

export default reduce;