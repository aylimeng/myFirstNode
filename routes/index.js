/**
 * 路由层
 */
const IndexController = require('../controller/index') 

module.exports = function(app){
  app.get('/',IndexController.index);
  app.get('/user',IndexController.name);
}