const menuList = [
  {
    title: '首页',
    key: '/home',
    path: '/home'
  },
  {
    title: 'UI',
    key: '/ui',
    children: [
      {
        title: '按钮',
        key: '/ui/buttons',
        path: '/home/ui/button'
      },
      {
        title: '弹框',
        key: '/ui/modals',
        path: '/home/ui/modal'
      },
      {
        title: 'Loading',
        key: '/ui/loadings',
        path: '/home/ui/loading'
      },
      {
        title: '通知提醒',
        key: '/ui/notification',
        path: '/home/ui/notice'
      },
      {
        title: '全局Message',
        key: '/ui/messages',
        path: '/home/ui/message'
      },
      {
        title: 'Tab页签',
        key: '/ui/tabs',
        path: '/home/ui/tab'
      },
      {
        title: '图片画廊',
        key: '/ui/gallery',
        path: '/home/ui/gallery'
      },
      {
        title: '轮播图',
        key: '/ui/carousel',
        path: '/home/ui/carousel'
      }
    ]
  },
  {
    title: '表单',
    key: '/form',
    children: [
      {
        title: '登录',
        key: '/form/login',
        path: '/home/form/login'
      },
      {
        title: '注册',
        key: '/form/reg',
        path: '/home/form/register'
      }
    ]
  },
  {
    title: '表格',
    key: '/table',
    children: [
      {
        title: '基础表格',
        key: '/table/basicTable',
        path: '/home/table/basicTable'
      },
      {
        title: '高级表格',
        key: '/table/highTable',
        path: '/home/table/hightable'
      }
    ]
  },
  {
    title: '富文本',
    key: '/rich',
    path: '/home/rich'
  },
  {
    title: '城市管理',
    key: '/city',
    path: '/home/city'
  },
  {
    title: '订单管理',
    key: '/order',
    path: '/home/order/detail'
  },
  {
    title: '员工管理',
    key: '/user',
    path: '/home/user'
  },
  {
    title: '车辆地图',
    key: '/bikeMap',
    path: '/home/bikeMap'
  },
  {
    title: '图表',
    key: '/charts',
    children: [
      {
        title: '柱形图',
        key: '/charts/bar',
        path: '/home/echarts/bar'
      },
      {
        title: '饼图',
        key: '/charts/pie',
        path: '/home/echarts/pie'
      },
      {
        title: '折线图',
        key: '/charts/line',
        path: '/home/echarts/line'
      }
    ]
  },
  {
    title: '权限设置',
    key: '/permission',
    path: '/home/permission'
  }
]
export default menuList
