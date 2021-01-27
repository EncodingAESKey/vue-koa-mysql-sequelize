
var Sequelize = require('sequelize');
const mysql = require('../config/db');

const orderTable = mysql.define('orderTable', {
    id: {
        type: Sequelize.INTEGER(11), // 字段类型
        allowNull: false, // 是否允许为NULL
        primaryKey: true, // 主键
        autoIncrement: true // 是否自增
    },
    city: {
        type: Sequelize.CHAR(45), // 最大长度为45的字符串
        allowNull: false
    },
    order_sn: {
        type: Sequelize.CHAR(45), // 最大长度为45的字符串
        allowNull: false
    },
    bike_sn: {
        type: Sequelize.CHAR(45), // 最大长度为45的字符串
        allowNull: false
    },
    user_name: {
        type: Sequelize.CHAR(45),
        allowNull: false
    },
    mobile: {
        type: Sequelize.CHAR(45),
        allowNull: false
    },
    distance: {
        type: Sequelize.INTEGER(11),
        allowNull: false
    },
    total_time: {
        type: Sequelize.CHAR(45),
        allowNull: false
    },
    status: {
        type: Sequelize.CHAR(45),
        allowNull: false
    },
    start_time: {
        type: Sequelize.DATE(),
        allowNull: false
    },
    end_time: {
        type: Sequelize.CHAR(45),
        allowNull: false
    },
    total_fee: {
        type: Sequelize.CHAR(45),
        allowNull: false
    }
}, {
    tableName: 'orderTable' // 表名
})
orderTable.sync({ force: false });
export {
    orderTable
}