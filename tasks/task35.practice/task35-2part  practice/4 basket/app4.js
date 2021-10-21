/*
 Задание #4
а) Создать класс Товар, имеющий переменные имя, цена, рейтинг. 
б) Создать класс Категория, имеющий переменные имя и массив товаров. Создать несколько объектов класса Категория. 
в) Создать класс Basket, содержащий массив купленных товаров. 
г) Создать класс User, содержащий логин, пароль и объект класса Basket. Создать объект класса User.
 */

import { Product } from "./product.js";
import { Category } from "./category.js";
import { Basket } from "./basket.js";
import{User}from "./User.js";

let meat = new Product("meat", 10, 4);
let milk = new Product("milk", 5, 3);
let bread = new Product("bread", 6, 5);

let food = new Category("food");

food.addProduct(meat);
food.addProduct(milk);
food.addProduct(bread);

food.showProducts();

let user = new User("Vasya","123456");

user.addProductToBasket(milk);
user.addProductToBasket(bread);

user.show();