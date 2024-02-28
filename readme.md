'# React.Execercise.F8' 
# SPA - Single-Page Application
- ReactJS là 1 trong những thư viện tạo ra SPA
- Các "ông lớn" sử dụng SPA: Google, Facebook, Twitter
- Các SPA khác: F8, Shoppe, 30Shine, chotot, zingmp3

## Cách triển khai
- SPA - Single-Page Application -> CSR -> Client side rendering
- MPA - Multi-Page Application -> SSR -> Server side rendering

---

## Sự khác biệt

### SPA
- Được cho là cách tiếp cận hiện đại hơn
- Không yêu cầu tải lại trang trong quá trình sử dụng

### MPA
- Là cách tiếp cận cổ điển hơn
- Tải lại trang trong quá trình sử dụng (Click vào đường link,chuyển sang,... )

### Demo
 - SPA : do JavaScript hoàn toàn xử lý
 - render : nôm na là hiển thị nội dung trên trình duyệt
---
 - MPA : do back-end xử lý, nên reload lại trang mỗi lần chuyển trang

## So sánh

### Tốc độ
- SPA nhanh hơn khi sử dụng
    - Phần lớn tài nguyên được tải trong lần đầu
    - Trang chỉ tải thêm dữ liệu mới khi cần
- MPA chậm hơn khi sử dụng
    - Luôn tải lại toàn bộ trang khi truy cập và chuyển hướng

### Bóc tách
- SPA có phần Front-end riêng biệt
- MPA Front-end & Back-end phụ thuộc nhau nhiều hơn, được đặt trong

### SEO
- SPA không thân thiện với SEO như MPA
- Trải ghiệm trên thiết bị di động tốt hơn

### UX
- SPA cho trải nghiệm tốt hơn, nhất là các thao tác chuyển trang
- Trải nghiệm trên thiết bị di động tốt hơn

### Quá trình phát triển
- SPA dễ dàng tái sử dụng code (component)
- SPA bóc tách FE và BE
    - Chia team phát triển song song
    - Phát triển thêm mobile app dễ dàng

### Phụ thuộc Javascript
- SPA phụ thuộc hoàn toàn vào Javascript 
- MPA có thể không cần Javascript

---

### Chọn SPA hay MPA ?
- Không có thử gì luôn hoàn hảo trong mọi trường hợp

 - Trang bán hàng đơn giản, tương lai ko có ý định phát triển to lớn, ko mở thêm moblie app, đảm bảo phát triển nhanh => MPA, ko mất công viết APi, Không mất công bóc tách, deploy nhanh, dể dang hơn
 . Chi Phí phát triển thấp hơn, client-serve side, render dữ liệu từ server

 - Khách hàng quan tâm trải nghiệm người dùng, muốn dùng thêm moblie app, muốn phát triển thêm feature, có nhiều chức năng trong tương lai, có trải nghiệm người dùng tốt thì sẽ làm dưới dạng SPA.
 . Chi phí phát triển cao hơn

 ### Performance
 - Ứng dụng rất nhiều người truy cập thì SPA giảm tải lượt truy cập server. Vì render dữ liệu đẩy về client làm, trình duyệt tự đọc script, tự render giao diện

 - MPA khi nhiều người sử dụng thì tất cả các request đổ lên phía serve, thao tác chuyển trang phải request lên serve 1 cái, nên tăng tải cho serve, tốn chi phí nhiều hơn về máy chủ, bỏ ra nhiều tiền hơn về hạ tầng

Arrow Function 
/// 1. Let, const --> OK
/// 2. Template Literals ---> OK
/// 3. Multi-line Stirng --> OK
/// 4. Arrow Function
/// 6. Classes
/// 6. Default parameter values
/// 7. Dstructuring
/// 8. Rest parameter
/// 9. Spread
/// 10. Enhanced object literals
/// 11. Tagged template literal
/// 12. Modules

3. Arrow function
    1. Declaration function
    function showMessage(){

    }
    2. Expression function
    var showMessage2() = function testName(){
    };

    setTimeout(function testName() {});

     var myObject = {
     myFunction : function testName(){
        
        }
    }

    3. Arrow funciton : Hàm mũi tên
    const logger = (log) =>  {
        console.log(log);
    }

    logger('Message...');

    const sum = (a,b) > ({a: a,b: b});


    console.log(sum(2,2));
    
    const logger = log => console.log(log);

    logger('Message...');

    const course = {
        name: 'Javascript basic!',
        getName: function() {
            return this;    context
        }
    };

     console.log(course.getName());

    const Course = function (name, price)  {
        this.name = name;
        this.price = price;
    }

    const jsCourse = new Course('Javascript', 1000000);

    console.log(jsCourse);
    // arrow function không thể làm function contract được

10. Enhanced Object literals

// 1. Định nghĩa key; value cho object 
// 2. Định nghĩa method cho objcet
// 3. Định nghĩa key cho object dưới dạng biến

var name = 'Javascript';
 var price = 1000;

    //Kieu cu
    var course = {
        name: name,
        price: price
    };

    1. Định nghĩa Key: value cho object
        var course = {
        name,
        price, 
    };

    2. Định nghĩa method cho object
        var course = {
        name,
        price, 
            getName() { 
            return name;
        }
    };

    console.log(course.getName());

    3. Định nghĩa key cho object dưới dạng biến
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

    Output: { name: 'Son Dang', age: 21, address: 'Ha Noi' }

