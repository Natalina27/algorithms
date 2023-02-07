let count = 0;
const solve = (remainingDigits, sumA, sumB) => {
  if(!remainingDigits){
    if(sumA === sumB){
      count++;
    }
    return count;
  }
  for (let a = 0; a <= 9; a++){
    for (let b = 0; b <= 9; b++){
        solve(remainingDigits - 1, sumA + a, sumB + b);
    }
  }
};

const luckyTickets = (num) => {
  solve(num, 0, 0);
  return count;
};

console.log( luckyTickets(4) );

