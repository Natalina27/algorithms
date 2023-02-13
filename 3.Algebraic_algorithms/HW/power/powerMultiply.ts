// O(N)
const  power2 = (n: number): number => {
    if (n == 0)
        return 1;

    if (n == 1)
        return 2;

    return power2(n / 2) *
        power2(n / 2);
}

export const powerMultiply = (number: number, power: number): number => {
    return number * power2(power);
}

console.log(powerMultiply(2, 10)); //1024.0
console.log(powerMultiply(123456789, 0)); //1.0
