var Sequelize = require('sequelize');
const mysql = require('../config/db');

const User = mysql.define('userInfo', {
  id: {
    type: Sequelize.INTEGER(11), // 字段类型
    allowNull: false, // 是否允许为NULL
    primaryKey: true, // 主键
    autoIncrement: true // 是否自增
  },
  user_name: {
    type: Sequelize.CHAR(50), // 最大长度为50的字符串
    allowNull: false
  },
  password: {
    type: Sequelize.CHAR(32),
    allowNull: false
  }
}, {
  tableName: 'userInfo' // 表名
});

User.sync({ force: false });
export {
  User
}