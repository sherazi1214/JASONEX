# Jasonex Technologies — Next.js Marketing Site

## Kaisay chalayen (How to run)

1. Terminal khol kar is folder mein aayen:
   ```
   cd jasonex-technologies-site
   ```
2. Dependencies install karein:
   ```
   npm install
   ```
3. Dev server start karein:
   ```
   npm run dev
   ```
4. Browser mein kholein: http://localhost:3000

## Kya kya bana hai

- **Hero**: "The Best **Software**" / "**Marketing📣** Agency" — Software aur Marketing orange highlight ke sath, baki white. Neeche wali image scroll karte waqt upar ki taraf parallax animate hoti hai.
- **What We Offer**: har service card clickable hai, apne alag page `/services/[slug]` par le jata hai. Neeche "See All Services" orange button `/services` page kholta hai.
- **Stats (15+ / 200+ / 150+ / 160)**: halki up-down floating animation ke sath.
- **Works / Case Studies**: scroll par animate hoti hain, cursor le jane par card halka sa move/lift hota hai.
- **Reviews**: scroll par neeche se upar animate hoti hain, 2 YouTube video testimonials dikhti hain, black "View All Reviews" button `/reviews` page kholta hai jahan sab videos hain.
- **Pricing section hata di gayi hai** (jaisa maanga gaya tha).
- **Blog** aur uske baad **FAQ** ("Got Questions? We've Got Answers!"), phir **Footer**.

## Structure

- `app/page.js` — home page, sab sections yahan order mein hain
- `app/services/page.js` — all services
- `app/services/[slug]/page.js` — single service page
- `app/reviews/page.js` — all reviews (videos + text)
- `app/about`, `app/contact` — baki pages
- `components/` — Navbar, Footer, ParallaxHero, Services, Stats, Works, Reviews, Blog, FAQ, VideoCard, CountUp, Reveal
- `lib/data.js` — sara content (services, stats, works, reviews, blog posts, FAQ) — yahan se easily edit ho sakta hai

## Note

Images abhi Unsplash se aa rahi hain (placeholder). Apni asli photos daalne ke liye `lib/data.js` mein image URLs replace karein, ya `public/` folder mein apni images daal kar path change karein.
