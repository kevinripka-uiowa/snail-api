const fs = require('fs')
const burch = require('./taxonomickey.js')

const snails = []

for (let f in burch) {

  for (let t in burch[f]) {
    for (let c in burch[f][t]) {
      // family

      if (f === 'family') {
        if (burch[f][t][c].f) {
          let obj = {}
          obj.k = burch[f][t][c].f
          obj.t = t
          obj.c = c
          obj.f = f
          snails.push(obj)
        }
      }

      if (f === 'pupillidae') {
       if (burch[f][t][c].g) {
          let obj = {}
          obj.k = burch[f][t][c].g
          obj.t = t
          obj.c = c
          obj.f = f
          snails.push(obj)
        }
      }

    }
  }

}

// console.log(snails)




snails.forEach(function(s){

  let prev = burch[s.f][s.t].prev
  let current = s.t
  let route = []


  let obj = {}
  obj.t = s.t
  obj.c = s.c

  route.push(obj)

  if (prev) {
    for (let o in burch[s.f][prev]) {
      if (burch[s.f][prev][o].next === current) {
        route.push({t: prev, c: o})
      }

    }
  }

  while (prev) {

    // console.log(s.f + ' ' + prev)

    let t = prev

    for (let o in burch[s.f][t]) {
      if (burch[s.f][t][o].next === current) {
        if (burch[s.f][t].prev) {
          route.push({t: burch[s.f][t].prev, c: o})
          // route.push(burch[s.f][t].prev)
        }
      }
      if (burch[s.f][t].prev) {
        prev = burch[s.f][t].prev
      } else {
        prev = null
      }

    } // for

    current = t

  } // while
  route = route.reverse()

  s.route = route


}) // snails for each

// console.log(snails)


fs.writeFile('family-routes.json', JSON.stringify(snails), function (err) {
  if (err) return console.log(err);
  console.log('written');
});
