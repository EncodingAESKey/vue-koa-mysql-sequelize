import KoaRouter from 'koa-router'
import UserController from './controller/user.js'
import BasicTableController from './controller/basicTable.js'
import CityTableController from './controller/cityTable.js'
import OrderTableController from './controller/orderTable.js'
import PersonnelController from './controller/personnelTable.js'
import jwt from 'koa-jwt'
const router = KoaRouter()
export default function (app) {
  router.post('/user/login/', UserController.login)
  router.post('/api/getBasictable', jwt({secret: 'vue-koa-demo'}), BasicTableController.getBasicTable)
  router.post('/api/deleteBasictable', jwt({secret: 'vue-koa-demo'}), BasicTableController.deleteBasicTable)
  router.post('/api/getCityTable', jwt({secret: 'vue-koa-demo'}), CityTableController.getCityTable)
  router.post('/api/searchCityTable', jwt({secret: 'vue-koa-demo'}), CityTableController.searchCityTable)
  router.post('/api/createCityTable', jwt({secret: 'vue-koa-demo'}), CityTableController.createCityTable)
  router.post('/api/getOrderTable', jwt({secret: 'vue-koa-demo'}), OrderTableController.getOrderTable)
  router.post('/api/searchOrderTable', jwt({secret: 'vue-koa-demo'}), OrderTableController.searchOrderTable)
  router.post('/api/updateOrderTable', jwt({secret: 'vue-koa-demo'}), OrderTableController.updateOrderTable)
  router.post('/api/searchByIdOrderTable', jwt({secret: 'vue-koa-demo'}), OrderTableController.searchByIdOrderTable)
  router.post('/api/getPersonnelTable', jwt({secret: 'vue-koa-demo'}), PersonnelController.getPersonnelTable)
  router.post('/api/createPersonnelTable', jwt({secret: 'vue-koa-demo'}), PersonnelController.createPersonnelTable)
  router.post('/api/updatePersonnelTable', jwt({secret: 'vue-koa-demo'}), PersonnelController.updatePersonnelTable)
  router.post('/api/deletePersonnelTable', jwt({secret: 'vue-koa-demo'}), PersonnelController.deletePersonnelTable)

  app.use(router.routes())
    .use(router.allowedMethods())
}
