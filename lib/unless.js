const unless = (predicate, fn) => {
  if (!!predicate) {
    fn(data);
  }
}