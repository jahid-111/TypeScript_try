let user: string = "Jahid";
let count: number = 203;


let intro: string = `Hi I'm ${user}`;

let amILazy: boolean = false;


let x: any = true;

let multipleTypes: string | number = "Jahid";
multipleTypes = 201;


if (typeof user === "string") {
    console.log("yes Its String")
} else {
    console.log(`${user} not String`)
}

class Car {
    carName: string;
    constructor(input: string) {
        this.carName = input
    }
}
class Human {
    carName: string;
    constructor(input: string) {
        this.carName = input
    }
}

let bmw = new Car("BMW Car");

if (bmw instanceof Human) {
    console.log("Yes")
} else {
    console.log("No") //
}



let str: any = 'im a String Created with "Any"';
let index: number = (str as string).indexOf("a"); //Type Assertion

let index1: number = (<string>str).indexOf("a");


