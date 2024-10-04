// <T>, <V>, <K>, <S>
// <T>, <V>



function greetings<T>(name: T): void {
    console.log(`Hello ${name}.
                Type of  ${name} is ${typeof name}`)
}
greetings("jahid")



function greetings2<T, V>(params1: T, params2?: V): void {
    console.log(`#Hello ${params1}. Type of  ${params1} is ${typeof params1}`)
    console.log(`#Hello ${params2}. Type of  ${params2} is ${typeof params2}`)
}
greetings2("jahid", 203);


interface GenericInterface<T> {
    value: T;
}

class MyGenerics implements GenericInterface<string> {
    value: string = "Greeting To You";

}
class MyGenerics2 implements GenericInterface<number> {
    value: number = 1234;

}

class GenericClass<T, V> {
    value: T;
    item: V;
    constructor(value: T, item: V) {
        this.value = value;
        this.item = item;
    }
}

const myClassValue = new GenericClass("Banana", {})