import schedule from './schedule.json';

export default {
  pool: {
    default: "team_organisateur",
  },
  streams : [
    {
      icon: process.env.PUBLIC_URL+"/logos/ace.png",
      title: "ACE",
      id: "twitch-embed-ace",
      channel: "ace_ulb",
      isPool: true
    }, {
      icon: process.env.PUBLIC_URL+"/logos/bsg.png",
      title: "BSG",
      id: "twitch-embed-bsg",
      channel: "stvebsg",
      isPool: false
    }, {
      icon: process.env.PUBLIC_URL+"/logos/acs.png",
      title: "ACS",
      id: "twitch-embed-acs",
      channel: "la_guindaille",
      isPool: true
    }, {
      icon: process.env.PUBLIC_URL+"/logos/orga.png",
      title: "Team Orga",
      id: "twitch-embed-orga",
      channel: "team_organisateur",
      isPool: true
    }, {
      icon: process.env.PUBLIC_URL+"/logos/ci.png",
      title: "CI",
      id: "twitch-embed-CI",
      channel: "ci_ulb",
      isPool: true
    }, {
      icon: process.env.PUBLIC_URL+"/logos/cepha.png",
      title: "CePha",
      id: "twitch-embed-CEPHA",
      channel: "pharma_ulb",
      isPool: true
    }, {
      icon: process.env.PUBLIC_URL+"/logos/cgeo.png",
      title: "CGéo",
      id: "twitch-embed-CGEO",
      channel: "cgeo_ulb",
      isPool: true
    }, {
      icon: process.env.PUBLIC_URL+"/logos/polesante.png",
      title: "ISEP-CM-CKO-CO",
      id: "twitch-embed-sante",
      channel: "polesante_ulb",
      isPool: true
    }, {
      icon: process.env.PUBLIC_URL+"/logos/cig.png",
      title: "CIG",
      id: "twitch-embed-CIG",
      channel: "cig_ulb",
      isPool: true
    }, {
      icon: process.env.PUBLIC_URL+"/logos/regio.png",
      title: "Régionales",
      id: "twitch-embed-inter",
      channel: "inter_ulb",
      isPool: true
    }, {
      icon: process.env.PUBLIC_URL+"/logos/philo_psy.png",
      title: "CPL-CdH-CJC-CROM-CHAA-CPSY",
      id: "twitch-embed-solb1",
      channel: "sections_psycho_philo",
      isPool: true
    }, {
      icon: process.env.PUBLIC_URL+"/logos/cp_cds.png",
      title: "CdS-CP",
      id: "twitch-embed-Cds-CP",
      channel: "cp_cds_ulb",
      isPool: true
    }, {
      icon: process.env.PUBLIC_URL+"/logos/care.png",
      title: "CARé",
      id: "twitch-embed-CARé",
      channel: "care_ulb",
      isPool: true
    }, {
      icon: process.env.PUBLIC_URL+"/logos/cd.png",
      title: "CD",
      id: "twitch-embed-CD",
      channel: "cerclededroit",
      isPool: true
    }, {
      icon: process.env.PUBLIC_URL+"/logos/agro.png",
      title: "AGRO",
      id: "twitch-embed-AGRO",
      channel: "agro_ulb",
      isPool: true
    }, {
      icon: process.env.PUBLIC_URL+"/logos/cps.png",
      title: "CPS",
      id: "twitch-embed-cps",
      channel: "cpsulb",
      isPool: true
    }, {
      icon: process.env.PUBLIC_URL+"/logos/isti.png",
      title: "ISTI",
      id: "twitch-embed-isti",
      channel: "isti_ulb",
      isPool: true
    }, {
      icon: process.env.PUBLIC_URL+"/logos/guildes.png",
      title: "Guildes",
      id: "twitch-embed-guild",
      channel: "guildes_ulb",
      isPool: true
    }, {
      icon: process.env.PUBLIC_URL+"/logos/cs.png",
      title: "CS",
      id: "twitch-embed-cs",
      channel: "cerclesolvay_ulb",
      isPool: true
    }
  ],
  shop: {
    sizes: {
      "t_shirt": ["XS", "S", "M", "L", "XL", "XXL"],
      "sweat": ["S", "M", "L", "XL", "XXL"]
    },
    items: [
      {
        id: "t_shirt",
        name: "T-Shirt",
        url: process.env.PUBLIC_URL+"/shop/tshirt.png",
        price: 7,
        hasSize: true
      }, {
        id: "sweat",
        name: "Sweat",
        url: process.env.PUBLIC_URL+"/shop/pull.png",
        price: 15,
        hasSize: true
      }, {
        id: "mask",
        name: "Mask",
        url: process.env.PUBLIC_URL+"/shop/mask.png",
        price: 5,
        hasSize: false
      }
    ]
  },
  schedule: schedule
}
