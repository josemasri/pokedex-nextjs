export const addZeros = (number: number, length: number) => {
  let str = '' + number;
  while (str.length < length) {
    str = '0' + str;
  }

  return str;
};
