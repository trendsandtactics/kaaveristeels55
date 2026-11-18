export const MASTER_TALUKAS: string[] = [
  "Ambasamudram",
  "Attur",
  "Ayanavaram",
  "Bodinayakanur",
  "Coimbatore",
  "Coimbatore (North)",
  "Coimbatore (South)",
  "Cuddalore",
  "Dharmapuri",
  "Dindigul",
  "Dindigul (East)",
  "Dindigul (West)",
  "Fort-Tondiarpet",
  "Gangavalli",
  "Gingee",
  "Jayankondam",
  "Kalkulam",
  "Kamuthi",
  "Kandachipuram",
  "Kariapatti",
  "Karur",
  "Killiyoor",
  "Kovalam",
  "Kulathur",
  "Kulithalai",
  "Madukkarai",
  "Madurai (North)",
  "Madurantakam",
  "Maduravoyal",
  "Mambalam",
  "Manamadurai",
  "Mayiladuthurai",
  "Mettur",
  "Mohanur",
  "Mylapore",
  "Nagapattinam",
  "Namakkal",
  "Natham",
  "Nilakottai",
  "Palani",
  "Pallavaram",
  "Pappireddipatti",
  "Pennagaram",
  "Pollachi",
  "Poonamallee",
  "Puducherry",
  "Rajapalayam",
  "Ramanathapuram",
  "Salem",
  "Sankarankovil",
  "Sathiyamangalam",
  "Sholinganallur",
  "Sirkali",
  "Sivakasi",
  "Sulur",
  "Tambaram",
  "Tenkasi",
  "Tharangambadi",
  "Theni",
  "Thiruthuraipoondi",
  "Thiruvananthapuram",
  "Thiruvannamalai",
  "Thiruvarur",
  "Thondamuthur",
  "Thuraiyur",
  "Tiruchendur",
  "Tiruchengode",
  "Tiruchirapalli",
  "Udumalaipettai",
  "Uthamapalayam",
  "Valangaiman",
  "Vanur",
  "Vedaranyam",
  "Vilavancode",
  "Virudhachalam",
  "Virudhunagar",
  "Watrap",
];

// Mapping regional sub-districts and aliases to the master talukas
export const TALUKA_ALIASES: Record<string, string> = {
  "attur": "Salem",
  "mettur": "Salem",
  "gangavalli": "Salem",
  "tiruchengode": "Namakkal",
  "mohanur": "Namakkal",
  "thuraiyur": "Musiri",
  "kulathur": "Tiruchirapalli",
  "gingee": "Villupuram",
  "kandachipuram": "Villupuram",
  "vanur": "Villupuram",
  "bodinayakanur": "Theni",
  "uthamapalayam": "Theni",
  "killiyoor": "Kalkulam",
  "vilavancode": "Kalkulam",
  "kariapatti": "Virudhunagar",
  "watrap": "Virudhunagar",
  "pennagaram": "Dharmapuri",
  "natham": "Dindigul",
  "thondamuthur": "Coimbatore",
  "madukkarai": "Coimbatore",
  "mylapore": "Mambalam",
  "tambaram": "Kovalam",
  "pallavaram": "Kovalam",
  "maduravoyal": "Poonamallee",
  "sholinganallur": "Kovalam",
  "ayanavaram": "Poonamallee",
  "fort-tondiarpet": "Poonamallee",
  "tharangambadi": "Mayiladuthurai",
  "vedaranyam": "Nagapattinam",
  "jayankondam": "Cuddalore",
  "madurantakam": "Kovalam",
  "coimbatore north": "Coimbatore (North)",
  "coimbatore south": "Coimbatore (South)",
  "madurai north": "Madurai (North)",
  "madurai south": "Madurai (South)",
  "dindigul east": "Dindigul (East)",
  "dindigul west": "Dindigul (West)",
  "tiruchirapalli west": "Tiruchirapalli (West)",
  "tiruchirapalli east": "Tiruchirapalli (East)",
  "thoothukudi": "Thoothukkudi",
  "tiruchirappalli": "Tiruchirapalli",
  "tiruvannamalai": "Thiruvannamalai",
};

