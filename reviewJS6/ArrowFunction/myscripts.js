// 1. Declaration function
// function showMessage(){

// }
// 2. Expression function

// var showMessage2() = function testName(){

// };

// setTimeout(function testName() {

// });

// var myObject = {
//     myFunction : function testName(){
        
//     }
// }


// 3. Arrow funciton : Hàm mũi tên

// const logger = (log) =>  {
//     console.log(log);
// }

// logger('Message...');

// const sum = (a,b) > ({a: a,b: b});


// console.log(sum(2,2));

// const logger = log => console.log(log);

// logger('Message...');

// const course = {
//     name: 'Javascript basic!',
//     getName: function() {
//         return this; // context
//     }
// };

// console.log(course.getName());

const Course = function (name, price)  {
    this.name = name;
    this.price = price;
}

const jsCourse = new Course('Javascript', 1000000);

console.log(jsCourse);

// arrow function không thể làm function contract được