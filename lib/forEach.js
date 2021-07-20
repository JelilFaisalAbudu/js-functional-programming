const forEach = (array, fn) => {
  for (let index in array) {
    return fn(array[index])
  }
}

export default forEach;