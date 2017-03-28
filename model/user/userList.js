// 实现与 mysql 交互
import connectDB from '../../conf/connectDB.js';
const pool = connectDB.pool;
const jsonWrite = connectDB.jsonWrite;

// 数据库语句
import $sql from './userSql.js';

// 获取登录 IP
let getClientIp = (req) => {
  return req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;
}

module.exports = {
  userByEamil: (req, res, next) => {
    const param = req.body || req.query || req.params; // post 提交的数据
    pool.getConnection((err, connection) => {
      connection.query(
        $sql.loginByEmail, param.email,
        (err, result) => {
          if (result.length == 1) {
            connection.query(
              $sql.loginByPasswd, [param.email, param.passwd],
              (err, result) => {
                if (result.length == 1) {
                  const IP = getClientIp(req);
                  if (IP.lastIndexOf(':') != '-1') {
                    const ip = IP.substr(IP.lastIndexOf(':') + 1); // 获取登录 IP
                    const date = new Date().getTime(); // 获取时间戳
                    connection.query(
                      $sql.loginUpdate, [ip, date, param.email],
                      (err, result) => {
                        if (result) {
                          result = {
                            code: 200,
                            msg: '登录成功',
                            ip: ip,
                            date: date
                          };
                        }
                        jsonWrite(res, result);
                      });
                  } else {
                    const ip = getClientIp(req); // 获取登录 IP
                    const date = new Date().getTime(); // 获取时间戳
                    result = {
                      code: 100,
                      msg: '登录失败',
                      ip: ip,
                      dete: date
                    };
                  }
                } else {
                  result = {
                    code: 100,
                    msg: '无效的密码'
                  };
                  jsonWrite(res, result);
                }
              });
          } else {
            result = {
              code: 100,
              msg: '无效的账号'
            };
            jsonWrite(res, result);
          }
          connection.release();
        });
    });
  }
};
