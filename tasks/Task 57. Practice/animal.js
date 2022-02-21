var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(food, location, name) {
        this.food = food;
        this.location = location;
        this.name = name;
    }
    Animal.prototype.makeNoise = function () {
        console.log("".concat(this.name, " \u0438\u0437\u0434\u0430\u0435\u0442 \u0437\u0432\u0443\u043A\u0438"));
    };
    Animal.prototype.eat = function () {
        console.log("\u0415\u0441\u0442 ".concat(this.food));
    };
    Animal.prototype.sleep = function () {
        console.log("".concat(this.name, " \u0441\u043F\u0438\u0442"));
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(food, location, name) {
        return _super.call(this, food, location, name) || this;
    }
    Cat.prototype.makeNoise = function () {
        console.log(this.name + " издает звук мяу-мяу");
    };
    Cat.prototype.eat = function () {
        console.log(" ".concat(this.name, " \u043B\u044E\u0431\u0438\u0442 \u0435\u0441\u0442\u044C ").concat(this.food));
    };
    return Cat;
}(Animal));
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(food, location, name) {
        var _this = _super.call(this, food, location, name) || this;
        _this.specialNoise = "гав-гав";
        return _this;
    }
    Dog.prototype.makeNoise = function () {
        console.log(this.name + " издает звук ");
    };
    Dog.prototype.eat = function () {
        console.log("\u0415\u0441\u0442 c\u0432\u043E\u044E ".concat(this.food));
    };
    return Dog;
}(Animal));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(food, location, name) {
        var _this = _super.call(this, food, location, name) || this;
        _this.specialNoise = "и-го-го";
        return _this;
    }
    Horse.prototype.makeNoise = function () {
        console.log(this.name + " издает звук " + this.specialNoise);
    };
    Horse.prototype.eat = function () {
        console.log("\u0415\u0441\u0442 c\u0432\u043E\u044E ".concat(this.food));
    };
    return Horse;
}(Animal));
var Vet = /** @class */ (function () {
    function Vet() {
    }
    Vet.prototype.treatAnimal = function (animal) {
        console.log("".concat(animal.name, " \u0435\u0441\u0442 ").concat(animal.food, " \u0432 \u043C\u0435\u0441\u0442\u0435 ").concat(animal.location));
    };
    return Vet;
}());
var dog = new Dog("мясо", "будка", "Шарик");
var cat = new Cat("рыба", "дом", "Барсик");
var horse = new Horse("овес", "конюшня", "Прима");
var vet = new Vet();
dog.sleep();
dog.makeNoise();
dog.eat();
console.log(cat);
cat.makeNoise();
cat.eat();
cat.sleep();
var Animals = [];
Animals.push(dog);
Animals.push(cat);
Animals.push(horse);
Animals.forEach(function (item) {
    vet.treatAnimal(item);
});
