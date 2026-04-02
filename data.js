var APP_DATA = {
  "scenes": [
    {
      "id": "0-fachada",
      "name": "FACHADA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": -0.4014324014008963,
        "pitch": -0.06564031882202492,
        "fov": 1.3446888170112152
      },
      "linkHotspots": [
        {
          "yaw": -0.33725127104895947,
          "pitch": 0.19434010300286886,
          "rotation": 0,
          "target": "1-entrada"
        },
        {
          "yaw": -0.9977353397306601,
          "pitch": -0.35949990793732844,
          "rotation": 0,
          "target": "24-balcon"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-entrada",
      "name": "ENTRADA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": -1.3760899530621344,
        "pitch": 0.10443378091725819,
        "fov": 1.3446888170112152
      },
      "linkHotspots": [
        {
          "yaw": -2.9438293047968536,
          "pitch": 0.23073705941636824,
          "rotation": 0,
          "target": "0-fachada"
        },
        {
          "yaw": -2.284989070615147,
          "pitch": 0.3508734202894903,
          "rotation": 0,
          "target": "2-bodega_entrada"
        },
        {
          "yaw": -0.7715356994896894,
          "pitch": 0.7311524676719579,
          "rotation": 0,
          "target": "3-galeria"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-bodega_entrada",
      "name": "BODEGA_ENTRADA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 1.3272371594653425,
        "pitch": 0.06364398777317071,
        "fov": 1.3446888170112152
      },
      "linkHotspots": [
        {
          "yaw": 1.090892466656289,
          "pitch": 0.5323653783296596,
          "rotation": 0,
          "target": "1-entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-galeria",
      "name": "GALERIA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": -0.7910936246307791,
        "pitch": 0.05193446777802713,
        "fov": 1.3446888170112152
      },
      "linkHotspots": [
        {
          "yaw": 2.349965182083598,
          "pitch": 1.0234276430940419,
          "rotation": 0,
          "target": "1-entrada"
        },
        {
          "yaw": -2.788797778831583,
          "pitch": -0.08101193108084281,
          "rotation": 0,
          "target": "4-escaleras"
        },
        {
          "yaw": -1.8748179852912088,
          "pitch": 0.4941557719067937,
          "rotation": 0,
          "target": "5-galeria_pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-escaleras",
      "name": "ESCALERAS",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": -2.1396718134926935,
        "pitch": -0.16820735887300842,
        "fov": 1.3446888170112152
      },
      "linkHotspots": [
        {
          "yaw": 0.4390985869704842,
          "pitch": 0.7712217770852057,
          "rotation": 0,
          "target": "3-galeria"
        },
        {
          "yaw": -2.2259786445597793,
          "pitch": 0.0863539546067642,
          "rotation": 0,
          "target": "17-lobby_pa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-galeria_pasillo",
      "name": "GALERIA_PASILLO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": -1.9393385878113705,
        "pitch": 0.08007879055262457,
        "fov": 1.3446888170112152
      },
      "linkHotspots": [
        {
          "yaw": 0.75968287202606,
          "pitch": 0.5204306278484268,
          "rotation": 0,
          "target": "3-galeria"
        },
        {
          "yaw": -2.452027005291656,
          "pitch": 0.4397414317411297,
          "rotation": 0,
          "target": "6-galeria_hb_bao"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-galeria_hb_bao",
      "name": "GALERIA_HB_BAÑO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": -2.5856920558884475,
        "pitch": 0.16385032911471065,
        "fov": 1.3446888170112152
      },
      "linkHotspots": [
        {
          "yaw": 3.0710874458777804,
          "pitch": 0.5919285195287323,
          "rotation": 0,
          "target": "7-recamara_pb"
        },
        {
          "yaw": -2.291752006114349,
          "pitch": 0.5858349929459798,
          "rotation": 0,
          "target": "8-bao_pb"
        },
        {
          "yaw": -1.0436670555085872,
          "pitch": 0.4522449081883231,
          "rotation": 0,
          "target": "9-pasillo"
        },
        {
          "yaw": 0.6310036698616592,
          "pitch": 0.4447819007113569,
          "rotation": 0,
          "target": "5-galeria_pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-recamara_pb",
      "name": "RECAMARA_PB",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": -0.9446560906949326,
        "pitch": 0.15373684700701418,
        "fov": 1.3446888170112152
      },
      "linkHotspots": [
        {
          "yaw": -0.045106290819328265,
          "pitch": 0.47199560600748214,
          "rotation": 0,
          "target": "6-galeria_hb_bao"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-bao_pb",
      "name": "BAÑO_PB",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 0.5657973995491936,
        "pitch": 0.22790449360471499,
        "fov": 1.3446888170112152
      },
      "linkHotspots": [
        {
          "yaw": 0.8856984931215912,
          "pitch": 0.5029679704831,
          "rotation": 0,
          "target": "6-galeria_hb_bao"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-pasillo",
      "name": "PASILLO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": -0.7936827864595024,
        "pitch": -0.00016012596820758063,
        "fov": 1.3446888170112152
      },
      "linkHotspots": [
        {
          "yaw": 2.2482436513832775,
          "pitch": 0.43574159923961453,
          "rotation": 0,
          "target": "6-galeria_hb_bao"
        },
        {
          "yaw": -0.8204624356645915,
          "pitch": 0.32411889265528515,
          "rotation": 0,
          "target": "10-cocina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-cocina",
      "name": "COCINA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": -2.0301687182565384,
        "pitch": -0.03750733511009585,
        "fov": 1.3446888170112152
      },
      "linkHotspots": [
        {
          "yaw": 1.729246691588049,
          "pitch": 0.410194462805169,
          "rotation": 0,
          "target": "9-pasillo"
        },
        {
          "yaw": 2.763477605648065,
          "pitch": 0.3774158611760754,
          "rotation": 0,
          "target": "11-bodega_cocina"
        },
        {
          "yaw": -0.7479983442943752,
          "pitch": 0.3518104530268946,
          "rotation": 0,
          "target": "12-pasillo_cocina_comedor"
        },
        {
          "yaw": 0.9999768845530959,
          "pitch": 0.28575181116629444,
          "rotation": 0,
          "target": "14-patio_1_ver2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-bodega_cocina",
      "name": "BODEGA_COCINA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": -0.8630537690124331,
        "pitch": 0.033049759812705304,
        "fov": 1.3446888170112152
      },
      "linkHotspots": [
        {
          "yaw": -0.9550716752912045,
          "pitch": 0.40216189772310607,
          "rotation": 0,
          "target": "10-cocina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-pasillo_cocina_comedor",
      "name": "PASILLO_COCINA_COMEDOR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 0.4189782915511593,
        "pitch": 0.1894172789883406,
        "fov": 1.3446888170112152
      },
      "linkHotspots": [
        {
          "yaw": 0.29777900485585995,
          "pitch": 0.32219616564412945,
          "rotation": 0,
          "target": "13-sala_comedor"
        },
        {
          "yaw": 2.0635550690552567,
          "pitch": 0.3795459001163657,
          "rotation": 0,
          "target": "10-cocina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-sala_comedor",
      "name": "SALA_COMEDOR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": -0.06981317007975818,
        "pitch": 0.33195121595470667,
        "fov": 1.3446888170112152
      },
      "linkHotspots": [
        {
          "yaw": -2.984484563515135,
          "pitch": 0.11470891856022192,
          "rotation": 0,
          "target": "12-pasillo_cocina_comedor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-patio_1_ver2",
      "name": "PATIO_1_VER2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3446888170112152
      },
      "linkHotspots": [
        {
          "yaw": -1.8940790686157776,
          "pitch": 0.5613731979449934,
          "rotation": 0,
          "target": "10-cocina"
        },
        {
          "yaw": -0.24008861848525243,
          "pitch": 0.2504293121004988,
          "rotation": 0,
          "target": "15-patio_2_ver2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-patio_2_ver2",
      "name": "PATIO_2_VER2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": -0.77633230156653,
        "pitch": 0.03083062357333155,
        "fov": 1.3446888170112152
      },
      "linkHotspots": [
        {
          "yaw": 2.7984839171830664,
          "pitch": 0.2991459411834647,
          "rotation": 0,
          "target": "14-patio_1_ver2"
        },
        {
          "yaw": -0.446785822403859,
          "pitch": 0.2161996366705985,
          "rotation": 0,
          "target": "16-patio_3_ver2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-patio_3_ver2",
      "name": "PATIO_3_VER2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": -2.299188787979224,
        "pitch": 0.24098965608251532,
        "fov": 1.3446888170112152
      },
      "linkHotspots": [
        {
          "yaw": 2.2685758314460953,
          "pitch": 0.3227931892966627,
          "rotation": 0,
          "target": "15-patio_2_ver2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-lobby_pa",
      "name": "LOBBY_PA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": -0.9220200903222029,
        "pitch": 0.23641556364173688,
        "fov": 1.3446888170112152
      },
      "linkHotspots": [
        {
          "yaw": -1.0316068557240854,
          "pitch": 0.3889926809574398,
          "rotation": 0,
          "target": "18-recamara_master"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-recamara_master",
      "name": "RECAMARA_MASTER",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": -2.3514351033533494,
        "pitch": 0.2605834313708453,
        "fov": 1.3446888170112152
      },
      "linkHotspots": [
        {
          "yaw": 1.9124616892162907,
          "pitch": 0.41387531642983433,
          "rotation": 0,
          "target": "17-lobby_pa"
        },
        {
          "yaw": -1.3974874402055093,
          "pitch": 0.3681375030909617,
          "rotation": 0,
          "target": "19-walkin_closet_01"
        },
        {
          "yaw": 2.9963761060787393,
          "pitch": 0.4004780020738714,
          "rotation": 0,
          "target": "24-balcon"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-walkin_closet_01",
      "name": "WALKIN_CLOSET_01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": -0.5922677413559807,
        "pitch": 0.04622669121265055,
        "fov": 1.3446888170112152
      },
      "linkHotspots": [
        {
          "yaw": 1.7745993717566169,
          "pitch": 0.41618768250792826,
          "rotation": 0,
          "target": "18-recamara_master"
        },
        {
          "yaw": 0.818367694544099,
          "pitch": 0.6790073885501116,
          "rotation": 0,
          "target": "22-bao_pa_1"
        },
        {
          "yaw": -0.9956754759805087,
          "pitch": 0.6122786923078838,
          "rotation": 0,
          "target": "20-walkin_closet_02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-walkin_closet_02",
      "name": "WALKIN_CLOSET_02",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 0.7740095271591301,
        "pitch": 0.09002100867018825,
        "fov": 1.3446888170112152
      },
      "linkHotspots": [
        {
          "yaw": 2.3230460641830426,
          "pitch": 0.5601633052174471,
          "rotation": 0,
          "target": "19-walkin_closet_01"
        },
        {
          "yaw": -0.7948985871987162,
          "pitch": 0.5461308821225934,
          "rotation": 0,
          "target": "21-walkin_closet_03"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-walkin_closet_03",
      "name": "WALKIN_CLOSET_03",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 0.3515233781736331,
        "pitch": 0.42798572986835026,
        "fov": 1.3446888170112152
      },
      "linkHotspots": [
        {
          "yaw": 2.5144163224394127,
          "pitch": 0.6806997601482756,
          "rotation": 0,
          "target": "20-walkin_closet_02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-bao_pa_1",
      "name": "BAÑO_PA_1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": -0.026590985090141572,
        "pitch": 0.6990457921625559,
        "fov": 1.3446888170112152
      },
      "linkHotspots": [
        {
          "yaw": -0.9578964109102799,
          "pitch": 0.7272266230039435,
          "rotation": 0,
          "target": "23-bao_pa_2"
        },
        {
          "yaw": -2.5988059758119206,
          "pitch": 0.6699763878425795,
          "rotation": 0,
          "target": "19-walkin_closet_01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-bao_pa_2",
      "name": "BAÑO_PA_2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 1.1303224759112744,
        "pitch": 0.056548697146983073,
        "fov": 1.3446888170112152
      },
      "linkHotspots": [
        {
          "yaw": 2.4564682249033467,
          "pitch": 0.777326857109605,
          "rotation": 0,
          "target": "22-bao_pa_1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-balcon",
      "name": "BALCON",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": -2.427079479029235,
        "pitch": 0.23799253602529014,
        "fov": 1.3446888170112152
      },
      "linkHotspots": [
        {
          "yaw": -1.361676690059685,
          "pitch": 0.7348504172237718,
          "rotation": 0,
          "target": "18-recamara_master"
        },
        {
          "yaw": 2.551005059044762,
          "pitch": 0.27330836535047,
          "rotation": 0,
          "target": "0-fachada"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "CARANDAY_134_360_TOUR",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
