// conf/connectDB.js
// 实现与mysql交互
const mysql = require('mysql');
const $conf = require('./db.js'); // 数据库的配置
const $util = require('./util.js'); // 数据库查询驱动

module.exports = {
  // 向前台返回 JSON 方法的简单封装
  jsonWrite: function(res, ret) {
    //res.send(ret);
    if (typeof ret === 'undefined') {
      res.json({
        code: '1',
        msg: '操作失败'
      });
    } else {
      res.json(ret);
    }
  },
  pool: mysql.createPool($util.extend({}, $conf.mysql)) // 连接数据库
};
