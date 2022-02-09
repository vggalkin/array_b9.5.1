function string_to_array(str) {
    let arr = str.split(',')
    console.log(arr)
}

function print_array(array) {
    for (let i of array) {
        console.log(i);
    }
}

let arr = new Array("One", "Two", "Three");
print_array(arr)

let str = 'Monday, Tusday, Wednesday'
string_to_array(str)
