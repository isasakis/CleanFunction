# CleanFunction

A sample Javascript project that includes a function to clean data by removing empty strings and specific values from objects and arrays.
This project also includes a test with Jest to ensure the functionality of the cleanData function.

## Description

This project demonstrates how to use Javascript to create a utility function that cleans data structures. The function `cleanData` removes empty strings and specific values (e.g., `#`) from objects and arrays.

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/isasakis/CleanFunction.git
   cd CleanFunction
   ```
   
2. Install the dependencies:

   ```sh
   npm install
   ```

## Scripts

### Start

To run the project, use the following command:

   ```sh
   npm start
   ```

### Test

To run the tests using Jest, use the following command:

   ```sh
   npm test
   ```


## Example Usage

Here is an example of how to use the cleanData function:

```js
import { cleanData } from './cleanData.js';

const inputPayload = {
  "key1": "#",
  "key2": "",
  "key3": "2",
  "key4": {
    "subKey1": "#",
    "subKey2": "",
    "subKey3": "A",
  },
  "key5": ["#", "value", ""]
};

const output = cleanData(inputPayload);

console.log(output);

// Expected output: { "key3": "2", "key4": { "subKey3": "A" }, "key5": ["value"] }
```


## Author

Isabella Sakis
