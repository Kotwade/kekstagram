const getRandomInt = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  }

  if (max < min) {
    [min, max] = [max, min]
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const stringCount = (text, count) => {
  return text.length <= count;
};

const getRandomElementArr = (array) => {
  return array[getRandomInt(0, array.length - 1)];
};

export { getRandomInt, stringCount, getRandomElementArr };
