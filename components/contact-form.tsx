"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { createWhatsappContactUrl } from "@/lib/whatsapp";
import { branches } from "@/lib/branches";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Send } from "lucide-react";

export function ContactForm() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [branchId, setBranchId] = useState<string>("bur-dubai");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const branch = branches.find((b) => b.id === branchId) ?? branches[0];
    const url = createWhatsappContactUrl({
      branch,
      name,
      mobile,
      email,
      message,
    });

    if (typeof window !== "undefined") {
      window.open(url, "_blank");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card-glass p-6 space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="contact-name">Name</Label>
          <Input
            id="contact-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
          />
        </div>
        <div>
          <Label htmlFor="contact-mobile">Mobile</Label>
          <Input
            id="contact-mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="05xxxxxxxx"
          />
        </div>
      </div>
      <div>
        <Label htmlFor="contact-email">Email</Label>
        <Input
          id="contact-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
        />
      </div>
      <div>
        <Label>Preferred Branch</Label>
        <Select value={branchId} onValueChange={setBranchId}>
          <SelectTrigger>
            <SelectValue placeholder="Choose branch" />
          </SelectTrigger>
          <SelectContent>
            {branches.map((b) => (
              <SelectItem key={b.id} value={b.id}>
                {b.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          rows={4}
          placeholder="How can we help you?"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <Button type="submit" className="rounded-full flex items-center gap-2">
        <Send className="h-4 w-4" />
        Send via WhatsApp
      </Button>
      <p className="text-[11px] text-slate-500">
        We use WhatsApp so our team can respond to you faster. You can edit the
        message before sending.
      </p>
    </form>
  );
}
