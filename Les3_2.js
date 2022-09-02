let goods = [
  ["Яблоки", 3, 50],
  ["Груши", 2, 34],
  ["Малина", 6, 86]
];
  
function countBasketPrice(basket) {
  let total = 0;
  for (let i in basket) {
    let price = basket[i][1] * basket [i][2];
    total += price;
  };
  return total;
};

console.log(countBasketPrice(goods));