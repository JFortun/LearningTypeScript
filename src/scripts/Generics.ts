function whatType<T>(argument: T) {
    return argument;
}

let imString = whatType('Hello World');
let imNumber = whatType(2);
let imArray = whatType([1, 2, 3, 4, 5]);
let imExplicit = whatType<number>(100)