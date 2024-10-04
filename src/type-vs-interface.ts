


type Address = string;

type StringOrNumber = string | number

type Movies = "Horror" | "Comedy" | "Romantic";


interface A {
    name: string;
}

interface B {
    name: number
}

type AB = A | B;