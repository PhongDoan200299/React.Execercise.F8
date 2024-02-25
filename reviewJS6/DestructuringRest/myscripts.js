// Destructuring , Rest

// var array = ['Javascript', 'PHP','Ruby'];

// // var a = array[0];
// // var b = array[1];
// // var c = array[2];

// //var [a,b,c] = array;
// // var [a, ,c] = array;
// var [a,b, ... rest] = array;
// // console.log(a,b,c);
// console.log(a);
// console.log(rest);

// var course = {
//     name: 'Javascript',
//     price: 1000,
//     image:'image-address',
//     children: {
//         name:'ReactJs'
//     },
//     description:'description'
// };

// var {name, ... rest} = course;
// console.log(name);
// console.log(rest);

// var {name, ... newObj} = course;
// console.log(name);
// console.log(newObj);

// var {name: parentName, children: {name: children}} = course;

// console.log(parentName);
// console.log(children);

// var {name, description = 'Default description'} = course;
// console.log(description);

function logger (... params) {
    console.log(params);
    
}

console.log(logger(1,2,23,4,5,6,7,7,9));