// routes/index.js
// 引入 express
import express from 'express';
const router = express.Router();

// 文章操作
import articleList from '../model/article/articleList.js';

// 用户操作
import userList from '../model/user/userList.js';

// post 操作
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Express'
  });
});

/* GET articleAll. */
router.get('/api/articleAll', (req, res, next) => {
  articleList.articleAll(req, res, next);
});

/* POST articleByName. */
router.post('/api/articleByName', multipartMiddleware, (req, res, next) => {
  articleList.articleByName(req, res, next);
});

/* POST articleAdd. */
router.post('/api/articleAdd', multipartMiddleware, (req, res, next) => {
  articleList.articleAdd(req, res, next);
});

/* POST articleUpdate */
router.post('/api/articleUpdate', multipartMiddleware, (req, res, next) => {
  articleList.articleUpdate(req, res, next);
});

/* POST articleDelete */
router.post('/api/articleDelete', multipartMiddleware, (req, res, next) => {
  articleList.articleDelete(req, res, next);
});


/* POST login. */
router.post('/api/login', multipartMiddleware, (req, res, next) => {
  userList.userByEamil(req, res, next);
});

module.exports = router;
