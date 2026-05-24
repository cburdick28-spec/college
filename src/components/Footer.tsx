import { contactInfo } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 px-4 py-6 text-center text-xs text-zinc-400 sm:px-6">
      <p>Connor Burdick</p>
      <p>Goalkeeper | Class of 2028</p>
      <p className="mt-2">Email: {contactInfo.email}</p>
      <p>Instagram: {contactInfo.instagram}</p>
    </footer>
  );
}
