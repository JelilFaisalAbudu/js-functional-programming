const sortObjectsBy = property => {
  return (a, b) => {
    let result = a[property] < b[property] ? -1 :
                 a[property] > b[property] ? 1 : 0;
    
    return result;
  }
}