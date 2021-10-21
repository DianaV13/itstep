class Car {
    carGlass;
    engine;
    driver;
    marka;
    constructor(){
          this.driver = driver;
          this.carGlass = carGlass;
          this.engine = engine;
          this.marka = marka;
    }
    start(){
        console.log("Машина стартовала");
    }
    stop(){
        console.log("Машина остановилась");
    }
    turnLeft(){
        console.log("Машина повернула на лево");
    }
    turnRight(){
        console.log("Машина повернула на право");
    }
    toString(){
        console.log("Тянут машину на веревке");
    }
}
export{Car};