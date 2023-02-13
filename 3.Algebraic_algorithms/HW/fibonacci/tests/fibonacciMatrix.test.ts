import {fibonacciMatrix} from '../fibonacciMatrix';

describe('fibonacciIterative', () => {
    it('test0: should return correct result if we pass 0', () => {
        const result = fibonacciMatrix(0);

        expect(result).toBe(0);
    })
    it('test1: should return correct result if we pass 1', () => {
        const result = fibonacciMatrix(1);

        expect(result).toBe(1);
    })
    it('test2: should return correct result if we pass 2', () => {
        const result = fibonacciMatrix(2);

        expect(result).toBe(1);
    })
    it('test3: should return correct result if we pass 3', () => {
        const result = fibonacciMatrix(3);

        expect(result).toBe(2);
    })
    it('test4: should return correct result if we pass 4', () => {
        const result = fibonacciMatrix(4);

        expect(result).toBe(3);
    })
    it('test5: should return correct result if we pass 5', () => {
        const result = fibonacciMatrix(5);

        expect(result).toBe(5);
    })
    it('test6: should return correct result if we pass 10', () => {
        const result = fibonacciMatrix(10);

        expect(result).toBe(55);
    })
    it('test7: should return correct result if we pass 100', () => {
        const result = fibonacciMatrix(100);

        expect(result).toBe(354224848179261915075);
    })
    it('test8: should return correct result if we pass 1000', () => {
        const result = fibonacciMatrix(1000);

        expect(result).toBe(43466557686937456435688527675040625802564660517371780402481729089536555417949051890403879840079255169295922593080322634775209689623239873322471161642996440906533187938298969649928516003704476137795166849228875);
    })
})

