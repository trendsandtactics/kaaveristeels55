// Exact pin coordinates from the Google My Map (mid=1RQEUhxmncofWIu02gV-sCgboIZbCRfA)
// This ensures that clicking any dealer immediately centers on the EXACT pin on the map.

function cleanKey(s?: string): string {
  if (!s) return "";
  return s.toLowerCase().replace(/[^a-z0-9]/g, "");
}

export const MY_MAP_PINS: Record<string, { lat: string; lng: string; title: string }> = {
  "fathimasteelshardwares": {
    "lat": "8.752790",
    "lng": "77.704205",
    "title": "FATHIMA STEELS & HARDWARES"
  },
  "msssksteeltrading": {
    "lat": "9.371068",
    "lng": "78.838396",
    "title": "M/S S.S.K.STEEL TRADING"
  },
  "srivinayagarenterprisespropvksattanathan": {
    "lat": "10.684442",
    "lng": "79.837470",
    "title": "SRI VINAYAGAR ENTER PRISES (PROP-V.K.SATTANATHAN)"
  },
  "kumaragenciespropssivakumar": {
    "lat": "10.815568",
    "lng": "79.836259",
    "title": "KUMAR AGENCIES (PROP-S.SIVAKUMAR)"
  },
  "sugancos": {
    "lat": "10.378279",
    "lng": "79.845793",
    "title": "SUGAN & CO - S"
  },
  "venkatachalapathiagency": {
    "lat": "12.039947",
    "lng": "79.300058",
    "title": "VENKATACHALAPATHI AGENCY"
  },
  "tdevakisrivinayagahardwares": {
    "lat": "11.137937",
    "lng": "79.070773",
    "title": "T.DEVAKI-SRI VINAYAGA HARDWARES"
  },
  "sanlandmarkprivatelimited": {
    "lat": "13.029992",
    "lng": "80.241427",
    "title": "SAN LANDMARK PRIVATE LIMITED"
  },
  "unnis": {
    "lat": "-6.303461",
    "lng": "106.634051",
    "title": "UNNIS"
  },
  "ksureshcontractor": {
    "lat": "8.826391",
    "lng": "78.149716",
    "title": "K. SURESH CONTRACTOR"
  },
  "srivenkateshwarasteelstiruchengodes": {
    "lat": "11.366305",
    "lng": "77.890030",
    "title": "SRI VENKATESHWARA STEELS- TIRUCHENGODE - S"
  },
  "grrtraderskalaiarasanr": {
    "lat": "11.089718",
    "lng": "79.613906",
    "title": "GRR TRADERS-KALAIARASAN R"
  },
  "srimuthukumaransteelcements": {
    "lat": "12.140646",
    "lng": "78.153662",
    "title": "SRI MUTHUKUMARAN STEEL & CEMENTS"
  },
  "tamilnadusteelssathamhussain": {
    "lat": "10.955468",
    "lng": "79.326285",
    "title": "TAMILNADU STEEL S.SATHAM HUSSAIN"
  },
  "gsconstructionconcreteworks": {
    "lat": "11.954681",
    "lng": "79.493451",
    "title": "GS CONSTRUCTION & CONCRETE WORKS"
  },
  "krksteels": {
    "lat": "11.350409",
    "lng": "77.731641",
    "title": "K.R.K.STEEL-S"
  },
  "mmjtraderspropshahulhameeds": {
    "lat": "11.015847",
    "lng": "79.766008",
    "title": "MMJ TRADERS Prop SHAHUL HAMEED - S"
  },
  "srimurugantradersmayiladuthurais": {
    "lat": "11.092693",
    "lng": "79.648275",
    "title": "Sri Murugan Traders - Mayiladuthurai - S"
  },
  "sribalajireadymadesteels": {
    "lat": "11.109049",
    "lng": "77.025578",
    "title": "SRI BALAJI READYMADE STEELS"
  },
  "srikandhavelenterprisescoimbatore": {
    "lat": "11.061803",
    "lng": "76.957908",
    "title": "SRI KANDHAVEL ENTERPRISES - Coimbatore"
  },
  "lakshmitraderscoimbatore": {
    "lat": "10.983352",
    "lng": "77.055598",
    "title": "LAKSHMI TRADERS - COIMBATORE"
  },
  "sptraderstenkasi": {
    "lat": "8.722285",
    "lng": "77.753558",
    "title": "SP TRADERS - Tenkasi"
  },
  "natarajanco": {
    "lat": "8.782244",
    "lng": "77.396881",
    "title": "NATARAJAN CO.,"
  },
  "lourthusamyenterprises": {
    "lat": "13.037539",
    "lng": "80.267069",
    "title": "lourthusamy enterprises"
  },
  "babaconstructioncompany": {
    "lat": "13.081922",
    "lng": "80.173686",
    "title": "BABA CONSTRUCTION COMPANY"
  },
  "srmmarketting": {
    "lat": "13.095983",
    "lng": "80.287291",
    "title": "SRM MARKETTING"
  },
  "samratconstructions": {
    "lat": "11.335096",
    "lng": "77.656909",
    "title": "SAMRAT CONSTRUCTIONS"
  },
  "saravanaengineeringandinfratechprivatelimited": {
    "lat": "10.300963",
    "lng": "77.941517",
    "title": "SARAVANA ENGINEERING AND INFRATECH PRIVATE LIMITED"
  },
  "trinitytraders": {
    "lat": "12.930573",
    "lng": "80.203290",
    "title": "TRINITY TRADERS"
  },
  "rmandcompany": {
    "lat": "13.124539",
    "lng": "80.202832",
    "title": "RM AND COMPANY"
  },
  "sriveeraraghavatraders": {
    "lat": "11.082649",
    "lng": "76.948934",
    "title": "SRI VEERA RAGHAVA TRADERS"
  },
  "suruliyandavarsteelstimbers": {
    "lat": "10.903629",
    "lng": "76.959616",
    "title": "SURULIYANDAVAR STEELS & TIMBERS"
  },
  "srtilesplywoods": {
    "lat": "8.550610",
    "lng": "78.099963",
    "title": "SR Tiles & Plywoods"
  },
  "motiprivatelimited": {
    "lat": "13.054385",
    "lng": "80.260236",
    "title": "MOTI PRIVATE LIMITED"
  },
  "sisteelsprivatelimited": {
    "lat": "11.942036",
    "lng": "79.802004",
    "title": "S I STEELS PRIVATE LIMITED"
  },
  "srilakshmisteelsmuniyapillairamesh": {
    "lat": "10.956370",
    "lng": "79.409679",
    "title": "SRI LAKSHMI STEELS MUNIYAPILLAI RAMESH"
  },
  "srikrishnasteelscoimbatore": {
    "lat": "10.981588",
    "lng": "76.851237",
    "title": "Sri Krishna Steels - Coimbatore"
  },
  "sritamilnadumetalindustries": {
    "lat": "10.942455",
    "lng": "78.735949",
    "title": "SRI TAMILNADU METAL INDUSTRIES"
  },
  "shrieesrmsteel": {
    "lat": "11.350683",
    "lng": "77.728822",
    "title": "SHRIEE SRM STEEL"
  },
  "sripalanivelsteelandcements": {
    "lat": "11.451470",
    "lng": "77.464197",
    "title": "SRI PALANIVEL STEEL AND CEMENTS"
  },
  "newtamilnadusteelcompanysurandai": {
    "lat": "8.986677",
    "lng": "77.425375",
    "title": "NEW TAMILNADU STEEL COMPANY - SURANDAI"
  },
  "bmtsteelsvirudhunagar": {
    "lat": "9.671963",
    "lng": "78.098472",
    "title": "BMT STEELS - Virudhunagar"
  },
  "vinayagatradersrajapalayam": {
    "lat": "9.434356",
    "lng": "77.580743",
    "title": "VINAYAGA TRADERS - Rajapalayam"
  },
  "vairamsteelsvirudhunagar": {
    "lat": "9.592356",
    "lng": "77.950868",
    "title": "VAIRAM STEELS - Virudhunagar"
  },
  "sriammantradersvirudhunagar": {
    "lat": "9.595440",
    "lng": "77.954191",
    "title": "SRI AMMAN TRADERS - Virudhunagar"
  },
  "sribalasubramaniamco": {
    "lat": "9.590846",
    "lng": "77.950476",
    "title": "SRI BALA SUBRAMANIAM & CO.,"
  },
  "msramamoorthyiyer": {
    "lat": "10.659276",
    "lng": "79.456910",
    "title": "M.S.RAMAMOORTHY IYER"
  },
  "mmtraderscoimbatore": {
    "lat": "11.001255",
    "lng": "76.957783",
    "title": "MM TRADERS - COIMBATORE"
  },
  "aathisakthiagency": {
    "lat": "13.093928",
    "lng": "80.229804",
    "title": "AATHI SAKTHI AGENCY"
  },
  "kaartraders": {
    "lat": "13.091709",
    "lng": "80.290402",
    "title": "K.A.A.R.TRADERS"
  },
  "nonametradingsteel": {
    "lat": "10.451293",
    "lng": "79.307106",
    "title": "NO NAME TRADING & STEEL"
  },
  "srisangaiyahardwaresandsteels": {
    "lat": "9.773841",
    "lng": "78.635835",
    "title": "SRI SANGAIYA HARDWARES AND STEELS"
  },
  "mmariastanislausashtraders": {
    "lat": "8.266779",
    "lng": "77.290893",
    "title": "M.MARIA STANISLAUS,ASH TRADERS"
  },
  "mmarrtinmktraderdealerinpainthardwareandcement": {
    "lat": "8.293046",
    "lng": "77.293796",
    "title": "M.MARRTIN M.K.TRADER DEALER IN PAINT HARDWARE AND CEMENT"
  },
  "winshardwareswinselyjacob": {
    "lat": "8.285449",
    "lng": "77.321045",
    "title": "WINS HARDWARES ( WINSELY JACOB)"
  },
  "jvargeeshfathimatraders": {
    "lat": "8.308814",
    "lng": "77.123009",
    "title": "J. VARGEESH, FATHIMA TRADERS,"
  },
  "seraphinbuilderscrafts": {
    "lat": "8.270887",
    "lng": "77.199522",
    "title": "SERAPHIN BUILDERS CRAFTS"
  },
  "vinodsteelscorporations": {
    "lat": "11.051076",
    "lng": "76.991035",
    "title": "VINOD STEELS CORPORATION - S"
  },
  "bagawathisteelsnamakkals": {
    "lat": "11.268437",
    "lng": "78.141813",
    "title": "BAGAWATHI STEELS - NAMAKKAL - S"
  },
  "goldentraderskarur": {
    "lat": "10.993915",
    "lng": "78.076634",
    "title": "GOLDEN TRADERS - Karur"
  },
  "senthiltradersdharmapuri": {
    "lat": "12.057813",
    "lng": "78.111098",
    "title": "SENTHIL TRADERS - Dharmapuri"
  },
  "sriammansteelsdharmapuri": {
    "lat": "12.100902",
    "lng": "78.143795",
    "title": "SRI AMMAN STEELS - Dharmapuri"
  },
  "srikrishnasteelsdharmapuri": {
    "lat": "12.160008",
    "lng": "78.151842",
    "title": "SRI KRISHNA STEELS - Dharmapuri"
  },
  "kasimsteelscementandtimber": {
    "lat": "12.056403",
    "lng": "78.477057",
    "title": "KASIM STEELS CEMENT AND TIMBER"
  },
  "aaainternationaleximprivatelimited": {
    "lat": "12.953041",
    "lng": "80.143700",
    "title": "AAA INTERNATIONAL EXIM PRIVATE LIMITED"
  },
  "ssnatarajanco": {
    "lat": "11.311909",
    "lng": "77.725892",
    "title": "S.S.NATARAJAN CO"
  },
  "citysteelss": {
    "lat": "10.449464",
    "lng": "77.518009",
    "title": "CITY STEELS - S"
  },
  "jayakrishnasteelss": {
    "lat": "10.780704",
    "lng": "76.744399",
    "title": "JAYA KRISHNA STEELS- S"
  },
  "muthammaltradersdindigul": {
    "lat": "10.275578",
    "lng": "78.078743",
    "title": "MUTHAMMAL TRADERS - Dindigul"
  },
  "supremesteelshardwares": {
    "lat": "10.348207",
    "lng": "77.986988",
    "title": "SUPREME STEELS & HARDWARES"
  },
  "smttraders": {
    "lat": "10.481422",
    "lng": "77.732752",
    "title": "S.M.T TRADERS"
  },
  "annakamuhardwarestore": {
    "lat": "10.452700",
    "lng": "77.510727",
    "title": "ANNAKAMU HARDWARE STORE"
  },
  "mgtradersdindigul": {
    "lat": "10.357869",
    "lng": "78.025951",
    "title": "M G TRADERS - Dindigul"
  },
  "sriivijayalakshmicementsandsteels": {
    "lat": "12.499487",
    "lng": "79.889403",
    "title": "SRII VIJAYALAKSHMI CEMENTS AND STEELS"
  },
  "shreevijayalakshmicementsandtiles": {
    "lat": "12.499487",
    "lng": "79.889403",
    "title": "Shree Vijayalakshmi Cements And Tiles"
  },
  "annaihardwares": {
    "lat": "11.218711",
    "lng": "78.162244",
    "title": "ANNAI HARDWARES"
  },
  "srisellandiammancementssteels": {
    "lat": "11.213039",
    "lng": "78.175345",
    "title": "SRI SELLANDIAMMAN CEMENTS & STEELS"
  },
  "msmurugantradersincnamakkal": {
    "lat": "1.347229",
    "lng": "103.757651",
    "title": "M/S MURUGAN TRADERS INC - Namakkal"
  },
  "sandhiyacementssalem": {
    "lat": "11.511204",
    "lng": "78.642783",
    "title": "SANDHIYA CEMENTS - Salem"
  },
  "ssttraderstheni": {
    "lat": "10.014765",
    "lng": "77.348296",
    "title": "SST TRADERS - Theni"
  },
  "gsenthilnewrajasteels": {
    "lat": "9.842819",
    "lng": "77.376961",
    "title": "G.SENTHIL, NEW RAJA STEELS"
  },
  "josetraderskanniyakumari": {
    "lat": "8.241189",
    "lng": "77.234520",
    "title": "JOSE TRADERS - Kanniyakumari"
  },
  "sujeethaenterprises": {
    "lat": "10.370970",
    "lng": "77.949416",
    "title": "SUJEETHA ENTERPRISES"
  },
  "shariefsteeltraders": {
    "lat": "8.755376",
    "lng": "78.066043",
    "title": "SHARIEF STEEL TRADERS"
  },
  "amshollowblocks": {
    "lat": "8.816313",
    "lng": "78.104563",
    "title": "A.M.S. HOLLOW BLOCKS"
  },
  "nishasteeltradersthoothukudi": {
    "lat": "8.490668",
    "lng": "78.114871",
    "title": "NISHA STEEL TRADERS - Thoothukudi"
  },
  "sowrabanutraders": {
    "lat": "13.054948",
    "lng": "80.170600",
    "title": "SOWRABANU TRADERS"
  },
  "jabiotechinnovationsprivatelimited": {
    "lat": "11.096387",
    "lng": "78.595710",
    "title": "JA BIOTECH INNOVATIONS PRIVATE LIMITED"
  },
  "satshanmuganadarfirm": {
    "lat": "10.535996",
    "lng": "79.636795",
    "title": "S.A.T.SHANMUGANADAR FIRM"
  },
  "sankarguruagencies": {
    "lat": "10.930421",
    "lng": "79.301661",
    "title": "SANKAR GURU AGENCIES"
  },
  "abiramiengineeringconstructionco": {
    "lat": "11.209478",
    "lng": "78.169170",
    "title": "ABIRAMI ENGINEERING CONSTRUCTION & CO"
  },
  "srithamaraihardwares": {
    "lat": "12.907342",
    "lng": "80.142816",
    "title": "SRI THAMARAI HARDWARES"
  }
};

export function getMyMapPinCoords(title?: string, slug?: string): { lat: string; lng: string } | null {
  const cTitle = cleanKey(title);
  const cSlug = cleanKey(slug);

  if (cTitle && MY_MAP_PINS[cTitle]) {
    return { lat: MY_MAP_PINS[cTitle].lat, lng: MY_MAP_PINS[cTitle].lng };
  }
  if (cSlug && MY_MAP_PINS[cSlug]) {
    return { lat: MY_MAP_PINS[cSlug].lat, lng: MY_MAP_PINS[cSlug].lng };
  }

  // Substring match
  if (cTitle && cTitle.length > 6) {
    for (const [key, val] of Object.entries(MY_MAP_PINS)) {
      if (key.includes(cTitle) || cTitle.includes(key)) {
        return { lat: val.lat, lng: val.lng };
      }
    }
  }

  return null;
}

export function hasMyMapPin(title?: string, slug?: string): boolean {
  return getMyMapPinCoords(title, slug) !== null;
}
