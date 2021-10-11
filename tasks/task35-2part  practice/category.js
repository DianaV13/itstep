class Category{
    name;
    products;
    
    constructor(name){
        this.name = name;
        products = new Array;//можно и просто пустые квадратные скобки []
    }
    addProduct(product){
        this.products.push(product);// добавляем елемент в конец

    }
    ShowProducts(){
        console.log ( "Category  " + this.name);
        this.products.forEach ( function (product, index) {//вызывает func для каждого элемента. Ничего не возвращает.
            console.log(`${index + 1}. ${product.name} cost ${product.price} $ with rating ${product.rating}`)
            
        });
    }
}
export{Category};