
var Sequelize = require('sequelize');
const mysql = require('../config/db');
const cityTable = mysql.define('cityTable', {
    id: {
        type: Sequelize.INTEGER(11), // 字段类型
        allowNull: false, // 是否允许为NULL
        primaryKey: true, // 主键
        autoIncrement: true // 是否自增
    },
    name: {
        type: Sequelize.CHAR(45), // 最大长度为50的字符串
        allowNull: false
    },
    mode: {
        type: Sequelize.CHAR(45),
        allowNull: false
    },
    op_mode: {
        type: Sequelize.CHAR(45),
        allowNull: false
    },
    franchisee_name: {
        type: Sequelize.CHAR(45),
        allowNull: false
    },
    city_admins: {
        type: Sequelize.CHAR(45),
        allowNull: false
    },
    open_time: {
        type: Sequelize.CHAR(45),
        allowNull: false
    },
    update_time: {
        type: Sequelize.CHAR(45),
        allowNull: false
    },
    sys_user_name: {
        type: Sequelize.CHAR(45),
        allowNull: false
    },
    status: {
        type: Sequelize.CHAR(45),
        allowNull: false
    }
}, {
    tableName: 'cityTable' // 表名
})

cityTable.sync({ force: false });
export {
    cityTable
}