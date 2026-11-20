# Admin panel setup

1. `npm install` (.npmrc me legacy-peer-deps already set hai)
2. Admin banayein (email + strong password):
   `npm run setup-admin -- you@gmail.com "Your#Strong1Password"`
   (.env.local ban jati hai; password sirf hash ke taur par save hota hai)
3. `npm run build && npm start` (ya `npm run dev`), phir `/admin/login` kholen.

Notes
- Data `./data/*.json` me aur uploaded images `./data/uploads` me save hoti hain (`DATA_DIR` se badal sakte hain). Is folder ka backup rakhein.
- Production me site HTTPS par honi chahiye (login cookie `Secure` hai).
- Vercel jaisa read-only/serverless hosting use karenge to saves persist nahi hongi; VPS / Node server ya persistent disk chahiye.
- Login: 5 galat koshish par 15 minute lock, session 8 ghante.
