// O(LogN)
const mul = (
    [
        [a1, a2],
        [a3, a4]
    ]: number[][],
    [
        [b1, b2],
        [b3, b4]
    ]: number[][]) =>
    [
        [a1 * b1 + a2 * b3, a1 * b2 + a2 * b4],
        [a3 * b1 + a4 * b3, a3 * b2 + a4 * b4]
    ];

const matrix = [
    [0, 1],
    [1, 1]
];

//единичная матрица, не айдишник
const id = [
    [1, 0],
    [0, 1]
]

export const fibonacciMatrix = (n: number) => {
    let result = id;
    const bits = n.toString(2);

    for(const bit of bits){
        result = mul(result, result);
        if(bit === "1"){
            result = mul(result, matrix);
        }
    }
    return result[1][0];
}

console.log(fibonacciMatrix(10)); //55
