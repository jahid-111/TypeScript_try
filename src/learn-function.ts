function sum(a: number, b?: number): number {
    if (b) {
        return a + b;
    }
    return a;
}

sum(1, 2);
sum(1);
