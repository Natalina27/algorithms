const getNextArr = (prevArr: number[]) => {
    const newLen = prevArr.length + 9;
    const arr = [];

    for (let i = 0; i < newLen; i++) {
        let q = 0;
        for (let j = 0; j < 10; j++) {
            if (prevArr[i - j]) {
                q += prevArr[i - j];
            }
        }
        arr.push(q);
    }
    return arr;
};

export const luckyTickets = (num: number) => {
    let arr = [];
    let result = 0;

    for (let i = 0; i < 10; i++) {
        arr.push(1);
    }

    for (let i = 0; i < (num - 1); i++) {
        arr = getNextArr(arr);
    }

    arr.forEach(v => result += Math.pow(v, 2));
    return result;
};

console.log(luckyTickets(1));

