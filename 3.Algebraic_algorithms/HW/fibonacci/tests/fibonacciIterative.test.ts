import {fibonacciIterative} from '../fibonacciIterative';

describe('fibonacciIterative', () => {
    it('should return correct result if we pass 0', () => {
        const result = fibonacciIterative(0);

        expect(result).toBe(0);
    })
    it('should return correct result if we pass 3', () => {
        const result = fibonacciIterative(3);

        expect(result).toBe(2);
    })
    it('should return correct result if we pass 123456789 and 10', () => {
        const result = fibonacciIterative(10);

        expect(result).toBe(55);
    })
})

