// O(N)
export const fibonacciIterative = (n: number): number => {
    const arr = [0, 1];
    for (let i = 2; i < n + 1; i++){
        arr.push(arr[i - 2] + arr[i -1]);
    }
    return arr[n];
}

console.log(fibonacciIterative(10)); //55
