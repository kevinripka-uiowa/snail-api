const fs = require('fs')
const csvtojson=require("csvtojson");

const csv = 'snails-master.csv'

const folder = './species/'
// const folders = []
//
// fs.readdirSync(folder).forEach(f => {
//   folders.push(f)
// })
//
// console.log(folders)

csvtojson()
.fromFile(csv)
.then((snails)=>{

    snails.forEach((d)=>{
      let dir = d.Species.replace(/ /g,'-')

      if (!fs.existsSync(folder + dir)){
          fs.mkdirSync(folder + dir);
      }

      fs.readdirSync(folder + dir).forEach((file,i) => {
        name = file.split('.')
        ext = name[name.length-1]
        fs.rename(folder + dir + "/" + file,folder + dir + "/" + i + '.' + ext, (error) => {
          if(error){console.log(error)}
        })
      })


    })



})
