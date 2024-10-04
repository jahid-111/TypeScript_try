interface Customer {
    name: string,
    address: string,
}

const hm: Customer = {
    name: "Jahid",
    address: "Bangladesh"
}

class GoldenChase implements Customer {

    name: string;
    address: string;

    constructor(name: string, address: string) {
        this.name = name
        this.address = address
    }
}

const theCustomer = new GoldenChase("Jahid", "Dhaka");

console.log(theCustomer.name)
