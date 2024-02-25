// Enhanced Object literals

// 1. Định nghĩa key; value cho object 
// 2. Định nghĩa method cho objcet
// 3. Định nghĩa key cho object dưới dạng biến

// var name = 'Javascript';
// var price = 1000;

// //Kieu cu
// // var course = {
// //     name: name,
// //     price: price
// // };

// var course = {
//     name,
//     price, 
//     getName: function() { 
//         return name;
//     }
// };


// console.log(course);

var fieldName = 'name';
var fieldPrice = 'price';

const course = {
    [fieldName]: 'Javascript',
    [fieldPrice]: 1000
};

console.log(course);

// Cho trước mảng infoArr, hãy viết hàm arrToObj để chuyển array thành object.

// Gợi ý: Sử dụng phương thức reduce

function arrToObj (arr) {
    return arr.reduce((obj,[key,value]) => {
       obj[key] = value;
       return obj;
    }, {}); 
 }
 
 

// Expected results:

const obj1 = arrToObj([
   ['name', 'Son Dang'], 
   ['age', 21], 
   ['address', 'Ha Noi']
])
console.log(obj1)
/*
Output: { name: 'Son Dang', age: 21, address: 'Ha Noi' }

const obj2 = arrToObj([
   ['name', 'Duc Long'], 
   ['age', 18], 
   ['address', 'Ha Noi']
])
console.log(obj2)
Output: { name: 'Duc Long', age: 18, address: 'Ha Noi' }
*/
