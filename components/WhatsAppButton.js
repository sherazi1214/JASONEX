"use client";

// 👉 Apna WhatsApp number yahan daalein (country code ke sath, bina + ya 00 ke)
// Example: Pakistan number 03001234567 => "923001234567"
const WHATSAPP_NUMBER = "923083390915";
const WHATSAPP_MESSAGE = "Hi! I found your website and I'd like to know more.";

export default function WhatsAppButton() {
  const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg sm:bottom-6 sm:right-6"
    >
      {/* slow -> fast breathing glow rings */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-70 animate-wa-pulse-1" />
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-50 animate-wa-pulse-2" />

      <svg
        viewBox="0 0 32 32"
        className="relative z-10 h-7 w-7 fill-white transition-transform duration-300 group-hover:scale-110"
      >
        <path d="M16.004 2.667c-7.363 0-13.333 5.97-13.333 13.333 0 2.353.615 4.56 1.69 6.475L2.667 29.333l7.05-1.848a13.26 13.26 0 0 0 6.287 1.6h.006c7.363 0 13.333-5.97 13.333-13.333s-5.97-13.085-13.339-13.085Zm0 24.28h-.005a11.02 11.02 0 0 1-5.615-1.54l-.403-.24-4.184 1.097 1.117-4.078-.263-.418a10.98 10.98 0 0 1-1.685-5.85c0-6.075 4.943-11.017 11.023-11.017 2.944 0 5.712 1.148 7.79 3.23a10.94 10.94 0 0 1 3.228 7.797c0 6.08-4.943 11.02-11.003 11.02Zm6.037-8.253c-.331-.166-1.957-.966-2.26-1.078-.303-.11-.523-.166-.744.166-.22.331-.853 1.077-1.046 1.298-.193.221-.386.248-.717.083-.331-.166-1.398-.515-2.664-1.643-.985-.879-1.65-1.964-1.843-2.296-.193-.331-.02-.51.145-.674.15-.148.331-.386.497-.579.166-.193.221-.331.331-.552.11-.221.055-.414-.028-.579-.083-.166-.744-1.793-1.02-2.456-.269-.645-.542-.558-.744-.568l-.634-.011c-.221 0-.579.083-.882.414-.303.331-1.157 1.13-1.157 2.757 0 1.627 1.184 3.199 1.349 3.42.166.221 2.33 3.556 5.646 4.988.789.34 1.404.543 1.884.695.792.252 1.513.216 2.083.131.635-.095 1.957-.8 2.233-1.573.276-.773.276-1.435.193-1.573-.083-.138-.303-.221-.634-.386Z" />
      </svg>
    </a>
  );
}
