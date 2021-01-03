const snailRoutes = require('./snails.js')
const keyRoutes = require('./key-routes.js')


const appRouter = (app,fs) => {

  app.get('/',(req,res) => {
    res.send('welcome to api server')
  })

snailRoutes(app,fs)

keyRoutes(app,fs)

}


module.exports = appRouter;
