var Sequelize = require('sequelize');
const mysql = require('../config/db');

const personnelTable = mysql.define('personnelTable', {
    id: {
        type: Sequelize.INTEGER(11), // 字段类型
        allowNull: false, // 是否允许为NULL
        primaryKey: true, // 主键
        autoIncrement: true // 是否自增
    },
    username: {
        type: Sequelize.CHAR(45), // 最大长度为50的字符串
        allowNull: false
    },
    sex: {
        type: Sequelize.CHAR(45),
        allowNull: false
    },
    state: {
        type: Sequelize.CHAR(45),
        allowNull: false
    },
    interest: {
        type: Sequelize.CHAR(45)
    },
    isMarried: {
        type: Sequelize.CHAR(45)
    },
    birthday: {
        type: Sequelize.DATE(),
        allowNull: false
    },
    address: {
        type: Sequelize.CHAR(128),
        allowNull: false
    },
    time: {
        type: Sequelize.CHAR(45)
    }
}, {
    tableName: 'personnelTable' // 表名
})
personnelTable.sync({ force: false });
export {
    personnelTable
}