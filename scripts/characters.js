const characters = [
    {
        name: "Achilles",
        type: "Warrior",
        url: "data:image/jpeg;base64,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"
    },
    {
        name: "Agni",
        type: "Mage"
    },
    {
        name: "Ah Muzen Cab",
        type: "Hunter"
    },
    {
        name: "Ah Puch",
        type: "Mage"
    },
    {
        name: "Amaterasu",
        type: "Warrior"
    },
    {
        name: "Anhur",
        type: "Hunter"
    },
    {
        name: "Anubis",
        type: "Mage"
    },
    {
        name: "Ao Kuang",
        type: "Mage"
    },
    {
        name:"Aphrodite" ,
        type: "Mage"
    },
    {
        name: "Apollo" ,
        type: "Hunter"
    },
    {
        name: "Arachne" ,
        type: "Assassin"
    },
    {
        name: "Ares" ,
        type: "Guardian"
    },
    {
        name: "Artemis",
        type: "Hunter"
    },
    {
        name: "Artio",
        type: "Guardian"
    },
    {
        name: "Athena",
        type: "Guardian"
    },
    {
        name: "Awilix",
        type: "Assassin"
    },
    {
        name: "Baba Yaga",
        type: "Mage"
    },
    {
        name: "Bacchus",
        type: "Guardian"
    },
    {
        name: "Bakasura",
        type: "Assassin"
    },
    {
        name: "Baron Samedi",
        type: "Mage"
    },
    {
        name: "Bastet",
        type: "Assassin"
    },
    {
        name: "Bellona",
        type: "Warrior"
    },
    {
        name: "Cabrakan",
        type: "Guardian"
    },
    {
        name: "Camazotz",
        type: "Assassim"
    },
    {
        name: "Cerberus",
        type: "Guardian"
    },
    {
        name: "Cernunnos",
        type: "Hunter"
    },
    {
        name: "Chaac",
        type: "Warrior"
    },
    {
        name: "Chang'e",
        type: "Mage"
    },
    {
        name: "Charybdis",
        type: "Hunter"
    },
    {
        name: "Chernobog",
        type: "Hunter"
    },
    {
        name: "Chiron",
        type: "Hunter"
    },
    {
        name: "Chronos",
        type: "Mage"
    },
    {
        name: "Cthulu",
        type: "Guardian"
    },
    {
        name: "Cu Chulainn",
        type: "Warrior"
    },
    {
        name: "Cupid",
        type: "Hunter"
    },
    {
        name: "Da Ji",
        type: "Assassin"
    },
    {
        name: "Danzaburou" ,
        type: "Hunter"
    },
    {
        name: "Discordia" ,
        type: "Mage"
    },
    {
        name: "Erlang Shen" ,
        type: "Warrior"
    },
    {
        name: "Eset" ,
        type: "Mage"
    },
    {
        name: "Fafnir" ,
        type: "Guardian"
    },
    {
        name: "Fenrir" ,
        type: "Assassin"
    },
    {
        name: "Freya" ,
        type: "Mage"
    },
    {
        name: "Ganesha",
        type: "Guardian"
    },
    {
        name: "Geb" ,
        type: "Guardian"
    },
    {
        name: "Gilgamesh" ,
        type: "Warrior"
    },
    {
        name: "Guan Yu",
        type: "Warrior"
    },
    {
        name: "Hachiman" ,
        type: "Hunter"
    },
    {
        name: "Hades" ,
        type: "Mage"
    },
    {
        name: "He Bo",
        type: "Mage"
    },
    {
        name: "Heimdallr",
        type: "Hunter"
    },
    {
        name: "Hel" ,
        type: "Mage"
    },
    {
        name: "Hera" ,
        type: "Mage"
    },
    {
        name: "Hercules",
        type: "Warrior"
    },
    {
        name: "Horus" ,
        type: "Warrior"
    },
    {
        name: "Hou Yi" ,
        type: "Hunter"
    },
    {
        name: "Hun Batz",
        type: "Assassin"
    },
    {
        name: "Izanami" ,
        type: "Hunter"
    },
    {
        name: "Janus" ,
        type: "Mage"
    },
    {
        name: "Jing Wei",
        type: "Hunter"
    },
    {
        name: "Jormungandr" ,
        type: "Guardian"
    },
    {
        name: "Kali" ,
        type: "Assassin"
    },
    {
        name: "Khepri" ,
        type: "Guardian"
    },
    {
        name: "King Arthur" ,
        type: "Warrior"
    },
    {
        name: "Kukulkan" ,
        type: "Mage"
    },
    {
        name: "Kumbhakarna" ,
        type: "Guardian"
    },
    {
        name: "Kuzenbo" ,
        type: "Guardian"
    },
    {
        name: "Loki" ,
        type: "Assassin"
    },
    {
        name: "Medusa" ,
        type: "Hunter"
    },
    {
        name: "Mercury" ,
        type: "Assassin"
    },
    {
        name: "Merlin" ,
        type: "Mage"
    },
    {
        name: "Morgan Le Fay" ,
        type: "Mage"
    },
    {
        name: "Mulan",
        type: "Warrior"
    },
    {
        name: "Ne Zha",
        type: "Assassin"
    },
    {
        name: "Neith" ,
        type: "Hunter"
    },
    {
        name: "Nemesis",
        type: " Assassin"
    },
    {
        name: "Nike",
        type: "Warrior"
    },
    {
        name: "Nox",
        type: "Mage"
    },
    {
        name: "Nu Wa",
        type: "Mage"
    },
    {
        name: "Odin" ,
        type: "Warrior"
    },
    {
        name: "Olorun",
        type: "Mage"
    },
    {
        name: "Osiris",
        type: "Warrior"
    },
    {
        name: "Pele",
        type: "Assassin"
    },
    {
        name: "Persephone",
        type: "Mage"
    },
    {
        name: "Poseidon",
        type: "Mage"
    },
    {
        name: "Ra",
        type: "Mage"
    },
    {
        name: "Raijin",
        type: "Mage"
    },
    {
        name: "Rama",
        type: "Hunter"
    },
    {
        name: "Ratatoskr",
        type: "Assassin"
    },
    {
        name: "Ravana",
        type: "Assassin"
    },
    {
        name: "Scylla" ,
        type: "Mage"
    },
    {
        name: "Serqet",
        type: "Assassin"
    },
    {
        name: "Set",
        type: "Assassin"
    },
    {
        name: "Skadi",
        type: "Hunter"
    },
    {
        name: "Sobek",
        type: "Guardian"
    },
    {
        name: "Sol",
        type: "Mage"
    },
    {
        name: "Sun Wukong",
        type: "Warrior"
    },
    {
        name: "Susano" ,
        type: "Assassin"
    },
    {
        name: "Sylvanus",
        type: "Guardian"
    },
    {
        name: "Terra",
        type:"Guardian"
    },
    {
        name: "Thanatos",
        type: "Assassin"
    },
    {
        name: "The Morrigan",
        type: "Mage"
    },
    {
        name: "Thor" ,
        type: "Assassin"
    },
    {
        name: "Thoth",
        type: "Mage"
    },
    {
        name: "Tiamat",
        type: "Mage"
    },
    {
        name: "Tsukuyomi",
        type: "Assassin"
    },
    {
        name: "Tyr",
        type: "Warrior"
    },
    {
        name: "Ullr",
        type: "Hunter"
    },
    {
        name: "Vamana",
        type: "Warrior"
    },
    {
        name: "Vulcan",
        type: "Mage"
    },
    {
        name: "Xblanque",
        type: "Hunter"
    },
    {
        name: "Xing Tian",
        type: "Guardian"
    },
    {
        name: "Yemoja",
        type: "Guardian"
    },
    {
        name: "Ymir",
        type: "Guardian"
    },
    {
        name: "Zues",
        type: "Mage"
    },
    {
        name: "Zhong Kui",
        type: "Mage"
    }
]