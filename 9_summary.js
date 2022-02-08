var skyblue = 'white';

var phones = ['iphone', 'xiaomi', 'samsung', 'lg', 'htc'];
// phones[3] = 'walton';

// check oppo not exists in an array
if (phones.indexOf('oppo') == -1){
    // console.log('opps! amir khan oppo is missing');
}

// if lg is available
if (phones.indexOf('lg') != -1){
    // console.log('lg is available');
}

// loop
var num = 0;
while(num <= 10){
    num++;
    // console.log(num);
}

for(var i = 0; i < phones.length; i++){
    // console.log(i);
}

// function
function addThreeNumbers(number1, number2, number3){
    console.log(number1, number2, number3);
    // console.log(87, 41, 56);
    var total = number1 + number2 + number3;
    return total;
}

var result = addThreeNumbers(87, 41, 56);
console.log('total: ', result);

// object
var microphone = {
    brand: 'blue yeti',
    price: 120,
    color: 'black'
}

microphone.price = 130;
console.log(microphone);

// console.log(microphone.brand);
// console.log(microphone["brand"]);



// function getReminder(number1, number2) {
//     number1 % number2;
// }
// const reminder = getReminder(12, 2);
// console.log(reminder);


// function addNumber(number1, number2) {
//     return "Result is " + number1 + number2;
// }
// var result = addNumber(5, 4);
// console.log(result);