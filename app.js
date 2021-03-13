"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//function
function multiply(a, b) {
    return a * b;
}
console.log(multiply(4, 3));
//array
var mixed = ["Mango", 3, true, {}];
mixed.push({
    name: "Banana",
});
//object
var person = {
    name: "John",
    age: 34,
    isCaptain: true,
};
person.name = "Mashrafi";
//union
//variable
var a;
a = "bad";
//array
var b = [];
b.push(6);
//object
var c;
c = {
    name: "John",
    email: "john@example.com",
    age: 34,
};
//dynamic type || any type
var d;
d = 5;
d = "badPractice";
//functions
var myFunct;
myFunct = function () {
    console.log("Noice!!!");
};
var myFunction = function (a, b, c) {
    if (b === void 0) { b = "goodPractice"; }
    //c is optional parameter
    //b has default value
    console.log("Hello " + a + " there! " + b);
    return a + b;
};
myFunction("Nomad", "Samcro");
var userDetails = function (id, user) {
    console.log("user Id is " + id + ", Name is: " + user.name + " and age is: " + user.age + " ");
};
var sayHello = function (user) {
    console.log("Hello " + (user.age > 50 ? "Sir" : "Mr.") + " " + user.name);
};
//Function Signature
var add;
add = function (a, b) {
    var result = a + b;
    return result;
};
var calculation;
calculation = function (a, b, c) {
    if (c === "add") {
        return a + b;
    }
    if (c === "multiply") {
        return a * b;
    }
    return;
};
//classes && //Access Modifiers
var Player = /** @class */ (function () {
    function Player(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    Player.prototype.play = function () {
        console.log("Player " + this.name + " from " + this.country + " is playing");
    };
    return Player;
}());
var Mashrafi = new Player("Mashrafi", 34, "Bangladesh");
var Sakib = new Player("Sakib", 30, "Bangladesh");
var players = [];
players.push(Mashrafi, Sakib);
console.log(players);
function drawRectangle(options) {
    var width = options.width;
    var height = options.height;
}
drawRectangle({
    height: 50,
    width: 60,
});
//Generics
var addID = function (obj) {
    var id = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { id: id });
};
var user = addID({
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
var RType;
(function (RType) {
    RType[RType["SUCCESS"] = 0] = "SUCCESS";
    RType[RType["FAILURE"] = 1] = "FAILURE";
    RType[RType["UNAUTHENTICATED"] = 2] = "UNAUTHENTICATED";
    RType[RType["FORBIDDEN"] = 3] = "FORBIDDEN";
})(RType || (RType = {}));
var response1 = {
    status: 200,
    type: RType.SUCCESS,
    data: "test",
};
//Tuples
var ax = [3, "hello", { p: 3 }];
var bx = [4, "ad", { t: 1 }];
