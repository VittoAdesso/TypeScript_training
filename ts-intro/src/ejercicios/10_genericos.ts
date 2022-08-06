// always if you use <> inside any letter that is a generic type 
// could be a number, string, [], {} etc

function type<T>(argument: T){
    return argument;
}

let typeString = type('HI');
let typeNumber = type(0);
let typeArray = type([1,2,3]);
let soyExplicito = type<number>(123); // i decide one 