export function cleanTaluka(str?: string): string {
  if (!str) return "";
  return str
    .toLowerCase()
    .replace(/\b(taluk|taluka|tk)\b/gi, "")
    .replace(/[^\w\s]/gi, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function matchesTaluka(
  dealerTaluka?: string,
  filterTaluka?: string,
  dealerCity?: string,
  dealerAddress?: string,
): boolean {
  if (!filterTaluka || filterTaluka === "All") return true;

  const f = filterTaluka.toLowerCase().trim();
  const cF = cleanTaluka(f);

  const dTaluka = (dealerTaluka || "").toLowerCase().trim();
  const cD = cleanTaluka(dTaluka);

  const dCity = (dealerCity || "").toLowerCase().trim();
  const cC = cleanTaluka(dCity);

  const addr = (dealerAddress || "").toLowerCase();

  // 1. Direct match on taluka or alias (bidirectional)
  if (cD) {
    if (cD === cF) return true;
    if (TALUKA_ALIASES[cD] && cleanTaluka(TALUKA_ALIASES[cD]) === cF) return true;
    if (TALUKA_ALIASES[dTaluka] && cleanTaluka(TALUKA_ALIASES[dTaluka]) === cF) return true;
    if (TALUKA_ALIASES[cF] && cleanTaluka(TALUKA_ALIASES[cF]) === cD) return true;
    if (TALUKA_ALIASES[f] && cleanTaluka(TALUKA_ALIASES[f]) === cD) return true;

    // Guard against cross-matching directions: e.g. North should not match South
    const isOpposite =
      (cD.includes("north") && cF.includes("south")) ||
      (cD.includes("south") && cF.includes("north")) ||
      (cD.includes("east") && cF.includes("west")) ||
      (cD.includes("west") && cF.includes("east"));

    if (!isOpposite && (cD.includes(cF) || cF.includes(cD))) return true;
  }

  // 2. City fallback when filter taluka represents the city
  if (cC) {
    if (cC === cF) return true;
    // Phonetic/variant tolerance: thoothukudi / thoothukkudi, tiruchirappalli / tiruchirapalli, thiru / tiru
    if (cC.replace(/k+/g, "k") === cF.replace(/k+/g, "k")) return true;
    if (cC.replace(/p+/g, "p").replace(/l+/g, "l") === cF.replace(/p+/g, "p").replace(/l+/g, "l")) return true;
    if (cC.replace(/^thiru/, "tiru") === cF.replace(/^thiru/, "tiru")) return true;

    if (TALUKA_ALIASES[cC] && cleanTaluka(TALUKA_ALIASES[cC]) === cF) return true;
    if (TALUKA_ALIASES[cF] && cleanTaluka(TALUKA_ALIASES[cF]) === cC) return true;

    // Base city match (e.g. filter is "Coimbatore", dealer city is "Coimbatore")
    if (cF === cC) return true;
  }

  // 3. Address mention
  if (addr && (addr.includes(cF) || (cF.length > 4 && addr.includes(f)))) {
    return true;
  }

  return false;
}

// Approximate geographic coordinates for Tamil Nadu talukas and major cities
export const TALUKA_COORDINATES: Record<string, { lat: number; lng: number }> = {
  ambasamudram: { lat: 8.7042, lng: 77.4542 },
  attur: { lat: 11.5975, lng: 78.5986 },
  ayanavaram: { lat: 13.0984, lng: 80.2337 },
  bodinayakanur: { lat: 10.0104, lng: 77.3496 },
  coimbatore: { lat: 11.0168, lng: 76.9558 },
  "coimbatore north": { lat: 11.0347, lng: 76.9458 },
  "coimbatore south": { lat: 10.9842, lng: 76.9712 },
  cuddalore: { lat: 11.7480, lng: 79.7714 },
  dharmapuri: { lat: 12.1211, lng: 78.1582 },
  dindigul: { lat: 10.3673, lng: 77.9803 },
  "dindigul east": { lat: 10.3620, lng: 78.0120 },
  "dindigul west": { lat: 10.3750, lng: 77.9450 },
  "fort tondiarpet": { lat: 13.1230, lng: 80.2850 },
  "forttondiarpet": { lat: 13.1230, lng: 80.2850 },
  gangavalli: { lat: 11.4880, lng: 78.6530 },
  gingee: { lat: 12.2530, lng: 79.4180 },
  jayankondam: { lat: 11.2180, lng: 79.3480 },
  kalkulam: { lat: 8.2450, lng: 77.3150 },
  kamuthi: { lat: 9.4000, lng: 78.3600 },
  kandachipuram: { lat: 12.0200, lng: 79.2800 },
  kariapatti: { lat: 9.6600, lng: 78.1000 },
  karur: { lat: 10.9601, lng: 78.0766 },
  killiyoor: { lat: 8.2800, lng: 77.2100 },
  kovalam: { lat: 12.7900, lng: 80.2500 },
  kulathur: { lat: 10.5900, lng: 78.7800 },
  kulithalai: { lat: 10.9300, lng: 78.4200 },
  madukkarai: { lat: 10.9000, lng: 76.9600 },
  madurai: { lat: 9.9252, lng: 78.1198 },
  "madurai north": { lat: 9.9450, lng: 78.1250 },
  "madurai south": { lat: 9.9100, lng: 78.1150 },
  madurantakam: { lat: 12.5100, lng: 79.8800 },
  maduravoyal: { lat: 13.0650, lng: 80.1650 },
  mambalam: { lat: 13.0380, lng: 80.2220 },
  manamadurai: { lat: 9.7000, lng: 78.4500 },
  mayiladuthurai: { lat: 11.1075, lng: 79.6523 },
  mettur: { lat: 11.7900, lng: 77.8000 },
  mohanur: { lat: 11.0800, lng: 78.1400 },
  mylapore: { lat: 13.0339, lng: 80.2676 },
  nagapattinam: { lat: 10.7672, lng: 79.8449 },
  namakkal: { lat: 11.2189, lng: 78.1674 },
  natham: { lat: 10.2300, lng: 78.2300 },
  nilakottai: { lat: 10.1600, lng: 77.8600 },
  palani: { lat: 10.4500, lng: 77.5200 },
  pallavaram: { lat: 12.9675, lng: 80.1491 },
  pappireddipatti: { lat: 11.9100, lng: 78.3600 },
  pennagaram: { lat: 12.1300, lng: 77.9000 },
  pollachi: { lat: 10.6580, lng: 77.0090 },
  poonamallee: { lat: 13.0489, lng: 80.0964 },
  puducherry: { lat: 11.9416, lng: 79.8083 },
  rajapalayam: { lat: 9.4532, lng: 77.5546 },
  ramanathapuram: { lat: 9.3639, lng: 78.8395 },
  salem: { lat: 11.6643, lng: 78.1460 },
  sankarankovil: { lat: 9.1700, lng: 77.5300 },
  sathiyamangalam: { lat: 11.5000, lng: 77.2400 },
  sholinganallur: { lat: 12.9010, lng: 80.2279 },
  sirkali: { lat: 11.2400, lng: 79.7300 },
  sivakasi: { lat: 9.4533, lng: 77.7946 },
  sulur: { lat: 11.0250, lng: 77.1260 },
  tambaram: { lat: 12.9249, lng: 80.1000 },
  tenkasi: { lat: 8.9594, lng: 77.3150 },
  tharangambadi: { lat: 11.0300, lng: 79.8500 },
  theni: { lat: 10.0104, lng: 77.4768 },
  thiruthuraipoondi: { lat: 10.5300, lng: 79.6400 },
  thiruvananthapuram: { lat: 8.5241, lng: 76.9366 },
  thiruvannamalai: { lat: 12.2253, lng: 79.0747 },
  thiruvarur: { lat: 10.7725, lng: 79.6365 },
  thondamuthur: { lat: 10.9900, lng: 76.8300 },
  thuraiyur: { lat: 11.1444, lng: 78.5956 },
  tiruchendur: { lat: 8.4900, lng: 78.1200 },
  tiruchengode: { lat: 11.3808, lng: 77.8943 },
  tiruchirapalli: { lat: 10.7905, lng: 78.7047 },
  "tiruchirappalli": { lat: 10.7905, lng: 78.7047 },
  "trichy": { lat: 10.7905, lng: 78.7047 },
  udumalaipettai: { lat: 10.5800, lng: 77.2500 },
  uthamapalayam: { lat: 9.8000, lng: 77.3300 },
  valangaiman: { lat: 10.8800, lng: 79.3500 },
  vanur: { lat: 12.0200, lng: 79.7200 },
  vedaranyam: { lat: 10.3700, lng: 79.8500 },
  vilavancode: { lat: 8.3300, lng: 77.1800 },
  virudhachalam: { lat: 11.5000, lng: 79.3300 },
  virudhunagar: { lat: 9.5872, lng: 77.9515 },
  watrap: { lat: 9.6300, lng: 77.6300 },
  // Cities
  chennai: { lat: 13.0827, lng: 80.2707 },
  tirunelveli: { lat: 8.7139, lng: 77.7567 },
  tiruppur: { lat: 11.1085, lng: 77.3411 },
  erode: { lat: 11.3410, lng: 77.7172 },
  vellore: { lat: 12.9165, lng: 79.1325 },
  thoothukudi: { lat: 8.7642, lng: 78.1348 },
  thoothukkudi: { lat: 8.7642, lng: 78.1348 },
  thanjavur: { lat: 10.7870, lng: 79.1378 },
  hosur: { lat: 12.7409, lng: 77.8253 },
  kanchipuram: { lat: 12.8342, lng: 79.7036 },
  kumbakonam: { lat: 10.9602, lng: 79.3845 },
  pudukkottai: { lat: 10.3833, lng: 78.8001 },
  nagercoil: { lat: 8.1833, lng: 77.4119 },
  villupuram: { lat: 11.9401, lng: 79.4861 },
  perambalur: { lat: 11.2333, lng: 78.8833 },
  ariyalur: { lat: 11.1401, lng: 79.0786 },
  krishnagiri: { lat: 12.5186, lng: 78.2137 },
  ranipet: { lat: 12.9298, lng: 79.3328 },
  tirupathur: { lat: 12.4925, lng: 78.5678 },
  chengalpattu: { lat: 12.6841, lng: 79.9836 },
  kallakurichi: { lat: 11.7380, lng: 78.9639 },
  sivaganga: { lat: 9.8433, lng: 78.4809 },
  musiri: { lat: 10.9600, lng: 78.4500 },
};

/**
 * Returns estimated coordinates for a taluka or city with a deterministic offset
 * based on dealer id so shops in the same town don't completely overlap on map.
 */
export function getTalukaOrCityCoords(
  taluka?: string,
  city?: string,
  dealerId?: number,
): { lat: string; lng: string } | null {
  const cT = cleanTaluka(taluka);
  const cC = cleanTaluka(city);

  let coords = (cT && TALUKA_COORDINATES[cT]) || (cC && TALUKA_COORDINATES[cC]);

  if (!coords && cT && TALUKA_ALIASES[cT]) {
    const alias = cleanTaluka(TALUKA_ALIASES[cT]);
    coords = TALUKA_COORDINATES[alias];
  }
  if (!coords && cC && TALUKA_ALIASES[cC]) {
    const alias = cleanTaluka(TALUKA_ALIASES[cC]);
    coords = TALUKA_COORDINATES[alias];
  }

  if (!coords) {
    // Partial search
    for (const [key, val] of Object.entries(TALUKA_COORDINATES)) {
      if ((cT && (key.includes(cT) || cT.includes(key))) || (cC && (key.includes(cC) || cC.includes(key)))) {
        coords = val;
        break;
      }
    }
  }

  if (!coords) return null;

  // Add small deterministic jitter (approx 100-300m) based on dealer ID so pins don't overlap exactly
  const seed = typeof dealerId === "number" ? dealerId : 1;
  const jitterLat = (((seed * 17) % 19) - 9) * 0.0015;
  const jitterLng = (((seed * 23) % 19) - 9) * 0.0015;

  return {
    lat: (coords.lat + jitterLat).toFixed(6),
    lng: (coords.lng + jitterLng).toFixed(6),
  };
}

export function extractCoordsFromMapUrl(url?: string): { lat: string; lng: string } | null {
  if (!url) return null;

  // @10.1234,78.5678
  const atMatch = url.match(/@(-?\d+\.\d+),(-?\d+\.\d+)/);
  if (atMatch) {
    const lat = parseFloat(atMatch[1]);
    const lng = parseFloat(atMatch[2]);
    if (lat >= 6 && lat <= 38 && lng >= 68 && lng <= 98) {
      return { lat: String(lat), lng: String(lng) };
    }
  }

  // q=10.1234,78.5678 or ll=...
  const qMatch = url.match(/[?&](?:q|query|ll|sll|destination)=(-?\d+\.\d+),(-?\d+\.\d+)/);
  if (qMatch) {
    const lat = parseFloat(qMatch[1]);
    const lng = parseFloat(qMatch[2]);
    if (lat >= 6 && lat <= 38 && lng >= 68 && lng <= 98) {
      return { lat: String(lat), lng: String(lng) };
    }
  }

  return null;
}

