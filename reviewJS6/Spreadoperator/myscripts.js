// function logger ({name, price,...rest}){
//     console.log(name);
//     console.log(price);
//     console.log(rest);

// }

function logger ([a,b,...rest]){
    console.log(a);
    console.log(b);
    console.log(rest);
}

// logger({
//     name: "Javascript",
//     price: 1000,
//     description: 'description'
// });

logger([2, 6,4,7,123,2,5,6,1,25,1]);

var array1 = ['Javascript', 'ruby','PHP'];
var array2 = ['ReactJS', 'Dart'];
var array3 = [...array2,...array1];

console.log(array3);

var object1 = {
    name: 'Javascript'
};

var object2 = {
    price: 1000
};

var object3 = {
    ...object1,
    ...object2
};

console.log(object3);

var defaultConfig = {
    api:'https://domain-trang-khoa-hoc',
    apiVersion:'v1',
    other: 'other',
    //
    //
    //
    //
}

var execiseConfig = {
    ...defaultConfig,
    api:'https://domain-trang-bai-tap'
};

console.log(execiseConfig);

var array123 = ['Javascript', 'PHP', 'Ruby'];

function logger (... rest){
    for(var i = 0;i < rest.length;i++)
        console.log(rest[i]);
}

logger(...array123);