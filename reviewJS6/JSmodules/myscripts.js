// Modules: tư tưởng, khi bóc tách ra xử lý 1 nghiệp vụ cụ thể ra 1 nơi riêng, có thể gọi nó là module. Thường tách ra những file và tập hợp những file
//Modules: Import / Export

import logger from './logger/index.js';
// dang import cái module dang export default



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