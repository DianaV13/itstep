
let house = {
    width: 10,
    length: 20,
    getSquare: function(){
        return this.width * this.length;
    }
}

let oneFloorHouse ={
    _proto_ : house,
    
}
let halfFloorhouse ={
    _proto_ : house,
    getSquare : function(){
        return 2*this.width * this.length;
    }
}
let mansardaHouse ={
    _proto_ : house,
    getSquare : function(){
        return 1.5 *this.width * this.length;
    }
}
console.log(oneFloorHouse.getSquare());
halfFloorhouse.length = 30; // изменили длину стены у дома сполуэтажем
console.log(halfFloorhouse.getSquare());  