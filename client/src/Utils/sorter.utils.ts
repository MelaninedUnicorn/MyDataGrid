const sorter = (a: any, b: any): number => {
  if (a === b) {
    return 0;
  } else if (a === null) {
    return 1;
  } else if (b === null) {
    return -1;
  } else {
    return a < b ? -1 : 1;
  }
};

export default sorter;
