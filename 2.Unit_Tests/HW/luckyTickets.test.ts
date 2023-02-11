import {luckyTickets} from './luckyTickets';

describe('luckyTickets', () => {
    it('should return correct result if we pass 1', () => {
     const result = luckyTickets(1);

     expect(result).toBe(10);
   })
    it('should return correct result if we pass 10', () => {
        const result = luckyTickets(10);

        expect(result).toBe(3081918923741896840);
    })
 })

