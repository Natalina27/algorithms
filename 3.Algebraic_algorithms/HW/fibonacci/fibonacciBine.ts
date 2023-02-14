// O()
export const fibonacciBine = (n: number): number => {
    const a = (1 + 5 ** 0.5) / 2;
    return Math.round(a ** n / 5 ** 0.5);
}

console.log(fibonacciBine(10)); //55
console.log(fibonacciBine(64)); //10610209857723
