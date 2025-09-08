let n1 = document.getElementById('n1');
let n2 = document.getElementById('n2');
let op = document.getElementById('op');
let add = document.getElementById('add');
let sub = document.getElementById('sub');
let mult = document.getElementById('mult');
let div = document.getElementById('div');
let res = 0;
let equ = document.getElementById('equlb');
let one = document.getElementById('1');
let two = document.getElementById('2');
let three = document.getElementById('3');
let four = document.getElementById('4');
let five = document.getElementById('5');
let six = document.getElementById('6');
let seven = document.getElementById('7');
let eight = document.getElementById('8');
let nine = document.getElementById('9');
let zero = document.getElementById('0');
let dzero = document.getElementById('00');
let point = document.getElementById('.');
let activeInput = n1;
let p1 = 0;
let p2 = 0;
let clear = document.getElementById('clr');

add.addEventListener('click', function () {
    op.value = '+';
    activeInput = n2;
});

sub.addEventListener('click', function () {
    op.value = '-';
    activeInput = n2;
});

mult.addEventListener('click', function () {
    op.value = 'x';
    activeInput = n2;
});

div.addEventListener('click', function () {
    op.value = '/';
    activeInput = n2;
});

one.addEventListener('click', function(){
    activeInput.value += '1';
});

two.addEventListener('click', function(){
    activeInput.value += '2';
});

three.addEventListener('click', function(){
    activeInput.value += '3';
});

four.addEventListener('click', function(){
    activeInput.value += '4';
});

five.addEventListener('click', function(){
    activeInput.value += '5';
});

six.addEventListener('click', function(){
    activeInput.value += '6';
});

seven.addEventListener('click', function(){
    activeInput.value += '7';
});

eight.addEventListener('click', function(){
    activeInput.value += '8';
});

nine.addEventListener('click', function(){
    activeInput.value += '9';
});

zero.addEventListener('click', function(){
    activeInput.value += '0';
});

dzero.addEventListener('click', function(){
    activeInput.value += '00';
});

point.addEventListener('click', function(){
    activeInput.value += '.';
});

equ.addEventListener('click', function(){
    switch (op.value){
        case '+':
            p1 = parseFloat(n1.value);
            p2 = parseFloat(n2.value);
            res = p1 + p2;
            break;
        case '-':
            p1 = parseFloat(n1.value);
            p2 = parseFloat(n2.value);
            res = (p1 - p2).toFixed(2);
            break;
        case 'x':
            p1 = parseFloat(n1.value);
            p2 = parseFloat(n2.value);
            res = p1 * p2;
            break;
        case '/':
            p1 = parseFloat(n1.value);
            p2 = parseFloat(n2.value);
            res = p1 / p2;
            break;
        default:
            res = "Error";
    }
    n1.value = res;
    op.value = null;
    n2.value = null;
    res = null;
});

clear.addEventListener('click', function(){
    n1.value = null;
    n2.value = null;
    op.value = null;
    res = null;
    activeInput = n1;
});