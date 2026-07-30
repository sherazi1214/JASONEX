import {
  Mail,
  MapPin,
  Phone,
  Instagram,
  Youtube,
  Facebook,
  MessageCircle,
  Linkedin,
  X,
  Send,
  Music2,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import ContactFormCard from "@/components/ContactFormCard";

export const metadata = { title: "Contact | Agencee" };

const socials = [
  { icon: Instagram, href: "#", label: "Instagram", className: "bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400" },
  { icon: Youtube, href: "#", label: "YouTube", className: "bg-red-600" },
  { icon: Facebook, href: "#", label: "Facebook", className: "bg-blue-600" },
  { icon: MessageCircle, href: "#", label: "WhatsApp", className: "bg-green-500" },
  { icon: Linkedin, href: "#", label: "LinkedIn", className: "bg-blue-700" },
  { icon: X, href: "#", label: "X", className: "bg-black border border-white/30" },
  { icon: Send, href: "#", label: "Telegram", className: "bg-sky-500" },
  { icon: Music2, href: "#", label: "TikTok", className: "bg-gradient-to-br from-cyan-400 via-black to-pink-500" },
];

export default function ContactPage() {
  return (
    <section className="section pt-16">
      {/* ---------- Meet the CEO (no box, open layout) ---------- */}
      <Reveal>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          {/* Left: CEO photo */}
          <div className="aspect-square w-full overflow-hidden rounded-2xl">
            <img
              src="/zeeshan.png"
              alt="CEO of Agencee"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Right: CEO + company details */}
          <div>
            <p className="eyebrow mb-2">Meet the CEO</p>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Zeeshan Syed 
            </h2>
            <p className="mt-1 font-medium text-sun">Founder &amp; CEO,</p>
            <p className="mt-4 max-w-lg text-white/60">
              Zeeshan Syed is the Founder & CEO of Jasonex Technologies (Pvt.) Ltd., bringing over **8 years of experience* in digital technology, software development, AI-powered automation, and performance marketing.
              Throughout his career, he has helped startups, SMEs, and established businesses build their digital presence through custom web development, eCommerce solutions, search engine optimization (SEO), Google Ads, Meta Ads, branding, and business automation. His expertise spans developing scalable digital systems that improve operational efficiency, generate qualified leads, and accelerate business growth.
              As a strong advocate of innovation, Zeeshan specializes in integrating Artificial Intelligence into modern business processes, enabling organizations to automate workflows, enhance customer experiences, and make data-driven decisions. Under his leadership, Jasonex Technologies is committed to delivering cutting-edge technology solutions that empower businesses to thrive in an increasingly digital world.
              His long-term vision is to establish Jasonex Technologies as a globally recognized technology company, delivering world-class AI, software, and digital transformation solutions to clients across the globe.
            </p>

            {/* Social media row - animated, brand-colored icons */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {socials.map((social, i) => {
                const Icon = social.icon;
                return (
                  <Reveal key={social.label} delay={i * 0.05}>
                    <a
                      href={social.href}
                      aria-label={social.label}
                      className={`flex h-11 w-11 items-center justify-center rounded-full text-white shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:scale-110 ${social.className}`}
                    >
                      <Icon size={18} />
                    </a>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </Reveal>

      {/* ---------- Contact heading + form card ---------- */}
      <div className="mt-20 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <Reveal className="max-w-xl">
          <p className="eyebrow mb-3">Contact</p>
          <h1 className="font-display text-4xl font-bold sm:text-5xl">Let&apos;s talk growth.</h1>
          <p className="mt-5 text-white/60">
            Tell us a bit about your business and what you&apos;re trying to achieve —
            we&apos;ll get back to you within one business day.
          </p>
        </Reveal>

        <ContactFormCard />
      </div>

      <Reveal className="mt-10 grid gap-6 sm:grid-cols-3">
        <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-panel p-5">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sun/15 text-sun">
            <Mail size={18} />
          </span>
          <div>
            <div className="text-sm text-white/50">Email</div>
            <div className="font-medium">zeeseo12@gmail.com</div>
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-panel p-5">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sun/15 text-sun">
            <Phone size={18} />
          </span>
          <div>
            <div className="text-sm text-white/50">Phone</div>
            <div className="font-medium">+923360881094</div>
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-panel p-5">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sun/15 text-sun">
            <MapPin size={18} />
          </span>
          <div>
            <div className="text-sm text-white/50">Office</div>
            <div className="font-medium">I-8 Markaz, Islamabad, Pakistan</div>
          </div>
        </div>
      </Reveal>

      {/* ---------- Office Location Map ---------- */}
      <Reveal className="mt-10">
        <div className="overflow-hidden rounded-3xl border border-white/10">
          <iframe
            title="Office location - I-8 Markaz, Islamabad"
            src="https://www.google.com/maps?q=I-8+Markaz,+Islamabad,+Pakistan&output=embed"
            width="100%"
            height="420"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Reveal>
    </section>
  );
}