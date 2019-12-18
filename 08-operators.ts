interface Person {
    name: string,
    age: number
}

type PersonKeys = keyof Person // "name" | "age"

let key: PersonKeys = "name";
key = "age";
//key = "joke" - error 

type User = {
    _id: number,
    name: string,
    email: string,
    createdAt: Date
}

type UserKeysNoMeta1 = Exclude<keyof User, "_id" | "createdAt"> // name | email - указываем какие поля исключить 
type UserKeysNoMeta2 = Pick< User, "name" | "email"> // name | email - указываем какие поля забрать

let u1:UserKeysNoMeta1 = "name"
// u1 = "_id" - error 