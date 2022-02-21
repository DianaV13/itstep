function log(target: Object, method: string, descriptor: PropertyDescriptor){
    let originalMethod = descriptor.value;
    descriptor.value = function(arg: number[]){
        console.log(JSON.stringify(args));
        let returnValue = originalMethod.apply(this, args); // внутренняя реализация метода add
        console.log(`${JSON.stringify(args)} => ${returnValue}`)
        return returnValue;
    }
}

class Integer{
    value: number;

    getRoot(value:number){
        return value* 0.5;
    }
}
let int = new Integer;
let z = int.getRoot(16);
