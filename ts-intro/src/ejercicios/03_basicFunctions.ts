function sum ( a: number, b: number ): number {
    return a + b;
}

// opcional 
function rest (a: number, b?: number): number {
    return a - b; 
}

// opcional & include a valor 
const mult = (a: number, b?: number, c: number = 10): number => {
    return a * c;
}

const result = mult(1,9); // doesnt read b ...
const result2 = mult(2,2,4); // pass an other valor to c 
console.log(result);
console.log(result2);