// O(N^2)
const isPrime = (value: number): boolean => {
    let dividersCount = 0;
    for(let number = 1; number <= value; number++){
        if(!(value % number)){
            dividersCount++;
        }
    }
    return dividersCount === 2;
}
export const calculatePrimesCount = (N: number): number => {
    let count = 0;

    for(let number = 0; number <= N; number++){
        if(isPrime(number)){
            count++;
        }
    }
    return count;
}

console.log(calculatePrimesCount(10));
console.log(calculatePrimesCount(100));
