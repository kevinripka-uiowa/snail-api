module.exports = {
  carychiidae: {
    t1: {
      c1: {
        n: '1a',
        l: 'Shell longer than 1.75mm',
        next: 't2'
      },
      c2:  {
        n: '1b',
        l: 'Shell shorter than 1.75mm',
        next: 't3'
      }
    },
    t2: {
      prev: 't1',
      c1: {
        n: '2a',
        l: 'Whorls rapidly tapering to apex',
        s: "Carychium stygium"
      },
      c2:  {
        n: '2b',
        l: 'Whorls gradually tapering to apex',
        s: 'Carychium exiguum'
      }
    },
    t3: {
      prev: 't1',
      c1: {
        n: '3a',
        l: 'Aperture lip greatly thickened',
        s: 'Carychium mexicanum',
        o: "Carychium floridanum"
      },
      c2:  {
        n: '3b',
        l: 'Aperture lip relatively thin',
        s: 'Carychium nannodes'
      }
    }
  }, // carychiidae
  endodontidae: {
    t1: {
      c1: {
        n: '1a',
        l: 'Shell large, 9mm or more in diameter',
        next: 't2'
      },
      c2:  {
        n: '1b',
        l: 'Shell small, 8mm or less in diameter',
        next: 't5'
      }
    },
    t2: {
      prev: 't1',
      c1: {
        n: '2a',
        l: 'Shell periphery acutely carinate',
        s: "Anguispira cumberlandiana"
      },
      c2:  {
        n: '2b',
        l: 'Shell periphery rounded or angular, but not carinate',
        next: 't3'
      }
    },
    t3: {
      prev: 't2',
      c1: {
        n: '3a',
        l: 'Shell marked with darker reddish-brown bands',
        s: "Anguispira kochi"
      },
      c2:  {
        n: '3b',
        l: 'Shell marked with drker reddish-brown blotches',
        next: 't4'
      }
    },
    t4: {
      prev: 't3',
      c1: {
        n: '4a',
        l: 'Shell 15mm or more in diameter',
        s: "Anguispira alternata"
      },
      c2:  {
        n: '4b',
        l: 'Shell 10mm or less in diameter',
        s: 'Anguispira alternata',
        o: 'Anguispira clarki'
      }
    },
    t5: {
      prev: 't1',
      c1: {
        n: '5a',
        l: 'Shell usually medium to small (2mm-8mm), but when minute (less than 2mm) the shell surface is smooth and witout sculpturing of major and minor riblets',
        next: 't6'
      },
      c2:  {
        n: '5b',
        l: 'Shell minute (less than 2mm), surface sculptured with major and minor riblets',
        g: 'Punctum',
        next: 't19'
      }
    },
    t6: {
      prev: 't5',
      c1: {
        n: '6a',
        l: 'Shell distinctly ribbed, not lirate',
        g: 'Discus',
        next: 't7'
      },
      c2:  {
        n: '6b',
        l: 'Shell lirate, smooth, or with faint growth lines, but not ribbed',
        g: 'Helicodiscus',
        next: 't14'
      }
    },
    t7: {
      prev: 't6',
      c1: {
        n: '7a',
        l: 'Periphery of last whorl rounded',
        next: 't8'
      },
      c2:  {
        n: '7b',
        l: 'Periphery of last whorl either angular, flattened, or concave with single or double carinae',
        next: 't11'
      }
    },
    t8: {
      prev: 't7',
      c1: {
        n: '8a',
        l: 'Shell with darker brown or reddish-brown spots',
        s: 'Discus rotundatus'
      },
      c2:  {
        n: '8b',
        l: 'Shell uniform in color; without darker spots',
        next: 't9'
      }
    },
    t9: {
      prev: 't8',
      c1: {
        n: '9a',
        l: 'Shell with relatively large, coarse ribs (3-4 ribs per mm on body whorl)',
        s: 'Discus patulus'
      },
      c2:  {
        n: '9b',
        l: 'Shell with relatively small, fine ribs (6-8 per mm on body whorl)',
        g: 'Punctum',
        next: 't10'
      }
    },
    t10: {
      prev: 't9',
      c1: {
        n: '10a',
        l: 'Shell tightly coiled (adults 6-8mm in diameter have 5-6 whorls); ribs indistinct on base of shell',
        s: 'Discus macclintocki'
      },
      c2:  {
        n: '10b',
        l: 'Shell rather loosely coied (adults 5-7mm have 4-4.5 whorls); ribs distinct on base of shell',
        s: 'Discus whitneyi',
        o: 'Discus cronkhitei'
      }
    },
    t11: {
      prev: 't7',
      c1: {
        n: '11a',
        l: 'Periphery of last whorl angular or subangular',
        next: 't12'
      },
      c2:  {
        n: '11b',
        l: 'Periphery of last whorl flattened or concave, singly or doubly carinate',
        next: 't13'
      }
    },
    t12: {
      prev: 't11',
      c1: {
        n: '12a',
        l: 'Shell with darker born or reddish-brown spots',
        s: 'Discus rotundatus'
      },
      c2:  {
        n: '12b',
        l: 'Shell uniform in color; without darker spots',
        s: 'Discus catskillensis'
      }
    },
    t13: {
      prev: 't11',
      c1: {
        n: '13a',
        l: 'Shell doubly carinate; periphery of last whorl deeply concave',
        s: 'Discus clappi'
      },
      c2:  {
        n: '13b',
        l: 'Shell singly carinate; periperhy of last whorl flattened or only slightly concave',
        s: 'Discus bryanti'
      }
    },
    t14: {
      prev: 't6',
      c1: {
        n: '14a',
        l: 'Shell surface sculptured with well-developed spiral lirae',
        next: 't15'
      },
      c2:  {
        n: '14b',
        l: 'Shell surface either smooth or with microscopic striae or puncta',
        next: 't17'
      }
    },
    t15: {
      prev: 't4',
      c1: {
        n: '15a',
        l: 'Spiral lirae unequal in size, some conspicuously fringed',
        s: 'Helicodiscus fimbriatus'
      },
      c2:  {
        n: '15b',
        l: 'Spiral lirae equal in size, not fringed',
        next: 't16'
      }
    },
    t16: {
      prev: 't15',
      c1: {
        n: '16a',
        l: 'Spiral lirae well-developed on all whorls',
        s: 'Helicodiscus eigenmanni'
      },
      c2:  {
        n: '16b',
        l: 'Spiral lirae absent or very poorly developed on the first one or two whorls',
        s: 'Helicodiscus parallelus'
      }
    },
    t17: {
      prev: 't14',
      c1: {
        n: '17a',
        l: 'Shell surface with spiral puncta',
        s: 'Helicodiscus punctatellus'
      },
      c2:  {
        n: '17b',
        l: 'Shell surface smooth, mocroscopically striate, or if punctate the puncta are not spirally arranged',
        next: 't18'
      }
    },
    t18: {
      prev: 't17',
      c1: {
        n: '18a',
        l: 'Shells with 3.5-4 whorls measure 2-3mm in diameter',
        s: 'Helicodiscus singleyanus'
      },
      c2:  {
        n: '18b',
        l: 'Shells with 3.5-4 whorls are less than 2mm in diameter',
        s: 'Helicodiscus nummus'
      }
    },
    t19: {
      prev: 't5',
      c1: {
        n: '19a',
        l: 'Shell aperture without teeth',
        next: 't20'
      },
      c2:  {
        n: '19b',
        l: 'Shell aperture with a basal lamina (tooth)',
        s: 'Punctum smithi'
      }
    },
    t20: {
      prev: 't19',
      c1: {
        n: '20a',
        l: 'Shell with major riblets low and relatively closely spaced (on the body whrol there are usually less than 5 minor riblets between each two major riblets)',
        next: 't21'
      },
      c2:  {
        n: '20b',
        l: 'Shell with major riblets widely spaced and more prominent (on the body whorl there are usually more than 5 minor riblets between each two major riblets)',
        s: 'Punctum vitreum'
      }
    },
    t21: {
      prev: 't20',
      c1: {
        n: '21a',
        l: 'Shell relatively large, 1.5mm or more in diameter',
        s: 'Punctum californicum'
      },
      c2:  {
        n: '21b',
        l: 'Shell smaller, 1.3mm or less in diameter',
        next: 't22'
      }
    },
    t22: {
      prev: 't21',
      c1:  {
        n: '22a',
        l: 'Shell somewhat depressed; last whorl deflected',
        s: 'Punctum minutissimum'
      },
      c2: {
        n: '22b',
        l: 'Shell more depressed; last whorl not deflected',
        s: 'Punctum blandianum'
      }
    }

  }, // edondontidae
  valloniidae: {
    t1: {
      c1: {
        n: '1a',
        l: 'Shell globose',
        s: 'Zoogenetes harpa'
      },
      c2:  {
        n: '1b',
        l: 'Shell strongly depressed',
        next: 't2'
      }
    },
    t2: {
      prev: 't1',
      c1: {
        n: '2a',
        l: 'Shell relatively thin, brownish; aperture lip thin, sharp and not reflected',
        s: 'Planogyra asteriscus'
      },
      c2:  {
        n: '2b',
        l: 'Shell relatively thick, whitish to light tan; aperture lip thckened and reflected',
        g: 'Genus Vallonia',
        next: 't3'
      }
    },
    t3: {
      prev: 't2',
      c1: {
        n: '3a',
        l: 'Shell smooth, with only faint growth lines',
        s: 'Vallonia pulchella'
      },
      c2:  {
        n: '3b',
        l: 'Shell ribbed',
        next: 't4'
      }
    },
    t4: {
      prev: 't3',
      c1: {
        n: '4a',
        l: 'Aperture lip reflected and distinctly or strongly thickened',
        next: 't5'
      },
      c2:  {
        n: '4b',
        l: 'Aperture lip reflected by thin',
        next: 't7'
      }
    },
    t5: {
      prev: 't4',
      c1: {
        n: '5a',
        l: 'Shell small, diameter 2mm or less',
        s: 'Vallonia parvula'
      },
      c2:  {
        n: '5b',
        l: 'Shell large, diameter 2.5mm or more',
        next: 't6'
      }
    },
    t6: {
      prev: 't5',
      c1: {
        n: '6a',
        l: '20-35 ribs on the last whorl',
        s: 'Vallonia costata'
      },
      c2:  {
        n: '6b',
        l: '45-60 ribs on the last whorl',
        s: 'Vallonia gracilicosta'
      }
    },
    t7: {
      prev: 't4',
      c1: {
        n: '7a',
        l: 'Shell small, diameter 2mm or less',
        s: 'Vallonia perspectiva'
      },
      c2:  {
        n: '7b',
        l: 'Shell larger, diameter 2.5mm or more',
        s: 'Vallonia cyclophorella'
      }
    },


  }, // vallonidae
  zonitidae: {
    t1: {
      c1: {
        n: '1a',
        l: 'Shell with few (3 or less) rapidly enlarging whorls, usually imperforate, very thin. The aperture is unusually large, larger than the rest of the shell when seen in the side view (a)',
        next: 't2'
      },
      c2:  {
        n: '1b',
        l: 'Shell with 3 or more whorls which increase slowly in size; thicker. The aperture is smaller than the rest of the shell when seen in side view (b)',
        next: 't4'
      },
      img: 'zon-burch/187.jpg'
    },
    t2: {
      prev: 't1',
      c1: {
        n: '2a',
        l: 'Shell small, diameter 6mm or less; colorless or with pale greenish tint',
        s: 'Vitrina angelicae',
        o: 'Vitrina limpida'
      },
      c2:  {
        n: '2b',
        l: 'Shell large, diameter 16mm or more; dark olive-green or dresden-brown.',
        g: 'Subfamily Zonitinae (in part). Genus Vitrinizonites',
        next: 't3'
      }
    },
    t3: {
      prev: 't2',
      c1: {
        n: '3a',
        l: 'Shell extremely thin and fragile, almost completely devoid of calcareous material',
        s: 'Vitrinizonites latissimus uvidermis',
        o: 'Vitrinizonites uvidermis'
      },
      c2:  {
        n: '3b',
        l: 'Shell thicker, with enough calcium carbonate to prevent wrinkles or distortions in its shape',
        s: 'Vitrinizonites latissimus'
      }
    },
    t4: {
      prev: 't1',
      c1: {
        n: '4a',
        l: 'Shell rather widely to very widely umbilicate; aperture and/or body whorl containing teeth',
        next: 't5'
      },
      c2:  {
        n: '4b',
        l: 'Shell usually perforate to narrowly umbilicate; aperture and body whorl with or without teeth (those few species having a wide umbilicus lack teeth in the apeture and body whorl)',
        next: 't8'
      }
    },
    t5: {
      prev: 't4',
      c1: {
        n: '5a',
        l: 'Shell aperture with a parietal tooth in addition to other teeth',
        s: 'Helicodiscus tridens',
        o: 'Pilsbryna tridens'
      },
      c2:  {
        n: '5b',
        l: 'Shell aperture without a parietal tooth',
        next: 't6'
      }
    },
    t6: {
      prev: 't5',
      c1: {
        n: '6a',
        l: 'Shell minute, 1.5mm in diameter; 4 whorls; aperture as wide as high',
        s: 'Helicodiscus roundyi',
        o: 'Paravitrea roundyi'
      },
      c2:  {
        n: '6b',
        l: 'Shell larger, 2-3.5mm; 5 whorls; aperture narrow or deeply crescentic',
        g: 'Genus Clappiella',
        next: 't7'
      }
    },
    t7: {
      prev: 't6',
      c1: {
        n: '7a',
        l: 'Shell disk-shaped, spire almost flat; sculptured with regular spiral rows of beads or papillae',
        s: 'Helicodiscus saludensis',
        o: 'Clapiella saludensis'
      },
      c2:  {
        n: '7b',
        l: 'Shell depressed, almost disk-shaped, spire slightly raised above the body whorl; without sculpture of spiral rows of beads or papillae',
        s: 'Helicodiscus aldrichianus',
        o: 'Clapiella aldrichiana'
      }
    },
    t8: {
      prev: 't4',
      c1: {
        n: '8a',
        l: 'Shell sculptured with ribs or riblets',
        next: 't9'
      },
      c2:  {
        n: '8b',
        l: 'Shell without ribs or riblets',
        next: 't13'
      }
    },
    t9: {
      prev: 't8',
      c1: {
        n: '9a',
        l: 'Shell relatively large, more than 6mm in diameter; upper surface sculptured with ribs, base smooth; spiral striae absent',
        s: 'Gastrodonta interna'
      },
      c2:  {
        n: '9b',
        l: 'Shell small (less than 3.5mm in diameter), often minute; upper and lower surfaces sculptured with riblets and fine spiral striae',
        next: 't10'
      }
    },
    t10: {
      prev: 't9',
      c1: {
        n: '10a',
        l: 'Shell relatively large, 2.5mm or more in diameter; umbilicus relatively narrow, 1/5 or less the diameter of the shell; riblets not distinct',
        s: 'Striatura ferrea'
      },
      c2:  {
        n: '10b',
        l: 'Shell smaller, less than 2.5mm in diameter; umbilicus wider, 1/4 or more the diameter of the shell; riblets distinct',
        next: 't11'
      }
    },
    t11: {
      prev: 't10',
      c1: {
        n: '11a',
        l: 'Shell more than 2mm in diameter; riblets high and widely spaced (30-40 on last whorl)',
        s: 'Striatura exigua'
      },
      c2:  {
        n: '11b',
        l: 'Shell less than 2mm in diameter; riblets low and closely spaced (many more than 40 on the last whorl)',
        next: 't12'
      }
    },
    t12: {
      prev: 't11',
      c1: {
        n: '12a',
        l: 'Shell 1.7-1.8mm in diameter; spiral striae prominent',
        s: 'Striatura meridionalis'
      },
      c2:  {
        n: '12b',
        l: 'Shell smaller, about 1.5mm in diameter; spiral striae not prominent',
        s: 'Striatura milium'
      }
    },
    t13: {
      prev: 't8',
      c1: {
        n: '13a',
        l: 'Whorls increasing regularly in size, the last very much wider; without teeth in aperture or body whorl.',
        next: 't14'
      },
      c2:  {
        n: '13b',
        l: 'Whorls narrow, tightly coiled, increasing very slowly in size; with or without teeth in aperture and/or body whorl',
        next: 't54'
      }
    },
    t14: {
      prev: 't13',
      c1: {
        n: '14a',
        l: 'Shell large, 16mm or more in diameter.',
        g: 'Genus Mesomphix',
        next: 't15'
      },
      c2:  {
        n: '14b',
        l: 'Shell smaller, usually 15mm or less in diameter',
        next: 't26'
      }
    },
    t15: {
      prev: 't14',
      c1: {
        n: '15a',
        l: 'Shell perforate, or very narrowly umbilicate, umblicus less than 1/12 the shell diameter',
        next: 't16'
      },
      c2:  {
        n: '15b',
        l: 'Shell umbilics wider, 1/12 to 1/5 the shell diameter',
        next: 't22'
      }
    },
    t16: {
      prev: 't15',
      c1: {
        n: '16a',
        l: 'First several whorls of spire nearly smooth',
        next: 't17'
      },
      c2:  {
        n: '16b',
        l: 'First several whorls of spire strongly sculptured with growth wrinkles',
        next: 't18'
      }
    },
    t17: {
      prev: 't16',
      c1: {
        n: '17a',
        l: 'Last whorl rapidly enlarging, making the aperture relatively large and the spire relatively small; spire diameter 1/2 or less shell diameter',
        s: 'Mesomphix andrewsae'
      },
      c2:  {
        n: '17b',
        l: 'Last whorl smaller, with smaller aperture; spire relatively larger, its diameter more than 1/2 the shell diameter',
        s: 'Mesomphix inornatus'
      }
    },
    t18: {
      prev: 't16',
      c1: {
        n: '18a',
        l: 'Shell height more than 1/2 its diameter',
        next: 't19'
      },
      c2:  {
        n: '18b',
        l: 'Shell height 1/2 or less of its diameter',
        next: 't21'
      }
    },
    t19: {
      prev: 't18',
      c1: {
        n: '19a',
        l: 'Aperture height and width about equal',
        s: 'Mesomphix rugeli'
      },
      c2:  {
        n: '19b',
        l: 'Aperture width distinctly greater than height',
        next: 't20'
      }
    },
    t20: {
      prev: 't19',
      c1: {
        n: '20a',
        l: 'Shell rather dull; sculpture of fine spiral papillae well developed',
        s: 'Mesomphix vulgatus'
      },
      c2:  {
        n: '20b',
        l: 'Shell more glossy; sculpture of fine spiral papillae not well developed',
        s: 'Mesomphix perlaevis'
      }
    },
    t21: {
      prev: 't18',
      c1: {
        n: '21a',
        l: 'Last whorl rapidly enlarging, making the spire relatively small, hardly more than 1/2 the shell diameter; sculptured with rows of microscopic spiral papillae',
        s: 'Mesomphix latior'
      },
      c2:  {
        n: '21b',
        l: 'Last whorl smaller, making the spire relatively large, distinctly more than 1/2 the shell diameter; surface without spiral rows of fine papillae',
        s: 'Mesomphix subplanus'
      }
    },
    t22: {
      prev: 't15',
      c1: {
        n: '22a',
        l: 'Shell relatively small, 16.5mm or less in diameter; strongly depressed, spire hardly visible above body whorl' ,
        s: 'Oxychilus draparnaudi',
        o: 'Oxychilus draparnaldi'
      },
      c2:  {
        n: '22b',
        l: 'Shell large, more tha 16.5mm in diameter; less strongly depressed',
        next: 't23'
      }
    },
    t23: {
      prev: 't22',
      c1: {
        n: '23a',
        l: 'Shell sculptured with distinct spiral roes of papillae',
        next: 't24'
      },
      c2:  {
        n: '23b',
        l: 'Shell scuplture indistinct',
        next: 't25'
      }
    },
    t24: {
      prev: 't23',
      c1: {
        n: '24a',
        l: 'Shell larger, more than 29mm in diameter; spiral papillae not very well developed',
        s: 'Mesomphix capnodes'
      },
      c2:  {
        n: '24b',
        l: 'Shell smaller, 27mm or less in diameter; spiral papillae well developed',
        s: 'Mesomphix pilsbryi'
      }
    },
    t25: {
      prev: 't23',
      c1: {
        n: '25a',
        l: 'Umblicus 1/6-1/5 the shell diameter',
        s: 'Mesomphix cupreus'
      },
      c2:  {
        n: '25b',
        l: 'Umbilicus about 1/10 the shell diameter',
        s: 'Mesomphix friabilis'
      }
    },
    t26: {
      prev: 't14',
      img: 'zon-burch/213.jpg',
      c1: {
        n: '26a',
        l: 'Shell 6mm or more in diameter; without radiating indented lines',
        g: 'Genus Oxychilus',
        next: 't27'
      },
      c2:  {
        n: '26b',
        l: 'Shell usually less than 6mm in diameter, or if larger, with radiating indented lines',
        next: 't29'
      }
    },
    t27: {
      prev: 't26',
      c1: {
        n: '27a',
        l: 'Shell 6-7mm in diameter; animal very dark',
        s: 'Oxychilus alliarius',
        o: 'Oxychilus allarius - maybe my typo'
      },
      c2:  {
        n: '27b',
        l: 'Shell 9mm or more in diameter; animal either very pale or very dark',
        next: 't28'
      }
    },
    t28: {
      prev: 't27',
      c1: {
        n: '28a',
        l: 'Shell about 9mm in diameter; animal pale gray',
        s: 'Oxychilus cellarius'
      },
      c2:  {
        n: '28b',
        l: 'Shell 12-16.5mm in diameter; animal dark blue-black or blue-gray',
        s: 'Oxychilus draparnaudi',
        o: 'Oxychilus draparnaldi'
      }
    },
    t29: {
      prev: 't26',
      c1: {
        n: '29a',
        l: 'Shell with radiating indented lines in addition to its ordinary growth lines or wrinkles',
        next: 't30'
      },
      c2:  {
        n: '29b',
        l: 'Shell without radiating indented lines in addition to its ordinary growth lines or wrinkles',
        next: 't52'
      }
    },
    t30: {
      prev: 't29',
      c1: {
        n: '30a',
        l: 'Shell umbilicate',
        next: 't31'
      },
      c2:  {
        n: '30b',
        l: 'Shell perforate or imperforate',
        next: 't48'
      }
    },
    t31: {
      prev: 't1',
      c1: {
        n: '31a',
        l: 'Radiating indented lines noticably more prominent than growth lines on the upper shell surface and strongly impressed on the base of the shell',
        next: 't32'
      },
      c2:  {
        n: '31b',
        l: 'Radiating indented lines only slightly more prominent than growth lines on the upper shell surface and weakly impressed on the base of the shell',
        next: 't36'
      }
    },
    t32: {
      prev: 't31',
      c1: {
        n: '32a',
        l: 'Shell larger than 5.5mm in dieamter; whitish',
        next: 't33'
      },
      c2:  {
        n: '32b',
        l: 'Shell smaller than 5.5mm in diameter; yellowish or brownish',
        next: 't34'
      }
    },
    t33: {
      prev: 't32',
      c1: {
        n: '33a',
        l: 'Shell 6mm or less in diamter, spire slightly elevated; growth lines widely and irregularly spaced',
        s: 'Paravitrea petrophila'
      },
      c2:  {
        n: '33b',
        l: 'Shell about 8mm in diamter, spire strongly depressed; growth lines closely and regularly spaced',
        s: 'Paravitrea aulacogyra'
      }
    },
    t34: {
      prev: 't32',
      c1: {
        n: '34a',
        l: 'Shell less than 4mm in diameter',
        s: 'Pilsbryna castanea'
      },
      c2:  {
        n: '34b',
        l: 'Shell 4.5mm or more in diameter',
        next: 't35'
      }
    },
    t35: {
      prev: 't34',
      c1: {
        n: '35a',
        l: 'Umbilicus wider, more than 1/4 the shell diameter',
        s: 'Glyphyalinia pentadelphia',
        o: 'Retinella pentadelphia'
      },
      c2:  {
        n: '35b',
        l: 'Umbilicus narrower, less than 1/5 the shell diameter',
        s: 'Glyphyalinia rhoadsi',
        o: 'Retinella rhoadsi'
      }
    },
    t36: {
      prev: 't31',
      c1: {
        n: '36a',
        l: 'Shell light horn to buff-colorred; radiating indented lines widely and irregularly spaced',
        next: 't37'
      },
      c2:  {
        n: '36b',
        l: 'Shell whitish; radiating indented lines closely and regularly spaced',
        next: 't45'
      }
    },
    t37: {
      prev: 't36',
      img: 'zon-burch/222.jpg',
      c1: {
        n: '37a',
        l: 'Umbilicus nearly circular in outline',
        next: 't38'
      },
      c2:  {
        n: '37b',
        l: 'Umbilicus oval in outline',
        next: 't41'
      }
    },
    t38: {
      prev: 't37',
      c1: {
        n: '38a',
        l: 'Shell with raised spire',
        s: 'Glyphyalinia wheatleyi',
        o: 'Retinella circumstriata'
      },
      c2:  {
        n: '38b',
        l: 'Shell strongly depressed',
        next: 't39'
      }
    },
    t39: {
      prev: 't38',
      c1: {
        n: '39a',
        l: 'Shell more than 4mm in diameter',
        s: 'Glyphyalinia virginica',
        o: 'Retinella virginica'
      },
      c2:  {
        n: '39b',
        l: 'Shell 4mm or less in diameter',
        next: 't40'
      }
    },
    t40: {
      prev: 't39',
      c1: {
        n: '40a',
        l: 'Shell 3.9-4mm in diameter',
        s: 'Glyphyalinia wheatleyi',
        o: 'Retinella burringtoni'
      },
      c2:  {
        n: '40b',
        l: 'Shell 3mm or less in diameter',
        s: 'Glyphyalinia cumberlandiana',
        o: 'Retinella cumberlandiana'
      }
    },
    t41: {
      prev: 't37',
      c1: {
        n: '41a',
        l: 'Umbilicus wide, 1/5 or 1/6 the shell diameter; shell color yellowish, reddis, or brownish',
        next: 't42'
      },
      c2:  {
        n: '41b',
        l: 'Umbilicus narrower, less than 1/8 the shell diameter; shell color greenish-horn',
        s: 'Glyphyalinia clingmani',
        o: 'Retinella approxima'
      }
    },
    t42: {
      prev: 't41',
      c1: {
        n: '42a',
        l: 'Shell 3.6-3.7mm in diameter',
        s: 'Pilsbryna castanea'
      },
      c2:  {
        n: '42b',
        l: 'Shell more than 4mm',
        next: 't43'
      }
    },
    t43: {
      prev: 't42',
      c1: {
        n: '43a',
        l: 'Shell about 4.5mm in diameter',
        s: 'Pilsbryna vanattai',
        o: 'Retinella vanattai'
      },
      c2:  {
        n: '43b',
        l: 'Shell 5mm or more in diameter',
        next: 't44'
      }
    },
    t44: {
      prev: 't43',
      c1: {
        n: '44a',
        l: 'Shell 5-5.5mm in diameter; color brownish-horn',
        s: 'Glyphyalinia wheatleyi',
        o: 'Retinella wheatleyi'
      },
      c2:  {
        n: '44b',
        l: 'Shell about 6.5mm in diameter; yellowish to reddish',
        s: 'Glyphyalinia clingmani',
        o: 'Retinella clingmani'
      }
    },
    t45: {
      prev: 't36',
      c1: {
        n: '45a',
        l: 'Umbilicus 1/4 the shell diameter; umbilicus walls steeply rounded',
        next: 't46'
      },
      c2:  {
        n: '45b',
        l: 'Umbilicus 1/3 shell diameter; umbilicus walls flattened and slanting',
        s: 'Glyphyalinia raderi',
        o: 'Retinella raderi'
      }
    },
    t46: {
      prev: 't45',
      c1: {
        n: '46a',
        l: 'Shell about 3.5mm in diameter',
        s: 'Glyphyalinia lewisiana',
        o: 'Retinella lewisiana'
      },
      c2:  {
        n: '46b',
        l: 'Shell larger, 4mm or more in diameter',
        next: 't47'
      }
    },
    t47: {
      prev: 't46',
      c1: {
        n: '47a',
        l: 'Spire and body whorl relatively high',
        s: 'Glyphyalinia floridana',
        o: 'Retinella floridana'
      },
      c2:  {
        n: '47b',
        l: 'Spire and body whorl depressed and low',
        s: 'Glyphyalinia roemeri',
        o: 'Retinella roemeri'
      }
    },
    t48: {
      prev: 't30',
      c1: {
        n: '48a',
        l: 'Shell imperforate',
        s :'Glyphyalinia cryptomphala',
        o: 'Retinella cryptomphala'
      },
      c2:  {
        n: '48b',
        l: 'Shell perforate',
        next: 't49'
      }
    },
    t49: {
      prev: 't48',
      c1: {
        n: '49a',
        l: 'Radiating indented lines closely spaced, about 0.5mm apart at periphery of body whorl',
        s :'Glyphyalinia sculptilis',
        o: 'Retinella sculptilis'
      },
      c2:  {
        n: '49b',
        l: 'Radiating indented lines more widely spaxed, about 0.7-1mm apart at periphery of body whorl',
        next: 't50'
      }
    },
    t50: {
      prev: 't49',
      c1: {
        n: '50a',
        l: 'Need to dissect - Penial retractor muscle terminal ',
        next: 't51'
      },
      c2:  {
        n: '50b',
        l: 'Need to dissect - An apical penial flagellum extends past the insertion of the penial retractor muscle',
        s: 'Glyphyalinia praecox',
        o: 'Retinella praecox'
      }
    },
    t51: {
      prev: 't50',
      c1: {
        n: '51a',
        l: 'Need to dissect - The epiphalls opens near th base of the apical penial chamber',
        s: 'Glyphyalinia indentata',
        o: 'Retinella indentata'
      },
      c2:  {
        n: '51b',
        l: 'Need to dissect - The epiphalls opens near the middle of the apical penial chamber',
        s: 'Glyphyalinia carolinensis',
        o: 'Retinella carolinensis'
      }
    },
    t52: {
      prev: 't29',
      c1: {
        n: '52a',
        l: 'Shell 4.6-5.2mm in diameter',
        s: 'Nesovitrea electrina',
        o: 'Retinella electrina'
      },
      c2:  {
        n: '52b',
        l: 'Shell 4.3mm or less in diameter',
        next: 't53'
      }
    },
    t53: {
      prev: 't52',
      c1: {
        n: '53a',
        l: 'Shell 3.5-4.3mm in diameter; nearly colorless',
        s: 'Nesovitrea binneyana',
        o: 'Retinella binneyana'
      },
      c2:  {
        n: '53b',
        l: 'Shell 2.6-3.2mm in diameter; pale straw-colored',
        s :'Nesovitrea dalliana',
        o: 'Retinella dalliana'
      }
    },
    t54: {
      prev: 't13',
      c1: {
        n: '54a',
        l: 'Shell small, less than 4mm in diameter',
        next: 't55'
      },
      c2:  {
        n: '54b',
        l: 'Shell larger, more than 4mm in diameter',
        next: 't70'
      }
    },
    t55: {
      prev: 't54',
      c1: {
        n: '55a',
        l: 'Shell with consipuously raised spire, often beehive',
        g: 'Econuilinae',
        next: 't56'
      },
      c2:  {
        n: '55b',
        l: 'Shell depressed, usually strongly so',
        next: 't60'
      }
    },
    t56: {
      prev: 't55',
      c1: {
        n: '56a',
        l: 'Shell high-spired, usually beehive; surface with close, fine, regularly spaced transverse lines',
        g: 'Genus Euconulus',
        next: 't57'
      },
      c2:  {
        n: '56b',
        l: 'Shell with lower spire, moderateluy depressed; surface without close, fine, regularly spaced transverse lines',
        g: 'Genus Guppya',
        next: 't58'
      }
    },
    t57: {
      prev: 't56',
      c1: {
        n: '57a',
        l: 'Shell with 4.5-6 whorls',
        s: 'Euconulus fulvus'
      },
      c2:  {
        n: '57b',
        l: 'Shell with 6-8 whorls',
        s: 'Euconulus chersinus'
      }
    },
    t58: {
      prev: 't56',
      c1: {
        n: '58a',
        l: 'Shell 2mm or more in diameter',
        next: 't59'
      },
      c2:  {
        n: '58b',
        l: 'Shell less than 1.5mm in diameter',
        s: 'Guppya sterkii'
      }
    },
    t59: {
      prev: 't58',
      c1: {
        n: '59a',
        l: 'Shell surface smooth',
        s: 'Guppya miamiensis'
      },
      c2:  {
        n: '59b',
        l: 'Shell surface spirally striate',
        s: 'Guppya gundlachi'
      }
    },
    t60: {
      prev: 't55',
      c1: {
        n: '60a',
        l: 'Shell very tightly coiled, usually with 6 or more flattened or shouldered whorls; last whorl usually containing teeth',
        next: 't61'
      },
      c2:  {
        n: '60b',
        l: 'Shell less tightly coiled, usually with less than 6 rounded whorls; last whorl usually without teeth',
        next: 't66'
      }
    },
    t61: {
      prev: 't60',
      c1: {
        n: '61a',
        l: 'Umbilicus wide, 1/3 or more the shell diameter',
        s: 'Helicodiscus roundyi',
        o: 'Paravitrea roundyi'
      },
      c2:  {
        n: '61b',
        l: 'Umbilicus narrow, 1/5 or less the shell diameter',
        next: 't62'
      }
    },
    t62: {
      prev: 't61',
      c1: {
        n: '62a',
        l: 'Shell sculptured with regularly spaced transverse lines or grooves',
        next: 't63'
      },
      c2:  {
        n: '62b',
        l: 'Shell scupltured with irregularly space3d transverse lines or grooves',
        s: 'Paravitrea reesei'
      }
    },
    t63: {
      prev: 't62',
      c1: {
        n: '63a',
        l: 'Shell with spiral striae',
        next: 't64'
      },
      c2:  {
        n: '63b',
        l: 'Shell without spiral striae',
        next: 't65'
      }
    },
    t64: {
      prev: 't63',
      c1: {
        n: '64a',
        l: 'Umbilicus smaller, about 1/6 or less the shell diameter',
        s: 'Paravitrea umbilicaris',
        o: 'Paravitrea walkeri'
      },
      c2:  {
        n: '64b',
        l: 'Umbilicus larger, about 1/5 or more the shell diameter',
        s: 'Paravitrea variabilis'
      }
    },
    t65: {
      prev: 't63',
      c1: {
        n: '65a',
        l: 'Shell 3mm or less in diameter; umbilicus 1/7 or more the shell diameter',
        s: 'Paravitrea multidentata'
      },
      c2:  {
        n: '65b',
        l: 'Shell 3.5mm or more in diameter; umbilicus 1/10 or less the shell diameter',
        s: 'Paravitrea lamellidens'
      }
    },
    t66: {
      prev: 't60',
      c1: {
        n: '66a',
        l: 'Shell white, opaque',
        s: 'Hawaiia minuscula'
      },
      c2:  {
        n: '66b',
        l: 'Shell corneous, translucent',
        next: 't67'
      }
    },
    t67: {
      prev: 't66',
      c1: {
        n: '67a',
        l: 'Shell widely umblicate, umbilicus about 1/3 the shell diameter',
        s: 'Helicodiscus tridens',
        o: 'Pilsbryna tridens'
      },
      c2:  {
        n: '67b',
        l: 'Shell more narrowly umbilicate, umbilicus 1/5 or less the shell diameter',
        next: 't68'
      }
    },
    t68: {
      prev: 't67',
      c1: {
        n: '68a',
        l: 'Whorls more rapidly expanding, the last one rather prominent',
        s: 'Pilsbryna castanea'
      },
      c2:  {
        n: '68b',
        l: 'Whorls more gradually expanding',
        next: 't69'
      }
    },
    t69: {
      prev: 't68',
      c1: {
        n: '69a',
        l: 'Umbilicus deep and steep-sided, penultimate whorl not prominent within the umbilicus; 4.5-6 whorls',
        s: 'Pilsbryna aurea'
      },
      c2:  {
        n: '69b',
        l: 'Umbilicus relatively shallow, prominently showing the penultimate whorl; 3/5-4 whorls',
        s: 'Striatura ferrea'
      }
    },
    t70: {
      prev: 't54',
      img: 'zon-burch/259.jpg',
      c1: {
        n: '70a',
        l: 'Aperture not calloused within; shell usually with more than 5 whorls; body whrol often containing one or more transverse lamellae or rows of teeth, which may be seen through the base of the translucent shell (b)',
        next: 't71'
      },
      c2:  {
        n: '70b',
        l: 'Aperture may or may not have an internal callus, bit if a callus is absent the shell has few whorls (4.5 or less); if lamellae or teeth are present within the body whorl they are not trnasversely situated (a)',
        next: 't82'
      }
    },
    t71: {
      prev: 't70',
      c1: {
        n: '71a',
        l: 'Shell sculptured with regularly spaced transverse lines or grooves',
        s: 'Paravitrea clappi'
      },
      c2:  {
        n: '71b',
        l: 'Shell sculptured with irregularly spaced transverse lines or grooves',
        next: 't72'
      }
    },
    t72: {
      prev: 't71',
      c1: {
        n: '72a',
        l: 'Whorls increasing regularly in size, the last very much wider',
        next: 't73'
      },
      c2:  {
        n: '72b',
        l: 'Whorls narrow, tightly, coiled, increasing very slowly in size',
        next: 't74'
      }
    },
    t73: {
      prev: 't72',
      c1: {
        n: '73a',
        l: 'Shell 6mm or less in diameter, spire slightly elevate growth lines widely and irregularly spaced',
        s: 'Paravitrea petrophila'
      },
      c2:  {
        n: '73b',
        l: 'Shell about 8mm in diameter, spire strongly depressed; growth lines closely and rather regularly spaced',
        s: 'Paravitrea aulacogyra'
      }
    },
    t74: {
      prev: 't72',
      c1: {
        n: '74a',
        l: 'Species foudn in areas bordering or west of the Mississippi River',
        next: 't75'
      },
      c2:  {
        n: '74b',
        l: 'Species found east of the Mississippi River',
        next: 't76'
      }
    },
    t75: {
      prev: 't74',
      c1: {
        n: '75a',
        l: 'Periphery of last whorl flattened and sloped outwards',
        s: 'Paravitrea significans'
      },
      c2:  {
        n: '75b',
        l: 'Periphery of last whorl rounded',
        s: 'Paravitrea simpsoni'
      }
    },
    t76: {
      prev: 't74',
      c1: {
        n: '76a',
        l: 'Shell diameter 6.5mm or greater',
        next: 't77'
      },
      c2:  {
        n: '76b',
        l: 'Shell diameter 6.2mm or less',
        next: 't78'
      }
    },
    t77: {
      prev: 't76',
      c1: {
        n: '77a',
        l: 'Shell with 7-7.5 whorls; adults without teeth',
        s: 'Paravitrea placentula'
      },
      c2:  {
        n: '77b',
        l: 'Shell with 8-9 whorls; adults with or without teeth',
        s: 'Paravitrea andrewsae'
      }
    },
    t78: {
      prev: 't76',
      c1: {
        n: '78a',
        l: 'Shell 5mm or more in diameter; 6.5-8 whorls',
        next: 't79'
      },
      c2:  {
        n: '78b',
        l: 'Shell 4.7mm o rless in diamter; 4.5-6.5 whorls',
        next: 't80'
      }
    },
    t79: {
      prev: 't78',
      c1: {
        n: '79a',
        l: 'Umbilicus relatively large, 1/4 the shell diameter; adults with teeth in body whorl',
        s: 'Paravitrea pilsbryana'
      },
      c2:  {
        n: '79b',
        l: 'Umbilicus smaller, 1/5 or less the shell diameter; adults with or without teth in body whrol',
        s: 'Paravitrea capsella'
      }
    },
    t80: {
      prev: 't78',
      c1: {
        n: '80a',
        l: 'Adults with teeth in body whorl',
        s: 'Paravitrea reesei'
      },
      c2:  {
        n: '80b',
        l: 'Adults without teeth in body whorl',
        next: 't81'
      }
    },
    t81: {
      prev: 't1',
      c1: {
        n: '81a',
        l: 'Shell with 4.5 whorls',
        s: 'Paravitrea smithi',
        note: 'Hubricht (1985) lists it as a synonym of Paravitrea petrophila, but Turgeon et al. (1998) list it as valid.'
      },
      c2:  {
        n: '81b',
        l: 'Shell with 6 whorls',
        s: 'Paravitrea conecuhensis'
      }
    },
    t82: {
      prev: 't70',
      c1: {
        n: '82a',
        l: 'Aperture with a callous pad, lamellae, or teeth; 5 or more whorls',
        g: 'Genus Ventridens',
        next: 't83'
      },
      c2:  {
        n: '82b',
        l: 'Aperture without a callous pad, lamellae or teeth; shell with 5 whorls or less',
        g: 'Genus Zonitoides',
        next: 't97'
      }
    },
    t83: {
      prev: 't82',
      c1: {
        n: '83a',
        l: 'Aperture in adults with a callous pad, but without teeth',
        next: 't84'
      },
      c2:  {
        n: '83b',
        l: 'Aperture in adults with teeth',
        next: 't91'
      }
    },
    t84: {
      prev: 't83',
      c1: {
        n: '84a',
        l: 'Shell perforate or imperforate',
        next: 't85'
      },
      c2:  {
        n: '84b',
        l: 'Shell narrowly umblicate, umbilicus 1/8 or more of shell diameter',
        s: 'Zonitoides elliotti',
        o: 'Ventridens eliotti'
      }
    },
    t85: {
      prev: 't84',
      c1: {
        n: '85a',
        l: 'Shell periphery rounded or angular',
        next: 't86'
      },
      c2:  {
        n: '85b',
        l: 'Shell periphery sharply carinate',
        s: 'Ventridens intertextus eutropis'
      }
    },
    t86: {
      prev: 't85',
      c1: {
        n: '86a',
        l: 'Shell large, generally more than 11mm in diameter',
        next: 't87'
      },
      c2:  {
        n: '86b',
        l: 'Shell smaller, generally less than 11mm in diameter',
        next: 't89'
      }
    },
    t87: {
      prev: 't86',
      c1: {
        n: '87a',
        l: 'Shell with well-devleoped spiral striae; surface dull',
        s: 'Ventridens intertextus'
      },
      c2:  {
        n: '87b',
        l: 'Shell with porrly developed striae; surface glossy',
        next: 't88'
      }
    },
    t88: {
      prev: 't89',
      c1: {
        n: '88a',
        l: 'Shell very glossy; 7-8 whorls',
        s: 'Ventridens acerra'
      },
      c2:  {
        n: '88b',
        l: 'Shell only moderately glossy; 6-7 whorls',
        s: 'Ventridens ligera'
      }
    },
    t89: {
      prev: 't86',
      c1: {
        n: '89a',
        l: 'Shell markedly concave at its base',
        s: 'Ventridens theloides',
        o: 'Ventridens gularis theloides'
      },
      c2:  {
        n: '89b',
        l: 'Shell perforate, but not markedly concave at its base',
        next: 't90'
      }
    },
    t90: {
      prev: 't89',
      c1: {
        n: '90a',
        l: 'Spire elevated',
        s: 'Ventridens percallosus'
      },
      c2:  {
        n: '90b',
        l: 'Spire lower',
        s: 'Ventridens demissus'
      }
    },
    t91: {
      prev: 't83',
      c1: {
        n: '91a',
        l: 'Shell perforate or imperforate',
        next: 't92'
      },
      c2:  {
        n: '91b',
        l: 'Shell narrowly umbilicate, umbilicus 1/9 or more the shell diameter',
        next: 't94'
      }
    },
    t92: {
      prev: 't91',
      c1: {
        n: '92a',
        l: 'Transverse sculpture of upper surface of shell sharp and distinct',
        next: 't93'
      },
      c2:  {
        n: '92b',
        l: 'Transerse sulpture of upper surface of shell waker, raised lines rounded',
        s: 'Ventridens cerinoideus'
      }
    },
    t93: {
      prev: 't92',
      c1: {
        n: '93a',
        l: 'Shell without spiral striae',
        s: 'Ventridens collisella'
      },
      c2:  {
        n: '93b',
        l: 'Shell with rather poorly developed, but distinct spiral striae',
        s: 'Ventridens gularis'
      }
    },
    t94: {
      prev: 't91',
      c1: {
        n: '94a',
        l: 'Umbilicus 1/9 to 1/8 the shell diameter',
        s: 'Ventridens suppressus'
      },
      c2:  {
        n: '94b',
        l: 'Umbilicus 1/7 or more the shell diameter',
        next: 't95'
      }
    },
    t95: {
      prev: 't94',
      c1: {
        n: '95a',
        l: 'Umbilicus 1/7 to 1/6 the shell diameter; shell 6.5-6.7mm in diameter',
        s: 'Ventridens coelaxis'
      },
      c2:  {
        n: '95b',
        l: 'Umbilicus 1/5 or more the shell diameter; shell 7.5mm or more in diameter',
        next: 't96'
      }
    },
    t96: {
      prev: 't95',
      c1: {
        n: '96a',
        l: 'Umbilicus 1/5 the shell diameter; shell 7.8-9mm in diameter',
        s: 'Ventridens lawae'
      },
      c2:  {
        n: '96b',
        l: 'Umbilicus 1/4 to 1/3 the shell diameter; shell 7.5-7.8mm in diameter',
        s: 'Ventridens lasmodon'
      }
    },
    t97: {
      prev: 't82',
      c1: {
        n: '97a',
        l: 'Shell moderatley to widely umbilicate, umbilicus 1/5 or more the shell diameter',
        next: 't98'
      },
      c2:  {
        n: '97b',
        l: 'Shell narrowly umbilicate, umbilicus 1/6 or less the shell diameter',
        s: 'Paravitrea smithi',
        note: 'Hubricht (1985) lists it as a synonym of Paravitrea petrophila, but Turgeon et al. (1998) list it as valid.'
      }
    },
    t98: {
      prev: 't97',
      c1: {
        n: '98a',
        l: 'Shell glossy and rather weakly sculptured; moderately umbilicate, umbilicus 1/5 to 1/4 shell diameter',
        next: 't99'
      },
      c2:  {
        n: '98b',
        l: 'Shell dull, with distinct, rather coarse sculpture; rather widely umbiicate, umbilicus 1/4 or mre the shell diameter',
        next: 't100'
      }
    },
    t99: {
      prev: 't98',
      c1: {
        n: '99a',
        l: 'Shell larger, more than 6mm in diameter, without faint spiral striae',
        s: 'Zonitoides nitidus'
      },
      c2:  {
        n: '99b',
        l: 'Shell smaller, 6mm or less in diameter, usually with faint spiral straie',
        s: 'Zonitoides arboreus'
      }
    },
    t100: {
      prev: 't98',
      c1: {
        n: '100a',
        l: 'Shell 5mm or more in diameter; upper lip margin flattened and deflected',
        s: 'Zonitoides patuloides'
      },
      c2:  {
        n: '100b',
        l: 'Shell 5mm or less in diameter; upper lip margin rounded and not reflected',
        next: 't101'
      }
    },
    t101: {
      prev: 't1',
      c1: {
        n: '101a',
        l: 'Shell depressed and greatly flattened; umbilicus more than 1/3 shell diameter',
        s: 'Zonitoides lateumbilicatus'
      },
      c2:  {
        n: '101b',
        l: 'Shell depressed but not especially flattened; umbilicus 1/4 to 1/3 shell diameter',
        s: 'Zonitoides limatulus'
      }
    },
  }, //zonitidae
  pupillidae:  {
    t1: {
      c1: {
        n: '1a',
        l: 'At least one lamella in the aperture (Figs. 1, 2, 6) ',
        next: 't2'
      },
      c2:  {
        n: '1b',
        l: 'No apertural lamellae (Figs. 3A-C, 3E-H, 4A-E, 5F, 5K)',
        next: 't7'
      }
    },
    t2: {
      prev: 't1',
      c1: {
        n: '2a',
        l: 'Parietal lamella fused with angular forming a complex bilobed structure (Figs. 1, 2C, 2G-P)',
        g: 'Gastrocopta'
      },
      c2:  {
        n: '2b',
        l: 'Parietal lamella a simple peg or plate (occasionally absent); angular lamellae (if present) not fused with the parietal (Figs. 2A, 2D-F, 5A-E, 5G-J, 5L-R, 6)',
        next:'t3'
      }
    },
    t3: {
      prev: 't2',
      c1: {
        n: '3a',
        l: 'Fresh shells waxy white to clear (Fig. 2A, 2D-F) ',
        g: 'Gastrocopta'
      },
      c2:  {
        n: '3b',
        l: 'Fresh shells pale to deep reddish brown (Figs. 3D, 4F-G, 5A-E, 5G-J, 5L-R)',
        next:'t4'
      }
    },
    t4: {
      prev: 't3',
      c1: {
        n: '4a',
        l: 'Shell >3 mm tall (Fig. 3D)',
        g: 'Pupilla'
      },
      c2:  {
        n: '4b',
        l: 'Shell <3 mm tall (Figs. 4F-G, 5, 6) ',
        next:'t5'
      }
    },
    t5: {
      prev: 't4',
      c1: {
        n: '5a',
        l: 'Entire shell surface pitted; shell almost as tall as wide; three lamellae in aperture (Fig. 4F)',
        g: 'Bothriopupa'
      },
      c2:  {
        n: '5b',
        l: 'Shell lacking pits; shell taller than wide or if as tall as wide, then no apertural lamellae (Figs. 4G, 5A-E, 5G-J, 5L-R, 6)',
        next:'t6'
      }
    },
    t6: {
      prev: 't5',
      c1: {
        n: '6a',
        l: 'Shell apex strongly domed; body whorl 2/3 shell height (Fig. 4G)',
        g: 'Sterkia'
      },
      c2:  {
        n: '6b',
        l: 'Shell apex tapered; body whorl ~1/2 shell height or less (Figs. 5, 6)',
        g: 'Vertigo'
      }
    },
    t7: {
      prev: 't1',
      c1: {
        n: '7a',
        l: 'Shell >3 mm tall (Figs. 3A-C, 3E-H)',
        next: 't8'
      },
      c2:  {
        n: '7b',
        l: 'Shell <3 mm tall (Figs. 4A-E, 5F, 5K)',
        next: 't9'
      }
    },
    t8: {
      prev: 't7',
      c1: {
        n: '8a',
        l: 'Shell ovoid or conical with tapered apex (Figs. 3E-H)',
        g: 'Pupoides'
      },
      c2:  {
        n: '8b',
        l: 'Shell cylindrical with domed apex (Figs. 3A-C)',
        g: 'Pupilla'
      }
    },
    t9: {
      prev: 't7',
      c1: {
        n: '9a',
        l: 'Adult shell height and width approximately equal; note that many immature pupillids will also key here (Figs. 4D-E)',
        g: 'Pupisoma'
      },
      c2:  {
        n: '9b',
        l: 'Adult shell distinctly taller than wide (Figs. 4A-C, 5F, 5K)',
        next: 't10'
      }
    },
    t10: {
      prev: 't9',
      c1: {
        n: '10a',
        l: 'Shell ovoid or cylindrical; shell surface smooth (Figs. 5F, 5K)',
        g: 'Vertigo'
      },
      c2:  {
        n: '10b',
        l: 'Shell cylindrical or slightly conical; shell surface striate (Figs. 4A-C)',
        g: 'Columella'
      }
    }
  }, //pupillidae
  gastrocopta: {
    t1: {
      c1: {
        n: '1a',
        l: 'Shell <3.25 mm tall; ovoid-conical; color white to brown (Fig. 2)',
        next: 't2'
      },
      c2:  {
        n: '1b',
        l: 'Shell > 3.25 mm tall, cylindrical or barrel-shaped; translucent white when fresh (Fig. 1; subgenus Albinula)',
        next: 't5'
      }
    },
    t2: {
      prev: 't1',
      c1: {
        n: '2a',
        l: 'Angulo-parietal lamella a simple peg-like tooth (Figs. 2D-F, 2N)',
        next: 't9'
      },
      c2:  {
        n: '2b',
        l: 'Angulo-parietal lamellae not peg-shaped (Figs. 2A-C, 2G-M, 2O-P)',
        next: 't3'
      }
    },
    t3: {
      prev: 't2',
      c1: {
        n: '3a',
        l: 'Angulo-parietal lamella a single large, folded sheet (Figs. 2A)',
        s: 'Gastrocopta contracta'
      },
      c2:  {
        n: '3b',
        l: 'Angular and parietal lobes of angulo-parietal lamellae distinct (Figs. 2C, 2G-M, 2O-P)',
        next: 't4'
      }
    },
    t4: {
      prev: 't3',
      c1: {
        n: '4a',
        l: 'Fresh shells whitish to pale horn yellow (Figs. 2C, 2G-H, 2O-P) ',
        next:'t12'
      },
      c2:  {
        n: '4b',
        l: 'Fresh shells yellow-brown to brown-red (Figs. 2I-M) ',
        next: 't17'
      }
    },
    t5: {
      prev: 't1',
      c1: {
        n: '5a',
        l: 'Columellar lamella triangular or round in cross section (Figs. 1A-B)',
        next:'t6'
      },
      c2:  {
        n: '5b',
        l: 'Columellar lamella a more or less vertical, flat plate (Figs. 1C-E)',
        next: 't7'
      }
    },
    t6: {
      prev: 't5',
      c1: {
        n: '6a',
        l: 'Columellar lamella with both forward and basally pointing components, appearing more or less pyramidal in apertural view; shell usually >4 mm tall (Fig. 1A)',
        s: 'Gastrocopta armifera'
      },
      c2:  {
        n: '6b',
        l: 'Columellar lamella lacking a basal lobe, making the entire structure appear as a downward-pointing peg in apertural view; shell <4 mm tall (Fig. 1B)',
        s: 'Gastrocopta abbreviata'
      }
    },
    t7: {
      prev: 't5',
      c1: {
        n: '7a',
        l: 'Columellar lamella a simple plate, with lower end slightly more deeply inserted into aperture; lower palatal lamella taller than wide, inserted at same depth into the aperture as the upper palatal lamella (Fig. 1C)',
        s: 'Gastrocopta clappi'
      },
      c2:  {
        n: '7b',
        l: 'Columellar lamella creased in the middle, more deeply inserted at the top; lower palatal lamella as wide or wider than tall, inserted more deeply into aperture than upper palatal (Figs. 1D-E)',
        next: 't8'
      }
    },
    t8: {
      prev: 't7',
      c1: {
        n: '8a',
        l: 'Lamellae massive, filling over 3/4 of the aperture, lower end of the parietal lamellae overlapping the upper end of the lower palatal; shell with domed apex (Fig. 1D)',
        s: 'Gastrocopta ruidosensis'
      },
      c2:  {
        n: '8b',
        l: 'Lamellae less massive, filling less than 3/4 of the aperture, lower end of the parietal lamellae at most approaching the upper end of the lower palatal; shell with tapered apex (Fig. 1E)',
        s: 'Gastrocopta similis'
      }
    },
    t9: {
      prev: 't2',
      c1: {
        n: '9a',
        l: 'Fresh shells brown-red (Fig. 2N)',
        s: 'Gastrocopta cristata'
      },
      c2:  {
        n: '9b',
        l: 'Fresh shells white-transparent (Figs. 2D-F)',
        next: 't10'
      }
    },
    t10: {
      prev: 't9',
      c1: {
        n: '10a',
        l: 'Shell approximately cylindrical (Fig. 2F)',
        s: 'Gastrocopta pilsbryana'
      },
      c2:  {
        n: '10b',
        l: 'Shell ovoid-conical (Figs. 2D-E)',
        next: 't11'
      }
    },
    t11: {
      prev: 't10',
      c1: {
        n: '11a',
        l: 'Shell narrowly conical, with height more than 1.5 times width; lower palatal lamella deeply entering aperture (Fig. 2E)',
        s: 'Gastrocopta pentodon'
      },
      c2:  {
        n: '11b',
        l: 'Shell broadly conical, with height less than 1.5 times width; lower palatal lamella not deeply entering aperture (Fig. 2D)',
        s: 'Gastrocopta tappaniana'
      }
    },
    t12: {
      prev: 't4',
      c1: {
        n: '12a',
        l: 'Lobes of angulo-parietal lamella distinct, more or less parallel (Figs. 2B-C, 2G)',
        next: 't13'
      },
      c2:  {
        n: '12b',
        l: 'Angulo-parietal lobes intersecting, in form of a curved X-like structure (Figs. 2H, 2O-P)',
        next: 't15'
      }
    },
    t13: {
      prev: 't12',
      c1: {
        n: '13a',
        l: 'Basal and palatal lamellae absent; shell >2.4 mm tall (Fig. 2B) ',
        s: 'Gastrocopta corticaria'
      },
      c2:  {
        n: '13b',
        l: 'Basal and palatal lamellae present; shell <2.4 mm tall (Figs. 2C, 2G)',
        next: 't14'
      }
    },
    t14: {
      prev: 't13',
      c1: {
        n: '14a',
        l: 'Angulo-parietal lamella massive, almost filling aperture; height >1.75 mm ',
        s: 'Gastrocopta ashmuni'
      },
      c2:  {
        n: '14b',
        l: 'Angulo-parietal lamella filling only 1/4 of aperture; height <1.75 mm (Fig. 2G) ',
        s: 'Gastrocopta holzingeri'
      }
    },
    t15: {
      prev: 't12',
      c1: {
        n: '15a',
        l: 'Shell approximately cylindrical, with bottom three whorls of similar diameter (Fig. 2H)',
        s: 'Gastrocopta pellucida'
      },
      c2:  {
        n: '15b',
        l: 'Shell narrowly conical, with each whorl of increasing diameter (Figs. 2O-P)',
        next: 't16'
      }
    },
    t16: {
      prev: 't15',
      c1: {
        n: '16a',
        l: 'Aperture margin with thickened callus (Fig. 2O)',
        s: 'Gastrocopta rupicola'
      },
      c2:  {
        n: '16b',
        l: 'Aperture margin unthickened (Fig. 2P)',
        s: 'Gastrocopta servilis'
      }
    },
    t17: {
      prev: 't4',
      c1: {
        n: '17a',
        l: 'Alive or recently dead clean shells deep tan to brown, opaque (Figs. 2I-N)',
        next: 't18'
      },
      c2:  {
        n: '17b',
        l: 'Alive or recently dead clean shells horn-yellow to light yellow-brown, translucent (Figs. 2H, 2O-P)',
        next: 't24'
      }
    },
    t18: {
      prev: 't17',
      c1: {
        n: '18a',
        l: 'Angular lobe of angulo-parietal lamella reduced to a small protuberance (Fig. 2N)',
        s: 'Gastrocopta cristata'
      },
      c2:  {
        n: '18b',
        l: 'Angulo-parietal lamella distinctly bi-lobed (Figs. 2I-M, 2O-P)',
        next: 't19'
      }
    },
    t19: {
      prev: 't18',
      c1: {
        n: '19a',
        l: 'Angulo-parietal lobes parallel throughout (Fig. 2I)',
        s: 'Gastrocopta rogersensis'
      },
      c2:  {
        n: '19b',
        l: 'Angulo-parietal lobes intersecting, in form of a curved X-like structure (Figs. 2J-M) ',
        next: 't20'
      }
    },
    t20: {
      prev: 't19',
      c1: {
        n: '20a',
        l: 'Lower palatal lamella parallel to and inserted at roughly the same depth into aperture as upper palatal lamella (Figs. 2K-L)',
        next: 't21'
      },
      c2:  {
        n: '20b',
        l: 'Lower palatal lamella angled away from upper palatal lamella, and inserted more deeply into shell (Figs. 2J, 2M)',
        next: 't22'
      }
    },
    t21: {
      prev: 't20',
      c1: {
        n: '21a',
        l: 'Shell strongly tapered, with body whorl wider than the penultimate; callus plate of variable thickness on aperture margin in front of palatal lamellae (Fig. 2L)',
        s: 'Gastrocopta riograndensis'
      },
      c2:  {
        n: '21b',
        l: 'Shell columnar to ovate, with body and penultimate whorls of approximately same width; aperture margin unthickened (Fig. 2K))',
        s: 'Gastrocopta riparia'
      }
    },
    t22: {
      prev: 't20',
      c1: {
        n: '22a',
        l: 'Shell tapered, with body whorl wider than the penultimate (Fig. 2L) ',
        s: 'Gastrocopta riograndensis'
      },
      c2:  {
        n: '22b',
        l: 'Shell columnar to ovate, with body and penultimate whorls of approximately the same width (Figs. 2H, 2J, 2M, 2O-P)',
        next: 't23'
      }
    },
    t23: {
      prev: 't22',
      c1: {
        n: '23a',
        l: 'Angular lobe flaring upwards, triangular in shape, distinct from and crossing over the parietal lobe; lower palatal lamella inserted moderately deep, lying at a 45° angle to aperture axis; shell height usually >2.4 mm; thick callus plate present on aperture margin (Fig. 2M)',
        s: 'Gastrocopta sterkiana'
      },
      c2:  {
        n: '23b',
        l: 'Angular lobe linear and fused to the middle of the parietal lobe; lower palatal lamella inserted deeply, lying parallel to aperture; shell height usually <2.4 mm; no callus (Fig. 2J)',
        s: 'Gastrocopta procera'
      }
    },
    t24: {
      prev: 't17',
      c1: {
        n: '24a',
        l: 'Shell more or less cylindrical, with bottom three whorls of similar diameter (Fig. 2H)',
        s: 'Gastrocopta pellucida'
      },
      c2:  {
        n: '24b',
        l: 'Shell narrowly conical, with each whorl of increasing diameter (Figs. 2O-P)',
        next: 't25'
      }
    },
    t25: {
      prev: 't24',
      c1: {
        n: '25a',
        l: 'Aperture margin with thickened callus (Fig. 2O)',
        s: 'Gastrocopta rupicola'
      },
      c2:  {
        n: '25b',
        l: 'Aperture margin unthickened (Fig. 2P)',
        s: 'Gastrocopta servilis'
      }
    }
  },  // gastrocopta
  vertigo: {
    t1:
   { c1:
      { n: '1a',
        l: '1. Body whorl strongly pustulose (Fig. 6F) ',
        s: 'Vertigo malleata' },
     c2:
      { n: '1b',
        l:
         'Body whorl lacking strong pustulose bumps (Figs. 5, 6A-E, 6G-T) ',
        next: 't2' } },
  t2:
   { c1:
      { n: '2a',
        l:
         '2. Upper palatal lamella short, low and straight, with long axis barely visible in apertural view (Figs. 5, 6A-Q) ',
        next: 't3' },
     c2:
      { n: '2b',
        l:
         'Upper palatal lamella long, tall and longitudinally curved, allowing long axis to be visible in apertural view (Figs. 6R-T) ',
        next: 't8' },
     prev: 't1' },
  t3:
   { c1:
      { n: '3a',
        l: '3. Shell surface smooth or weakly striate (Fig. 5) ',
        next: 't4' },
     c2:
      { n: '3b',
        l: 'Shell surface strongly striate (Figs. 6A, 6C-E, 6G-Q) ',
        next: 't6' },
     prev: 't2' },
  t4:
   { c1:
      { n: '4a',
        l: '4. Six or more apertural lamellae (Figs. 5A-E, 5O, 6B) ',
        next: 't9' },
     c2:
      { n: '4b',
        l: 'Five or fewer apertural lamellae (Figs. 5F-R) ',
        next: 't5' },
     prev: 't3' },
  t5:
   { c1:
      { n: '5a',
        l: '5. Four or fewer apertural lamellae (Figs. 5F-N, 5R) ',
        next: 't15' },
     c2:
      { n: '5b',
        l: 'Five apertural lamellae (Figs. 5D, 5P-O) ',
        next: 't27' },
     prev: 't4' },
  t6:
   { c1:
      { n: '6a',
        l:
         '6. Parietal lamella pointed directly at lower palatal lamella, so that parietal, lower palatal, and columellar lamellae form a cross (Figs. 5J, 6C-E, 6I) ',
        next: 't33' },
     c2:
      { n: '6b',
        l:
         'Parietal lamella pointed at upper palatal or space between the upper and lower palatals (Figs. 6A-B, 6G-H, 6J-M) ',
        next: 't7' },
     prev: 't3' },
  t7:
   { c1:
      { n: '7a',
        l:
         '7. Lower palatal lamella inserted near aperture margin so that only short axis is visible when seen in apertural view (Figs. 6A-E, 6G-M) ',
        next: 't36' },
     c2:
      { n: '7b',
        l:
         'Lower palatal lamella inserted more deeply into shell so that long axis is visible when seen in apertural view (Figs. 6N-Q) ',
        next: 't43' },
     prev: 't6' },
  t8:
   { c1:
      { n: '8a',
        l:
         '8. Aperture margin thickened; shell color deep yellow; imperforate (Figs. 6R-S) ',
        s: 'Vertigo alabamensis' },
     c2:
      { n: '8b',
        l:
         'Aperture margin not thickened; shell color light yellow to horn; narrowly umbilicate (Fig. 6T) ',
        s: 'Vertigo clappi' },
     prev: 't2' },
  t9:
   { c1:
      { n: '9a',
        l:
         '9. Angular lamella absent; palatal wall with callus and light-colored crest; shell dull (Fig. 5O) ',
        s: 'Vertigo pygmaea' },
     c2:
      { n: '9b',
        l:
         'Angular lamella present; crest not light-colored (Figs. 5A-E, 6B) ',
        next: 't10' },
     prev: 't4' },
  t10:
   { c1:
      { n: '10a',
        l:
         '10. Shell weakly striate; dull; all lamellae short; shell with shallow suture and domed apex (Fig. 6B) ',
        s: 'Vertigo oralis' },
     c2:
      { n: '10b',
        l:
         'Shell smooth, shiny; at least some of the lamella long and blade-like (Figs. 5A-E) ',
        next: 't11' },
     prev: 't9' },
  t11:
   { c1:
      { n: '11a',
        l:
         '11. Shell basally obese, with height less than 2 times width (Figs. 5B-C) ',
        next: 't12' },
     c2:
      { n: '11b',
        l:
         'Shell not basally obese, with height greater than 2 times width (Figs. 5A, 5D-E) ',
        next: 't13' },
     prev: 't10' },
  t12:
   { c1:
      { n: '12a',
        l:
         '12. Aperture wider than tall; columellar lip of aperture broad, more or less straight and angled away from palatal wall; infra-parietallamellaneverpresent(Fig 5B)',
        s: 'Vertigo teskeyae' },
     c2:
      { n: '12b',
        l:
         'Aperture as tall as wide; columellar lip of aperture rounded, not markedly broad; infra-parietal lamella often present (Fig. 5C) ',
        s: 'Vertigo ovata' },
     prev: 't11' },
  t13:
   { c1:
      { n: '13a',
        l:
         '13. Shell height >2 1/2 mm; ~6 whorls; aperture less than \u0000 of shell height (Fig. 5A) ',
        s: 'Vertigo morsei' },
     c2:
      { n: '13b',
        l:
         'Shell height <2 1/2 mm; ~4 whorls; aperture more than \u0000 of shell height (Figs. 5D-E) ',
        next: 't14' },
     prev: 't11' },
  t14:
   { c1:
      { n: '14a',
        l:
         '14. Lower palatal lamella straight and not deeply entering aperture; shell height >1.9 mm (Fig. 5D) ',
        s: 'Vertigo binneyana' },
     c2:
      { n: '14b',
        l:
         'Lower palatal lamella curved and deeply entering aperture; shell height<1.9mm(Fig.5E)',
        s: 'Vertigo milium' },
     prev: 't13' },
  t15:
   { c1:
      { n: '15a',
        l:
         '15. No apertural lamellae; note that juvenile Vertigo species lack lamellae and may key out here; see also Columella species which are somewhat similar in form to Vertigo (Figs. 5F, 5K) ',
        next: 't16' },
     c2:
      { n: '15b',
        l: '2-4 apertural lamellae (Figs. 5G-J, 5L-N, 5Q-R) ',
        next: 't18' },
     prev: 't5' },
  t16:
   { c1:
      { n: '16a',
        l: '16. Crest absent; dull surface luster (Fig. 5F) ',
        s: 'Vertigo aff. genesii' },
     c2:
      { n: '16b',
        l: 'Crest present; glassy surfacel uster(Figs.5H,5K)',
        next: 't17' },
     prev: 't15' },
  t17:
   { c1:
      { n: '17a',
        l: '17. Shell <2 1/2 mm tall, shell ovoid-conical (Fig. 5H) ',
        s: 'Vertigo modesta hoppi' },
     c2:
      { n: '17b',
        l: 'Shell >2 1/2 mm tall, shell ovate (Fig. 5K) ',
        s: 'Vertigo modesta ultima' },
     prev: 't16' },
  t18:
   { c1:
      { n: '18a',
        l: '18. One or two apertural lamellae (Figs. 5G-H)',
        next: 't19' },
     c2:
      { n: '18b',
        l: 'Three or four apertural lamellae (Figs. 5L-O, 5Q-R) ',
        next: 't20' },
     prev: 't15' },
  t19:
   { c1:
      { n: '19a',
        l:
         '19. Shell lacking palatal lamellae; ovoid-conical; crest present (Fig. 5H) ',
        s: 'Vertigo modesta hoppi' },
     c2:
      { n: '19b',
        l:
         'At least one strong palatal lamellae present; shell cylindrical; crest absent (Fig. 5G) ',
        s: 'Vertigo oughtoni' },
     prev: 't18' },
  t20:
   { c1:
      { n: '20a',
        l: '20. Shell >2 mm tall, ovoid-cylindrical (Figs. 5G, 5I-J) ',
        next: 't21' },
     c2:
      { n: '20b',
        l: 'Shell 2 mm or less tall, ovoid-conical (Figs. 5L-N, 5Q-R) ',
        next: 't23' },
     prev: 't18' },
  t21:
   { c1:
      { n: '21a',
        l:
         '21. Four apertural lamellae, lower and upper palatal lamellae of similar size (Fig. 5J) ',
        s: 'Vertigo modesta' },
     c2:
      { n: '21b',
        l:
         'Three or four lamellae, upper palatal lamella weak or absent (Figs. 5G, 5I) ',
        next: 't22' },
     prev: 't20' },
  t22:
   { c1:
      { n: '22a',
        l:
         '22. Shell ovoid; >21⁄4 mm tall; lower palatal lamella a short peg (Fig. 5I) ',
        s: 'Vertigo modesta form arctica' },
     c2:
      { n: '22b',
        l:
         'Shell cylindrical; 21⁄4 mm or less tall; lower palatal lamella longer than wide (Fig. 5G) ',
        s: 'Vertigo oughtoni' },
     prev: 't21' },
  t23:
   { c1:
      { n: '23a',
        l:
         '23. Body whorl narrower than penultimate whorl, making shell bluntly pointed at both top and bottom; four lamellae, with an elongate vertical columellar (Fig. 5L) ',
        s: 'Vertigo oscariana' },
     c2:
      { n: '23b',
        l:
         'Body whorl at least as wide as the penultimate whorl; columellar lamella peg-shaped (Figs. 5M-N, 5Q-R) ',
        next: 't24' },
     prev: 't20' },
  t24:
   { c1:
      { n: '24a',
        l:
         '24. Body whorl inflated, making shell height less than twice the width (Figs. 5Q-R) ',
        next: 't25' },
     c2:
      { n: '24b',
        l:
         'Body whorl not greatly inflated, making shell height approximately twice the width (Figs. 5M-N) ',
        next: 't26' },
     prev: 't23' },
  t25:
   { c1:
      { n: '25a',
        l:
         '25. Moderately strong sinulus; shell color red-brown; weak spiral striation on body whorl; aperture margin pale (Fig. 5Q) ',
        s: 'Vertigo ventricosa' },
     c2:
      { n: '25b',
        l:
         'Weak sinulus; shell color with slight greenish cast; distinct spiral striation on body whorl; aperture margin usually dark olive-brown to black (Fig. 5R) ',
        s: 'Vertigo perryi' },
     prev: 't24' },
  t26:
   { c1:
      { n: '26a',
        l:
         '26. Shell height >13⁄4 mm; a weak upper palatal lamella often present (Fig. 5N) ',
        s: 'Vertigo tridentata' },
     c2:
      { n: '26b',
        l:
         'Shell height <13⁄4 mm; upper palatal lamella absent (Fig. 5M) ',
        s: 'Vertigo parvula' },
     prev: 't24' },
  t27:
   { c1:
      { n: '27a',
        l:
         '27. Shell >21⁄4 mm tall; angular lamella present (Fig. 5J but with angular) ',
        s: 'Vertigo modesta form parietalis' },
     c2:
      { n: '27b',
        l:
         'Shell <21⁄4 mm tall; angular lamella absent (Figs. 5C-D, 5O-Q, 6J) ',
        next: 't28' },
     prev: 't5' },
  t28:
   { c1:
      { n: '28a',
        l:
         '28. Shell height less than twice the width, with marked basal inflation (Figs. 5C, 5Q) ',
        next: 't29' },
     c2:
      { n: '28b',
        l:
         'Shell height twice the width or more, ovoid (Figs. 5D, 5O-Q, 6J) ',
        next: 't30' },
     prev: 't27' },
  t29:
   { c1:
      { n: '29a',
        l:
         '29. Strong apertural lamellae and sinulus; shell translucent (Fig. 5C, but lacking infraparietal) ',
        s: 'Vertigo ovata' },
     c2:
      { n: '29b',
        l:
         'Moderate apertural lamellae and sinulus; shell glassy and transparent (Fig. 5Q) ',
        s: 'Vertigo ventricosa' },
     prev: 't28' },
  t30:
   { c1:
      { n: '30a',
        l:
         '30. Shell weakly striate; single depression behind aperture over both palatal lamellae (Fig. 6J) ',
        s: 'Vertigo bollesiana' },
     c2:
      { n: '30b',
        l:
         'Shell smooth; separate slight depressions under each palatal lamella, or none (Figs. 5D, 5O-P) ',
        next: 't31' },
     prev: 't28' },
  t31:
   { c1:
      { n: '31a',
        l:
         '31. Shell surface dull; strong crest; light-colored callus on palatal wall (Fig. 5O) ',
        s: 'Vertigo pygmaea' },
     c2:
      { n: '31b',
        l:
         'Shell surface shiny; crest less prominent; callus of same color as shell (Figs. 5D, 5P) ',
        next: 't32' },
     prev: 't30' },
  t32:
   { c1:
      { n: '32a',
        l:
         '32. Lower palatal lamella inserted more deeply than upper palatal; upper palatal lamella thickened towards aperture; shell shape ovoid (Fig. 5D) ',
        s: 'Vertigo binneyana' },
     c2:
      { n: '32b',
        l:
         'Lower palatal lamella inserted as deeply as upper; upper palatal lamella not thickened towards aperture; shell apex elongate and somewhat conical; strong callus often present in base-rich habitats (Fig. 5P) ',
        s: 'Vertigo elatior' },
     prev: 't31' },
  t33:
   { c1:
      { n: '33a',
        l: '33. Shell >2.3 mm tall, shiny with weak striae (Fig. 5J) ',
        s: 'Vertigo modesta' },
     c2:
      { n: '33b',
        l:
         'Shell <2.3 mm tall, shell dull with distinct striae (Fig. 6) ',
        next: 't34' },
     prev: 't6' },
  t34:
   { c1:
      { n: '34a',
        l:
         '34. Shell shape conical with body whorl much wider than the penultimate; color deep cinnamon-red; crest absent; shell striation irregular in strength and spacing. (Fig. 6I) ',
        s: 'Vertigo meramecensis' },
     c2:
      { n: '34b',
        l:
         'Shell shape ovate with body whorl approximately the same width as the penultimate; color yellow-red brown; crest present; shell striation uniform (Figs. 6C-E) ',
        next: 't35' },
     prev: 't33' },
  t35:
   { c1:
      { n: '35a',
        l:
         '35. Upper and lower palatal lamellae short and of same length; shell striation fine, regular; crest weak to moderate (Figs. 6D-E) ',
        s: 'Vertigo cristata' },
     c2:
      { n: '35b',
        l:
         'Lower palatal lamella longer than upper palatal; shell striation coarse, irregular; very strong crest (Fig. 6C) ',
        s: 'Vertigo concinnula' },
     prev: 't34' },
  t36:
   { c1:
      { n: '36a',
        l: '36. Angular lamella present (Figs. 6A-B, 6G-H, 6M) ',
        next: 't37' },
     c2:
      { n: '36b',
        l: 'Angular lamella absent (Figs. 6G, 6J-L) ',
        next: 't41' },
     prev: 't7' },
  t37:
   { c1:
      { n: '37a',
        l: '37. Basal lamella absent (Figs. 6G, 6M)',
        next: 't38' },
     c2:
      { n: '37b',
        l: 'Basal lamella present (Figs. 6A-B, 6H) ',
        next: 't39' },
     prev: 't36' },
  t38:
   { c1:
      { n: '38a',
        l:
         '38. Shell ovoid, <1 1/2 mm tall; angular lamella weak/vestigal (Fig. 6G) ',
        s: 'Vertigo hebardi' },
     c2:
      { n: '38b',
        l:
         'Shell cylindrical, >1 1/2 mm tall; angular lamella strong (Fig. 6M) ',
        s: 'Vertigo arizonensis' },
     prev: 't37' },
  t39:
   { c1:
      { n: '39a',
        l:
         '39. Shell cylindrical with bottom two whorls of same width; no callus on palatal wall (Fig. 6H) ',
        s: 'Vertigo hannai' },
     c2:
      { n: '39b',
        l:
         'Shell ovate, body whorl larger than penultimate whorl; weak callus present on palatal wall (Figs. 6A-B) ',
        next: 't40' },
     prev: 't37' },
  t40:
   { c1:
      { n: '40a',
        l:
         '40. Shell narrowly ovate; coarsely striate; usually >1.8 mm tall; apex tapered (Fig. 6A) ',
        s: 'Vertigo rugosula' },
     c2:
      { n: '40b',
        l:
         'Shell broadly ovate; weakly striate; usually <1.8 mm tall; apex domed (Fig. 6B) ',
        s: 'Vertigo oralis' },
     prev: 't39' },
  t41:
   { c1:
      { n: '41a',
        l: '41. Basal lamella absent; shell height <1 1/2 mm (Fig. 6G) ',
        s: 'Vertigo hebardi' },
     c2:
      { n: '41b',
        l: 'Basal lamella present; shell height >1 1/2 mm (Figs. 6J-L) ',
        next: 't42' },
     prev: 't36' },
  t42:
   { c1:
      { n: '42a',
        l:
         '42. Striae indistinct, with shell often appearing smooth under low (×10) magnification; single deep depression over both palatal lamellae; ~13⁄4 mm tall (Fig. 6J) ',
        s: 'Vertigo bollesiana' },
     c2:
      { n: '42b',
        l:
         'Striae distinct, with shell not appearing smooth under low (×10) magnification; palatal depression weak or absent; most forms >13⁄4 mm tall (Fig. 6L), with small southern Appalachian forms being ~13⁄4 mm tall (Fig. 6K) ',
        s: 'Vertigo gouldii' },
     prev: 't41' },
  t43:
   { c1:
      { n: '43a',
        l:
         '43. Callus surrounding at least the upper palatal and often the entire palatal wall; ranging from eastern Ontario to Alaska and south to New Mexico (Fig. 6N) ',
        s: 'Vertigo arthuri' },
     c2:
      { n: '43b',
        l: 'Callus absent on palatal wall (Figs. 6O-Q) ',
        next: 't44' },
     prev: 't7' },
  t44:
   { c1:
      { n: '44a',
        l:
         '44. Columellar lamella more massive than the parietal; angular lamella strong; lower palatal lamella so deeply inserted that most of it is obscured by the columellar wall; striation fine and sharp (Fig. 6Q) ',
        s: 'Vertigo nylanderi' },
     c2:
      { n: '44b',
        l:
         'Parietal lamella more massive than the columellar; angular lamella weak or absent; lower palatal lamella less deeply inserted so that most is observable in apertural view; striae somewhat rounded (Figs. 6O-P) ',
        next: 't45' },
     prev: 't43' },
  t45:
   { c1:
      { n: '45a',
        l:
         '45. Basal and weak angular lamellae often present; ranging from the Upper Mississippi River valley to eastern Ontario (Fig. 6O) ',
        s: 'Vertigo hubrichti' },
     c2:
      { n: '45b',
        l:
         'Basal and angular lamellae often absent; ranging from Newfoundland and central Manitoba to northern Minnesota, northern Wisconsin, and the New England states; also in Alaska and the Yukon (Fig. 6P) ',
        s: 'Vertigo paradoxa' },
     prev: 't44' }
 }, // vertigo
  columella: {
    t1: {
      c1: {
        n: '1a',
        l: 'Shell cylindrical; apex domed; adult shell with 6-7 whorls, >2.5 mm tall (Fig. 4A)',
        s: 'Columella columella alticola'
      },
      c2: {
        n: '1b',
        l: 'Shell tapered; apex conical; adult shell with 5.5-6.5 whorls, <2.5 mm tall (Figs. 4B-C)',
        s: 'Columella simplex'
      }
    }
  }, // columella
  pupilla: {
    t1: {
      c1: {
        n: '1a',
        l: 'Aperture with three well-developed lamellae; palatal lamella often longer than wide (Fig. 3D)',
        s: 'Pupilla blandi'
      },
      c2: {
        n: '1b',
        l: 'Aperture with two or fewer lamellae; palatal lamellae (if present) usually as wide as long (Figs. 3A-C)',
        next: 't2'
      },
    },
    t2: {
      prev: 't1',
      c1: {
        n: '2a',
        l: 'Callus inserted into aperture; shell >3 mm tall (Figs. 3A-B)',
        s: 'Pupilla muscorum'
      },
      c2: {
        n: '2b',
        l: 'Massive callus at apertural margin; shell <2.75 mm tall (Fig. 3C)',
        s: 'Pupilla muscorum xerobia'
      },
    },
  }, // Pupilla
  pupoides: {
    t1: {
      c1: {
        n: '1a',
        l: 'Shell conical (Figs. 3G-H)',
        next: 't2'
      },
      c2: {
        n: '1b',
        l: 'Shell cylindrical-ovoid (Figs. 3E-F)',
        next: 't3'
      },
    },
    t2: {
      prev: 't1',
      c1: {
        n: '2a',
        l: 'Adult shell with calcified apertural margin (Fig. 3H)',
        s: 'Pupoides albilabris'
      },
      c2: {
        n: '2b',
        l: 'Adult shell with unthickened apertural margin (Fig. 3G)',
        s: 'Pupoides modicus'
      },
    },
    t3: {
      prev: 't1',
      c1: {
        n: '3a',
        l: 'Shell surface with regular, widely-spaced ribs; aperture calcified (Fig. 3E) ',
        s: 'Pupoides hordaceus'
      },
      c2: {
        n: '3b',
        l: 'Shell surface with irregular striations; aperture expanded but unthickened (Fig. 3F)',
        s: 'Pupoides inornatus'
      },
    }
  }, // pupoides
  polygyridae: { t1:
   { c1:
      { n: '1a',
        l:
         ' Shell aperture with one, two or three teeth. Genera Stenotrema, Polygyriscus, Polygyra, Mesodon (in part), Triodopsis (in part) ',
        next: 't2' },
     c2:
      { n: '1b',
        l:
         ' Shell aperture without teeth, or at most with only a low callus in the basal columellar curve of the lip. Genera Allogona, Praticolella, Mesodon (in part), Triodopsis (in part)',
        next: 't92' } },
  t2:
   { c1:
      { n: '2a',
        l:
         ' Aperture slitlike, narrow, with a long parietal tooth, and usually with a notched basal lip, Genus Stenotrema ',
        next: 't3' },
     c2:
      { n: '2b',
        l:
         ' Aperture more or less round or oval; parietal tooth usually shorter: basal lip usually not notched. ',
        next: 't28' },
     prev: 't1',
     img: 'poly-burch/330.jpg'  },
  t3:
   { c1:
      { n: '3a',
        l: ' Shell periphery angular or carinate.  ',
        next: 't4' },
     c2:
      { n: '3b',
        l: '  Shell periphery round or only weakly angular ',
        next: 't10' },
     prev: 't2' },
  t4:
   { c1:
      { n: '4a',
        l: ' Shell periphery very strongly angular or carinate. ',
        next: 't5' },
     c2:
      { n: '4b',
        l: ' Shell periphery less strongly angular: not carinate. ',
        next: 't8' },
     prev: 't3' },
  t5:
   { c1:
      { n: '5a',
        l: ' Outer edge of basal lip free from the body whorl. ',
        next: 't6' },
     c2:
      { n: '5b',
        l: ' Basal lip appressed to the body whorl. ',
        next: 't7' },
     prev: 't4' },
  t6:
   { c1:
      { n: '6a',
        l:
         ' Shell very depressed, lens-shaped. height about 1/2 the diameter: basal Tip with a notch near the columella. (a)',
         s: 'Euchemotrema hubrichti',
        o: 'Stenotrema hubrichti' },
     c2:
      { n: '6b',
        l:
         ' Shell less strongly depressed, height more than 1/2 the diameter; basal lip without a notch near the columella. (b)',
        s: 'Stenotrema barbigerum' },
     prev: 't5',
     img: 'poly-burch/331.jpg' },
  t7:
   { c1:
      { n: '7a',
        l:
         ' Shell very depressed, lens-shaped, height less than 1/2 the diameter. ',
        s: 'Stenotrema spinosum' },
     c2:
      { n: '7b',
        l:
         '  Shell less strongly depressed, height more than the diameter. ',
        s: 'Stenotrema edgarianum' },
     prev: 't5' },
  t8:
   { c1:
      { n: '8a',
        l:
         '  Basal lip (in basal view) with a small or indistinct notch. ',
        s: 'Stenotrema edvardsi' },
     c2:
      { n: '8b',
        l: '  Basal lip with a deep and well-developed notch. ',
        next: 't9' },
     prev: 't4' },
  t9:
   { c1:
      { n: '9a',
        l: ' Shell surface rather smooth. ',
        s: 'Stenotrema labrosum' },
     c2:
      { n: '9b',
        l: ' Shell surface with long periostracal hairs. ',
        s: 'Stenotrema pilsbryi' },
     prev: 't8' },
  t10:
   { c1: { n: '10a', l: ' Basal lip without a notch ', next: 't11' },
     c2:
      { n: '10b', l: ' Basal lip with a median notch ', next: 't13' },
     prev: 't3' },
  t11:
   { c1:
      { n: '11a',
        l:
         ' Aperture with a lamella parallel to the basal lip and parietal tooth. ',
        s: 'Stenotrema maxillatum' },
     c2:
      { n: '11b',
        l:
         ' Aperture without a lamella in addition to the parietal tooth. ',
        next: 't12' },
     prev: 't10' },
  t12:
   { c1:
      { n: '12a',
        l: ' Shell relatively small, 9 mm. or less in diameter. ',
        s: 'Euchemotrema leai',
        o: 'Stenotrema leai' },
     c2:
      { n: '12b',
        l: ' Shell larger, 10 mm. or more in diameter. ',
        s: 'Euchemotrema fraternum',
        o: 'Stenotrema fraternum' },
     prev: 't11' },
  t13:
   { c1: { n: '13a', l: ' Notch in basal lip wide (a,b) ', next: 't14' },
     c2:
      { n: '13b',
        l: ' Notch in basal lip narrow or small and nearly obsolete. (c)',
        next: 't15' },
     prev: 't10',
     img: 'poly-burch/342.jpg' },
  t14:
   { c1:
      { n: '14a',
        l: ' Notch in basal lip very wide. (a)',
        s: 'Stenotrema cohuttense' },
     c2:
      { n: '14b',
        l: ' Notch in basal lip narrower. (b)',
        s: 'Stenotrema brevipila' },
     prev: 't13',
     img: 'poly-burch/342.jpg'  },
  t15:
   { c1:
      { n: '15a',
        l:
         ' Parietal wall with a small denticle at the distal end of the parietal tooth. ',
        s: 'Stenotrema unciferum' },
     c2:
      { n: '15b',
        l:
         ' Parietal wall without a denticle at the distal end of the parietal tooth ',
        next: 't16' },
     prev: 't13' },
  t16:
   { c1:
      { n: '16a',
        l: ' Shell relatively small, 6 mm. or less in diameter. ',
        s: 'Stenotrema pilula' },
     c2:
      { n: '16b',
        l: ' Shell larger, more than 6 mm. in diameter ',
        next: 't17' },
     prev: 't15' },
  t17:
   { c1:
      { n: '17a',
        l: ' Shell surface without periostracal hairs or papillae ',
        next: 't18' },
     c2:
      { n: '17b',
        l:
         ' Shell surface sculptured with periostracal hairs or papillae  ',
        next: 't21' },
     prev: 't16' },
  t18:
   { c1:
      { n: '18a',
        l: ' Shell 9 mm. or less in diameter. ',
        next: 't19' },
     c2:
      { n: '18b',
        l: ' Shell larger, 9.8 mm. or more in diameter. ',
        next: 't20' },
     prev: 't17' },
  t19:
   { c1:
      { n: '19a',
        l: ' Spire depressed, height about 1/2 the diameter. ',
        s: 'Stenotrema blandianum' },
     c2:
      { n: '19b',
        l: ' Spire raised, height more than 2/3 the diameter. ',
        s: 'Stenotrema magnafumosum'
      },
     prev: 't18' },
  t20:
   { c1:
      { n: '20a',
        l: ' Shell depressed. ',
        s: 'Stenotrema stenotrema form nudum' },
     c2:
      { n: '20b', l: ' Shell globose. ', s: 'Stenotrema depilatum' },
     prev: 't18' },
  t21:
   { c1:
      { n: '21a',
        l:
         ' Notch in basal lip very small and shallow, not well developed. (a)',
        next: 't22' },
     c2:
      { n: '21b',
        l: ' Notch in basal lip narrow, but rather well developed (b)',
        next: 't23' },
     prev: 't17',
     img: 'poly-burch/351.jpg'  },
  t22:
   { c1:
      { n: '22a',
        l: ' Shell 11.8 mm, or more in diameter. ',
        s: 'Stenotrema florida' },
     c2:
      { n: '22b',
        l: ' Shell less than 9 mm, in diameter. ',
        s: 'Stenotrema waldense' },
     prev: 't21' },
  t23:
   { c1:
      { n: '23a', l: ' Interdenticular sinus deep. (a)', next: 't24' },
     c2:
      { n: '23b', l: ' interdenticular sinus shallow. (b)', next: 't25' },
     prev: 't21',
     img: 'poly-burch/354.jpg'  },
  t24:
   { c1:
      { n: '24a',
        l: ' Shell 7 mm. or less in diameter. ',
        s: 'Stenotrema deceptum' },
     c2:
      { n: '24b', l: ' Stenotrema exodon', s: 'Stenotrema exodon' },
     prev: 't23' },
  t25:
   { c1: { n: '25a', l: ' Aperture narrow (a)', next: 't26' },
     c2: { n: '25b', l: ' Aperture wider (b)', next: 't27' },
     prev: 't23',
     img: 'poly-burch/357.jpg'  },
  t26:
   { c1:
      { n: '26a', l: ' Shell depressed ', s: 'Stenotrema stenotrema' },
     c2:
      { n: '26b',
        l: ' Shell subglobose. ',
        s: 'Stenotrema magnafumosum' },
     prev: 't25' },
  t27:
   { c1:
      { n: '27a', l: ' Shell depressed. ', s: 'Stenotrema hirsutum' },
     c2:
      { n: '27b', l: ' Shell globose. ', s: 'Stenotrema altispira' },
     prev: 't25' },
  t28:
   { c1:
      { n: '28a',
        l:
         ' Aperture relatively small in relation to overall size of shell (1: a,b,c), or aperture nearly closed by teeth or with the parietal callus often biramose and having a raised proximal edge (2: d,e), Genera Polygyriscus, Polygyra ',
        next: 't29'   },
     c2:
      { n: '28b',
        l:
         ' Aperture usually relatively large, parietal callus not biramose and without a raised proximal edge (1: d,e), Genera Mesodon (in part), Triodopsis (in part) ',
        next: 't51' },
     prev: 't2',
     img: 'poly-burch/362.jpg',
     img2: 'poly-burch/364.jpg' },
  t29:
   { c1:
      { n: '29a',
        l:
         ' Shell small, 4.5 mm. or less in diameter: aperture and last part of body whorl prominently deflected basally. ',
        s: 'Polygyriscus virginianus' },
     c2:
      { n: '29b',
        l:
         ' Shell larger, usually more than 4.5 mm. in diameter, or if smaller, without prominently deflected aperture. Genus Polygyra. ',
        next: 't30' },
     prev: 't28' },
  t30:
   { c1:
      { n: '30a',
        l: ' Apertural lip without teeth. Subgenus Polygyra. ',
        next: 't31' },
     c2:
      { n: '30b',
        l: ' Apertural lip with two or three teeth. Subgenus (a)',
        next: 't32' },
     prev: 't29',
     img: 'poly-burch/364.jpg' },
  t31:
   { c1:
      { n: '31a',
        l:
         ' Shell with a parietal lamella ending within the first half of the last whorl. ',
        s: 'Polygyra cereolus' },
     c2:
      { n: '31b',
        l:
         ' Shell without a parietal lamella in the first half of the last whorl. ',
        s: 'Polygyra septemvolva' },
     prev: 't30' },
  t32:
   { c1:
      { n: '32a',
        l: ' Proximal edge of parietal callus conspicuously raised (c)',
        next: 't33' },
     c2:
      { n: '32b',
        l: ' Proximal edge of parietal callus not raised ',
        next: 't37' },
     prev: 't30',
     img: 'poly-burch/364.jpg' },
  t33:
   { c1:
      { n: '33a',
        l:
         ' Parietal tooth U-shaped, extending deeply into the aperture. (b)',
         s: 'Daedalochila hippocrepis',
        o: 'Polygyra hippocrepis' },
     c2:
      { n: '33b',
        l:
         ' Parietal tooth irregular, not U-shaped, not extending deeply into the aperture. ',
        next: 't34' },
     prev: 't32',
     img: 'poly-burch/364.jpg' },
  t34:
   { c1:
      { n: '34a',
        l:
         ' Proximal end of the parietal callus closely appressed to the whorl. (a)',
        s: 'Daedalochila uvulifera',
        o: 'Polygyra uvulifera' },
     c2:
      { n: '34b',
        l:
         ' Proximal end of the parietal callus raised and continuous. (b)',
        next: 't35' },
     prev: 't33',
     img: 'poly-burch/368.jpg' },
  t35:
   { c1:
      { n: '35a',
        l:
         ' Inner part of body whorl with a furrow parallel to the umbilical suture (c)',
        next: 't36' },
     c2:
      { n: '35b',
        l:
         ' Inner part of body whorl without a furrow parallel to the umbilical suture. ',
        s: 'Daedalochila avara',
        o: 'Polygyra avara' },
     prev: 't34',
     img: 'poly-burch/368.jpg' },
  t36:
   { c1:
      { n: '36a',
        l: ' Parietal tooth long and irregular in shape. ',
        s: 'Daedalochila auriculata',
        o: 'Polygyra auriculata' },
     c2:
      { n: '36b',
        l: ' Parietal tooth shorter, more or less V-shaped. ',
        s: 'Daedalochila auriformis',
        o: 'Polygyra auriformis' },
     prev: 't35' },
  t37:
   { c1:
      { n: '37a',
        l: ' Parietal tooth triangular or rather square in shape (d)',
        next: 't38' },
     c2: { n: '37b', l: ' Parietal tooth V-shaped (e)', next: 't43' },
     prev: 't32',
     img: 'poly-burch/368.jpg' },
  t38:
   { c1:
      { n: '38a',
        l: ' Basal branch of parietal tooth without an angle (a)',
        next: 't39' },
     c2:
      { n: '38b',
        l: ' Basal branch of parietal tooth with an angle (b)',
        next: 't40' },
     prev: 't37',
     img: 'poly-burch/373.jpg' },
  t39:
   { c1:
      { n: '39a',
        l: ' Base of shell smooth: umbilicus small. ',
        s: 'Daedalochila jacksoni',
        o: 'Polygyra jacksoni' },
     c2:
      { n: '39b',
        l: ' Base of shell rib-striate; umbilicus larger. ',
        s: 'Daedalochila peregrina',
        o: 'Polygyra peregrina' },
     prev: 't38' },
  t40:
   { c1:
      { n: '40a',
        l: ' Basal tooth smaller than palatal tooth ',
        next: 't41' },
     c2:
      { n: '40b',
        l: ' Basal tooth and palatal tooth nearly equal in size. ',
        next: 't42' },
     prev: 't38' },
  t41:
   { c1:
      { n: '41a',
        l: ' Shell periphery carinate or strongly angular. ',
        s: 'Daedalochila fatigiata',
        o: 'Polygyra fatigiata' },
     c2:
      { n: '41b',
        l: ' Shell periphery only bluntly angular. ',
        s: 'Daedalochila troostiana',
        o: 'Polygyra troostiana' },
     prev: 't40' },
  t42:
   { c1:
      { n: '42a',
        l: ' Upper branch of parietal tooth with a small projection. ',
        s: 'Daedalochila plicata',
        o: 'Polygyra plicata' },
     c2:
      { n: '42b',
        l: ' Upper branch of parietal tooth without a projection. ',
        s: 'Daedalochila dorfeuilliana',
        o: 'Polygyra dorfeuilliana' },
     prev: 't40' },
  t43:
   { c1:
      { n: '43a',
        l: ' Shell sculptured with fine periostracal hairs. ',
        next: 't44' },
     c2:
      { n: '43b',
        l: ' Shell without fine periostracal hairs ',
        next: 't46' },
     prev: 't37' },
  t44:
   { c1:
      { n: '44a',
        l: ' Shell small, 4.7 mm. or less in diameter. ',
        s: 'Lobosculum pustula',
        o: 'Polygyra pustula' },
     c2:
      { n: '44b',
        l: ' Shell larger, 5mm or more in diameter.     ',
        next: 't45' },
     prev: 't43' },
  t45:
   { c1:
      { n: '45a',
        l: ' Umbilicus partially or nearly covered by basal lip. ',
        s: 'Daedalochila leporina',
        o: 'Polygyra leporina' },
     c2:
      { n: '45b',
        l: ' Umbilicus not partially covered by basal lip. ',
        s: 'Lobosculum pustuloides',
        o: 'Polygyra pustuloides' },
     prev: 't44' },
  t46:
   { c1:
      { n: '46a',
        l:
         ' Inner part of body whorl with a furrow parallel to the umbilical suture (c)',
        next: 't47' },
     c2:
      { n: '46b',
        l:
         ' Inner part of body whorl without furrow parallel to the umbilical suture ',
        next: 't48' },
     prev: 't43',
     img: 'poly-burch/368.jpg' },
  t47:
   { c1:
      { n: '47a',
        l: ' Shell relatively small, 8.8 mm. or less in diameter. ',
        s: 'Daedalochila mooreana',
        o: 'Polygyra mooreana' },
     c2:
      { n: '47b',
        l: ' Shell larger, 9 mm. or more in diameter. ',
        s: 'Daedalochila mooreana',
        o: 'Polygyra tholus' },
     prev: 't46' },
  t48:
   { c1:
      { n: '48a',
        l: ' Basal and palatal teeth widely separated. (d)',
        s: 'Daedalochila triodontoides',
        o: 'Polygyra triodontoides' },
     c2:
      { n: '48b',
        l: ' Basal and palatal teeth separated by only a narrow gap (e)',
        next: 't49' },
     prev: 't46',
     img: 'poly-burch/373.jpg' },
  t49:
   { c1:
      { n: '49a',
        l:
         ' Body whorl without coarser transverse striae behind the lip ',
         s: 'Triodopsis vultuosa',
        o: 'Polygyra latispira' },
     c2:
      { n: '49b',
        l:
         ' Body whorl with coarser transverse striae behind the lip. ',
        next: 't50' },
     prev: 't48' },
  t50:
   { c1:
      { n: '50a',
        l:
         ' Basal branch of parietal tooth much larger than the upper branch. ',
         s: 'Daedalochila chisosensis',
        o: 'Polygyra chisosensis' },
     c2:
      { n: '50b',
        l:
         ' Basal and upper branches of parietal tooth nearly equal in size. ',
         s: 'Linisa texasiana',
        o: 'Polygyra texasiana' },
     prev: 't49' },
  t51:
   { c1:
      { n: '51a',
        l: ' Shell imperforate (without an umbilical opening). ',
        next: 't52' },
     c2:
      { n: '51b', l: ' Shell perforate or umbilicate. ', next: 't75' },
     prev: 't28' },
  t52:
   { c1:
      { n: '52a',
        l: ' Shell with a tooth (palatal) on the outer apertural lip ',
        next: 't53' },
     c2:
      { n: '52b',
        l: ' Shell without a tooth on the outer apertural lip ',
        next: 't60' },
     prev: 't51' },
  t53:
   { c1:
      { n: '53a',
        l:
         ' Palatal tooth situated in center and most distal part of the outer lip: shell usually less than 17 mm, in diameter. ',
        next: 't54' },
     c2:
      { n: '53b',
        l:
         ' Palatal tooth situated in the upper part of the outer lip; shell usually more than 17 mm. in diameter ',
        next: 't57' },
     prev: 't52' },
  t54:
   { c1:
      { n: '54a', l: ' Basal tooth well developed. ', next: 't55' },
     c2:
      { n: '54b', l: ' Basal tooth not well developed. ', next: 't56' },
     prev: 't53' },
  t55:
   { c1:
      { n: '55a',
        l: ' Palatal tooth rather deeply recessed. ',
        s: 'Inflectarius rugeli',
        o: 'Mesodon rugeli' },
     c2:
      { n: '55b',
        l: ' Palatal tooth only slightly recessed. ',
        s: 'Inflectarius inflectus',
        o: 'Mesodon inflectus' },
     prev: 't54' },
  t56:
   { c1:
      { n: '56a',
        l: ' Palatal tooth relatively large. ',
        s: 'Inflectarius smithi',
        o: 'Mesodon smithi' },
     c2:
      { n: '56b',
        l: ' Palatal tooth relatively small. ',
        s: 'Inflectarius magazinensis',
        o: 'Mesodon magazinensis' },
     prev: 't54' },
  t57:
   { c1:
      { n: '57a',
        l: ' Shell sculptured with short stiff hairs ',
        s: 'Xolotrema denotatum',
        o: 'Triodopsis denotata' },
     c2: { n: '57b', l: ' Shell without hairs. ', next: 't58' },
   prev: 't53' },

  t58:
   { c1:
      { n: '58a',
        l: ' Shell periphery carinate. ',
        s: 'Xolotrema obstrictum',
        o: 'Triodopsis obstricta' },
     c2:
      { n: '58b',
        l: ' Shell periphery angular or rounded. ',
        next: 't59' },
     prev: 't57' },
  t59:
   { c1:
      { n: '59a',
        l: ' Shell periphery distinctly angular. ',
        s: 'Xolotrema caroliniense',
        o: 'Triodopsis caroliniensis' },
     c2:
      { n: '59b',
        l: ' Shell periphery rounded or only very bluntly angular. ',
        s: 'Xolotrema fosteri',
        o: 'Triodopsis fosteri' },
     prev: 't58' },
  t60:
   { c1:
      { n: '60a', l: ' Shell globose to subglobose. ', next: 't61' },
     c2: { n: '60b', l: ' Shell depressed ', next: 't66' },
     prev: 't52' },
  t61:
   { c1:
      { n: '61a',
        l: ' Shell marked with reddish-brown color bands. ',
        s: 'Webbhelix multilineata',
        o: 'Triodopsis multilineata' },
     c2: { n: '61b', l: ' Shell without color bands  ', next: 't62' },
     prev: 't60' },
  t62:
   { c1:
      { n: '62a',
        l: ' Shell large, 19 mm. or more in diameter.  ',
        next: 't63' },
     c2:
      { n: '62b',
        l: ' Shell smaller, less than 19 mm. in diameter. ',
        next: 't64' },
     prev: 't61' },
  t63:
   { c1:
      { n: '63a',
        l: ' Basal lip with a long lamina along the inner edge. ',
        s: 'Mesodon elevatus' },
     c2:
      { n: '63b',
        l:
         ' Basal lip with a blunt tooth near the columellar insertion. ',
        s: 'Mesodon zaletus' },
     prev: 't62' },
  t64:
   { c1:
      { n: '64a',
        l:
         ' Shell sculptured with fine, but well-developed spiral striae or indented lines. ',
         s: 'Patera clarki',
        o: 'Mesodon clarki' },
     c2:
      { n: '64b',
        l:
         ' Shell without, or with nearly obsolete, spiral indented lines. ',
        next: 't65' },
     prev: 't62' },
  t65:
   { c1:
      { n: '65a',
        l:
         ' Shell somewhat depressed; parietal tooth strongly developed. ',
         s: 'Fumonelix archeri',
        o: 'Mesodon archeri' },
     c2:
      { n: '65b',
        l:
         ' Shell less depressed; parietal tooth less strongly developed. ',
         s: 'Fumonelix wheatleyi',
        o: 'Mesodon wheatleyi' },
     prev: 't64' },
  t66:
   { c1:
      { n: '66a',
        l: ' Shell relatively small, 10 mm. or less in diameter. ',
        s: 'Fumonelix christyi',
        o: 'Mesodon christyi' },
     c2:
      { n: '66b',
        l: ' Shell larger, more than 12 mm. in diameter. ',
        next: 't67' },
     prev: 't60' },
  t67:
   { c1:
      { n: '67a', l: ' Shell with spiral sculpture. ', next: 't68' },
     c2:
      { n: '67b', l: ' Shell without spiral sculpture ', next: 't73' },
     prev: 't66' },
  t68:
   { c1:
      { n: '68a',
        l:
         ' Spiral sculpturing of body whorl consisting of minute papillae. ',
        next: 't69' },
     c2:
      { n: '68b',
        l:
         ' Spiral sculpturing of body whorl consisting of incised lines. ',
        next: 't70' },
     prev: 't67' },
  t69:
   { c1:
      { n: '69a',
        l: ' Shell 20 mm. or less in diameter. ',
        s: 'Patera appressa',
        o: 'Mesodon appressus' },
     c2:
      { n: '69b',
        l: ' Shell 22mm or more in diameter ',
        s: 'Patera sargentiana',
        o: 'Mesodon sargentianus' },
     prev: 't68' },
  t70:
   { c1: { n: '70a', l: ' Shell surface glossy. ', next: 't71' },
     c2:
      { n: '70b',
        l: ' Shell surface dull. ',
        s: 'Neohelix dentifera',
        o: 'Triodopsis dentifera' },
     prev: 't68' },
  t71:
   { c1:
      { n: '71a',
        l: ' Basal lip of aperture thickened by a basal lamina. ',
        s: 'Patera perigrapta',
        o: 'Mesodon perigraptus' },
     c2:
      { n: '71b',
        l: ' Basal lip of aperture without a distinct basal lamina. ',
        next: 't72' },
     prev: 't70' },
  t72:
   { c1:
      { n: '72a',
        l: ' Shell yellowish-olive. ',
        s: 'Inflectarius ferrissi',
        o: 'Mesodon ferrissi' },
     c2:
      { n: '72b',
        l: ' Shell pale flesh-colored. ',
        s: 'Patera roemeri',
        o: 'Mesodon roemeri' },
     prev: 't71' },
  t73:
   { c1:
      { n: '73a',
        l: ' Shell less than 17 mm. in diameter. ',
        next: 't74' },
     c2:
      { n: '73b',
        l: ' Shell’ more than 17 mm. in diameter. ',
        s: 'Fumonelix wetherbyi',
        o: 'Mesodon wetherbyi' },
     prev: 't67' },
  t74:
   { c1:
      { n: '74a',
        l: ' Shell 12.8-13.5 mm. in diameter: light chestnut-colored. ',
        s: 'Fumonelix jonesiana',
        o: 'Mesodon jonesianus' },
     c2:
      { n: '74b',
        l:
         ' Shell 13.4-16.4 mm. in diameter: buff to pale yellow-colored. ',
         s: 'Inflectarius subpalliatus',
        o: 'Mesodon subpalliatus' },
     prev: 't73' },
  t75:
   { c1:
      { n: '75a',
        l: ' Shell with a tooth (palatal) on the outer apertural lip. ',
        next: 't76' },
     c2:
      { n: '75b',
        l: ' Shell without a tooth on the outer apertural lip. ',
        next: 't85' },
     prev: 't51' },
  t76:
   { c1:
      { n: '76a',
        l: ' Shell relatively small, 9 mm. or less in diameter. ',
        s: 'Triodopsis cragini' },
     c2:
      { n: '76b',
        l: ' Shell larger, more than 9 mm, in diameter.. ',
        next: 't77' },
     prev: 't75' },
  t77:
   { c1:
      { n: '77a',
        l: ' Basal tooth in form of a long, marginal lamina. ',
        s: 'Xolotrema denotatum',
        o: 'Triodopsis denotata' },
     c2: { n: '77b', l: ' Basal tooth tubercular. ', next: 't78' },
     prev: 't76' },
  t78:
   { c1:
      { n: '78a',
        l: ' Palatal tooth recessed, not marginal to the outer lip. ',
        next: 't79' },
     c2:
      { n: '78b',
        l:
         ' Palatal tooth not recessed, but marginal to the outer lip. ',
        next: 't83' },
     prev: 't77' },
  t79:
   { c1:
      { n: '79a',
        l:
         ' Umbilicus relatively wide, 1/6 to 1/4 the shell diameter. ',
        next: 't80' },
     c2:
      { n: '79b',
        l: ' Umbilicus narrower, less than 1/6 the shell diameter. ',
        next: 't81' },
     prev: 't78' },
  t80:
   { c1:
      { n: '80a',
        l: ' Shell less than 13 mm. in diameter. ',
        s: 'Triodopsis neglecta' },
     c2:
      { n: '80b',
        l: ' Shell larger, more than 13 mm. in diameter. ',
        s: 'Triodopsis fraudulenta' },
     prev: 't79' },
  t81:
   { c1:
      { n: '81a',
        l: ' Palatal tooth deeply recessed. ',
        s: 'Triodopsis vultuosa' },
     c2:
      { n: '81b',
        l: ' Palatal tooth not deeply recessed. ',
        next: 't82' },
     prev: 't79' },
  t82:
   { c1:
      { n: '82a',
        l: ' Spire relatively high. ',
        s: 'Triodopsis vannostrandi' },
     c2:
      { n: '82b',
        l: ' Spire more depressed. ',
        s: 'Triodopsis fallax' },
     prev: 't81' },
  t83:
   { c1:
      { n: '83a',
        l: ' Palatal tooth situated on a buttress. ',
        s: 'Triodopsis rugosa' },
     c2:
      { n: '83b',
        l: ' Palatal tooth not on a buttress. ',
        next: 't84' },
     prev: 't78' },
  t84:
   { c1:
      { n: '84a',
        l:
         ' Distal end of parietal tooth directed to a point below the palatal tooth. (1a) ',
        s: 'Triodopsis tridentata' },
     c2:
      { n: '84b',
        l:
         ' Distal end of parietal tooth pointed at or above the palatal tooth (2a)',
        s: 'Triodopsis hopetonensis' },
     prev: 't83',
     img: 'poly-burch/422.jpg',
     img2: 'poly-burch/423.jpg' },
  t85:
   { c1:
      { n: '85a',
        l: ' Shell relatively small, less than 12 mm. in diameter. ',
        next: 't86' },
     c2:
      { n: '85b',
        l: ' Shell relatively large, 15 mm. or more In diameter. ',
        next: 't89' },
     prev: 't75' },
  t86:
   { c1:
      { n: '86a',
        l: ' Outer and basal lips merge with a gradual curve. ',
        next: 't87' },
     c2:
      { n: '86b',
        l: ' Outer and basal lips meet at an angle. ',
        next: 't88' },
     prev: 't85' },
  t87:
   { c1:
      { n: '87a',
        l: ' Shell less than 7 mm. in diameter. ',
        s: 'Praticolella lawae' },
     c2:
      { n: '87b',
        l: ' Shell more than 7 mm. in diameter. ',
        s: 'Triodopsis soelneri' },
     prev: 't86' },
  t88:
   { c1:
      { n: '88a',
        l: ' Shell usually 9 mm. or less in diameter. ',
        s: 'Euchemotrema leai',
        o: 'Stenotrema leai' },
     c2:
      { n: '88b',
        l: ' Shell usually more than 9mm in diameter. ',
        s: 'Euchemotrema fraternum',
        o: 'Stenotrema fraternum' },
     prev: 't86' },
  t89:
   { c1:
      { n: '89a',
        l:
         ' Umbilicus 1/2 covered to nearly covered by the reflected basal lip. ',
        next: 't90' },
     c2:
      { n: '89b',
        l: ' Umbilicus hardly covered by the reflected basal lip. ',
        next: 't91' },
     prev: 't85' },
  t90:
   { c1:
      { n: '90a', l: ' Shell subglobose. ', s: 'Mesodon thyroidus' },
     c2: { n: '90b', l: ' Shell depressed. ',
     s: 'Patera roemeri',
     o: 'Mesodon roemeri' },
     prev: 't89' },
  t91:
   { c1:
      { n: '91a',
        l:
         ' Shell usually less than 27 mm, in diameter: lip expansion narrow. ',
         s: 'Appalachina sayana',
        o: 'Mesodon sayanus' },
     c2:
      { n: '91b',
        l:
         ' Shell usually more than 27 mm. in diameter: lip expansion wide. ',
         s: 'Appalachina chilhoweensis',
        o: 'Mesodon chilhoweensis' },
     prev: 't89' },
  t92:
   { c1: { n: '92a', l: ' Shell imperforate. ', next: 't93' },
     c2:
      { n: '92b', l: ' Shell perforate or umbilicate. ', next: 't102' },
     prev: 't1' },
  t93:
   { c1:
      { n: '93a',
        l:
         ' Shell diameter usually less than 15 mm.; usually very glossy. ',
         s: 'Inflectarius downieanus',
        o: 'Mesodon downieanus' },
     c2:
      { n: '93b',
        l:
         ' Shell larger, usually more than 15 mm. in diameter; usually only moderately glossy or dull ',
        next: 't94' },
     prev: 't92' },
  t94:
   { c1:
      { n: '94a',
        l: ' Shell marked with reddish-brown color bands. ',
        s: 'Webbhelix multilineata',
        o: 'Triodopsis multilineata' },
     c2: { n: '94b', l: ' Shell without color bands. ', next: 't95' },
     prev: 't93' },
  t95:
   { c1: { n: '95a', l: ' Shell depressed. ', next: 't96' },
     c2:
      { n: '95b', l: ' Shell globose to subglobose. ', next: 't98' },
     prev: 't94' },
  t96:
   { c1:
      { n: '96a',
        l:
         ' Transverse striae low, fine: periphery of last whorl subangular. ',
         s: 'Patera roemeri',
        o: 'Mesodon roemeri' },
     c2:
      { n: '96b',
        l:
         ' Transverse striae raised and coarse: periphery of last whorl round ',
        next: 't97' },
     prev: 't95' },
  t97:
   { c1:
      { n: '97a',
        l:
         ' Color of shell olive-brown: diameter usually greater than 20 mm. ',
         s: 'Patera indianorum',
        o: 'Mesodon indianorum' },
     c2:
      { n: '97b',
        l:
         ' Color of shell cream to light brown; diameter usually less than 20 mm ',
         s: 'Neohelix divesta',
        o: 'Triodopsis divesta' },
     prev: 't96' },
  t98:
   { c1:
      { n: '98a',
        l: ' Apertural margin of basal lip rounded. ',
        s: 'Mesodon mitchellianus' },
     c2:
      { n: '98b',
        l: ' Apertural margin of basal lip straight. ',
        next: 't99' },
     prev: 't95' },
  t99:
   { c1:
      { n: '99a',
        l: ' Reflected part of lip narrow. ',
        s: 'Patera pennsylvanica',
        o: 'Mesodon pennsylvanicus' },
     c2:
      { n: '99b', l: ' Reflected part of lip wide. ', next: 't100' },
     prev: 't98' },
  t100:
   { c1:
      { n: '100a',
        l: ' Shell colored with an olive tint. ',
        s: 'Mesodon andrewsae' },
     c2:
      { n: '100b',
        l: ' Shell tannish or buff-colored. ',
        next: 't101' },
     prev: 't99' },
  t101:
   { c1:
      { n: '101a',
        l: ' Shell spire relatively high. ',
        s: 'Mesodon zaletus' },
     c2:
      { n: '101b',
        l: ' Shell spire more depressed. ',
        s: 'Neohelix albolabris',
        o: 'Triodopsis albolabris' },
     prev: 't100' },
  t102:
   { c1:
      { n: '102a',
        l: ' Shell large, usually more than 14 mm. in diameter ',
        next: 't103' },
     c2:
      { n: '102b',
        l: ' Shell smaller, usually less than 14 mm, in diameter. ',
        next: 't111' },
     prev: 't92' },
  t103:
   { c1:
      { n: '103a',
        l:
         ' Shell perforate or very narrowly umbilicate (umbilicus 1/10 or less the shell diameter) ',
        next: 't104' },
     c2:
      { n: '103b',
        l:
         ' Shell with a wider umbilicus, 1/9 or more the shell diameter ',
        next: 't108' },
     prev: 't102' },
  t104:
   { c1:
      { n: '104a', l: ' Shell globose to subglobose. ', next: 't105' },
     c2: { n: '104b', l: ' Shell depressed. ', next: 't106' },
     prev: 't103' },
  t105:
   { c1:
      { n: '105a',
        l: ' Spire high, shell rather globose. ',
        s: 'Mesodon clausus' },
     c2:
      { n: '105b',
        l: ' Spike more depressed, shell subglobose. ',
        s: 'Mesodon thyroidus' },
     prev: 't104' },
  t106:
   { c1:
      { n: '106a',
        l: ' Upper part of apertural lip reflected. ',
        s: 'Patera binneyana',
        o: 'Mesodon binneyanus' },
     c2:
      { n: '106b',
        l: ' Upper part of apertural lip not reflected. ',
        next: 't107' },
     prev: 't104' },
  t107:
   { c1:
      { n: '107a',
        l: ' Shell 16 mm. or less in diameter. ',
        s: 'Patera kiowaensis',
        o: 'Mesodon kiowaensis' },
     c2:
      { n: '107b',
        l: ' Shell larger, 18 mm. or more in diameter. ',
        s: 'Patera roemeri',
        o: 'Mesodon roemeri' },
     prev: 't106' },
  t108:
   { c1:
      { n: '108a',
        l: ' Shell marked with reddish-brown color bands. ',
        s: 'Allogona profunda' },
     c2:
      { n: '108b', l: ' Shell without color bands ', next: 't109' },
     prev: 't103' },
  t109:
   { c1:
      { n: '109a',
        l: ' Shell very large, 26 mm. or more in diameter. ',
        s: 'Appalachina chilhoweensis',
        o: 'Mesodon chilhoweensis' },
     c2:
      { n: '109b',
        l: ' Shell smaller, 23 mm. or less in diameter. ',
        next: 't110' },
     prev: 't108' },
  t110:
   { c1:
      { n: '110a',
        l: ' Spire raised, shell subglobose. ',
        s: 'Mesodon sanus' },
     c2:
      { n: '110b',
        l: ' Spire and shell very depressed. ',
        s: 'Patera clenchi',
        o: 'Mesodon clenchi' },
     prev: 't109' },
  t111:
   { c1:
      { n: '111a',
        l: ' First 1 1/2 apical whorls smooth ',
        next: 't112' },
     c2:
      { n: '111b',
        l:
         ' First 1 1/2 apical whorls sculptured with papillae or spiral striae ',
        next: 't115' },
     prev: 't102' },
  t112:
   { c1:
      { n: '112a',
        l: ' Shell less than 7 mm. in diameter. ',
        s: 'Praticolella taeniata',
        o: 'Praticolella campi' },
     c2:
      { n: '112b',
        l: ' Shell more than 7 mm. in diameter. ',
        next: 't113' },
     prev: 't111' },
  t113:
   { c1:
      { n: '113a',
        l:
         ' Aperture lip relatively thin; shell conspicuously banded. ',
        s: 'Praticolella griseola' },
     c2:
      { n: '113b',
        l:
         ' Aperture lip relatively thick; shell with or without bands. ',
        next: 't114' },
     prev: 't112' },
  t114:
   { c1:
      { n: '114a',
        l: ' Shell usually 9 mm, or less in diameter. ',
        s: 'Praticolella mobiliana' },
     c2:
      { n: '114b',
        l: ' Shell larger, more than 9 mm, in diameter. ',
        s: 'Praticolella berlandieriana' },
     prev: 't113' },
  t115:
   { c1:
      { n: '115a',
        l:
         ' First 1 1/2 apical whorls sculptured with papillae; shell usually 6 mm, or less in diameter. ',
        s: 'Praticolella lawae' },
     c2:
      { n: '115b',
        l:
         ' First 1 1/2 apical whorls sculptured with spiral striae: shell larger. more than 6 mm. in diameter. ',
        next: 't116' },
     prev: 't111' },
  t116:
   { c1:
      { n: '116a',
        l:
         ' Shell less than 9 mm. in diameter: body whorl without a furrow just preceeding the apertural lip. ',
        s: 'Praticolella jejuna' },
     c2:
      { n: '116b',
        l:
         ' Shell more than 10 mm. in diameter: body whorl with a furrow just preceeding the apertural lip. ',
        s: 'Praticolella bakeri' },
     prev: 't115' } }, // polygyridae
strobilopsidae :{ t1:
   { c1:
      { n: '1a',
        l:
         ' Shell dome-shaped. globose to slightly depressed; ribs well-devel- oped; umbilicus 1/12-1/6 the diameter of the shell ',
        next: 't2' },
     c2:
      { n: '1b',
        l:
         ' Shell rather strongly depressed, weakly ribbed: umbilicus 1/4-1/3 the diameter of the shell. ',
        s: 'Strobilops hubbardi' } },
  t2:
   { c1:
      { n: '2a',
        l:
         ' Spire elevated, convexly conic or high dome-shaped; periphery of last whorl round or subangular. ',
        next: 't3' },
     c2:
      { n: '2b',
        l:
         ' Spire less elevated, its sides only slightly convex; periphery of body whorl angular. ',
         s: 'Strobilops aeneus',
        o: 'Strobilops aenea' },
     prev: 't1' },
  t3:
   { c1:
      { n: '3a',
        l:
         ' Shell small, diameter 2.5 mm. or less; basal folds very unequal. ',
        next: 't4' },
     c2:
      { n: '3b',
        l:
         ' Shell larger, diameter 2.75 mm. or more; basal folds nearly equal. ',
        s: 'Strobilops affinis' },
     prev: 't2' },
  t4:
   { c1:
      { n: '4a',
        l: ' Ribs well developed on base of shell. ',
        s: 'Strobilops texasianus',
        o: 'Strobilops texasiana' },
     c2:
      { n: '4b',
        l: ' Ribs absent or only poorly developed on base of shell. ',
        s: 'Strobilops labyrinthicus',
        o: 'Strobilops labyrinthica' },
     prev: 't3' } }, // strobolopsidae
  philomycidae: { t1:
   { c1:
      { n: '1a',
        l:
         ' Animal in general relatively small, usually less than 30 mm. in length; mantle not covering head region (Fig. 33,b). Genus Pallifera ',
        next: 't2' },
     c2:
      { n: '1b',
        l:
         ' Animal relatively large, more than 50 mm. in length; mangle covering entire body (see Fig. 33,a). Genus Philomycus. ',
        next: 't9' } },
  t2:
   { c1:
      { n: '2a',
        l: ' Ground color of animal black, gray, or ashy blue. ',
        next: 't3' },
     c2:
      { n: '2b',
        l: ' Ground color of animal white, light tan, or buff ',
        next: 't5' },
     prev: 't1' },
  t3:
   { c1: { n: '3a', l: ' Animal black. ', s: 'Pallifera hemphilli' },
     c2:
      { n: '3b',
        l:
         ' Animal ashy-blue or gray: mantle usually with darker pigmented areas ',
        next: 't4' },
     prev: 't2' },
  t4:
   { c1:
      { n: '4a',
        l:
         ' Animal ashy-blue, with or without an interrupted black line down the center of the mantle; sole of foot white. ',
        s: 'Pallifera dorsalis' },
     c2:
      { n: '4b',
        l:
         ' Animal gray or brownish gray, with dense darker mottlings on the mantle; margin of foot reddish brown. ',
        s: 'Pallifera varia' },
     prev: 't3' },
  t5:
   { c1:
      { n: '5a',
        l:
         ' Mantle with two (sometimes three) uninterrupted dark gray-brown longitudinal pigment bands and oblique rows of pigment spots: color pale buff. ',
         s: 'Megapallifera mutabilis',
        o: 'Pallifera mutabilis' },
     c2:
      { n: '5b',
        l:
         ' Mantle without uninterrupted longitudinal pigment bands or oblique rows of pigment spots. ',
        next: 't6' },
     prev: 't2' },
  t6:
   { c1:
      { n: '6a',
        l: ' Pigmented spots on mantle arranged in transverse bands. ',
        s: 'Megapallifera wetherbyi',
        o: 'Pallifera wetherbyi' },
     c2:
      { n: '6b',
        l: ' Pigmented spots on mantle not in transverse bands. ',
        next: 't7' },
     prev: 't5' },
  t7:
   { c1:
      { n: '7a',
        l:
         ' Mantle only very slightly pigmented; color light tan (somtimes grayish). ',
        s: 'Pallifera ohioensis' },
     c2:
      { n: '7b',
        l: ' Mantle profusely mottled or distinctly spotted. ',
        next: 't8' },
     prev: 't6' },
  t8:
   { c1:
      { n: '8a',
        l:
         ' Animal buff, profusely mottled with dark gray: markings sparse near mantle edges. ',
        s: 'Pallifera marmorea',
        o: 'Pallifera hemphilli marmorea' },
     c2:
      { n: '8b',
        l:
         ' Animal white or flesh-colored, with distinct black spots (not mottled); spots often more profuse at mantle edges ',
        s: 'Pallifera fosteri' },
     prev: 't7' },
  t9:
   { c1:
      { n: '9a',
        l:
         ' Mantle uniformly mottled with brown, or more usually, with one or two longitudinal rows of black or brown spots running down cenfer of mantle. ',
        s: 'Philomycus carolinianus' },
     c2:
      { n: '9b',
        l:
         ' Mantle with a dense uninterrupted longitudinal band down its center and a thinner longitudinal band on each side near the mantle edge; longitudinal bands connected by oblique bands. ',
        s: 'Philomycus virginicus' },
     prev: 't1' } }// philomycidae
}
