# NME-server

> node+express+mysql project

## run

```bash
# install dependencies
npm install

# serve with hot reload at localhost:3000
npm start
```

## API

-   **/api/articleAll**        => GET
-   **/api/articleByName**     => POST
-   **/api/articleAdd**        => POST
-   **/api/articleUpdate/**    => POST
-   **/api/articleDelete**     => POST
-   **/api/login**             => POST

## demo

### /api/articleAll

> 查询所有的数据

![/api/articleAll](https://github.com/vxhly/NME-server/blob/master/public/images/articleAll-1.png)

### /api/articleByName

> 根据 name 值进行查询

![/api/articleByName](https://github.com/vxhly/NME-server/blob/master/public/images/articleByName-1.png)

> 当未能查询到

![/api/articleByName](https://github.com/vxhly/NME-server/blob/master/public/images/articleByName-2.png)

### /api/articleAdd

> 添加数据

![/api/articleByName](https://github.com/vxhly/NME-server/blob/master/public/images/articleAdd-1.png)

> 添加数据失败

![/api/articleByName](https://github.com/vxhly/NME-server/blob/master/public/images/articleAdd-2.png)

### /api/articleUpdate/

> 更新数据

![/api/articleByName](https://github.com/vxhly/NME-server/blob/master/public/images/articleUpdate-1.png)

### /api/articleDelete

> 根据 ID 进行删除数据

![/api/articleDelete](https://github.com/vxhly/NME-server/blob/master/public/images/articleDelete-1.png)

### /api/login

> 用户登录操作

![/api/login](https://github.com/vxhly/NME-server/blob/master/public/images/login-1.png)

> 无效的密码

![/api/login](https://github.com/vxhly/NME-server/blob/master/public/images/login-2.png)

> 无效的账号

![/api/login](https://github.com/vxhly/NME-server/blob/master/public/images/login-3.png)

## sql

```sql
--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- 表的结构 `article`
--

CREATE TABLE IF NOT EXISTS `article` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `author` varchar(10) NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `article`
--

INSERT INTO `article` (`id`, `name`, `author`) VALUES
(1, 'a', 'a');

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL,
  `email` varchar(20) NOT NULL,
  `passwd` varchar(20) NOT NULL,
  `ip` varchar(15) DEFAULT NULL,
  `date` int(15) DEFAULT NULL
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`id`, `email`, `passwd`, `ip`, `date`) VALUES
(1, '1@qq.com', '123', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `article`
--
ALTER TABLE `article`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `article`
--
ALTER TABLE `article`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
```
