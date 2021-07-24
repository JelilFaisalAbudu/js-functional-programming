const forEach = (array, fn) => {
  for (let index in array) {
    fn(array[index])
  }
}

export default forEach;