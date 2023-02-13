import {binaryPower} from '../binaryPower';

describe('binaryPower', () => {
    it('test 0: should return correct result if we pass 2 and 10', () => {
        const result = binaryPower(2,10);

        expect(result).toBe(1024);
    })
    it('test 1: should return correct result if we pass 123456789 and 0', () => {
        const result = binaryPower(123456789, 0);

        expect(result).toBe(1);
    })
    it('test 2: should return correct result if we pass 1.001 and 1000', () => {
        const result = binaryPower(1.001,1000);

        expect(result).toBe(2.7169239322355203);
    })
    it('test 3: should return correct result if we pass 1.0001 and 10000', () => {
        const result = binaryPower(1.0001,10000);

        expect(result).toBe(2.718145926824356);
    })
    it('test 4: should return correct result if we pass 1.00001 and 100000', () => {
        const result = binaryPower(1.00001,100000);

        expect(result).toBe(2.7182682371975284);
    })
    it('test 5: should return correct result if we pass 1.000001 and 1000000', () => {
        const result = binaryPower(1.000001,1000000);

        expect(result).toBe(2.7182804691564275);
    })
    it('test 6: should return correct result if we pass 1.0000001 and 10000000', () => {
        const result = binaryPower(1.0000001,10000000);

        expect(result).toBe(2.7182816939803724);
    })
    it('test 7: should return correct result if we pass 1.00000001 and 100000000', () => {
        const result = binaryPower(1.00000001,100000000);

        expect(result).toBe(2.7182817863957975);
    })
    it('test 8: should return correct result if we pass 1.000000001 and 1000000000', () => {
        const result = binaryPower(1.000000001,1000000000);

        expect(result).toBe(2.7182820308145095);
    })
    it('test 9: should return correct result if we pass 1.0000000001 and 10000000000', () => {
        const result = binaryPower(1.0000000001, 10000000000);

        expect(result).toBe(2.718282043475248);
    })
})
