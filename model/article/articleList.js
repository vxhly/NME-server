// model/article/articleList.js
// 实现与 mysql 交互
const connectDB = require('../../conf/connectDB.js');
const pool = connectDB.pool;
const jsonWrite = connectDB.jsonWrite;

// 数据库语句
const $sql = require('./articleSql.js');

module.exports = {
  /* 查询所有数据 */
  articleAll: function(req, res, next) {
    pool.getConnection(function(err, connection) {
      connection.query(
        $sql.articleAll,
        function(err, result) {
          if (result.length == 0) {
            result = {
              code: 100,
              msg: '未能查询到数据'
            };
          }
          jsonWrite(res, result);
          connection.release();
        });
    });
  },
  /* 根据 name 查询数据 */
  articleByName: function(req, res, next) {
    const param = req.body || req.query || req.params; // post 提交的数据
    pool.getConnection(function(err, connection) {
      connection.query(
        $sql.articleByName, '%' + param.name + '%',
        function(err, result) {
          if (result.length == 0) {
            result = {
              code: 100,
              msg: '未能查询到数据'
            };
          }
          jsonWrite(res, result);
          connection.release();
        });
    });
  },
  /* 增加数据 */
  articleAdd: function(req, res, next) {
    const param = req.body || req.query || req.params; // post 提交的数据
    pool.getConnection(function(err, connection) {
      connection.query(
        $sql.articleAdd, [param.name, param.author],
        function(err, result) {
          if (result.length != 0 && param.name != '' && param.author != '') {
            result = {
              code: 200,
              msg: '增加成功'
            };
          } else {
            result = {
              code: 100,
              msg: '增加失败'
            };
          }
          jsonWrite(res, result);
          connection.release();
        });
    });
  },
  /* 根据 ID 修改数据 */
  articleUpdate: function(req, res, next) {
    const param = req.body || req.query || req.params; // post 提交的数据
    pool.getConnection(function(err, connection) {
      connection.query(
        $sql.articleUpdate, [param.name, param.author, param.id],
        function(err, result) {
          if (result.length != 0) {
            result = {
              code: 200,
              msg: '修改成功'
            };
          } else {
            result = {
              code: 100,
              msg: '修改失败'
            };
          }
          jsonWrite(res, result);
          connection.release();
        });
    });
  },
  /* 根据 ID 删除数据 */
  articleDelete: function(req, res, next) {
    const param = req.body || req.query || req.params; // post 提交的数据
    pool.getConnection(function(err, connection) {
      connection.query(
        $sql.articleDelete, param.id,
        function(err, result) {
          if (result.length != 0) {
            result = {
              code: 200,
              msg: '删除成功'
            };
          } else {
            result = {
              code: 100,
              msg: '删除失败'
            };
          }
          jsonWrite(res, result);
          connection.release();
        });
    });
  }
}
