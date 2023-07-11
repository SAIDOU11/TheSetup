const rainJanuaryByWeek = [10, 20, 0, 122];

const totalRainfallJanuary = rainJanuaryByWeek.reduce(
  (total, currentElement) => {
    return total + currentElement;
  }
);

// console.log(totalRainfallJanuary);
