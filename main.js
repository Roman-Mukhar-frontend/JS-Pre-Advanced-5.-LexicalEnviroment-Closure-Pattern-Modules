// Завдання 1.
// Напишіть функцію яка приймає одне число. При першому виклику, вона його запам'ятовує, при другому - сумує з попереднім і так далі. Для виконання цього завдання використайте замикання.
// Наприклад:
// sum(3) = 3
// sum(5) = 8
// sum(228) = 236

function sumNum(){
    let a = 0;
    return function(step){
        a = a + step;
        console.log(a)
    } 
}
let sum = sumNum();
sum(3);
sum(5);
sum(228);

// Завдання 2.
// Напишіть модуть який буде обробляти покупку товарів. В модулі має бути тільки логіка, весь зв’язок з html, тобто кліки, зміна даних в html робити там не потрібно. Все має працювати як на відео shopsModule. Можете добавити додатковий функціонал від себе. В середині модуля використовуємо тільки логіку(змінні, функції і т.д.), ніякого зв’язку з DOM не має бути.

import * as shop from './shops.js';

console.log(shop.checkBank());
console.log(shop.checkStorage());
console.log(shop.selling(2, 3, 4));
console.log(shop.checkBank());
console.log(shop.checkStorage());
console.log(shop.selling(100));
console.log(shop.checkBank());
console.log(shop.checkStorage());
