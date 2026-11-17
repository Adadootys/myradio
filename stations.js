const DEFAULT_STATIONS = [
  {
    "id": "hotfm",
    "name": "Hot FM",
    "genre": "Yang Hangat dan Terkini",
    "category": "popular",
    "icon": "🔥",
    "url": "https://stream.rcs.revma.com/drakdf8mtd3vv",
    "type": "audio"
  },
  {
    "id": "sinarfm",
    "name": "Sinar FM",
    "genre": "Menyinari Hidupmu (Retro & Klasik)",
    "category": "popular",
    "icon": "☀️",
    "url": "https://stream.rcs.revma.com/azatk0tbv4uvv",
    "type": "audio"
  },
  {
    "id": "hitzfm",
    "name": "Hitz FM",
    "genre": "Malaysia's #1 Hit Music Station",
    "category": "popular",
    "icon": "🎶",
    "url": "https://stream.rcs.revma.com/488kt4sbv4uvv",
    "type": "audio"
  },
  {
    "id": "flyfm",
    "name": "Fly FM",
    "genre": "Today's Hottest Hits & Trend",
    "category": "popular",
    "icon": "🦅",
    "url": "https://stream.rcs.revma.com/q17aka9mtd3vv",
    "type": "audio"
  },
  {
    "id": "kool101",
    "name": "Kool 101",
    "genre": "Suara Semasa & Muzik Berkualiti",
    "category": "berita",
    "icon": "🎙️",
    "url": "https://stream.rcs.revma.com/3930238mtd3vv",
    "type": "audio"
  },
  {
    "id": "litefm",
    "name": "Lite FM",
    "genre": "Relaxing Favorites & Easy Listening",
    "category": "muzik",
    "icon": "☕",
    "url": "https://stream.rcs.revma.com/bn4ex8sbv4uvv",
    "type": "audio"
  },
  {
    "id": "mixfm",
    "name": "MIX FM",
    "genre": "The Best Music from Yesterday & Today",
    "category": "muzik",
    "icon": "📻",
    "url": "https://stream.rcs.revma.com/v5pq3htbv4uvv",
    "type": "audio"
  },
  {
    "id": "myfm",
    "name": "MY FM",
    "genre": "Muzik Pop & Hiburan Cina Terkini",
    "category": "popular",
    "icon": "🎧",
    "url": "https://stream.rcs.revma.com/hc3unrtbv4uvv",
    "type": "audio"
  },
  {
    "id": "melodyfm",
    "name": "Melody FM",
    "genre": "Lagu Emas Cina & Sentuhan Klasik",
    "category": "muzik",
    "icon": "🎵",
    "url": "https://stream.rcs.revma.com/2u1n6dtbv4uvv",
    "type": "audio"
  },
  {
    "id": "goxuan",
    "name": "GOXUAN",
    "genre": "Muzik Trend & Gaya Hidup Generasi Baharu",
    "category": "popular",
    "icon": "🚀",
    "url": "https://stream.rcs.revma.com/xt9nhzsbv4uvv",
    "type": "audio"
  },
  {
    "id": "raaga",
    "name": "Raaga FM",
    "genre": "Malaysia's #1 Tamil Radio Station",
    "category": "popular",
    "icon": "🪕",
    "url": "https://n06.rcs.revma.com/1ut6qwtbv4uvv",
    "type": "audio"
  },
  {
    "id": "zayan",
    "name": "Zayan FM",
    "genre": "Indah Di Hati (Gaya Hidup Muslim Moden)",
    "category": "islamik",
    "icon": "🌙",
    "url": "https://stream.rcs.revma.com/7ww2a4tbv4uvv",
    "type": "audio"
  },
  {
    "id": "eightfm",
    "name": "Eight 8FM (无限)",
    "genre": "Radio Bahasa Cina Dinamik",
    "category": "popular",
    "icon": "🎱",
    "url": "https://stream.rcs.revma.com/qp0xrd9mtd3vv",
    "type": "audio"
  },
  {
    "id": "988fm",
    "name": "988 FM",
    "genre": "Berita & Muzik Cina Malaysia",
    "category": "popular",
    "icon": "📻",
    "url": "https://28103.live.streamtheworld.com/988_FMAAC.aac",
    "type": "audio"
  },
  {
    "id": "bfm",
    "name": "BFM 89.9",
    "genre": "The Business Station (News, Talks & Economy)",
    "category": "berita",
    "icon": "💼",
    "url": "https://22253.live.streamtheworld.com/BFM_SC",
    "type": "audio"
  },
  {
    "id": "cityplus",
    "name": "CITYPlus FM",
    "genre": "Info Bisnes & Pasaran Modal (Mandarin)",
    "category": "berita",
    "icon": "🏙️",
    "url": "https://stream.rcs.revma.com/9ykdmcawe1bwv",
    "type": "audio"
  },
  {
    "id": "catsfm",
    "name": "Cats FM (Sarawak)",
    "genre": "Nang Antap! Muzik & Info Tempatan Sarawak",
    "category": "popular",
    "icon": "🐱",
    "url": "https://stream.rcs.revma.com/51qe53rv0y3vv.m4a",
    "type": "audio"
  },
  {
    "id": "ikimfm",
    "name": "IKIM FM",
    "genre": "Pilihan Utama Anda (Kefahaman Islam)",
    "category": "islamik",
    "icon": "🕌",
    "url": "https://stream.rcs.revma.com/kz3pdu9wz2nwv",
    "type": "audio"
  },
  {
    "id": "quranmakkah",
    "name": "Radio Quran Makkah 24 Jam",
    "genre": "Bacaan Ayat Suci Al-Quran Bersambung",
    "category": "islamik",
    "icon": "📖",
    "url": "https://qurango.net/radio/salma",
    "type": "audio"
  },
  {
    "id": "radioklasik",
    "name": "Radio Klasik RTM",
    "genre": "Menggamit Kenangan Lagu Abadi Melayu",
    "category": "muzik",
    "icon": "📻",
    "url": "https://playerservices.streamtheworld.com/api/livestream-redirect/RADIO_KLASIK.mp3",
    "type": "audio"
  },
  {
    "id": "nasionalfm",
    "name": "Nasional FM RTM",
    "genre": "Sentiasa di Hati & Liputan Berita Negara",
    "category": "berita",
    "icon": "🇲🇾",
    "url": "https://playerservices.streamtheworld.com/api/livestream-redirect/NASIONAL_FM.mp3",
    "type": "audio"
  },
  {
    "id": "traxxfm",
    "name": "Traxx FM RTM",
    "genre": "Travel 'N' Music (English National Station)",
    "category": "berita",
    "icon": "🌐",
    "url": "https://playerservices.streamtheworld.com/api/livestream-redirect/TRAXX_FMAAC_SC",
    "type": "audio"
  },
  {
    "id": "aifm",
    "name": "Ai FM RTM",
    "genre": "Stesen Bahasa Mandarin Kebangsaan RTM",
    "category": "popular",
    "icon": "🇨🇳",
    "url": "https://playerservices.streamtheworld.com/api/livestream-redirect/AI_FMAAC_SC",
    "type": "audio"
  },
  {
    "id": "minnalfm",
    "name": "Minnal FM RTM",
    "genre": "Stesen Bahasa Tamil Kebangsaan RTM",
    "category": "popular",
    "icon": "🇮🇳",
    "url": "https://playerservices.streamtheworld.com/api/livestream-redirect/MINNAL_FMAAC_SC",
    "type": "audio"
  },
  {
    "id": "asyikfm",
    "name": "Asyik FM RTM",
    "genre": "Moi Num Moi Mai (Suara Warisan Pribumi)",
    "category": "muzik",
    "icon": "🌿",
    "url": "https://playerservices.streamtheworld.com/api/livestream-redirect/ASYIK_FM.mp3",
    "type": "audio"
  },
  {
    "id": "kelantanfm",
    "name": "Kelantan FM RTM",
    "genre": "Peneraju Utama Siaran Pantai Timur",
    "category": "negeri",
    "icon": "🔴",
    "url": "https://playerservices.streamtheworld.com/api/livestream-redirect/KELANTAN_FMAAC.aac",
    "type": "audio"
  },
  {
    "id": "terengganufm",
    "name": "Terengganu FM RTM",
    "genre": "Santai Molek, Info Kemah Keming",
    "category": "negeri",
    "icon": "⚪",
    "url": "https://22243.live.streamtheworld.com/TERENGGANU_FMAAC_SC",
    "type": "audio"
  },
  {
    "id": "pahangfm",
    "name": "Pahang FM RTM",
    "genre": "Suara Tok Gajah, Maklumat & Inspirasi",
    "category": "negeri",
    "icon": "🐘",
    "url": "https://playerservices.streamtheworld.com/api/livestream-redirect/PAHANG_FMAAC.aac",
    "type": "audio"
  },
  {
    "id": "sabahfm",
    "name": "Sabah FM RTM",
    "genre": "Bagus Bah! Suara Komuniti Negeri Di Bawah Bayu",
    "category": "negeri",
    "icon": "🌺",
    "url": "https://playerservices.streamtheworld.com/api/livestream-redirect/SABAH_FMAAC.aac",
    "type": "audio"
  },
  {
    "id": "sarawakfm",
    "name": "Sarawak FM RTM",
    "genre": "Sehati Sejiwa Dari Bumi Kenyalang",
    "category": "negeri",
    "icon": "🦤",
    "url": "https://playerservices.streamtheworld.com/api/livestream-redirect/SARAWAK_FMAAC.aac",
    "type": "audio"
  },
  {
    "id": "langkawifm",
    "name": "Langkawi FM RTM",
    "genre": "Suara Pulau Bebas Cukai & Percutian",
    "category": "negeri",
    "icon": "🏝️",
    "url": "https://playerservices.streamtheworld.com/api/livestream-redirect/LANGKAWI_FM.mp3",
    "type": "audio"
  },
  {
    "id": "keningaufm",
    "name": "Keningau FM RTM",
    "genre": "Suara Pedalaman Sabah Nan Harmoni",
    "category": "negeri",
    "icon": "🏞️",
    "url": "https://playerservices.streamtheworld.com/api/livestream-redirect/KENINGAU_FM.mp3",
    "type": "audio"
  },
  {
    "id": "waifmiban",
    "name": "WAI FM Iban RTM",
    "genre": "Siaran Bahasa Iban Sarawak",
    "category": "negeri",
    "icon": "🌾",
    "url": "https://playerservices.streamtheworld.com/api/livestream-redirect/WAI_FM_IBAN.mp3",
    "type": "audio"
  },
  {
    "id": "waifmbidayuh",
    "name": "WAI FM Bidayuh RTM",
    "genre": "Siaran Bahasa Bidayuh Sarawak",
    "category": "negeri",
    "icon": "🎋",
    "url": "https://playerservices.streamtheworld.com/api/livestream-redirect/WAI_FM_BK.mp3",
    "type": "audio"
  },
  {
    "id": "radiorosak",
    "name": "Radio Rosak",
    "genre": "Muzik Indie, Underground & Alternatif Tempatan",
    "category": "muzik",
    "icon": "⚡",
    "url": "https://radiorosak.radioca.st/stream",
    "type": "audio"
  },
  {
    "id": "slowrock",
    "name": "Slow Rock 90's",
    "genre": "Kompilasi Lagu Rock Kapak & Balada Klasik",
    "category": "muzik",
    "icon": "🎸",
    "url": "https://stream.zeno.fm/hiut6cwfoneuv",
    "type": "audio"
  },
  {
    "id": "jazzlounge",
    "name": "Jazz Lounge",
    "genre": "Muzik Jazz Santai & Ketenangan Jiwa",
    "category": "muzik",
    "icon": "🎷",
    "url": "http://eu8.fastcast4u.com:5068/;",
    "type": "audio"
  },
  {
    "id": "gegarmuzik",
    "name": "Gegar Muzik FM",
    "genre": "Hiburan Muzik Dangdut, Melayu & Pop",
    "category": "muzik",
    "icon": "💃",
    "url": "https://usa3.fastcast4u.com/proxy/gegarmuzikfm?mp=/1",
    "type": "audio"
  },
  {
    "id": "gemersikfm",
    "name": "Gemersik FM",
    "genre": "Sentuhan Muzik Retro & Melodi Rindu",
    "category": "muzik",
    "icon": "📻",
    "url": "http://gemersikfm.iradio.work:8000/;",
    "type": "audio"
  },
  {
    "id": "impianfm",
    "name": "Impian FM",
    "genre": "Hiburan Lagu Melayu Nostalgia",
    "category": "muzik",
    "icon": "✨",
    "url": "http://167.114.131.90:6156/stream/1/",
    "type": "audio"
  },
  {
    "id": "radiokpkt",
    "name": "Radio KPKT",
    "genre": "Saluran Maklumat Kerajaan & Komuniti",
    "category": "berita",
    "icon": "📢",
    "url": "http://listen.kpkt.gov.my:8000/stream",
    "type": "audio"
  },
  {
    "id": "johorfm",
    "name": "Johor FM RTM",
    "genre": "Permata Selatan - Lagu & Berita Tempatan",
    "category": "negeri",
    "icon": "🏛️",
    "url": "https://playerservices.streamtheworld.com/api/livestream-redirect/JOHOR_FMAAC_SC",
    "type": "audio"
  },
  {
    "id": "perakfm",
    "name": "Perak FM RTM",
    "genre": "Moh Kome Dengo - Info & Lagu Menarik",
    "category": "negeri",
    "icon": "🏞️",
    "url": "https://playerservices.streamtheworld.com/api/livestream-redirect/PERAK_FMAAC_SC",
    "type": "audio"
  },
  {
    "id": "kedahfm",
    "name": "Kedah FM RTM",
    "genre": "Mesra, Berinformasi & Menghiburkan",
    "category": "negeri",
    "icon": "🌾",
    "url": "https://playerservices.streamtheworld.com/api/livestream-redirect/KEDAH_FMAAC_SC",
    "type": "audio"
  },
  {
    "id": "melakafm",
    "name": "Melaka FM RTM",
    "genre": "Mendahului Zaman - Suara Bersejarah",
    "category": "negeri",
    "icon": "⛵",
    "url": "https://playerservices.streamtheworld.com/api/livestream-redirect/MELAKA_FMAAC_SC",
    "type": "audio"
  },
  {
    "id": "perlisfm",
    "name": "Perlis FM RTM",
    "genre": "Minda Anda Citra Perlis",
    "category": "negeri",
    "icon": "🌄",
    "url": "https://playerservices.streamtheworld.com/api/livestream-redirect/PERLIS_FMAAC_SC",
    "type": "audio"
  },
  {
    "id": "sabahvfm",
    "name": "Sabah VFM RTM",
    "genre": "Pelbagai Bahasa & Etnik Sabah Harmoni",
    "category": "negeri",
    "icon": "🏔️",
    "url": "https://playerservices.streamtheworld.com/api/livestream-redirect/SABAH_VFMAAC_SC",
    "type": "audio"
  }
];
