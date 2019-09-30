function filterAndAddEven(...nums) {
    let sum = 0;
    nums.filter(n => n % 2 == 0).map(el => sum += el);
    return sum;
}

function doSomething (s) {
    console.time('filterAndAddEven');
    filterAndAddEven(111111, 111);
    console.timeEnd('filterAndAddEven');
}

const doMagicFaster = (...nums) => nums.reduce((reducer, value) => value & 1 ? reducer : reducer + value, 0);

function doSomething2(s) {
    console.time('doMagicFaster');
    doMagicFaster(111111, 111);
    console.timeEnd('doMagicFaster');
}

console.log (doSomething(), doSomething2());
console.log (doSomething2(), doSomething());

function doMath (s) {
    let t0 = performance.now();
    filterAndAddEven(111111, 111);
    let t1 = performance.now();
    console.log(`Call to function 'filterAndAddEven' took ${t1-t0} ms`);
}

function toDo (s) {
    let t0 = performance.now();
    doMagicFaster(111111, 111);
    let t1 = performance.now();
    console.log(`Call to function 'doMagicFaster' took ${t1-t0} ms`);
}

console.log (doMath(), toDo());
console.log (toDo(), doMath());