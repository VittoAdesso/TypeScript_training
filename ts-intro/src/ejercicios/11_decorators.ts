// https://www.typescriptlang.org/docs/handbook/decorators.html#class-decorators

function classDecorator<T extends { new (...args: any[]): {}}>(
    constructor: T
){
    return class extends constructor {
        newProperty = 'new one';
        hello = 'Over';
    };
}
@classDecorator
class superClass {
    public miPropiedad: string = 'AJDJD';

    print(){
        console.log('HELLOOO'); 
    }
}

console.log( superClass );

const myClass = new superClass();
console.log( myClass.miPropiedad );