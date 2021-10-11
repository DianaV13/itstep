import{Student} from "./student.js";

class Aspirant extends Student{
    
    constructor(firstName, lastName, group){
        super(firstName, lastName, group)

}
getSchoolarship(averageMark){
    if (averageMark == 5){
        return 200;
    }
    if (averageMark > 5){
        console.log("Not correct number");
    }else{
        return 180;
    }
}
}

export{Aspirant};