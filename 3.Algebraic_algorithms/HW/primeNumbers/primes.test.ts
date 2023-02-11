import {calculatePrimesCount} from './primes';

describe('calculatePrimesCount', () => {
    it('should return correct result if we pass 10', () => {
        const result = calculatePrimesCount(10);

        expect(result).toBe(4);
    })
    it('should return correct result if we pass 1', () => {
        const result = calculatePrimesCount(1);

        expect(result).toBe(0);
    })
    it('should return correct result if we pass 100', () => {
        const result = calculatePrimesCount(100);

        expect(result).toBe(25);
    })
})
