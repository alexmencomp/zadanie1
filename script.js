'use strict';

/*console.log(4/0); 
console.log('st'/9);
let somthing;
console.log(somthing);

let person = {
    name : "Alexey",
    age : 25,
    isMarrid:true
};
console.log(person["name"]);
let arr = ['plum', 'orange', 'appl'];
console.log(arr[0]); 
alert('Hello world');
let answer = +prompt('Ты здесь');
console.log(typeof(+"ds"));*/

let money = prompt("Ваш бюджет на месяц?");

let time = prompt("Введите дату в формате YYYY-MM-DD");

let appDate = {
    buget:money,
    timeDate:time,
    expenses : [],
    optionalExpenses : null,
    income : [],
    savings : false 
};

 
 for (let i = 0;  i<2; i++) {
    let statya = prompt("Введите обязательную статью расходов в этом месяце?");
    let howMany = prompt("Во сколько обойдется?");  
    if (typeof(a) === 'string' && typeof(a) != null && typeof(b)!= null && a!=''&&b!='' && statya.length < 50) {
        console.log('done');
        appDate.expenses[statya] = howMany;
    }   else     {
        
    }                                                             
 }
    
appDate.moneyPerDay = appDate.buget/30; 
alert("Бюджет на 1 день  = " + appDate.moneyPerDay);
if (appDate.moneyPerDay < 100) {
Console.log('Минимальный уровень достатка');
} else if (appDate.moneyPerDay >= 100 && appDate.moneyPerDay < 2000) {
    Console.log('Средний уровень достатка');
} else if (appDate.moneyPerDay >= 2000) {
    Console.log('Высокий уровень достатка');
} else {
    Console.log('Произошла ошибка!');
}


