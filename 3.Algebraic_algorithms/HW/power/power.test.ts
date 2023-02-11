import {numberToPower} from './power';

describe('numberToPower', () => {
    it('should return correct result if we pass 2 and 10', () => {
        const result = numberToPower(2,10);

        expect(result).toBe(1024);
    })
    it('should return correct result if we pass 1.000001 and 1000000', () => {
        const result = numberToPower(1.000001,1000000);

        expect(result).toBe(2.7182804690959363);
    })
    it('should return correct result if we pass 123456789 and 0', () => {
        const result = numberToPower(123456789, 0);

        expect(result).toBe(1);
    })
})
