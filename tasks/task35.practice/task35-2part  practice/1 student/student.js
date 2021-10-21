class Student{
    firstName;
    lastName;
    group;
    averageMark;
    constructor(firstName, lastName, group){
        this.firstName = firstName;
        this.lastName = lastName;
        this.group = group;

}
getSchoolarship(){
    if (this.averageMark == 5){
        return 100;
    }if (this.averageMark > 5){
        console.log("Not correct number");
    }else{
        return 80;
    }
}
}

export{Student};