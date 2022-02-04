
var price = 21;
var age = 30;
var temperature = 37;
var name = 'Shahadat'
var address = 'Khilkhet Dhaka'
var subscribed = true;
console.log(price);
console.log(age);
console.log(temperature);
console.log(name);
console.log(address);
console.log(subscribed);


var onionPrice = 50;
var eggPrice = 42;
var eggQuatity = 3;
var totalPrice = onionPrice + eggPrice;
var priceDifferrence = onionPrice-eggPrice
var priceMultiplication = eggPrice*eggQuatity
console.log(onionPrice);
console.log(eggPrice);
console.log(totalPrice);
console.log(priceDifferrence);
console.log(priceMultiplication);

var availableMoney = 400;
orangePerKg = 80;
totalOrangeQuantity = availableMoney / orangePerKg;
console.log(totalOrangeQuantity);

/* Mathmematical Operation */

var price1 = 30;
var price2= 10;
price1 = price1+16;
price1 +=17;
price++;
price2 -=3;
price--;
var sum = price1+price2;
var differrence = price1-price2;
var multiply = price1*price2;
var divided = price1/price2;
console.log(sum);
console.log(differrence);
console.log(multiply);
console.log(divided);
console.log(price1);
console.log(price2); 
Modulus

var money = 22;
var person = 7;
var remaider = money % person;
console.log(remaider);

/* Video-7 (advanced) String Concatenation, Integer float parseInt parseFloat type conversion */
var firstName = 'Ariyana';
var lastName = 'Grande';
var fullName = firstName+ ' '+ lastName;
var onionPrice = '42';
var eggPrice = '41';
var totalPrice = onionPrice+eggPrice;
console.log(totalPrice);
console.log(fullName);

var priceOnion = '42.15';
var priceEgg = '43.56';
var priceOnionNum = parseInt(priceOnion);
priceEggNum = parseFloat(priceEgg);
console.log(priceOnionNum);
console.log(priceEggNum);

/* Video-8 Different variable types and use toFixed with parseFloat 
search on google: javascript data type.
*/

var tShirtPrice = 200;
var tShirtPrice2 = '200';
var isRaining = true;
var isRomantic;
var today= new Date();
var firstNum = 0.1;
var secondNum = 0.2;
var total = firstNum+secondNum;
total = total.toFixed(2);
total = parseFloat(total);
console.log(typeof total);
 console.log(typeof tShirtPrice);
console.log(typeof tShirtPrice2);
console.log(typeof isRaining);
console.log(typeof isRomantic);
console.log(typeof today);
console.log(total.toFixed(2));

