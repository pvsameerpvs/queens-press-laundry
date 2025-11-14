export interface PricingItem {
  id: string;
  name: string;
  category: string;
  price: number;
}

export const pricingItems: PricingItem[] = [
  /* -------------------- MEN'S ITEMS -------------------- */
  { id: "1piece-suit", name: "1 Piece Suit", category: "Men", price: 63.00 },
  { id: "2piece-suit", name: "2 Piece Suit", category: "Men", price: 75.00 },
  { id: "3piece-suit", name: "3 Piece Suit", category: "Men", price: 75.60 },
  { id: "ghatra", name: "Ghatra", category: "Men", price: 8.40 },
  { id: "ghatra-woolen", name: "Ghatra (Woolen)", category: "Men", price: 18.90 },
  { id: "dishesdasha", name: "Dishesdasha", category: "Men", price: 18.90 },
  { id: "dishesdasha-woolen", name: "Dishesdasha (Woolen)", category: "Men", price: 25.20 },
  { id: "jacket", name: "Jacket", category: "Men", price: 42.00 },
  { id: "blazer", name: "Blazer", category: "Men", price: 42.00 },
  { id: "overall", name: "Overall", category: "Men", price: 47.93 },
  { id: "overcoat", name: "Overcoat / Long Coat", category: "Men", price: 57.75 },
  { id: "pyjama-2piece", name: "Pyjama 2 Piece", category: "Men", price: 32.00 },
  { id: "pyjama-3piece", name: "Pyjama 3 Piece", category: "Men", price: 68.25 },
  { id: "trouser", name: "Trouser", category: "Men", price: 21.00 },
  { id: "shirt", name: "Shirt", category: "Men", price: 11.55 },
  { id: "shorts", name: "Shorts", category: "Men", price: 11.50 },
  { id: "sport-coat", name: "Sport Coat", category: "Men", price: 57.30 },
  { id: "safari-suit", name: "Safari Suit", category: "Men", price: 52.50 },
  { id: "pullover-full", name: "Pullover (Full Sleeve)", category: "Men", price: 25.00 },
  { id: "pullover", name: "Pullover", category: "Men", price: 21.00 },
  { id: "tie", name: "Tie", category: "Men", price: 8.40 },
  { id: "tuxedo", name: "Tuxedo 2 Piece Suit", category: "Men", price: 52.50 },
  { id: "waist-coat", name: "Waist Coat", category: "Men", price: 21.00 },
  { id: "pyjama", name: "Pyjama", category: "Men", price: 21.00 },

  /* -------------------- GENERAL ITEMS -------------------- */
  { id: "bedsheet-double", name: "Bed Sheet (Double)", category: "General", price: 34.65 },
  { id: "bedsheet-single", name: "Bed Sheet (Single)", category: "General", price: 17.71 },
  { id: "king-bedspread", name: "King Bedspread", category: "General", price: 57.75 },
  { id: "blanket-single", name: "Blanket (Single)", category: "General", price: 46.25 },
  { id: "blanket-double", name: "Blanket (Double)", category: "General", price: 57.75 },
  { id: "pillow", name: "Pillow", category: "General", price: 7.92 },
  { id: "bath-towel", name: "Bath Towel", category: "General", price: 13.55 },
  { id: "hand-towel", name: "Hand Towel", category: "General", price: 9.33 },
  { id: "face-towel", name: "Face Towel", category: "General", price: 5.25 },
  { id: "pillow-case", name: "Pillow Case", category: "General", price: 3.5 },
  { id: "curtain", name: "Curtain (per m²)", category: "General", price: 21.00 },
  { id: "tablecloth-s", name: "Table Cloth (S)", category: "General", price: 21.00 },
  { id: "tablecloth-d", name: "Table Cloth (D)", category: "General", price: 36.75 },
  { id: "napkin", name: "Napkin / Handkerchief", category: "General", price: 3.97 },

  /* -------------------- LADIES ITEMS -------------------- */
  { id: "ladies-pyjama-2", name: "Pyjama 2 Piece Suit", category: "Ladies", price: 52.00 },
  { id: "ladies-pyjama-3", name: "Pyjama 3 Piece Suit", category: "Ladies", price: 68.25 },
  { id: "ladies-dress", name: "Dress", category: "Ladies", price: 42.00 },
  { id: "formal-dress", name: "Formal Dress", category: "Ladies", price: 57.75 },
  { id: "sari", name: "Sari / Sari with Beads", category: "Ladies", price: 40.00 },
  { id: "ladies-jacket", name: "Ladies Jacket", category: "Ladies", price: 42.00 },
  { id: "ladies-blazer", name: "Blazer", category: "Ladies", price: 42.00 },
  { id: "abaya", name: "Abaya", category: "Ladies", price: 42.00 },
  { id: "abaya-dc", name: "Abaya DC", category: "Ladies", price: 42.00 },
  { id: "nightgown", name: "Night Gown", category: "Ladies", price: 21.00 },
  { id: "ladies-overcoat", name: "Over Coat / Long Coat", category: "Ladies", price: 57.75 },
  { id: "ladies-trouser", name: "Trouser", category: "Ladies", price: 21.00 },
  { id: "scarf", name: "Scarf", category: "Ladies", price: 12.60 },
  { id: "blouse-beads", name: "Blouse (with Beads)", category: "Ladies", price: 22.05 },
  { id: "jumpsuit", name: "Overall / Jumpsuit", category: "Ladies", price: 32.00 },
  { id: "ladies-shorts", name: "Shorts", category: "Ladies", price: 15.64 },
  { id: "top-beads", name: "Top (with Beads)", category: "Ladies", price: 26.25 },
  { id: "long-skirt", name: "Long Skirt", category: "Ladies", price: 35.89 },
  { id: "skirt", name: "Skirt", category: "Ladies", price: 23.50 },
  { id: "ladies-pullover", name: "Pullover", category: "Ladies", price: 21.00 },
  { id: "vest", name: "Vest", category: "Ladies", price: 22.00 },
  { id: "shawl", name: "Shawl", category: "Ladies", price: 20.48 },
  { id: "shawl-dc", name: "Shawl DC", category: "Ladies", price: 20.48 },
  { id: "wedding-dress", name: "Wedding Dress", category: "Ladies", price: 525.00 },

  /* -------------------- COMMON ITEMS -------------------- */
  { id: "knit-shirt", name: "Knit Shirt", category: "Common", price: 15.75 },
  { id: "floor-mat", name: "Floor Mat (Small/Medium)", category: "Common", price: 21.00 },
  { id: "polo-shirt", name: "Polo Shirt", category: "Common", price: 15.75 },
  { id: "tshirt", name: "T-Shirt", category: "Common", price: 11.55 },
  { id: "sleeping-bag", name: "Sleeping Bag (Dependent)", category: "Common", price: 50.94 },
  { id: "baniya", name: "Baniya", category: "Common", price: 9.26 },
  { id: "socks-underwear", name: "Socks & Underwear", category: "Common", price: 5.79 }
];
