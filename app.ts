//function
function multiply(a: number, b: number) {
  return a * b;
}

console.log(multiply(4, 3));

//array
let mixed = ["Mango", 3, true, {}];
mixed.push({
  name: "Banana",
});

//object
let person = {
  name: "John",
  age: 34,
  isCaptain: true,
};

person.name = "Mashrafi";

//union
//variable
let a: string | number;
a = "bad";

//array
let b: (string | number)[] = [];
b.push(6);

//object
let c: {
  name: string;
  email: string;
  age: number;
};
c = {
  name: "John",
  email: "john@example.com",
  age: 34,
};

//dynamic type || any type
let d: any;
d = 5;
d = "badPractice";

//functions

let myFunct: Function;
myFunct = () => {
  console.log("Noice!!!");
};

const myFunction = (a: string, b: string = "goodPractice", c?: number) => {
  //c is optional parameter
  //b has default value
  console.log(`Hello ${a} there! ${b}`);
  return a + b;
};

myFunction("Nomad", "Samcro");

//type aliases
type stringOrNum = string | number;
type userType = { name: string; age: number };

const userDetails = (id: stringOrNum, user: userType) => {
  console.log(
    `user Id is ${id}, Name is: ${user.name} and age is: ${user.age} `
  );
};

const sayHello = (user: userType) => {
  console.log(`Hello ${user.age > 50 ? "Sir" : "Mr."} ${user.name}`);
};

//Function Signature
let add: (a: number, b: number) => number;

add = (a: number, b: number) => {
  const result = a + b;
  return result;
};

let calculation: (a: number, b: number, c: string) => number | void;
calculation = (a: number, b: number, c: string) => {
  if (c === "add") {
    return a + b;
  }
  if (c === "multiply") {
    return a * b;
  }
  return;
};

//classes && //Access Modifiers
class Player {
  constructor(
    private name: string,
    public age: number,
    readonly country: string
  ) {}

  play() {
    console.log(`Player ${this.name} from ${this.country} is playing`);
  }
}
const Mashrafi = new Player("Mashrafi", 34, "Bangladesh");
const Sakib = new Player("Sakib", 30, "Bangladesh");

const players: Player[] = [];
players.push(Mashrafi, Sakib);
console.log(players);

//Interface
interface rectangleOptions {
  height: number;
  width: number;
}

function drawRectangle(options: rectangleOptions) {
  let width = options.width;
  let height = options.height;
}

drawRectangle({
  height: 50,
  width: 60,
});

//Generics

const addID = <T extends { name: string; age: number }>(obj: T) => {
  let id = Math.floor(Math.random() * 100);
  return { ...obj, id };
};

let user = addID({
  name: "Mashrafi",
  age: 40,
  country: "Bangladesh",
});

addID(user);

//Generics with Interface

// interface APIResponse<T> {
//   status: number;
//   type: string;
//   data: T;
// }

// const response1: APIResponse<string> = {
//   status: 200,
//   type: "good",
//   data: "test",
// };

//Enum

enum RType {
  SUCCESS,
  FAILURE,
  UNAUTHENTICATED,
  FORBIDDEN,
}
interface APIResponse<T> {
  status: number;
  type: RType;
  data: T;
}

const response1: APIResponse<string> = {
  status: 200,
  type: RType.SUCCESS,
  data: "test",
};

//Tuples

let ax = [3, "hello", { p: 3 }];

let bx: [number, string, object] = [4, "ad", { t: 1 }];
