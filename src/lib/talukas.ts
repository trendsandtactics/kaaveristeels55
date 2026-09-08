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
