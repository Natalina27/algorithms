import {powerMultiply} from '../powerMultiply';
import {numberToPower} from '../power';

describe('powerMultiply', () => {
    it('test 1: should return correct result if we pass 123456789 and 0', () => {
        const result = numberToPower(123456789, 0);

        expect(result).toBe(1);
    })
})
