
type myNumber = number;


const cars: myNumber = 10;

type Employee = {
    id: number;
    name: string;
    email: string;
    salary: number;
    address?: string
}

const userDetails: Employee = {
    id: 112,
    name: "jahid",
    email: "jahidjob4@gmail.com",
    salary: 10,
    address: "Bangladesh"
}

type Department = {
    name: string,
    employee: Employee[];
}


const sales: Department = {
    name: "Sales",
    employee: [userDetails]
}


type ISBN = number | string;

const book_a_isbn: ISBN = 1234;

const book_b_isbn: ISBN = "1234"


type Book = {
    title: string,
    page: number,
    isbn: ISBN
}

type Writer = {
    name: string,
    age: number,
    address: string
}

type BookWriter = Book & Writer;


const bookAndWriter: BookWriter = {
    title: "Deep Js",
    page: 203,
    isbn: 12323,
    name: "Jahid",
    age: 25,
    address: "Bangladesh"
}

type startsWith = `Jahid-${string}`

