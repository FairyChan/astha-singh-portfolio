"use client";
import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { profile } from "@/data/portfolio";
export default function ContactActions() {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
  }
  return (
    <div className="copy-contact">
      <button className="text-link" onClick={copyEmail}>
        {status === "copied" ? <Check size={16} /> : <Copy size={16} />}
        {status === "copied" ? "Email copied" : "Copy email address"}
      </button>
      <span aria-live="polite">
        {status === "failed"
          ? `Select and copy the email address above: ${profile.email}`
          : ""}
      </span>
    </div>
  );
}
