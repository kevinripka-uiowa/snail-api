const fs = require('fs')
const moveFile = require('move-file')
const source = './myphotos/'

const target = './species/'

fs.readdirSync(source).forEach(file => {
  let fixed = decodeURIComponent(file).replace(/ /g,'-').replace(/_/g,'-')
  fixed = fixed.charAt(0).toUpperCase() + fixed.slice(1)
  fs.renameSync(source + file, source + fixed)
})

const images = []
fs.readdirSync(source).forEach(file => {
  images.push(file)
})

const folders = []
fs.readdirSync(target).forEach(folder => {

  images.forEach(d=>{
    if (d.includes(folder)) {
      moveFile(source + d, target + folder + '/' + d)
    }
  })

})
