var Sequelize = require('sequelize');

/**
 * 使用的数据库：mysql
 * 数据库名：root
 * 数据库密码：123456
 * 数据库端口号：3306
 * 链接的数据库名：mysql
 * 修改数据库密码：
 */

const url = 'mysql://root:123456@localhost:3306/mysql';
const mysql = new Sequelize(url, {
    // 选项设置
    define: {
        timestamps: false
    },
    // 连接池设置
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    // 是否开启操作符别名
    operatorsAliases: false
})

// 查看数据库是否链接成功
mysql.authenticate().then(() => {
	console.log("Connection has been established successfully");
}).catch(() => {
	console.log('unable to connect to the database');
});

module.exports = mysql;
