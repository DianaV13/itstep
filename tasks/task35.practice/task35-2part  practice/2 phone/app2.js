import { Student } from "./student.js";
import{Aspirant} from "./aspirant.js";
//г) Создать массив типа Student, содержащий объекты класса Student и Aspirant. Вызвать метод getScholarship() для каждого элемента массива.

let student1 = new Student("Петя", "Иванов","м-26");
student1.averageMark = 5;
let student2 = new Student("Лена", "Иванова","н-35");
student2.averageMark = 4;
let aspirant1 = new Aspirant ("Марина", "Петрова", "м -26");
aspirant1.averageMark = 5;
let students = [student1, student2, aspirant1];
students.forEach(function(item) {
    console.log(item.getSchoolarship());
});
