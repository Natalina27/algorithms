import {fibonacciRecursive} from '../fibonacciRecursive';

describe('fibonacciIterative', () => {
    it('test0: should return correct result if we pass 0', () => {
        const result = fibonacciRecursive(0);

        expect(result).toBe(0);
    })
    it('test1: should return correct result if we pass 1', () => {
        const result = fibonacciRecursive(1);

        expect(result).toBe(1);
    })
    it('test2: should return correct result if we pass 2', () => {
        const result = fibonacciRecursive(2);

        expect(result).toBe(1);
    })
    it('test3: should return correct result if we pass 3', () => {
        const result = fibonacciRecursive(3);

        expect(result).toBe(2);
    })
    it('test4: should return correct result if we pass 4', () => {
        const result = fibonacciRecursive(4);

        expect(result).toBe(3);
    })
    it('test5: should return correct result if we pass 5', () => {
        const result = fibonacciRecursive(5);

        expect(result).toBe(5);
    })
    it('test6: should return correct result if we pass 10', () => {
        const result = fibonacciRecursive(10);

        expect(result).toBe(55);
    })
    it('test7: should return correct result if we pass 100', () => {
        const result = fibonacciRecursive(100);

        expect(result).toBe(354224848179261915075);
    })
})

