// src/lib/branches.ts

export interface Branch {
  id: string;
  title: string;
  fullTitle: string;
  subtitle: string;
  address: string;
  phone: string;
  phoneDisplay: string;
  mapUrl: string;
  note: string;
}

export const branches: Branch[] = [
  {
    id: "bur-dubai",
    title: "Bur Dubai Branch",
    fullTitle: "Bur Dubai – Al Rais Shopping Center",
    subtitle: "Queens Press Laundry, Bur Dubai",
    address:
      "Queens Press Laundry, Al Rais Shopping Center, near Al Khaleej Center, Shop 10, Ground Floor, Bur Dubai, Dubai, UAE.",
    phone: "+971523346850",
    phoneDisplay: "04 352 2933",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d225.5255997164423!2d55.29403160915897!3d25.25680333390518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f433da60d3b11%3A0xf34a9a7b530fa88e!2sQueens%20Press%20Laundry!5e0!3m2!1sen!2sae!4v1763034575682!5m2!1sen!2sae",
    note: "Easy access from Al Khaleej Center, parking available nearby.",
  },
  {
    id: "jumeirah-1",
    title: "Jumeirah 1 Branch",
    fullTitle: "Jumeirah 1 – The Court Residence",
    subtitle: "Queens Press Laundry, Jumeirah 1",
    address:
      "Queens Press Laundry, The Court – Residence Building, Jumeirah 1, Shop 1 – Ground Floor, Dubai, UAE.",
    phone: "+971523346850",
    phoneDisplay: "04 349 7342",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.295442771162!2d55.2601509!3d25.226972200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43477af4fe51%3A0x82cd76add5c0aec7!2sThe%20Court%20-%20Residence%20-%20Jumeirah%201!5e0!3m2!1sen!2sae!4v1763034895669!5m2!1sen!2sae",
    note: "Located close to Jumeirah 1 residential community.",
  },
  {
    id: "port-rashid",
    title: "Port Rashid / Mina Street Branch",
    fullTitle: "Port Rashid – Mina Street (7 Pearl Apartments)",
    subtitle: "Queens Press Laundry, Port Rashid",
    address:
      "Queens Press Laundry, 7 Pearl Apartment Complex, Mina Street, Shop 40, Dubai, UAE.",
    phone: "+971523346850",
    phoneDisplay: "04 266 9317",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.295442771162!2d55.2601509!3d25.226972200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43477af4fe51%3A0x82cd76add5c0aec7!2sThe%20Court%20-%20Residence%20-%20Jumeirah%201!5e0!3m2!1sen!2sae!4v1763034921154!5m2!1sen!2sae",
    note: "Convenient for Port Rashid residents and nearby apartments.",
  },
];
