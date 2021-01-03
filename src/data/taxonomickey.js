module.exports= {
  family: {
    t1: {
      c1: {
        n: '1a',
        l: 'Aperture of shell closed by an operculum',
        g: 'class Prosobranchia',
        next: 't2'
      },
      c2:  {
        n: '1b',
        l: 'Aperture of shell not closed by an operculum or shell entirely absent',
        g: 'Subclass Pulmonata',
        next: 't4'
      }
    },
    t2: {
      prev: 't1',
      c1: {
        n: '2a',
        l: 'Shell wider than high, without ribs; sutures not impressed',
        g: 'class Prosobranchia',
        f: 'Helicinidae',
      },
      c2:  {
        n: '2b',
        l: 'Shell higher than wide, usually scupltured with either fine or coarse ribs; sutures moderately to rather strongly impressed',
        g: 'Order Mesogastropoda',
        next: 't3'
      }
    },
    t3: {
      prev: 't2',
      c1: {
        n: '3a',
        l: 'Shell relatively large (8mm or more in height), dull, scupltured with many find ribs, umbilicate; operculum spiral',
        f: 'Pomatiasidae'
      },
      c2:  {
        n: '3b',
        l: 'Shell relatively small (less than 8mm in height), polished, imperforate; ribs, when present, thick; operculum subspiral',
        f: 'Truncatellidae'
      }
    },
    t4: {
      prev: 't1',
      c1: {
        n: '4a',
        l: 'Head with one pair of tentacles, eyes at base of tentacles; animal and shell minute; shell elongate (but not pupa-shaped), lip reflected, aperture usually with one tooth or lamella.',
        g: 'Order Basommatophora',
        f: 'Carychiidae'
      },
      c2:  {
        n: '4b',
        l: 'Head with two pairs of tentacles, eyes at the tips of the upper pair of tentacles; animal and shell (when present) minute to large; shell, when present elongate, globose or depressed (when elongate and having a reflected lip it either lacks apertural teeth, or has more than one).',
        next: 't5'
      }
    },
    t5: {
      prev: 't4',
      c1: {
        n: '5a',
        l: 'Tentacles contractile; animal without a shell.',
        f: 'Veronicellidae'
      },
      c2:  {
        n: '5b',
        l: 'Tentacles retractile; animal with or without a shell',
        g: 'Order Stylommatophora',
        next: 't6'
      }
    },
    t6: {
      prev: 't5',
      c1: {
        n: '6a',
        l: 'Shell pupa-shaped, 20mm or more in height.',
        g: 'Suborder Mesurethra',
        f: 'Cerionidae'
      },
      c2:  {
        n: '6b',
        l: 'Shell, when present, not pupa-shaped, or if so, much smaller, 6mm or less in height',
        next: 't7'
      }
    },
    t7: {
      prev: 't6',
      c1: {
        n: '7a',
        l: 'Shell elongate, succiniform, very thin; aperture length more than half the shell height',
        f: 'Succineidae'
      },
      c2:  {
        n: '7b',
        l: 'Shell, when present, elongate (but not succiniform), globose or depressed, and when thin and elongate having relatively smaller aperture, i.e., less than half shell height',
        next: 't8'
      }
    },
    t8: {
      prev: 't7',
      c1: {
        n: '8a',
        l: 'Shell rather small, less than 8mm in height; pupa-shaped, or when heliciform or beehive usually having either ribs or a reflected lip, or when fusiform, being 5mm or taller but less than 10mm and with a twisted, but not abruptly truncate, columella',
        g: 'Suborder Orthurethra',
        next: 't9'
      },
      c2:  {
        n: '8b',
        l: 'Shell minute to large; not pupa-shaped; generally withotu ribbing when heliciform, without a reflected lip when beehive, and when fusiform with a straight or decidedly truncate columella and either 5mm or less or 10mm or more, in heiht',
        g: 'Suborder Sigmurethra',
        next: 't13'
      }
    },
    t9: {
      prev: 't8',
      c1: {
        n: '9a',
        l: 'Shell pupa-shaped',
        f: 'Pupillidae'
      },
      c2:  {
        n: '9b',
        l: 'Shell beehive, fusiform, or heliciform',
        next: 't10'
      }
    },
    t10: {
      prev: 't9',
      c1: {
        n: '10a',
        l: 'Shell fusiform, imperforate, very glossy',
        f: 'Cionellidae'
      },
      c2:  {
        n: '10b',
        l: 'Shell beehive or heliciform, perforate to umbilicate, dull to moderately glossy',
        next: 't11'
      }
    },
    t11: {
      prev: 't10',
      c1: {
        n: '11a',
        l: 'Shell with one or more teeth in the aperture, usually beehive and with rather wide ribs; usually dark brown or reddish-brown.',
        f: 'Strobilopsidae',
        f_in_part: true
      },
      c2:  {
        n: '11b',
        l: 'Shell without teeth in the aperture, usually depressed when heliciform, but without ribs or with rather thin ribs when beehive or globose heliciform; usually olive-brown, light tan, or white',
        next: 't12'
      }
    },
    t12: {
      prev: 't11',
      c1: {
        n: '12a',
        l: 'Shell depressed, or with ribs when globose; olive-green, olive-brown, light tan, or white',
        f: 'Valloniidae',
        f_in_part: true
      },
      c2:  {
        n: '12b',
        l: 'Shell globose, without ribs; dark or light reddish-brown',
        f: 'Pupillidae',
        f_in_part: true
      }
    },
    t13: {
      prev: 't8',
      c1: {
        n: '13a',
        l: 'Pedal grooves of the foot conspicuous and well above the angle of the lateral and ventral foot margins; shell, when present, usually distinctly wider than high, sometimes colored with irregular color markings, but rarely banded; aperture lip not reflected',
        g: 'Division Aulacopoda',
        next: 't14'
      },
      c2:  {
        n: '13b',
        l: 'Pedal grooves of the foot inconspicuous and in or close to the angle of the lateral and ventral foot margins; shell always present, either wider than high or higher than wide, and sometimes marked with color bands; aperture lip may or may not be reflected.',
        g: 'Division Holopoda',
        next: 't19'
      }
    },
    t14: {
      prev: 't13',
      c1: {
        n: '14a',
        l: 'Animal without an external shell',
        next: 't15'
      },
      c2:  {
        n: '14b',
        l: 'Animal with a visible shell',
        next: 't17'
      }
    },
    t15: {
      prev: 't14',
      c1: {
        n: '15a',
        l: 'Mantle covering nearly the entire back of the animal',
        f: 'Philomycidae'
      },
      c2:  {
        n: '15b',
        l: 'Mangle covering only an anterior portion of the animal',
        next: 't16'
      }
    },
    t16: {
      prev: 't15',
      c1: {
        n: '16a',
        l: 'Breathing pore in the anterior half of the right side of the mantle; back never keeled in adults; posterior end rounded when viewed from above',
        f: 'Arionidae'
      },
      c2:  {
        n: '16b',
        l: 'Breathing pore in the posterior half of the right side of mantle; back keeled, either at posterior end or entirely; posterior end pointed when viewed from above',
        f: 'Limacidae'
      }
    },
    t17: {
      prev: 't14',
      c1: {
        n: '17a',
        l: 'Shell much too small to cover the contracted animal',
        f: 'Testacellidae'
      },
      c2:  {
        n: '17b',
        l: 'Shell large enough to nearly or completely conceal the contracted animal',
        next: 't18'
      }
    },
    t18: {
      prev: 't17',
      c1: {
        n: '18a',
        l: 'Shell usually opaque, usually dull and with prominent growth lines or low ribs, umbilcate to widely umbilicate, brown, reddish-brown, tan or almost white, sometimes with darer reddish color markings',
        f: 'Endodontidae'
      },
      c2:  {
        n: '18b',
        l: 'Shell usually translucent, glossy, smooth or without prominent growth lines or ribs, narrowly umbilicate, perforate or rarely imporforate, white or light tan-colored to dark olive-brown, often containt some tint of green, but without reddish markings',
        f: 'Zonitidae'
      }
    },
    t19: {
      prev: 't13',
      c1: {
        n: '19a',
        l: 'Shell higher than wide',
        next: 't20'
      },
      c2:  {
        n: '19b',
        l: 'Shell wider than high',
        next: 't31'
      }
    },
    t20: {
      prev: 't19',
      c1: {
        n: '20a',
        l: 'Aperture with several teeth; lip reflected',
        next: 't21'
      },
      c2:  {
        n: '20b',
        l: 'Aperture without teeth; lip sharp or reflected',
        next: 't22'
      }
    },
    t21: {
      prev: 't20',
      c1: {
        n: '21a',
        l: 'Shell ribbed, at least near the sutures; shell at least three times higher than wide',
        f: 'Streptaxidae'
      },
      c2:  {
        n: '21b',
        l: 'Shell not ribbed; shell height less than three times its width',
        f: 'Pupillidae',
        f_in_part: true
      }
    },
    t22: {
      prev: 't20',
      c1: {
        n: '22a',
        l: 'Shell urocoptiform, lip reflected',
        f: 'Urocoptidae'
      },
      c2:  {
        n: '22b',
        l: 'Shell conical, fusiform, or bulimoid; lip may or may not be reflected',
        next: 't23'
      }
    },
    t23: {
      prev: 't22',
      c1: {
        n: '23a',
        l: 'Aperture lip reflected',
        f: 'Pupillidae',
        f_in_part: true
      },
      c2:  {
        n: '23b',
        l: 'Aperture lip not reflected',
        next: 't24'
      }
    },
    t24: {
      prev: 't23',
      c1: {
        n: '24a',
        l: 'Shell nearly globose, height barely exceeding width',
        next: 't25'
      },
      c2:  {
        n: '24b',
        l: 'Shell elongate, height distinctly exceeding the width',
        next: 't27'
      }
    },
    t25: {
      prev: 't24',
      c1: {
        n: '25a',
        l: 'Shell large, 10mm or more in width, usually banded',
        f: 'Helminthoglyptidae'
      },
      c2:  {
        n: '25b',
        l: 'Shell small, 4mm or less in width, not banded',
        next: 't26'
      }
    },
    t26: {
      prev: 't25',
      c1: {
        n: '26a',
        l: 'Shell very small, less than 2mm in diameter; surface pitted, granulose, or striate, but not ribbed',
        f: 'Pupillidae',
        f_in_part: true
      },
      c2:  {
        n: '26b',
        l: 'Shell somewhat larger, more than 2mm in diameter; surface not pitted, granulose, or striate, but usually with fine, low ribs',
        f: 'Sagdidae',
        f_in_part: true
      }
    },
    t27: {
      prev: 't24',
      c1: {
        n: '27a',
        l: 'Shell bulimoid',
        next: 't28'
      },
      c2:  {
        n: '27b',
        l: 'Shell conical or fusiform',
        next: 't29'
      }
    },
    t28: {
      prev: 't27',
      c1: {
        n: '28a',
        l: 'Shell relatively large, 15mm or more in length',
        f: 'Bulimulidae'
      },
      c2:  {
        n: '28b',
        l: 'Shell relatively small, 13mm or less in height',
        f: 'Helicellidae',
        f_in_part: true
      }
    },
    t29: {
      prev: 't27',
      c1: {
        n: '29a',
        l: 'Shell without color bands or alternating opaque and translucent bands',
        next: 't30'
      },
      c2:  {
        n: '29b',
        l: 'Shell marked with either color bands or alternating transverse opaque and translucent bands',
        f: 'Helicellidae',
        f_in_part: true
      }
    },
    t30: {
      prev: 't29',
      c1: {
        n: '30a',
        l: 'Shell either fusiform and large (more than 20mm high), or, if conical, with strongly flattened whorls',
        f: 'Oleacinidae'
      },
      c2:  {
        n: '30b',
        l: 'Shell either fusiform and small (less than 5mm high), or, if conical, with rounded whorls',
        f: 'Achatinidae'
      }
    },
    t31: {
      prev: 't19',
      c1: {
        n: '31a',
        l: 'Apertue lip not reflected',
        next: 't32'
      },
      c2:  {
        n: '31b',
        l: 'Aperture lip reflected',
        next: 't38'
      }
    },
    t32: {
      prev: 't31',
      c1: {
        n: '32a',
        l: 'Shell large, more than 13mm in diameter',
        next: 't33'
      },
      c2:  {
        n: '32b',
        l: 'Shell relatively small, 13mm or less in diameter',
        next: 't36'
      }
    },
    t33: {
      prev: 't32',
      c1: {
        n: '33a',
        l: 'Shell strongly depressed, widely umbilicate',
        f: 'Haplotrematidae'
      },
      c2:  {
        n: '33b',
        l: 'Shell globose, perforate, or imperforate',
        next: 't34'
      }
    },
    t34: {
      prev: 't33',
      c1: {
        n: '34a',
        l: 'Shell very large, more than 30mm in diameter; spirally striate; horn-colored with pale brown bands',
        f: 'Helicidae',
        f_in_part: true
      },
      c2:  {
        n: '34b',
        l: 'Shell smaller, 30mm or less in diameter, not spirally striate; white with dark reddish-brown bands, or white, horn, yellowish, or tan without bands',
        next: 't35'
      }
    },
    t35: {
      prev: 't34',
      c1: {
        n: '35a',
        l: 'Aperture lip thickened and blunt at its edge; shell 20mm or more in diameter, without color bands',
        f: 'Camaenidae'
      },
      c2:  {
        n: '35b',
        l: 'Aperture lip sharp, shell 15mm or less in diameter, usually with color bands',
        f: 'Helminthoglyptidae'
      }
    },
    t36: {
      prev: 't32',
      c1: {
        n: '36a',
        l: 'Shell more than 5mm in diameter, sometimes with color bands, sometimes with carinate whorls, but without ribs aperture lip often thickened within',
        f: 'Helicellidae',
        f_in_part: true
      },
      c2:  {
        n: '36b',
        l: 'Shell smaller, 5mm or less in diameter; sometimes with thin oblique ribs, but without color bands, carinate whorls, or thickened aperture',
        next: 't37'
      }
    },
    t37: {
      prev: 't36',
      c1: {
        n: '37a',
        l: 'Shell very small, 2mm or less in diameter; surface pitted, granulose, or striate, but not ribbed',
        f: 'Pupillidae',
        f_in_part: true
      },
      c2:  {
        n: '37b',
        l: 'Shell somewhat larger, more than 2mm in diameter; surface not pitted, granulose, or striate, but often with fine, low ribs',
        f: 'Sagdidae',
        f_in_part: true
      }
    },
    t38: {
      prev: 't31',
      c1: {
        n: '38a',
        l: 'Shell with dark brown or chestnut color bands',
        next: 't39'
      },
      c2:  {
        n: '38b',
        l: 'Shell without dark brown or chestnut color bands',
        next: 't41'
      }
    },
    t39: {
      prev: 't38',
      c1: {
        n: '39a',
        l: 'Growth lines of shell regularly spaced and very prominent; aperture lip strongly reflected',
        f: 'Polygyridae',
        f_in_part: true
      },
      c2:  {
        n: '39b',
        l: 'Growth lines of shell irregular and not prominent; aperture lip usually not strongy reflected',
        next: 't40'
      }
    },
    t40: {
      prev: 't39',
      c1: {
        n: '40a',
        l: 'Shell large, more than 16mm in diameter; imperforate',
        f: 'Helicidae',
        f_in_part: true
      },
      c2:  {
        n: '40b',
        l: 'Shell smaller, 16mm or less in diameter; narrowly umbilicate',
        f: 'Bradybaenidae',
        f_in_part: true
      }
    },
    t41: {
      prev: 't38',
      c1: {
        n: '41a',
        l: 'Shell small, 3mm or less in diameter',
        next: 't42'
      },
      c2:  {
        n: '41b',
        l: 'Shell relatively large, more than 5mm in diameter',
        next: 't43'
      }
    },
    t42: {
      prev: 't41',
      c1: {
        n: '42a',
        l: 'Shell without teeth in the aperture; growth lines not prominent; whitish to light tan-colored',
        f: 'Valloniidae',
        f_in_part: true
      },
      c2:  {
        n: '42b',
        l: 'Shell with one or more teeth in the aperture; growth lines prominent; chestnut brown',
        f: 'Strobilopsidae',
        f_in_part: true
      }
    },
    t43: {
      prev: 't41',
      c1: {
        n: '43a',
        l: 'Shell finely striate, narrowly umbilicate, growth lines not prominent; lip slightly to moderately reflected; whorls often slightly angular',
        f: 'Bradybaenidae',
        f_in_part: true
      },
      c2:  {
        n: '43b',
        l: 'Shell with or without striae, imperforate to widely umbilicate, growth lines usually prominent; lip often greatly reflected; whorls usually rounded, sometimes strongly angular, but not weakly angular',
        f: 'Polygyridae',
        f_in_part: true
      }
    },


  }, // end family

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

}
