import { cleanData } from '../cleanData';

describe('cleanData function', () => {
    it('should remove all empty strings and # values from root or nested objects or arrays', () => {
        const input = {
            "name": "",
            "rooms": ["", "01", "#", "02"],
            "age": "#",
            "gender": "M",
            "companies": {
                "name": "#",
                "document": "0000000000"
            }
        };
        const expectedOutput = {
            "rooms": ["01", "02"],
            "gender": "M",
            "companies": {
                "document": "0000000000"
            }
        };
        expect(cleanData(input)).toEqual(expectedOutput);
    });

});