"use strict";
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
