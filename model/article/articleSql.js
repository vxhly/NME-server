const article = {
  // 查
  articleByName: 'select * from `article` where `name` like ?',
  articleAll: 'select * from `article`',
  articleById: 'select * from `article` where `id` = ?',

  // 增
  articleAdd: 'insert into `article` (`id`, `name`, `author`) values(0, ?, ?)',

  // 改
  articleUpdate: 'update `article` set `name` = ?, `author` = ? where `id` = ?',

  // 删
  articleDelete: 'delete from `article` where `id` = ?'
}
module.exports = article;
