
class Student {

    private name: string;
    protected roll: number;
    courses: Array<String>;

    constructor(name: string, roll: number, courses: Array<String>) {
        this.name = name;
        this.roll = roll;
        this.courses = courses;
    }
}