// O(N)
export const numberToPower = (number: number, power: number): number => {
    let total = 1;
    for (let i = 1; i <= power; i++) {
        total = total * number;
    }
    return total;
}

console.log(numberToPower(2, 10)); //1024.0
console.log(numberToPower(123456789, 0)); //1.0
