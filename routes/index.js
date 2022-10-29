const versionsRouter = require('./versions.router')
const mechanicalRouter = require('./mechanical.router')

function routerApi(app){
  app.use('/mechanical', mechanicalRouter)
  app.use('/versions', versionsRouter)

}

module.exports = routerApi
