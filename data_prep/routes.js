const fs = require('fs')
const burch = require('./burch2.js')

const snails = []

for (let f in burch) {

  if (f !== 'pupillidae') {

  for (let t in burch[f]) {
    for (let c in burch[f][t]) {
      if (burch[f][t][c].s) {
        let obj = {}
        obj.s = burch[f][t][c].s
        obj.t = t
        obj.c = c
        obj.f = f
        snails.push(obj)
      }
    }
  }
  }

}




snails.forEach(function(s){

  let prev = burch[s.f][s.t].prev
  let current = s.t
  let route = []

  let obj = {}
  obj.t = s.t
  obj.c = s.c

  route.push(obj)
// if (s.s === 'Mesodon thyroidus') {console.log(route)}
if (s.s === 'Mesodon thyroidus') {console.log(obj)}

  if (prev) {
    for (let o in burch[s.f][prev]) {
      if (burch[s.f][prev][o].next === current) {
        route.push({t: prev, c: o})
        if (s.s === 'Mesodon thyroidus') {console.log({t: prev, c: o})}
      }

    }
  }
  // if (s.s === 'Mesodon thyroidus') {console.log(route)}

  // let counter = 10;
  while (prev) {

    let t = prev

    for (let o in burch[s.f][t]) {
      if (s.s === 'Mesodon thyroidus') {console.log(o)}
      if (burch[s.f][t][o].next === current) {
        if (s.s === 'Mesodon thyroidus') {console.log('.next === current')}
        // if (burch[s.f][t].prev) {
          if (s.s === 'Mesodon thyroidus') {console.log('.prev')}
          route.push({t: t, c: o})
          // route.push({t: burch[s.f][t].prev, c: o})
          if (s.s === 'Mesodon thyroidus') {console.log(o)}
          // route.push(burch[s.f][t].prev)
        // }
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

  if (s.s === 'Mesodon thyroidus') {console.log(s)}

}) // snails for each



fs.writeFile('routes.json', JSON.stringify(snails), function (err) {
  if (err) return console.log(err);
  console.log('written');
});
