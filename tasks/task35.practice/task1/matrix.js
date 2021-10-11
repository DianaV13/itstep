class Matrix{
    cells;
    m;
    n;
    constructor(m,n){
        this.m = m;
        this.n = n;
        this.cells = Array(m);//объявляем что cells это ячейки массива

        for(let i = 0; i < m; i++){
            this.cells[i] = Array(n).fill(0); //заполняем нулями массив
        }
    
    }

    setCellValue(x,y, value){      //устанавливаем ячейки х, у - координаты ячейки, value - значение ячейки
        this.cells[x][y] = value; 
    }
// геттер - получение ячейки, в аргументах координаты
    getCellValue(x,y){
        return this.cells[x][y];
    }
// Метод сложения матриц 
    addMatrix(A){
        let B = new Matrix(this.m, this.n); // устанавливаем новую матрицу,куда будет записан результат сложения 
        for(let i= 0; i <this.m; i++){
            for(let j = 0; j < this.n; j++ ){
                B.setCellValue(i, j, this.getCellValue(i, j) + A.getCellValue(i, j));

                //или let x = this.getCellValue(i,j)+A.getCellValue(i,j);
                //B.setCellValue(i,j, x);
            }
        }
        return B;
    }
// метод умножения матрицы на число (с);
    multipleByValue(c){
        let B = new Matrix(this.m, this.n);
        for(let i= 0; i <this.m; i++){
            for(let j = 0; j < this.n; j++ ){
                let x = this.getCellValue(i,j)*c;
                B.setCellValue(i,j, x); 
                // или  B.setCellValue ( i, j, this.getCellValue(i, j) * c)
            }
        }
        return B;
    }

    show(){
        console.table(this.cells);
    }
}

export {Matrix};