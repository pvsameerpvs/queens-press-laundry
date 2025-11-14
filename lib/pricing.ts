export interface PricingItem {
  id: string;
  name: string;
  category: string;
  price: number;
}

export const pricingItems: PricingItem[] = [
  { id: "shirt", name: "Shirt", category: "Dry Clean / Iron", price: 8 },
  { id: "trousers", name: "Trousers", category: "Dry Clean / Iron", price: 10 },
  { id: "dress", name: "Dress", category: "Dry Clean", price: 20 },
  { id: "suit", name: "2-Piece Suit", category: "Dry Clean", price: 25 },
  { id: "abaya", name: "Abaya", category: "Dry Clean / Steam", price: 18 },
  { id: "jeans", name: "Jeans", category: "Laundry / Iron", price: 10 },
  { id: "kandura", name: "Kandura / Thobe", category: "Dry Clean / Steam", price: 18 },
  { id: "saree", name: "Saree", category: "Dry Clean", price: 22 },
  { id: "kg-laundry", name: "Laundry (per kg)", category: "Wash & Fold", price: 12 },
  { id: "bedsheet", name: "Bedsheet", category: "Bedding & Home", price: 15 },
  { id: "duvet", name: "Duvet / Comforter", category: "Bedding & Home", price: 35 }
];
