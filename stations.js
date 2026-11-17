const DEFAULT_STATIONS = [
  {
    "id": "raya_sudirman_balik_kampung",
    "name": "Sudirman \u2014 Balik Kampung",
    "genre": "Lagu Wajib Balik Kampung Paling Ikonik",
    "category": "raya",
    "icon": "\ud83d\ude97",
    "url": "https://archive.org/download/laguraya_202004/Sudirman%20-%20Balik%20Kampung.mp3",
    "type": "audio"
  },
  {
    "id": "raya_pramlee_dendang_perantau",
    "name": "Tan Sri P. Ramlee \u2014 Dendang Perantau",
    "genre": "Karya Agung Nostalgia Perantau",
    "category": "raya",
    "icon": "\ud83d\udcfb",
    "url": "https://archive.org/download/laguraya_202004/P._Ramlee_-_Dendang_Perantau.mp3",
    "type": "audio"
  },
  {
    "id": "raya_pramlee_suaratakbir",
    "name": "Tan Sri P. Ramlee \u2014 Suara Takbir",
    "genre": "Klasik Abadi Pagi Syawal",
    "category": "raya",
    "icon": "\ud83d\udd4b",
    "url": "https://archive.org/download/laguraya_202004/P.Ramlee%20-%20Suara%20Takbir.mp3",
    "type": "audio"
  },
  {
    "id": "raya_siti_sesucilebaran",
    "name": "Dato' Sri Siti Nurhaliza \u2014 Sesuci Lebaran",
    "genre": "Lagu Raya No. 1 Paling Popular Malaysia",
    "category": "raya",
    "icon": "\ud83d\udc51",
    "url": "https://archive.org/download/laguraya_202004/Siti%20Nurhaliza-Sesuci%20Lebaran.mp3",
    "type": "audio"
  },
  {
    "id": "raya_mnasir_satuhari",
    "name": "Dato' M. Nasir \u2014 Satu Hari Di Hari Raya",
    "genre": "Evergreen Melodi Emas Hari Raya",
    "category": "raya",
    "icon": "\ud83c\udfb8",
    "url": "https://archive.org/download/Kompilasi-Lagu-Raya-Sepanjang-Zaman-2022/32%20-%20M%20Nasir%20-%20Satu%20Hari%20Di%20Hari%20Raya.mp3",
    "type": "audio"
  },
  {
    "id": "raya_saloma_selamat",
    "name": "Puan Sri Saloma \u2014 Selamat Hari Raya",
    "genre": "Suasana Lebaran Manis Klasik",
    "category": "raya",
    "icon": "\ud83c\udf38",
    "url": "https://archive.org/download/laguraya_202004/Saloma%20-%20Selamat%20Hari%20Raya.mp3",
    "type": "audio"
  },
  {
    "id": "raya_anuar_ellina",
    "name": "Anuar Zain & Ellina \u2014 Suasana Hari Raya",
    "genre": "Ceria Riang Kanak-Kanak & Remaja",
    "category": "raya",
    "icon": "\ud83c\udf86",
    "url": "https://archive.org/download/laguraya_202004/Anuarzain%26Ellina%20-%20Suasana%20Hari%20%20Raya.mp3",
    "type": "audio"
  },
  {
    "id": "raya_ujirashid_hailamir",
    "name": "Hail Amir & Uji Rashid \u2014 Seloka Hari Raya",
    "genre": "Duet Paling Manis & Ceria Sepanjang Zaman",
    "category": "raya",
    "icon": "\u2728",
    "url": "https://archive.org/download/Kompilasi-Lagu-Raya-Sepanjang-Zaman-2022/1-06%20Seloka%20Hari%20Raya.mp3",
    "type": "audio"
  },
  {
    "id": "raya_blackdogbone",
    "name": "Black Dog Bone \u2014 Cahaya Aidilfitri",
    "genre": "Lagu Pop Nostalgia Menggamit Rindu",
    "category": "raya",
    "icon": "\ud83d\udd6f\ufe0f",
    "url": "https://archive.org/download/laguraya_202004/Black_Dog_Bone_-_Cahaya_Aidilfitri.mp3",
    "type": "audio"
  },
  {
    "id": "raya_djdave",
    "name": "D.J Dave \u2014 Menjelang Hari Raya",
    "genre": "Gaya Irama Riang Nostalgia",
    "category": "raya",
    "icon": "\ud83d\udd7a",
    "url": "https://archive.org/download/laguraya_202004/D.J%20Dave%20-%20Menjelang%20Hari%20Raya.mp3",
    "type": "audio"
  },
  {
    "id": "raya_amanshah",
    "name": "Aman Shah \u2014 Kepulangan Yang Dinanti",
    "genre": "Lagu Syahdu Rintihan Perantau Pulang",
    "category": "raya",
    "icon": "\ud83c\udfe1",
    "url": "https://archive.org/download/20-lagu-lagu-hari-raya-aidilfitri/04%20Kepulangan%20Yang%20Dinanti%20-%20Aman%20Shah.mp3",
    "type": "audio"
  },
  {
    "id": "raya_sudirman_darijauh",
    "name": "Sudirman \u2014 Dari Jauh Ku Pohon Maaf",
    "genre": "Kemaafan Tulus Dari Kejauhan",
    "category": "raya",
    "icon": "\ud83d\udc8c",
    "url": "https://archive.org/download/laguraya_202004/Sudirman_-_Dari_Jauh_Ku_Pohon_Maaf.mp3",
    "type": "audio"
  },
  {
    "id": "raya_faizaltahir",
    "name": "Faizal Tahir \u2014 Kepulangan Yang Dinanti (Versi Akustik Rock)",
    "genre": "Nafas Baharu Ikonik Generasi Kini",
    "category": "raya",
    "icon": "\ud83c\udfb8",
    "url": "https://archive.org/download/laguraya_202004/Faizal%20Tahir%20-%20Kepulangan%20Yang%20Dinanti.mp3",
    "type": "audio"
  },
  {
    "id": "raya_aishah_pulanglah",
    "name": "Aishah \u2014 Pulanglah",
    "genre": "Vokal Penuh Emosi Menusuk Kalbu",
    "category": "raya",
    "icon": "\ud83e\udd7a",
    "url": "https://archive.org/download/laguraya_202004/Aishah_-_Pulanglah.mp3",
    "type": "audio"
  },
  {
    "id": "raya_hujan_raihan",
    "name": "Hujan & Raihan \u2014 Salam Aidilfitri Ayahanda Dan Bonda",
    "genre": "Kolaborasi Indie Rock & Nasyid Moden",
    "category": "raya",
    "icon": "\ud83c\udf27\ufe0f",
    "url": "https://archive.org/download/Kompilasi-Lagu-Raya-Sepanjang-Zaman-2022/23%20-%20Hujan%20%26%20Raihan%20-%20Salam%20Aidilfitri%20Ayahanda%20Dan%20Bonda.mp3",
    "type": "audio"
  },
  {
    "id": "raya_slam_suasana",
    "name": "Slam (Zamani) \u2014 Suasana Hari Raya",
    "genre": "Vokal Gemersik Balada Raya Rock",
    "category": "raya",
    "icon": "\ud83c\udfa4",
    "url": "https://archive.org/download/laguraya_202004/Slam%20-%20Suasana%20Hari%20Raya.mp3",
    "type": "audio"
  },
  {
    "id": "raya_awie_ziana",
    "name": "Awie & Ziana Zain \u2014 Sensasi Hari Raya",
    "genre": "Duet Berbisa Rock Kapak Raya",
    "category": "raya",
    "icon": "\u26a1",
    "url": "https://archive.org/download/laguraya_202004/Awie_&_Ziana_Zain_-_Sensasi_Hari_Raya.mp3",
    "type": "audio"
  },
  {
    "id": "raya_sharifah_aini_suasana",
    "name": "Datin Paduka Sharifah Aini \u2014 Suasana Hari Raya",
    "genre": "Keanggunan Suara Emas Hari Raya",
    "category": "raya",
    "icon": "\ud83d\udc8e",
    "url": "https://archive.org/download/20-lagu-lagu-hari-raya-aidilfitri/03%20Suasana%20Hari%20Raya%20-%20Sharifah%20Aini.mp3",
    "type": "audio"
  },
  {
    "id": "raya_sudirman_inang",
    "name": "Sudirman & Zaleha Hamid \u2014 Inang Di Aidilfitri",
    "genre": "Tarian Inang Hari Raya Tradisional",
    "category": "raya",
    "icon": "\ud83d\udc83",
    "url": "https://archive.org/download/lagu-raya-aidilfitri/SUDIRMAN-ZALEHA%20HAMID-InangDiAidilfitri.mp3",
    "type": "audio"
  },
  {
    "id": "raya_noorkumalasari",
    "name": "Noorkumalasari \u2014 Pulang Di Hari Raya",
    "genre": "Irama Pop Retro Nostalgia",
    "category": "raya",
    "icon": "\ud83d\udc60",
    "url": "https://archive.org/download/laguraya_202004/Raya%20-%20Noorkumalasari%20-%20Pulang%20Di%20Hari%20Raya.mp3",
    "type": "audio"
  },
  {
    "id": "raya_rahimah_rahim",
    "name": "Rahimah Rahim \u2014 Selamat Berhari Raya",
    "genre": "Irama Riang Ceria Beraya",
    "category": "raya",
    "icon": "\ud83c\udf89",
    "url": "https://archive.org/download/laguraya_202004/Rahimah%20Rahim%20-%20Selamat%20Berhari%20Raya.mp3",
    "type": "audio"
  },
  {
    "id": "raya_sanisah_aidilfitri",
    "name": "Sanisah Huri \u2014 Aidilfitri",
    "genre": "Alunan Klasik Menggamit Kenangan",
    "category": "raya",
    "icon": "\ud83c\udf19",
    "url": "https://archive.org/download/laguraya_202004/Sanisah%20Huri%20-%20Aidilfitri.mp3",
    "type": "audio"
  },
  {
    "id": "raya_sanisah_bersabarlah",
    "name": "Sanisah Huri \u2014 Bersabarlah Sayang",
    "genre": "Rintihan Syahdu Kekasih Di Rantau",
    "category": "raya",
    "icon": "\ud83c\udf42",
    "url": "https://archive.org/download/laguraya_202004/Sanisah_Huri_-_Bersabarlah_Sayang.mp3",
    "type": "audio"
  },
  {
    "id": "raya_ahmad_jais",
    "name": "Ahmad Jais \u2014 Selamat Hari Raya",
    "genre": "Irama Tradisi Asli Melayu",
    "category": "raya",
    "icon": "\ud83c\udf3f",
    "url": "https://archive.org/download/laguraya_202004/Ahmad_Jais_-_Selamat_Hari_Raya.mp3",
    "type": "audio"
  },
  {
    "id": "raya_senario",
    "name": "Senario \u2014 Seminggu Berhari Raya",
    "genre": "Lagu Raya Kelakar & Menghiburkan",
    "category": "raya",
    "icon": "\ud83d\ude06",
    "url": "https://archive.org/download/laguraya_202004/Senario_-_Seminggu_Berhari_Raya.mp3",
    "type": "audio"
  },
  {
    "id": "raya_4u2c",
    "name": "4U2C \u2014 Bergema Takbir Di Pagi Raya",
    "genre": "Irama Hip Hop / Rap Raya 90-an",
    "category": "raya",
    "icon": "\ud83e\udde2",
    "url": "https://archive.org/download/laguraya_202004/4U2C_-_Bergema_Takbir.mp3",
    "type": "audio"
  },
  {
    "id": "raya_fazidah_joned",
    "name": "Fazidah Joned \u2014 Selamat Hari Raya",
    "genre": "Klasik Asli Seri Aidilfitri",
    "category": "raya",
    "icon": "\ud83c\udf3a",
    "url": "https://archive.org/download/20-lagu-lagu-hari-raya-aidilfitri/17%20Selamat%20Hari%20Raya%20-%20Fazidah%20Joned.mp3",
    "type": "audio"
  },
  {
    "id": "raya_junainah",
    "name": "Junainah M. Amin \u2014 Suasana Riang Di Hari Raya",
    "genre": "Evergreen Ceria Lebaran",
    "category": "raya",
    "icon": "\ud83e\ude85",
    "url": "https://archive.org/download/laguraya_202004/Junaidah%20-%20Suasana%20Riang%20Di%20Hari%20Raya.mp3",
    "type": "audio"
  },
  {
    "id": "raya_rafeah_buang",
    "name": "Rafeah Buang \u2014 Bila Takbir Bergema",
    "genre": "Alunan Sayu Hati Menitis Air Mata",
    "category": "raya",
    "icon": "\ud83d\udd4a\ufe0f",
    "url": "https://archive.org/download/20-lagu-lagu-hari-raya-aidilfitri/22%20Bila%20Takbir%20Bergema%20-%20Rafeah%20Buang.mp3",
    "type": "audio"
  },
  {
    "id": "raya_sony_all_stars",
    "name": "Sony All Stars \u2014 Warna Warni Aidilfitri",
    "genre": "Gabungan Artis Ramai-Ramai Riang Raya",
    "category": "raya",
    "icon": "\ud83c\udf08",
    "url": "https://archive.org/download/laguraya_202004/Sony%20All%20Star%20-%20Warna%20Warni%20Aidilfitri.mp3",
    "type": "audio"
  },
  {
    "id": "raya_jamal_salam",
    "name": "Jamal Abdillah \u2014 Salam Aidilfitri",
    "genre": "Klasik Vokal Raja Pop Malaysia",
    "category": "raya",
    "icon": "\ud83d\udc51",
    "url": "https://archive.org/download/laguraya_202004/Jamal_Abdillah_-_Salam_Aidilfitri.mp3",
    "type": "audio"
  },
  {
    "id": "raya_amy_mastura",
    "name": "Amy Mastura \u2014 Bersama Di Hari Raya",
    "genre": "Pop Ceria & Manis Hari Raya",
    "category": "raya",
    "icon": "\ud83c\udf6d",
    "url": "https://archive.org/download/Kompilasi-Lagu-Raya-Sepanjang-Zaman-2022/10%20-%20Amy%20Mastura%20-%20Bersama%20Di%20Hari%20Raya.mp3",
    "type": "audio"
  },
  {
    "id": "raya_ziana_zain",
    "name": "Ziana Zain \u2014 Indah Di Hari Raya",
    "genre": "Vokal Nada Tinggi Berbisa",
    "category": "raya",
    "icon": "\u2728",
    "url": "https://archive.org/download/Kompilasi-Lagu-Raya-Sepanjang-Zaman-2022/57%20-%20Ziana%20Zain%20-%20Indah%20Di%20Hari%20Raya.mp3",
    "type": "audio"
  },
  {
    "id": "raya_wings_keroncong",
    "name": "Wings \u2014 Keroncong Hari Raya",
    "genre": "Rock Keroncong Versi Wings & Awie",
    "category": "raya",
    "icon": "\ud83c\udfb8",
    "url": "https://archive.org/download/Kompilasi-Lagu-Raya-Sepanjang-Zaman-2022/54%20-%20Wings%20-%20Keroncong%20Hari%20Raya.mp3",
    "type": "audio"
  },
  {
    "id": "raya_siti_suaratakbir",
    "name": "Dato' Sri Siti Nurhaliza \u2014 Suara Takbir",
    "genre": "Vokal Lembut Alunan Syahdu",
    "category": "raya",
    "icon": "\ud83c\udf19",
    "url": "https://archive.org/download/lagu-raya-aidilfitri/SitiNurhaliza-SuaraTakbir.mp3",
    "type": "audio"
  },
  {
    "id": "raya_zainal_dendang",
    "name": "Zainal Abidin \u2014 Dendang Perantau (World Music)",
    "genre": "Irama World Music Sentuhan Zainal Abidin",
    "category": "raya",
    "icon": "\ud83e\udd41",
    "url": "https://archive.org/download/lagu-raya-aidilfitri/Zainal_Abidin_-_Dendang_Perantau.mp3",
    "type": "audio"
  },
  {
    "id": "raya_aishah_maklimah",
    "name": "Aishah \u2014 Lenggang Mak Limah",
    "genre": "Irama Tradisi Joget Ceria",
    "category": "raya",
    "icon": "\ud83c\udf89",
    "url": "https://archive.org/download/lagu-raya-aidilfitri/Aishah-LenggangMakLimah.mp3",
    "type": "audio"
  },
  {
    "id": "raya_siti_meriah",
    "name": "Dato' Sri Siti Nurhaliza \u2014 Meriah Suasana Hari Raya",
    "genre": "Pop Rancak Riang Ria Bersama",
    "category": "raya",
    "icon": "\ud83c\udf8a",
    "url": "https://archive.org/download/lagu-raya-aidilfitri/SitiNurhaliza-MeriahSuasanaHariRaya.mp3",
    "type": "audio"
  },
  {
    "id": "raya_nonstop_terbaik_2022",
    "name": "Kompilasi Mega Nonstop Lagu Raya (Audio HD)",
    "genre": "Putaran Berterusan 2 Jam Lagu Raya Terbaik",
    "category": "raya",
    "icon": "\ud83d\udd25",
    "url": "https://archive.org/download/lagu-raya-2022-lagu-raya-aidilfitri-suasana-hari-raya-koleksi-lagu-raya-terbaik-sepanjang-zaman-1/KOLEKSI%20LAGU%20RAYA%20NOSTALGIA%20TERBAIK.mp3",
    "type": "audio"
  },
  {
    "id": "raya_takbir_full",
    "name": "Gema Takbir Raya Aidilfitri Penuh (Makkah & Malaysia)",
    "genre": "Alunan Takbir Hari Raya Syahdu",
    "category": "raya",
    "icon": "\ud83d\udd4c",
    "url": "https://archive.org/download/lagu-raya-aidilfitri/TAKBIRRAYAFULL.mp3",
    "type": "audio"
  },
  {
    "id": "hotfm",
    "name": "Hot FM",
    "genre": "Yang Hangat dan Terkini",
    "category": "popular",
    "icon": "\ud83d\udd25",
    "url": "https://stream.rcs.revma.com/drakdf8mtd3vv",
    "type": "audio"
  },
  {
    "id": "sinarfm",
    "name": "Sinar FM",
    "genre": "Menyinari Hidupmu (Retro & Klasik)",
    "category": "popular",
    "icon": "\u2600\ufe0f",
    "url": "https://stream.rcs.revma.com/azatk0tbv4uvv",
    "type": "audio"
  },
  {
    "id": "hitzfm",
    "name": "Hitz FM",
    "genre": "Malaysia's #1 Hit Music Station",
    "category": "popular",
    "icon": "\ud83c\udfb6",
    "url": "https://stream.rcs.revma.com/488kt4sbv4uvv",
    "type": "audio"
  },
  {
    "id": "flyfm",
    "name": "Fly FM",
    "genre": "Today's Hottest Hits & Trend",
    "category": "popular",
    "icon": "\ud83e\udd85",
    "url": "https://stream.rcs.revma.com/q17aka9mtd3vv",
    "type": "audio"
  },
  {
    "id": "kool101",
    "name": "Kool 101",
    "genre": "Suara Semasa & Muzik Berkualiti",
    "category": "berita",
    "icon": "\ud83c\udf99\ufe0f",
    "url": "https://stream.rcs.revma.com/3930238mtd3vv",
    "type": "audio"
  },
  {
    "id": "litefm",
    "name": "Lite FM",
    "genre": "Relaxing Favorites & Easy Listening",
    "category": "muzik",
    "icon": "\u2615",
    "url": "https://stream.rcs.revma.com/bn4ex8sbv4uvv",
    "type": "audio"
  },
  {
    "id": "mixfm",
    "name": "MIX FM",
    "genre": "The Best Music from Yesterday & Today",
    "category": "muzik",
    "icon": "\ud83d\udcfb",
    "url": "https://stream.rcs.revma.com/v5pq3htbv4uvv",
    "type": "audio"
  },
  {
    "id": "myfm",
    "name": "MY FM",
    "genre": "Muzik Pop & Hiburan Cina Terkini",
    "category": "popular",
    "icon": "\ud83c\udfa7",
    "url": "https://stream.rcs.revma.com/hc3unrtbv4uvv",
    "type": "audio"
  },
  {
    "id": "melodyfm",
    "name": "Melody FM",
    "genre": "Lagu Emas Cina & Sentuhan Klasik",
    "category": "muzik",
    "icon": "\ud83c\udfb5",
    "url": "https://stream.rcs.revma.com/2u1n6dtbv4uvv",
    "type": "audio"
  },
  {
    "id": "goxuan",
    "name": "GOXUAN",
    "genre": "Muzik Trend & Gaya Hidup Generasi Baharu",
    "category": "popular",
    "icon": "\ud83d\ude80",
    "url": "https://stream.rcs.revma.com/xt9nhzsbv4uvv",
    "type": "audio"
  },
  {
    "id": "raaga",
    "name": "Raaga FM",
    "genre": "Malaysia's #1 Tamil Radio Station",
    "category": "popular",
    "icon": "\ud83e\ude95",
    "url": "https://n06.rcs.revma.com/1ut6qwtbv4uvv",
    "type": "audio"
  },
  {
    "id": "zayan",
    "name": "Zayan FM",
    "genre": "Indah Di Hati (Gaya Hidup Muslim Moden)",
    "category": "islamik",
    "icon": "\ud83c\udf19",
    "url": "https://stream.rcs.revma.com/7ww2a4tbv4uvv",
    "type": "audio"
  },
  {
    "id": "eightfm",
    "name": "Eight 8FM (\u65e0\u9650)",
    "genre": "Radio Bahasa Cina Dinamik",
    "category": "popular",
    "icon": "\ud83c\udfb1",
    "url": "https://stream.rcs.revma.com/qp0xrd9mtd3vv",
    "type": "audio"
  },
  {
    "id": "988fm",
    "name": "988 FM",
    "genre": "Berita & Muzik Cina Malaysia",
    "category": "popular",
    "icon": "\ud83d\udcfb",
    "url": "https://28103.live.streamtheworld.com/988_FMAAC.aac",
    "type": "audio"
  },
  {
    "id": "bfm",
    "name": "BFM 89.9",
    "genre": "The Business Station (News, Talks & Economy)",
    "category": "berita",
    "icon": "\ud83d\udcbc",
    "url": "https://22253.live.streamtheworld.com/BFM_SC",
    "type": "audio"
  },
  {
    "id": "cityplus",
    "name": "CITYPlus FM",
    "genre": "Info Bisnes & Pasaran Modal (Mandarin)",
    "category": "berita",
    "icon": "\ud83c\udfd9\ufe0f",
    "url": "https://stream.rcs.revma.com/9ykdmcawe1bwv",
    "type": "audio"
  },
  {
    "id": "catsfm",
    "name": "Cats FM (Sarawak)",
    "genre": "Nang Antap! Muzik & Info Tempatan Sarawak",
    "category": "popular",
    "icon": "\ud83d\udc31",
    "url": "https://stream.rcs.revma.com/51qe53rv0y3vv.m4a",
    "type": "audio"
  },
  {
    "id": "ikimfm",
    "name": "IKIM FM",
    "genre": "Pilihan Utama Anda (Kefahaman Islam)",
    "category": "islamik",
    "icon": "\ud83d\udd4c",
    "url": "https://stream.rcs.revma.com/kz3pdu9wz2nwv",
    "type": "audio"
  },
  {
    "id": "quranmakkah",
    "name": "Radio Quran Makkah 24 Jam",
    "genre": "Bacaan Ayat Suci Al-Quran Bersambung",
    "category": "islamik",
    "icon": "\ud83d\udcd6",
    "url": "https://qurango.net/radio/salma",
    "type": "audio"
  },
  {
    "id": "radioklasik",
    "name": "Radio Klasik RTM",
    "genre": "Menggamit Kenangan Lagu Abadi Melayu",
    "category": "muzik",
    "icon": "\ud83d\udcfb",
    "url": "https://playerservices.streamtheworld.com/api/livestream-redirect/RADIO_KLASIK.mp3",
    "type": "audio"
  },
  {
    "id": "nasionalfm",
    "name": "Nasional FM RTM",
    "genre": "Sentiasa di Hati & Liputan Berita Negara",
    "category": "berita",
    "icon": "\ud83c\uddf2\ud83c\uddfe",
    "url": "https://playerservices.streamtheworld.com/api/livestream-redirect/NASIONAL_FM.mp3",
    "type": "audio"
  },
  {
    "id": "traxxfm",
    "name": "Traxx FM RTM",
    "genre": "Travel 'N' Music (English National Station)",
    "category": "berita",
    "icon": "\ud83c\udf10",
    "url": "https://playerservices.streamtheworld.com/api/livestream-redirect/TRAXX_FMAAC_SC",
    "type": "audio"
  },
  {
    "id": "aifm",
    "name": "Ai FM RTM",
    "genre": "Stesen Bahasa Mandarin Kebangsaan RTM",
    "category": "popular",
    "icon": "\ud83c\udde8\ud83c\uddf3",
    "url": "https://playerservices.streamtheworld.com/api/livestream-redirect/AI_FMAAC_SC",
    "type": "audio"
  },
  {
    "id": "minnalfm",
    "name": "Minnal FM RTM",
    "genre": "Stesen Bahasa Tamil Kebangsaan RTM",
    "category": "popular",
    "icon": "\ud83c\uddee\ud83c\uddf3",
    "url": "https://playerservices.streamtheworld.com/api/livestream-redirect/MINNAL_FMAAC_SC",
    "type": "audio"
  },
  {
    "id": "asyikfm",
    "name": "Asyik FM RTM",
    "genre": "Moi Num Moi Mai (Suara Warisan Pribumi)",
    "category": "muzik",
    "icon": "\ud83c\udf3f",
    "url": "https://playerservices.streamtheworld.com/api/livestream-redirect/ASYIK_FM.mp3",
    "type": "audio"
  },
  {
    "id": "kelantanfm",
    "name": "Kelantan FM RTM",
    "genre": "Peneraju Utama Siaran Pantai Timur",
    "category": "negeri",
    "icon": "\ud83d\udd34",
    "url": "https://playerservices.streamtheworld.com/api/livestream-redirect/KELANTAN_FMAAC.aac",
    "type": "audio"
  },
  {
    "id": "terengganufm",
    "name": "Terengganu FM RTM",
    "genre": "Santai Molek, Info Kemah Keming",
    "category": "negeri",
    "icon": "\u26aa",
    "url": "https://22243.live.streamtheworld.com/TERENGGANU_FMAAC_SC",
    "type": "audio"
  },
  {
    "id": "pahangfm",
    "name": "Pahang FM RTM",
    "genre": "Suara Tok Gajah, Maklumat & Inspirasi",
    "category": "negeri",
    "icon": "\ud83d\udc18",
    "url": "https://playerservices.streamtheworld.com/api/livestream-redirect/PAHANG_FMAAC.aac",
    "type": "audio"
  },
  {
    "id": "sabahfm",
    "name": "Sabah FM RTM",
    "genre": "Bagus Bah! Suara Komuniti Negeri Di Bawah Bayu",
    "category": "negeri",
    "icon": "\ud83c\udf3a",
    "url": "https://playerservices.streamtheworld.com/api/livestream-redirect/SABAH_FMAAC.aac",
    "type": "audio"
  },
  {
    "id": "sarawakfm",
    "name": "Sarawak FM RTM",
    "genre": "Sehati Sejiwa Dari Bumi Kenyalang",
    "category": "negeri",
    "icon": "\ud83e\udda4",
    "url": "https://playerservices.streamtheworld.com/api/livestream-redirect/SARAWAK_FMAAC.aac",
    "type": "audio"
  },
  {
    "id": "langkawifm",
    "name": "Langkawi FM RTM",
    "genre": "Suara Pulau Bebas Cukai & Percutian",
    "category": "negeri",
    "icon": "\ud83c\udfdd\ufe0f",
    "url": "https://playerservices.streamtheworld.com/api/livestream-redirect/LANGKAWI_FM.mp3",
    "type": "audio"
  },
  {
    "id": "keningaufm",
    "name": "Keningau FM RTM",
    "genre": "Suara Pedalaman Sabah Nan Harmoni",
    "category": "negeri",
    "icon": "\ud83c\udfde\ufe0f",
    "url": "https://playerservices.streamtheworld.com/api/livestream-redirect/KENINGAU_FM.mp3",
    "type": "audio"
  },
  {
    "id": "waifmiban",
    "name": "WAI FM Iban RTM",
    "genre": "Siaran Bahasa Iban Sarawak",
    "category": "negeri",
    "icon": "\ud83c\udf3e",
    "url": "https://playerservices.streamtheworld.com/api/livestream-redirect/WAI_FM_IBAN.mp3",
    "type": "audio"
  },
  {
    "id": "waifmbidayuh",
    "name": "WAI FM Bidayuh RTM",
    "genre": "Siaran Bahasa Bidayuh Sarawak",
    "category": "negeri",
    "icon": "\ud83c\udf8b",
    "url": "https://playerservices.streamtheworld.com/api/livestream-redirect/WAI_FM_BK.mp3",
    "type": "audio"
  },
  {
    "id": "radiorosak",
    "name": "Radio Rosak",
    "genre": "Muzik Indie, Underground & Alternatif Tempatan",
    "category": "muzik",
    "icon": "\u26a1",
    "url": "https://radiorosak.radioca.st/stream",
    "type": "audio"
  },
  {
    "id": "slowrock",
    "name": "Slow Rock 90's",
    "genre": "Kompilasi Lagu Rock Kapak & Balada Klasik",
    "category": "muzik",
    "icon": "\ud83c\udfb8",
    "url": "https://stream.zeno.fm/hiut6cwfoneuv",
    "type": "audio"
  },
  {
    "id": "jazzlounge",
    "name": "Jazz Lounge",
    "genre": "Muzik Jazz Santai & Ketenangan Jiwa",
    "category": "muzik",
    "icon": "\ud83c\udfb7",
    "url": "http://eu8.fastcast4u.com:5068/;",
    "type": "audio"
  },
  {
    "id": "gegarmuzik",
    "name": "Gegar Muzik FM",
    "genre": "Hiburan Muzik Dangdut, Melayu & Pop",
    "category": "muzik",
    "icon": "\ud83d\udc83",
    "url": "https://usa3.fastcast4u.com/proxy/gegarmuzikfm?mp=/1",
    "type": "audio"
  },
  {
    "id": "gemersikfm",
    "name": "Gemersik FM",
    "genre": "Sentuhan Muzik Retro & Melodi Rindu",
    "category": "muzik",
    "icon": "\ud83d\udcfb",
    "url": "http://gemersikfm.iradio.work:8000/;",
    "type": "audio"
  },
  {
    "id": "impianfm",
    "name": "Impian FM",
    "genre": "Hiburan Lagu Melayu Nostalgia",
    "category": "muzik",
    "icon": "\u2728",
    "url": "http://167.114.131.90:6156/stream/1/",
    "type": "audio"
  },
  {
    "id": "radiokpkt",
    "name": "Radio KPKT",
    "genre": "Saluran Maklumat Kerajaan & Komuniti",
    "category": "berita",
    "icon": "\ud83d\udce2",
    "url": "http://listen.kpkt.gov.my:8000/stream",
    "type": "audio"
  },
  {
    "id": "johorfm",
    "name": "Johor FM RTM",
    "genre": "Permata Selatan - Lagu & Berita Tempatan",
    "category": "negeri",
    "icon": "\ud83c\udfdb\ufe0f",
    "url": "https://playerservices.streamtheworld.com/api/livestream-redirect/JOHOR_FMAAC_SC",
    "type": "audio"
  },
  {
    "id": "perakfm",
    "name": "Perak FM RTM",
    "genre": "Moh Kome Dengo - Info & Lagu Menarik",
    "category": "negeri",
    "icon": "\ud83c\udfde\ufe0f",
    "url": "https://playerservices.streamtheworld.com/api/livestream-redirect/PERAK_FMAAC_SC",
    "type": "audio"
  },
  {
    "id": "kedahfm",
    "name": "Kedah FM RTM",
    "genre": "Mesra, Berinformasi & Menghiburkan",
    "category": "negeri",
    "icon": "\ud83c\udf3e",
    "url": "https://playerservices.streamtheworld.com/api/livestream-redirect/KEDAH_FMAAC_SC",
    "type": "audio"
  },
  {
    "id": "melakafm",
    "name": "Melaka FM RTM",
    "genre": "Mendahului Zaman - Suara Bersejarah",
    "category": "negeri",
    "icon": "\u26f5",
    "url": "https://playerservices.streamtheworld.com/api/livestream-redirect/MELAKA_FMAAC_SC",
    "type": "audio"
  },
  {
    "id": "perlisfm",
    "name": "Perlis FM RTM",
    "genre": "Minda Anda Citra Perlis",
    "category": "negeri",
    "icon": "\ud83c\udf04",
    "url": "https://playerservices.streamtheworld.com/api/livestream-redirect/PERLIS_FMAAC_SC",
    "type": "audio"
  },
  {
    "id": "sabahvfm",
    "name": "Sabah VFM RTM",
    "genre": "Pelbagai Bahasa & Etnik Sabah Harmoni",
    "category": "negeri",
    "icon": "\ud83c\udfd4\ufe0f",
    "url": "https://playerservices.streamtheworld.com/api/livestream-redirect/SABAH_VFMAAC_SC",
    "type": "audio"
  }
];
