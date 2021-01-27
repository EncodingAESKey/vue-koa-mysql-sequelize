import User from '../models/user.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

const login = async function (ctx, next) {
    const data = ctx.request.body
    const userInfo = await User.getUserByName(data.user_name);
    bcrypt.compareSync(data.password, userInfo.dataValues.password)
    if (userInfo != null) { // 如果查无此用户会返回null
        if (data.password === userInfo.dataValues.password) {
            const userToken = {
                name: userInfo.user_name,
                id: userInfo.id
            }
            const secret = 'vue-koa-demo' // 指定密钥，这是之后用来判断token合法性的标志
            const token = jwt.sign(userToken, secret)// 签发token
            ctx.response.body = {
                success: true,
                token: token // 返回token
            }
        } else {
            ctx.response.body = {
                success: false, // success标志位是方便前端判断返回是正确与否
                info: '密码错误！'
            }
        }
    } else {
        ctx.response.body = {
            success: false,
            info: '用户不存在！' // 如果用户不存在返回用户不存在
        }
    }
  // ctx.response.body = userInfo
}

export default {
  login
}
