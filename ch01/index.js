let x;

x = 0;
x = 1;
x = 0.01;
x = 'hello world';
x = "JavaScript";

x = true;
x = false;
x = null;

x = undefined;


let book = {
    topic: "JavaScript",
    edition: 7
};

book.topic;
book['edition'];

book.author = "Flanagan";

book.contents = {};
book.contents.ch01 = 1;

book.contents?.ch01?.sect1; // => undefined

let primes = [2, 3, 5, 7];

primes[0]; // => 2
primes.length // => 4
primes[primes.length - 1]; // => 7
primes[4] = 9;
primes[4] = 11;

let empty = [];
empty.length // => 0

let points = [
    {x: 0, y: 0},
    {x: 1, y: 1}
];
let data = {
    trial: [[1, 2], [3, 4]],
    trial2: [[2, 3], [4, 5]]
};

3 + 2; // => 5
3 - 2; // => 1
3 * 2;
3 / 2; // => 1.5
points[1].x - points[0].x; // => 1
'3' + '2';

let count = 0;
count++; // => 1
count--; // => 0
count += 2; // => 2
count *= 3; // => 6
count; // => 6

let y = 3;
x = 2;

x === y; // => false
x !== y; // => true
x < y; // => true
x <= y; // => true
x > y; // => false
x >= y; // => false
'two' === 'three'; // => false
'two' > 'three'; // => true
false === (x < y); // => false
false === (x > y); // => true

(x === 2) && (y === 3); // => true
(x > 3) || (y < 3); // => false
!(x===y); // => true


// функции - это параметризированные блоки кода JS которые можно вызвать
function plus1(x) {
    return x + 1;
}
plus1(y); // => 4

let square = function(x) {
    return x * x;
};
square(plus1(y)); // => 16


// arrow function - стрелочные функции
const plus2 = x => x + 1;
const square2 = x => x * x;
plus2(y); // => 4
square2(plus2(y)); // => 16


// методы
let a = [];
a.push(1,2,3); // => ...
a.reverse();

points.dist = function() {
    let p1 = this[0];
    let p2 = this[1];
    let a = p2.x - p1.x; // => 1
            // 1 - 0
    let b = p2.y - p1.y; // => 1
            // 1 - 0

    return Math.sqrt(a*a + b*b);
};
// console.log(points.dist()); // => 


function abs(x) {
    if(x >= 0) {
        return x;
    } else {
        return -x;
    }
}
abs(-10) === abs(10); // => true

// сумма элементов массива
function sum(array) {
    let sum = 0;
    for (const item of array) {
        sum += item;
    }
    return sum;
}
sum(primes); // => 28

// расчет факториала
function factorial(n) {
    let product = 1;
    while(n > 1) {
        product *= n;
        n--;
    }
    return product;
}
factorial(4); // => 24

// еще один
function factorial2(n) {
    let product = 1;
    for (let i = 2; i <= n; i++) {
        product *= i;
    }
    return product;
}
factorial2(5);


// Классы
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    distance() {
        return Math.sqrt(
            this.x * this.x + this.y * this.y
        );
    }
}

let point = new Point(1, 1);
point.distance();