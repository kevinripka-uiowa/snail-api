const snails = require('../data/snails.js')
const routes = require('../data/routes.js')
const keyroutes = require('../data/key.js')
const famroutes = require('../data/family-routes.js')
const famkey = require('../data/taxonomickey.js')

const snailRoutes = (app,fs) => {



  app.get('/snail',(req,res)=> {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET");
    res.header("Cache-Control","no-cache, no-store, must-revalidate, proxy-revalidate")
    res.header("Pragma","no-cache")
    res.header("Expires","-1")
    res.header("Surrogate-Control","no-store")



      // ?snail=species-name
      if (req.query.snail) {
        if (snails[req.query.snail]) {
            let snail_info = {}

            /// *********** get basic info ************
            snail_info.info = snails[req.query.snail]

            /// *********** get species key info ************
            if (keyroutes[snail_info.info.f_key]) {
              let snail = req.query.snail.charAt(0).toUpperCase() +  req.query.snail.slice(1).replace('-',' ')

              let speciesroutes = routes.filter((d)=>{
                return d.s === snail
              })

              if (speciesroutes.length > 0) {

                let f_obj = keyroutes[snail_info.info.f_key]
                snail_info.routes = []

                speciesroutes.forEach(function(arr){
                  let items = []

                  arr.route.forEach(function(a){
                    let obj = {}
                    obj.item = f_obj[a.t][a.c]
                    if (f_obj[a.t].img) {
                      obj.img = f_obj[a.t].img
                    }
                    if (f_obj[a.t].img2) {
                      obj.img2 = f_obj[a.t].img2
                    }
                    items.push(obj)
                  })
                  snail_info.routes.push(items)

                }) // for each

              } // if there are routes

            } // if family in key


            /// *********** get family info ************
            let fam = snail_info.info.f_key;



            let froutes = famroutes.filter((d)=>{
              return d.k.toLowerCase() === fam
            })

            // snail_info.froutes = froutes

            // console.log(froutes)

            if (snail_info.info.f_key == 'vertigo' || snail_info.info.f_key == 'gastrocopta' || snail_info.info.f_key == 'pupoides' || snail_info.info.f_key == 'pupilla' || snail_info.info.f_key == 'columella') {
              fam = 'pupillidae'
            } else {
              fam = 'family'
            }
              // console.log(fam)



            if (froutes.length > 0) {

              let f_obj = famkey[fam]
              snail_info.famkey = []

              console.log(froutes)


              froutes.forEach(function(arr){
                let items = []

                arr.route.forEach(function(a){
                  console.log(f_obj[a.t][a.c])
                  let obj = {}
                  obj.item = f_obj[a.t][a.c]
                  if (f_obj[a.t].img) {
                    obj.img = f_obj[a.t].img
                  }
                  items.push(obj)
                })
                snail_info.famkey.push(items)

              }) // for each

            } // if there are routes



          res.send(snail_info)
        } else {
          res.send({"error":"not found"})
        }
      } else {
        res.send({"error":"You need to provide a snail species (?snail=genus-species). All lowercase, convert spaces to hyphens"})
      }


    }) // get

}


module.exports = snailRoutes
