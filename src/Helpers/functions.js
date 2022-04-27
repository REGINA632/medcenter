// Total price of products in cart
export const calcTotalPrice = (arr) => {
  let total = 0;
  arr.forEach((item) => {
    total += item.subPrice;
  });
  return total;
};

// Price for one product according to count
export const calcSubPrice = (elem) => {
  return elem.count * elem.item.price;
};
