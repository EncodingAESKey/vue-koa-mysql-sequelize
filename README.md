# vue-koa-mysql-sequelize

> 一个基于vue、nodejs(koa2)、mysql、sequelize、 antd的后台管理系统

## 安装

`git clone https://github.com/EncodingAESKey/vue-koa-mysql-sequelize.git`
`git clone git@github.com:EncodingAESKey/vue-koa-mysql-sequelize.git`

`cd vue-antd-management`

`npm install`

- 需要安装`mysql`，创建一个名为`management`的数据库，同时新建5张表，表的名字和server/schema里面的5个js文件同名，字段保持一致；
- 更改`server/config/db.js`里面的数据库信息，把`mysql://root:XXXX@localhost/xxx`里面的`XXXX`换成自己的数据库密码；
- 启动 mysql服务

## 运行

`npm run dev`     //打包前端代码
`node index.js`   //启动koa服务器

打开浏览器地址： `localhost:8080`


