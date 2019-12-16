const isFetching: boolean = true;
const isLoading: boolean = false;

const int: number = 42;
const float: number = 4.2;

const message: string = "Hello";

const numberArr: number[] = [1, 2, 3, 4, 5];
const numberArr2: Array<number> = [1, 2, 3]; // generic type

const words: Array<string> = ["h", "r", "3"];

// Tuple
const contacts: [string, number] = ["Vasya", 123456789];

// any
let variable: any = 42;
//...
variable = "42";

//===
function sayMyName(name: string): void {
    console.log(name)
}

sayMyName("Vasys");

// Never
function throwNever(message: string): never {
    throw new Error(message);
}

function infinite(): never {
    while(true) {

    }
}


//Type
type Login = string;
const login: Login = "admin";

type ID = string | number;
const id1: ID = 123;
const id2: ID = "123";
