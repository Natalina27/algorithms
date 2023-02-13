// O(LogN)
export const binaryPower = (number: number, power: number): number => {
    let total = 1;
    while (power > 2) {
        if(power % 2){
            power--;
            total *= number;
        } else {
            number **= 2;
            power /= 2;
        }
    }
    return +(total * (number ** power)).toFixed(11);
}

console.log(binaryPower(2, 10)); //1024.0
console.log(binaryPower(123456789, 0)); //1.0
