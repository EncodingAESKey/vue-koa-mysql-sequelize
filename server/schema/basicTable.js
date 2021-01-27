
var Sequelize = require('sequelize');
const mysql = require('../config/db');

const basicTable = mysql.define('basicTable', {
    id: {
        type: Sequelize.INTEGER(11), // 字段类型
        allowNull: false, // 是否允许为NULL
        primaryKey: true, // 主键
        autoIncrement: true // 是否自增
    },
    userName: {
        type: Sequelize.CHAR(45), // 最大长度为50的字符串
        allowNull: false
    },
    sex: {
        type: Sequelize.INTEGER(11),
        allowNull: false
    },
    state: {
        type: Sequelize.INTEGER(11),
        allowNull: false
    },
    interest: {
        type: Sequelize.INTEGER(11),
        allowNull: false
    },
    isMarried: {
        type: Sequelize.INTEGER(11),
        allowNull: false
    },
    birthday: {
        type: Sequelize.CHAR(45),
        allowNull: false
    },
    address: {
        type: Sequelize.CHAR(128),
        allowNull: false
    },
    time: {
        type: Sequelize.CHAR(45),
        allowNull: false
    }
}, {
    tableName: 'basicTable' // 表名
})

basicTable.sync({ force: false });
export {
    basicTable
}