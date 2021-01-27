import {personnelTable} from "../schema/personnelTable";

const getPersonnelTable = async function (params) {
  const result = await personnelTable.findAndCountAll({
    offset: (params.page - 1) * params.pageSize,
    limit: params.pageSize
  }) // 查找全部的basicTable数据
  return result // 返回数据
}

// 新建数据
const createPersonnelTable = async function (params) {
  const result = await personnelTable.create({
    username: params.username,
    sex: params.sex,
    state: params.state,
    birthday: params.birthday,
    address: params.address
  })
  return result
}
// 更新数据
const updatePersonnelTable = async function (params) {
  const result = await personnelTable.update(
    {
      username: params.username,
      sex: params.sex,
      state: params.state,
      birthday: params.birthday,
      address: params.address
    },
    {
      where: {
        id: params.id
      }
    }
  )
  return result // 返回数据
}

const deletePersonnelTable = async function (params) {
  const result = await personnelTable.destroy({
    where: {
      id: params.id
    }
  })
  return result // 返回数据
}

export default {
  getPersonnelTable, // 导出getPersonnelTable的方法，将会在controller里调用
  deletePersonnelTable,
  createPersonnelTable,
  updatePersonnelTable
}
