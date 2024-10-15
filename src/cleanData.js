import { isEmptyArray, isEmptyObject } from './utils/isEmpty.js';

export function cleanData(input) {
    if(!input || isEmptyArray(input) || isEmptyObject(input)) {
        return;
    }

    if(Array.isArray(input)) {
        input.forEach((element, index) => {
            if(Array.isArray(element) || typeof element === 'object') {
                cleanData(element);
            }
            if(element === '#' || element === '') {
                input.splice(index, 1);
            }
        });
    }

    if (typeof input === 'object') {
        for (const key in input) {
            if (Array.isArray(input[key]) || typeof input[key] === 'object') {
                cleanData(input[key]);
            } else {
                if (input[key] === '#' || input[key] === '') {
                    delete input[key];
                }
            }
        }
    }
    return input;
}