8.Destructuring, Rest
    1. Destructuring
    // Cach bth
     var array = ['Javascript', 'PHP','Ruby'];

       var a = array[0];
       var b = array[1];
       var c = array[2];

    console.log(a,b,c); // Javascript, PHP,Ruby

    // Destructuring
    var array = ['Javascript', 'PHP','Ruby'];

    var [a,b,c] = array;

    console.log(a,b,c); // Javascript, PHP,Ruby

    var [a, ,c] = array;
    console.log(a,c); // Javascript,Ruby

    2. Rest
    var array = ['Javascript', 'PHP','Ruby'];
    var [a] = array;
    console.log(a); // Javascript

    Muốn lấy ra những phần tử còn lại trong mảng array ta sử dụng toán tử rest

    var [a, ... rest] = array;
    console.log(a);//Javascript
    console.log(rest);//["PHP", "Ruby"]

    var [a,b, ... rest] = array;
    console.log(a);//Javascript
    console.log(rest);//[ "Ruby"]

    var course = {
    name: 'Javascript',
    price: 1000,
    image:'image-address',
    children: {
        name:'ReactJs'
    },
    description:'description value'
    };

    var {name, price} = course;
    console.log(name,price); // Javascript 1000

    Muốn lấy ra những phần tử còn lại trong mảng array ta sử dụng toán tử rest

    var {name, ... rest} = course;
    console.log(name);// Javascript
    console.log(rest);// {price: 1000, image: "image-address","ReactJS"}

    var {name, ... newObj} = course;
    console.log(newObj); //{price: 1000, image: "image-address",}   

    var {name, children} = course;
    console.log(children); //{name: "ReactJS"}

    var {name: parentName, children: {name: children}} = course;
    console.log(parentName);// Javascript
    console.log(children);//    ReactJS

    // Ở đây đặt giá trị mặc định cho description , khi không có. Còn khi có nó in ra giá trị của description
    var {name, description = 'Default description'} = course;
    console.log(description);

    // Toán tử Rest ở function
    function logger (...params) {
        console.log(params);//thánh array [1,2,3,4,5,1,23,5,6,7]
        console.log(agruments);// Gần giống đối tượng agruments, trả lại kiểu đối tượng giống như mảng
    }
    // Truyền vào logger 
    console.log(logger(1,2,3,4,5,1,23,5,6,7));


    //Destructuring
    // Rest thật ra là lấy những con số còn lại
    function logger ({name, price,...rest}){
        console.log(name);// Javascript
        console.log(price);// 1000
        console.log(rest);// {description: "description content"}
    }

    logger({
    name: "Javascript",
    price: 1000,
    description: 'description content'
    });

    function logger ([a,b,...rest]){
    console.log(a);//2
    console.log(b);//6
    console.log(rest);//{4,7,123,2,5,6,1,25,1}
    }

    logger([2, 6,4,7,123,2,5,6,1,25,1]);

10. Spread (...)
    // Bỏ đi dấu ngoặc đằng trước và sau array hoặc object

    var array1 = ['Javascript', 'ruby','PHP'];
    var array2 = ['ReactJS', 'Dart'];
    var array3 = [...array2,...array1]; // ["ReactJS", "Dart","Javascript", "ruby","PHP"]

    console.log(array3);// ["ReactJS", "Dart","Javascript", "ruby","PHP"]

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

    console.log(object3);//{ name: "Javascript",price: 1000 }


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
    //Javascript
    //PHP
    //Ruby
12. Modules
    Modules: tư tưởng, khi bóc tách ra xử lý 1 nghiệp vụ cụ thể ra 1 nơi riêng, có thể gọi nó là module. Thường tách ra những file và tập hợp những file
    Modules: Import / Export

    <body>
    <script type="module" src="myscripts.js"></script>
    </body>

    import logger from './logger/index.js';
    // dang import cái module dang export default  
    // Nạp logger từ ./logger/index.js 

    // Ở tại vị trí file logger
    import { TYPE_LOG} from '../constants.js';

    function logger (log, type = TYPE_LOG){
        console[type](log);
    }

    export default logger;
    // XUất ra mặc định 


    Thứ tự sẽ là 1. Tạo thành công constants.js (module này chỉ xuất ra các type)
        2. import type of từ constants.js
        3.  



    import {
        TYPE_LOG,
        TYPE_WARN,
        TYPE_ERROR
    } from './constants.js';
    // đang import cái module đang export 

    // import constants from './constants.js';
    // Sai vì module constants không export default

    import * as constants from './constants.js';

    console.log(constants);

    // console.log( logger);
    logger('Test message...', TYPE_LOG);

    <!--
        1. React.createElement() -> React element
        2. so sánh với document.createElement() -> DOM element
        3. Thay đổi: id, className, style,...
        4. Thêm: text, HTML
        5. Tạo:
            <h1 title="Hello" class="heading">Hello guy!</h1>
        6. Tạo:
            <ul>
                <li>Javascript</li>
                <li>ReactJS</li>
            </ul>
        7. Tạo:
            <div class="post-item">
                <h2 title="Học React tại F8">Học ReactJS</h2>
                <p>Học ReactJS tự cơ bản tới nâng cao</p>
            </div>
    -->
