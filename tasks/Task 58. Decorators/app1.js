function log(target, method, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log(JSON.stringify(args));
        var returnValue = originalMethod.apply(this, args); // внутренняя реализация метода add
        console.log("".concat(JSON.stringify(args), " => ").concat(returnValue));
        return returnValue;
    };
}
var Integer = /** @class */ (function () {
    function Integer() {
    }
    Integer.prototype.getRoot = function (value) {
        return value * 0.5;
    };
    return Integer;
}());
var int = new Integer;
var z = int.getRoot(16);
