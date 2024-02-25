// Modules: tư tưởng, khi bóc tách ra xử lý 1 nghiệp vụ cụ thể ra 1 nơi riêng, có thể gọi nó là module. Thường tách ra những file và tập hợp những file
//Modules: Import / Export

import logger,{
    TYPE_LOG,
    TYPE_WARN,
    TYPE_ERROR
} from './logger.js';

// console.log( logger);
logger('Test message...', TYPE_ERROR);