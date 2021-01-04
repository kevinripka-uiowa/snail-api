const fs = require('fs')
const csvtojson=require("csvtojson");
const burch = require('./burch2.js')

const csv = 'snails-master.csv'
const folder= './key/';

const photos = []

fs.readdirSync(folder).forEach(file => {
  photos.push(file)
})

Array.prototype.contains = function(v) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] === v) return true;
  }
  return false;
};

Array.prototype.unique = function() {
  var arr = [];
  for (var i = 0; i < this.length; i++) {
    if (!arr.contains(this[i])) {
      arr.push(this[i]);
    }
  }
  return arr;
}

burch_snails = []
for (let f in burch) {
  if (f !== 'pupillidae') {
  for (let t in burch[f]) {
    for (let c in burch[f][t]) {
      if (burch[f][t][c].s) {
        burch_snails.push(burch[f][t][c].s)
      }
    }
  }
  }
}

burch_snails = burch_snails.unique()



const final = {}

csvtojson()
.fromFile(csv)
.then((jsonObj)=>{

    jsonObj.forEach(function(d){
      let snail = d.Species.charAt(0).toLowerCase() +  d.Species.slice(1).replace(/ /g,'-')
      final[snail] = {}
      final[snail].species = d.Species
      final[snail].common = d.Common
      final[snail].family = d.Family
      final[snail].author = d.Author
      final[snail].status = d.Status
      final[snail].states = d.States.split(',').sort()
      final[snail].native = d.native

      // get f_key for snails in the key
      if (d.Family === 'Discidae' || d.Family === 'Helicodiscidae' || d.Family === 'Punctidae') {
        final[snail].f_key = 'endodontidae'
      } else if (d.Family === 'Vitrinidae') {
        final[snail].f_key = 'zonitidae'
      } else if (d.Species.includes('Vertigo')) {
        final[snail].f_key = 'vertigo'
      } else if (d.Species.includes('Gastrocopta')) {
        final[snail].f_key = 'gastrocopta'
      } else if (d.Species.includes('Columella')) {
        final[snail].f_key = 'columella'
      } else if (d.Species.includes('Pupilla')) {
        final[snail].f_key = 'pupilla'
      } else if (d.Species.includes('Pupoides')) {
        final[snail].f_key = 'pupoides'
      } else if (d.Species === 'Helicodiscus saludensis' || d.Species === 'Helicodiscus aldrichianus') {
        final[snail].f_key = 'zonitidae'
      } else if (d.Species.includes('Guppya')) {
        final[snail].f_key = 'zonitidae'
      } else {
        final[snail].f_key = d.Family.toLowerCase()
      }

      // key photos
      final[snail].key_img = photos.filter((d)=> {
        return d.includes(final[snail].species.replace(/ /g,'-'))
      })

      // if the snail is in the key
      if (burch_snails.indexOf(final[snail].species)>=0){
        final[snail].in_key = true
      } else {
        final[snail].in_key = false
      }

      // if in iowa
      if (final[snail].states.indexOf('IA')>=0){
        final[snail].ia = true
      } else {
        final[snail].ia = false
      }
      final[snail].bordering = final[snail].states.includes('MO') || final[snail].states.includes('IL') || final[snail].states.includes('WI') || final[snail].states.includes('MN')

      // find images
      final[snail].images = []

      fs.readdirSync('./species/' + snail).forEach(d=>{
        final[snail].images.push(d)
      })

      if(d.notes.length > 3) {
        final[snail].notes = d.notes
      }




    }) // jsonObj.foreach

    fs.writeFile('snails.js',JSON.stringify(final),(err)=>{
      if (err) {console.log(err)}
    })


    // compare what snails are not in the list but in the key
    burch_snails.forEach(d=>{
      let found = false
      for (let s in final) {
        if (final[s].species === d){
          found = true
          break
        }
      }
      if (!found){console.log(d)}

    })



}) //.then
