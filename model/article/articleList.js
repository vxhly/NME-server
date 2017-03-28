// model/article/articleList.js
// 实现与 mysql 交互
import connectDB from '../../conf/connectDB.js';
const pool = connectDB.pool;
const jsonWrite = connectDB.jsonWrite;

// 数据库语句
import $sql from './articleSql.js';

module.exports = {
  /* 查询所有数据 */
  articleAll: (req, res, next) => {
    pool.getConnection((err, connection) => {
      connection.query(
        $sql.articleAll,
        (err, result) => {
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
  articleByName: (req, res, next) => {
    const param = req.body || req.query || req.params; // post 提交的数据
    pool.getConnection((err, connection) => {
      connection.query(
        $sql.articleByName, '%' + param.name + '%',
        (err, result) => {
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
  articleAdd: (req, res, next) => {
    const param = req.body || req.query || req.params; // post 提交的数据
    pool.getConnection((err, connection) => {
      connection.query(
        $sql.articleAdd, [param.name, param.author],
        (err, result) => {
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
  articleUpdate: (req, res, next) => {
    const param = req.body || req.query || req.params; // post 提交的数据
    pool.getConnection((err, connection) => {
      connection.query(
        $sql.articleById, param.id,
        (err, result) => {
          if (result.length == 1 && param.author != '' && param.name != '') {
            //console.log(result);
            connection.query(
              $sql.articleUpdate, [param.name, param.author, param.id],
              (err, result) => {
                if (result) {
                  result = {
                    code: 200,
                    msg: '更新数据成功'
                  };
                } else {
                  result = {
                    code: 200,
                    msg: '更新数据失败'
                  };
                }
                jsonWrite(res, result);
              });
          } else {
            result = {
              code: 100,
              msg: '无效的数据'
            };
            jsonWrite(res, result);
          }
          connection.release();
        });
    });
  },
  /* 根据 ID 删除数据 */
  articleDelete: (req, res, next) => {
    const param = req.body || req.query || req.params; // post 提交的数据
    pool.getConnection((err, connection) => {
      connection.query(
        $sql.articleDelete, param.id,
        (err, result) => {
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
