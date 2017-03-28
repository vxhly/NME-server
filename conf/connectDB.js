// conf/connectDB.js
// 实现与mysql交互
import mysql from 'mysql';
import $conf from './db.js'; // 数据库的配置
import $util from './util.js'; // 数据库查询驱动

module.exports = {
  // 向前台返回 JSON 方法的简单封装
  jsonWrite: (res, ret) => {
    //res.send(ret);
    if (typeof ret === 'undefined') {
      res.json({
        code: '1',
        msg: '操作失败'
      });
    } else {
      res.status(200).json(ret);
    }
  },
  pool: mysql.createPool($util.extend({}, $conf.mysql)) // 连接数据库
};
