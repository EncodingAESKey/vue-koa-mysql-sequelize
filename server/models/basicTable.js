import {basicTable} from "../schema/basicTable";
const getBasicTable = async function (params) {
  const result = await basicTable.findAndCountAll({
    offset: (params.page - 1) * params.pageSize,
    limit: params.pageSize
  }) // 查找全部的basicTable数据
  return result // 返回数据
}

const deleteBasicTable = async function (params) {
  const result = await basicTable.destroy({
    where: {
      id: params.id
    }
  }) // 查找全部的basicTable数据
  return result // 返回数据
}

export default {
  getBasicTable, // 导出getbasicTable的方法，将会在controller里调用
  deleteBasicTable
}
