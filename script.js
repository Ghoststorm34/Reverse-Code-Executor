const fs = require("fs");

const script_name = "./files/test_example.txt"

function reverse_file(file_path) {
    const file_contents = fs.readFileSync(file_path, 'utf8');

    const result = file_contents.split('\n').reverse().join('\n');
    
    return result;
}


eval(reverse_file(script_name));