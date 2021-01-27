import {User} from "../schema/user";

// 通过id查找
const getUserById = async function (id) { // 注意是async function 而不是function。对于需要等待promise结果的函数都需要async await。
  const userInfo = await User.findOne({ // 用await控制异步操作，将返回的Promise对象里的数据返回出来。也就实现了“同步”的写法获取异步IO操作的数据
    where: {
      id: id
    }
  })
  return userInfo // 返回数据
}

// 通过用户名查找
const getUserByName = async function (name) {
  const userInfo = await User.findOne({
    where: {
      user_name: name
    }
  })
  return userInfo
}

export default {
  getUserById, // 导出getUserById的方法，将会在controller里调用
  getUserByName
}
