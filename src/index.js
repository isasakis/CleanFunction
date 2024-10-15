import { cleanData } from './cleanData.js';

function main() {
    const inputPayload = {
        "name": "",
        "rooms": ["", "01", "#", "02"],
        "age": "#",
        "gender": "M",
        "companies": {
            "name": "#",
            "document": "0000000000"
        }
    };
    
    
    console.log("INPUT PAYLOAD:");
    console.log(inputPayload);
    
    const outputPayload = cleanData(inputPayload);
    
    console.log("OUTPUT PAYLOAD:");
    console.log(outputPayload);
}

main();