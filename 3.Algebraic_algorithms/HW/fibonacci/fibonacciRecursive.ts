// O(2^N)
export const fibonacciRecursive = (num: number): number => {
    if(num < 2) {
        return num;
    }
    else {
        return fibonacciRecursive(num-1) + fibonacciRecursive(num - 2);
    }
}

