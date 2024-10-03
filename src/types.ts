
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