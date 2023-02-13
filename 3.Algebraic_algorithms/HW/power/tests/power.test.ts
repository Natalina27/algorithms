import {numberToPower} from '../power';

describe('numberToPower', () => {
    it('test 0: should return correct result if we pass 2 and 10', () => {
        const result = numberToPower(2,10);

        expect(result).toBe(1024);
    })
    it('test 1: should return correct result if we pass 123456789 and 0', () => {
        const result = numberToPower(123456789, 0);

        expect(result).toBe(1);
    })
    it('test 2: should return correct result if we pass 1.001 and 1000', () => {
        const result = numberToPower(1.001,1000);

        expect(result).toBe(2.71692393224);
    })
    it('test 3: should return correct result if we pass 1.0001 and 10000', () => {
        const result = numberToPower(1.0001,10000);

        expect(result).toBe(2.71814592682);
    })
    it('test 4: should return correct result if we pass 1.00001 and 100000', () => {
        const result = numberToPower(1.00001,100000);

        expect(result).toBe(2.71826823719);
    })
    it('test 5: should return correct result if we pass 1.000001 and 1000000', () => {
        const result = numberToPower(1.000001,1000000);

        expect(result).toBe(2.7182804691);
    })
    it('test 6: should return correct result if we pass 1.0000001 and 10000000', () => {
        const result = numberToPower(1.0000001,10000000);

        expect(result).toBe(2.71828169413);
    })
    it('test 7: should return correct result if we pass 1.00000001 and 100000000', () => {
        const result = numberToPower(1.00000001,100000000);

        expect(result).toBe(2.71828179835);
    })
    it('test 8: should return correct result if we pass 1.000000001 and 1000000000', () => {
        const result = numberToPower(1.000000001,1000000000);

        expect(result).toBe(2.71828205201);
    })
    it('test 9: should return correct result if we pass 1.0000000001 and 10000000000', () => {
        const result = numberToPower(1.0000000001, 10000000000);

        expect(result).toBe(2.71828205323);
    })
})
