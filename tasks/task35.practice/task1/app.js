import {Matrix} from "./matrix.js";

let matrixA = new Matrix(2,2);// Создаем матрицу 2 на 2;
// устанавливаем значения ячейкам по координатам:
matrixA.setCellValue(0,0,1);
matrixA.setCellValue(0,1,2);
matrixA.setCellValue(1,0,3);
matrixA.setCellValue(1,1,4);
// 
matrixA.show();

let matrixB = new Matrix(2,2);// создаем вторую матрицу и тоже устанавливаем значения ячеек

matrixB.setCellValue(0,0,5);
matrixB.setCellValue(0,1,6);
matrixB.setCellValue(1,0,7);
matrixB.setCellValue(1,1,8);

matrixB.show();
// решаем пример 2A+B
let X = matrixA.multipleByValue(2);// Матрицу А умножаем на 2
let Y = X.addMatrix(matrixB);

//let Y = matrixA.multipleByValue(2).addMatrix(matrixB)
Y.show();