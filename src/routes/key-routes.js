const burch = require('../data/key.js')

const keyRoutes = (app,fs) => {
  const dataPath = './src/data/routes.json'

  app.get('/routes',(req,res)=> {

    fs.readFile(dataPath, 'utf8', (err, data)=> {
      if (err) {
        throw err
      }

      data = JSON.parse(data)

      // query ?snail=species-name&f_key=family

      if (req.query.snail && req.query.f_key) {
        let snail = req.query.snail.charAt(0).toUpperCase() +  req.query.snail.slice(1).replace('-',' ')

        console.log(snail)
        let routes = data.filter((d)=>{
          return d.s === snail
        })

        let f_obj = burch[req.query.f_key]

        console.log(routes)


        let ids = []


        routes.forEach(function(arr){
          let items = []

          arr.route.forEach(function(a){
            let obj = {}
            obj.item = f_obj[a.t][a.c]
            if (f_obj[a.t].img) {
              obj.img = f_obj[a.t].img
            }
            items.push(obj)
          })
          ids.push(items)

        }) // for each



        res.send(ids)
      } else {
        res.send(data)
      }


    })

  })

}

module.exports = keyRoutes
