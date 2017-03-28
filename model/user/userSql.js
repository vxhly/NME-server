const user = {
  // 查
  loginByEmail: 'select * from `user` where `email` = ?',
  loginByPasswd: 'select * from `user` where `email` = ? and `passwd` = ?',

  // 改
  loginUpdate: 'update `user` set `ip` = ?, `date` = ? where `email` = ?'
}
module.exports = user;
