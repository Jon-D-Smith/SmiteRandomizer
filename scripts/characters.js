const characters = [
  {
    name: "Achilles",
    type: "Warrior",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/6/66/SkinArt_Achilles_Default.jpg/revision/latest?cb=20180309034323",
  },
  {
    name: "Agni",
    type: "Mage",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/2/29/SkinArt_Agni_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160505051933",
  },
  {
    name: "Ah Muzen Cab",
    type: "Hunter",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/1/10/SkinArt_AhMuzenCab_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160505051943",
  },
  {
    name: "Ah Puch",
    type: "Mage",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/c/c9/SkinArt_AhPuch_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160505051959",
  },
  {
    name: "Amaterasu",
    type: "Warrior",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/8/8a/SkinArt_Amaterasu_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160108210941",
  },
  {
    name: "Anhur",
    type: "Hunter",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/1/1e/SkinArt_Anhur_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160505052008",
  },
  {
    name: "Anubis",
    type: "Mage",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/5/59/SkinArt_Anubis_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160505052018",
  },
  {
    name: "Ao Kuang",
    type: "Mage",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/3/3b/SkinArt_AoKuang_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160505052030",
  },
  {
    name: "Aphrodite",
    type: "Mage",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/3/3b/SkinArt_Aphrodite_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160505052038",
  },
  {
    name: "Apollo",
    type: "Hunter",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/8/8e/SkinArt_Apollo_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160505052046",
  },
  {
    name: "Arachne",
    type: "Assassin",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/a/a8/SkinArt_Arachne_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160420205948",
  },
  {
    name: "Ares",
    type: "Guardian",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/3/33/SkinArt_Ares_Default.jpg/revision/latest/scale-to-width-down/250?cb=20200716001425",
  },
  {
    name: "Artemis",
    type: "Hunter",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/5/53/SkinArt_Artemis_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160505052104",
  },
  {
    name: "Artio",
    type: "Guardian",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/4/4c/SkinArt_Artio_Default.jpg/revision/latest/scale-to-width-down/250?cb=20170728125143",
  },
  {
    name: "Athena",
    type: "Guardian",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/d/d7/SkinArt_Athena_Default.jpg/revision/latest/scale-to-width-down/250?cb=20210518193804",
  },
  {
    name: "Awilix",
    type: "Assassin",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/0/00/SkinArt_Awilix_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160505052122",
  },
  {
    name: "Baba Yaga",
    type: "Mage",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/2/23/SkinArt_BabaYaga_Default.jpg/revision/latest/scale-to-width-down/250?cb=20200603102402",
  },
  {
    name: "Bacchus",
    type: "Guardian",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/d/d4/SkinArt_Bacchus_Default_V2.jpg/revision/latest/scale-to-width-down/250?cb=20170531215726",
  },
  {
    name: "Bakasura",
    type: "Assassin",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/f/fd/SkinArt_Bakasura_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160505052139",
  },
  {
    name: "Baron Samedi",
    type: "Mage",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/3/38/SkinArt_BaronSamedi_Default.jpg/revision/latest/scale-to-width-down/250?cb=20180628042044",
  },
  {
    name: "Bastet",
    type: "Assassin",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/c/c7/SkinArt_Bastet_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160505052145",
  },
  {
    name: "Bellona",
    type: "Warrior",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/a/aa/SkinArt_Bellona_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160505052158",
  },
  {
    name: "Cabrakan",
    type: "Guardian",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/a/a9/SkinArt_Cabrakan_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160505052209",
  },
  {
    name: "Camazotz",
    type: "Assassim",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/5/5a/SkinArt_Camazotz_Default.jpg/revision/latest/scale-to-width-down/250?cb=20161005211230",
  },
  {
    name: "Cerberus",
    type: "Guardian",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/d/de/SkinArt_Cerberus_Default.jpg/revision/latest/scale-to-width-down/250?cb=20180109181100",
  },
  {
    name: "Cernunnos",
    type: "Hunter",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/f/f0/SkinArt_Cernunnos_Default.jpg/revision/latest/scale-to-width-down/250?cb=20170308234455",
  },
  {
    name: "Chaac",
    type: "Warrior",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/e/e4/SkinArt_Chaac_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160505052215",
  },
  {
    name: "Chang'e",
    type: "Mage",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/9/95/SkinArt_ChangE_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160505052226",
  },
  {
    name: "Charybdis",
    type: "Hunter",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/9/94/SkinArt_Charybdis_Default.jpg/revision/latest/scale-to-width-down/250?cb=20210825012544",
  },
  {
    name: "Chernobog",
    type: "Hunter",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/6/65/SkinArt_Chernobog_Default.jpg/revision/latest/scale-to-width-down/250?cb=20180421205659",
  },
  {
    name: "Chiron",
    type: "Hunter",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/8/8b/SkinArt_Chiron_Default.jpg/revision/latest/scale-to-width-down/250?cb=20151111222807",
  },
  {
    name: "Chronos",
    type: "Mage",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/a/a8/SkinArt_Chronos_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160505052233",
  },
  {
    name: "Cthulu",
    type: "Guardian",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/2/22/SkinArt_Cthulhu_Default.jpg/revision/latest/scale-to-width-down/250?cb=20200616161842",
  },
  {
    name: "Cu Chulainn",
    type: "Warrior",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/a/aa/SkinArt_CuChulainn_Default.jpg/revision/latest/scale-to-width-down/250?cb=20170615004432",
  },
  {
    name: "Cupid",
    type: "Hunter",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/6/69/SkinArt_Cupid_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160505052246",
  },
  {
    name: "Da Ji",
    type: "Assassin",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/4/43/SkinArt_DaJi_Default.jpg/revision/latest/scale-to-width-down/250?cb=20170517230119",
  },
  {
    name: "Danzaburou",
    type: "Hunter",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/9/9f/SkinArt_Danzaburou_Default.jpg/revision/latest/scale-to-width-down/250?cb=20201216173146",
  },
  {
    name: "Discordia",
    type: "Mage",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/5/58/SkinArt_Discordia_Default.jpg/revision/latest/scale-to-width-down/250?cb=20171106214703",
  },
  {
    name: "Erlang Shen",
    type: "Warrior",
    url: "data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D",
  },
  {
    name: "Eset",
    type: "Mage",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/4/47/SkinArt_Eset_Default.jpg/revision/latest/scale-to-width-down/250?cb=20191112163619",
  },
  {
    name: "Fafnir",
    type: "Guardian",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/4/49/SkinArt_Fafnir_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160607220723",
  },
  {
    name: "Fenrir",
    type: "Assassin",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/6/68/SkinArt_Fenrir_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160505052327",
  },
  {
    name: "Freya",
    type: "Mage",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/c/c9/SkinArt_Freya_Default_V2.jpg/revision/latest/scale-to-width-down/250?cb=20160713210036",
  },
  {
    name: "Ganesha",
    type: "Guardian",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/0/06/SkinArt_Ganesha_Default.jpg/revision/latest/scale-to-width-down/250?cb=20170419211401",
  },
  {
    name: "Geb",
    type: "Guardian",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/8/89/SkinArt_Geb_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160505052344",
  },
  {
    name: "Gilgamesh",
    type: "Warrior",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/9/92/SkinArt_Gilgamesh_Default.jpg/revision/latest/scale-to-width-down/250?cb=20210518193841",
  },
  {
    name: "Guan Yu",
    type: "Warrior",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/5/50/SkinArt_GuanYu_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160505052355",
  },
  {
    name: "Hachiman",
    type: "Hunter",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/0/0a/SkinArt_Hachiman_Default.jpg/revision/latest/scale-to-width-down/250?cb=20170913184758",
  },
  {
    name: "Hades",
    type: "Mage",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/8/81/SkinArt_Hades_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160505052400",
  },
  {
    name: "He Bo",
    type: "Mage",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/e/e2/SkinArt_HeBo_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160505052404",
  },
  {
    name: "Heimdallr",
    type: "Hunter",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/c/cd/SkinArt_Heimdallr_Default.jpg/revision/latest/scale-to-width-down/250?cb=20191211182040",
  },
  {
    name: "Hel",
    type: "Mage",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/b/b6/SkinArt_Hel_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160505052419",
  },
  {
    name: "Hera",
    type: "Mage",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/2/20/SkinArt_Hera_Default.jpg/revision/latest/scale-to-width-down/250?cb=20181019232111",
  },
  {
    name: "Hercules",
    type: "Warrior",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/d/da/SkinArt_Hercules_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160505052422",
  },
  {
    name: "Horus",
    type: "Warrior",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/7/71/SkinArt_Horus_Default.jpg/revision/latest/scale-to-width-down/250?cb=20190725153617",
  },
  {
    name: "Hou Yi",
    type: "Hunter",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/4/4c/SkinArt_HouYi_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160505052431",
  },
  {
    name: "Hun Batz",
    type: "Assassin",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/5/56/SkinArt_HunBatz_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160505052443",
  },
  {
    name: "Izanami",
    type: "Hunter",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/a/aa/SkinArt_Izanami_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160824210550",
  },
  {
    name: "Janus",
    type: "Mage",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/0/04/SkinArt_Janus_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160505052503",
  },
  {
    name: "Jing Wei",
    type: "Hunter",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/0/0d/SkinArt_JingWei_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160406211401",
  },
  {
    name: "Jormungandr",
    type: "Guardian",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/b/bb/SkinArt_Jormungandr_Default.jpg/revision/latest/scale-to-width-down/250?cb=20190725153557",
  },
  {
    name: "Kali",
    type: "Assassin",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/d/d8/SkinArt_Kali_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160505052511",
  },
  {
    name: "Khepri",
    type: "Guardian",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/e/e3/SkinArt_Khepri_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160505052528",
  },
  {
    name: "King Arthur",
    type: "Warrior",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/6/65/SkinArt_KingArthur_Default.jpg/revision/latest/scale-to-width-down/250?cb=20190109114252",
  },
  {
    name: "Kukulkan",
    type: "Mage",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/7/73/SkinArt_Kukulkan_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160505052537",
  },
  {
    name: "Kumbhakarna",
    type: "Guardian",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/3/33/SkinArt_Kumbhakarna_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160505052541",
  },
  {
    name: "Kuzenbo",
    type: "Guardian",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/d/db/SkinArt_Kuzenbo_Default.jpg/revision/latest/scale-to-width-down/250?cb=20170209010909",
  },
  {
    name: "Loki",
    type: "Assassin",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/8/88/SkinArt_Loki_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160505052552",
  },
  {
    name: "Medusa",
    type: "Hunter",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/0/03/SkinArt_Medusa_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160505052559",
  },
  {
    name: "Mercury",
    type: "Assassin",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/6/60/SkinArt_Mercury_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160505052605",
  },
  {
    name: "Merlin",
    type: "Mage",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/5/59/SkinArt_Merlin_Default.jpg/revision/latest/scale-to-width-down/250?cb=20190725153726",
  },
  {
    name: "Morgan Le Fay",
    type: "Mage",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/b/b5/SkinArt_MorganLeFay_Default.jpg/revision/latest/scale-to-width-down/250?cb=20210617150412",
  },
  {
    name: "Mulan",
    type: "Warrior",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/1/18/SkinArt_Mulan_Default.jpg/revision/latest/scale-to-width-down/250?cb=20200225170459",
  },
  {
    name: "Ne Zha",
    type: "Assassin",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/d/d4/SkinArt_NeZha_Default.jpg/revision/latest/scale-to-width-down/250?cb=20151209213243",
  },
  {
    name: "Neith",
    type: "Hunter",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/5/5b/SkinArt_Neith_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160505052627",
  },
  {
    name: "Nemesis",
    type: " Assassin",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/c/c3/SkinArt_Nemesis_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160505052631",
  },
  {
    name: "Nike",
    type: "Warrior",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/e/eb/SkinArt_Nike_Default.jpg/revision/latest/scale-to-width-down/250?cb=20161130221341",
  },
  {
    name: "Nox",
    type: "Mage",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/e/e1/SkinArt_Nox_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160505052645",
  },
  {
    name: "Nu Wa",
    type: "Mage",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/c/cd/SkinArt_NuWa_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160505052653",
  },
  {
    name: "Odin",
    type: "Warrior",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/1/1e/SkinArt_Odin_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160505052700",
  },
  {
    name: "Olorun",
    type: "Mage",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/3/3e/SkinArt_Olorun_Default.jpg/revision/latest/scale-to-width-down/250?cb=20190725153232",
  },
  {
    name: "Osiris",
    type: "Warrior",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/d/db/SkinArt_Osiris_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160505052712",
  },
  {
    name: "Pele",
    type: "Assassin",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/1/10/SkinArt_Pele_Default.jpg/revision/latest/scale-to-width-down/250?cb=20180811210703",
  },
  {
    name: "Persephone",
    type: "Mage",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/c/cf/SkinArt_Persephone_Default.jpg/revision/latest/scale-to-width-down/250?cb=20190820163452",
  },
  {
    name: "Poseidon",
    type: "Mage",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/c/ca/SkinArt_Poseidon_Default_V2.jpg/revision/latest/scale-to-width-down/250?cb=20170322214507",
  },
  {
    name: "Ra",
    type: "Mage",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/0/0e/SkinArt_Ra_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160505052727",
  },
  {
    name: "Raijin",
    type: "Mage",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/d/dd/SkinArt_Raijin_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160210220500",
  },
  {
    name: "Rama",
    type: "Hunter",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/0/00/SkinArt_Rama_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160505052744",
  },
  {
    name: "Ratatoskr",
    type: "Assassin",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/0/0b/SkinArt_Ratatoskr_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160505052751",
  },
  {
    name: "Ravana",
    type: "Assassin",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/1/16/SkinArt_Ravana_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160505052803",
  },
  {
    name: "Scylla",
    type: "Mage",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/c/c7/SkinArt_Scylla_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160505052835",
  },
  {
    name: "Serqet",
    type: "Assassin",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/9/9b/SkinArt_Serqet_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160505052848",
  },
  {
    name: "Set",
    type: "Assassin",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/c/cf/SkinArt_Set_Default.jpg/revision/latest/scale-to-width-down/250?cb=20190725153624",
  },
  {
    name: "Skadi",
    type: "Hunter",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/5/58/SkinArt_Skadi_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160310005547",
  },
  {
    name: "Sobek",
    type: "Guardian",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/b/b8/SkinArt_Sobek_Default.jpg/revision/latest/scale-to-width-down/250?cb=20210323164403",
  },
  {
    name: "Sol",
    type: "Mage",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/d/dc/SkinArt_Sol_Default.jpg/revision/latest/scale-to-width-down/250?cb=20150930220259",
  },
  {
    name: "Sun Wukong",
    type: "Warrior",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/b/b7/SkinArt_SunWukong_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160505052917",
  },
  {
    name: "Susano",
    type: "Assassin",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/6/6b/SkinArt_Susano_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160504211326",
  },
  {
    name: "Sylvanus",
    type: "Guardian",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/2/23/SkinArt_Sylvanus_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160505052925",
  },
  {
    name: "Terra",
    type: "Guardian",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/b/b9/SkinArt_Terra_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160727200453",
  },
  {
    name: "Thanatos",
    type: "Assassin",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/8/82/SkinArt_Thanatos_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160505052932",
  },
  {
    name: "The Morrigan",
    type: "Mage",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/6/68/SkinArt_TheMorrigan_Default.jpg/revision/latest/scale-to-width-down/250?cb=20170106020832",
  },
  {
    name: "Thor",
    type: "Assassin",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/7/7e/SkinArt_Thor_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160505052941",
  },
  {
    name: "Thoth",
    type: "Mage",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/1/19/SkinArt_Thoth_Default.jpg/revision/latest/scale-to-width-down/250?cb=20161103061230",
  },
  {
    name: "Tiamat",
    type: "Mage",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/0/07/SkinArt_Tiamat_Default.jpg/revision/latest/scale-to-width-down/250?cb=20210304182729",
  },
  {
    name: "Tsukuyomi",
    type: "Assassin",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/1/18/SkinArt_Tsukuyomi_Default.jpg/revision/latest/scale-to-width-down/250?cb=20201216173444",
  },
  {
    name: "Tyr",
    type: "Warrior",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/9/93/SkinArt_Tyr_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160505052949",
  },
  {
    name: "Ullr",
    type: "Hunter",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/1/1c/SkinArt_Ullr_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160505052950",
  },
  {
    name: "Vamana",
    type: "Warrior",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/7/7e/SkinArt_Vamana_Default_V2.jpg/revision/latest/scale-to-width-down/250?cb=20170119012235",
  },
  {
    name: "Vulcan",
    type: "Mage",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/5/54/SkinArt_Vulcan_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160505053009",
  },
  {
    name: "Xblanque",
    type: "Hunter",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/3/3d/SkinArt_Xbalanque_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160505053019",
  },
  {
    name: "Xing Tian",
    type: "Guardian",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/0/0b/SkinArt_XingTian_Default.jpg/revision/latest/scale-to-width-down/250?cb=20150826225059",
  },
  {
    name: "Yemoja",
    type: "Guardian",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/7/7b/SkinArt_Yemoja_Default.jpg/revision/latest/scale-to-width-down/250?cb=20191015181000",
  },
  {
    name: "Ymir",
    type: "Guardian",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/1/17/SkinArt_Ymir_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160505053040",
  },
  {
    name: "Zues",
    type: "Mage",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/e/e3/SkinArt_Zeus_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160505053049",
  },
  {
    name: "Zhong Kui",
    type: "Mage",
    url: "https://static.wikia.nocookie.net/smite_gamepedia/images/9/91/SkinArt_ZhongKui_Default.jpg/revision/latest/scale-to-width-down/250?cb=20160505053057",
  },
];
