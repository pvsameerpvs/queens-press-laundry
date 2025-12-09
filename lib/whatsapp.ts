import type { Branch } from "@/lib/branches";
import type { PricingItem } from "@/lib/pricing";

const DEFAULT_WHATSAPP_NUMBER = "+971552262769";

interface OrderItem {
  item: PricingItem;
  quantity: number;
}

interface OrderPayload {
  branch: Branch;
  name: string;
  mobile: string;
  area: string;
  address: string;
  notes: string;
  total: number;
  items: OrderItem[];
}

export function createWhatsappUrl(payload: OrderPayload) {
  const targetNumber = payload.branch.phone || DEFAULT_WHATSAPP_NUMBER;

  const lines: string[] = [];

  lines.push("*New Pickup Request – Queens Press Laundry*");
  lines.push("");
  lines.push(`Branch: ${payload.branch.title}`);
  if (payload.name) lines.push(`Name: ${payload.name}`);
  if (payload.mobile) lines.push(`Mobile: ${payload.mobile}`);
  if (payload.area) lines.push(`Area: ${payload.area}`);
  if (payload.address) lines.push(`Address: ${payload.address}`);
  lines.push("");

  const itemLines = payload.items
    .filter((i) => i.quantity > 0)
    .map((i) => `• ${i.item.name} x ${i.quantity} (AED ${i.item.price})`);
  if (itemLines.length) {
    lines.push("Items (estimate):");
    lines.push(...itemLines);
  } else {
    lines.push("Items (estimate): to be confirmed on pickup");
  }

  lines.push("");
  lines.push(`Estimated Total: AED ${payload.total.toFixed(2)}`);

  if (payload.notes) {
    lines.push("");
    lines.push("Notes:");
    lines.push(payload.notes);
  }

  const message = lines.join("\n");
  const encoded = encodeURIComponent(message);

  return `https://wa.me/${encodePhone(targetNumber)}?text=${encoded}`;
}

interface ContactPayload {
  branch: Branch;
  name: string;
  mobile: string;
  email: string;
  message: string;
}

export function createWhatsappContactUrl(payload: ContactPayload) {
  const targetNumber = payload.branch.phone || DEFAULT_WHATSAPP_NUMBER;

  const lines: string[] = [];
  lines.push("*New Contact Message – Website*");
  lines.push("");
  lines.push(`Branch: ${payload.branch.title}`);
  if (payload.name) lines.push(`Name: ${payload.name}`);
  if (payload.mobile) lines.push(`Mobile: ${payload.mobile}`);
  if (payload.email) lines.push(`Email: ${payload.email}`);
  lines.push("");
  if (payload.message) {
    lines.push("Message:");
    lines.push(payload.message);
  }

  const message = lines.join("\n");
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${encodePhone(targetNumber)}?text=${encoded}`;
}

function encodePhone(phone: string) {
  return phone.replace(/[^\d]/g, "");
}
