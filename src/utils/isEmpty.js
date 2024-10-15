export const isEmptyArray = (arr) => (Array.isArray(arr) && arr.length === 0);
export const isEmptyObject = (obj) => (obj && typeof obj === 'object' && Object.keys(obj).length === 0);