export const services = [
  {
    slug: "ai-automation",
    icon: "Bot",
    title: "AI Automation",
    short: "Automate repetitive tasks and workflows with smart AI-driven systems.",
    description:
      "We design and implement AI-powered automation that cuts manual work, connects your tools, and lets your team focus on what actually needs a human. From chatbots to internal workflow automation, we build systems tailored to your business.",
    points: [
      "Custom AI chatbots and assistants",
      "Workflow and process automation",
      "Integration with your existing tools",
      "Ongoing monitoring and optimization",
    ],
  },
  {
    slug: "website-development",
    icon: "Code2",
    title: "Website Development",
    short: "Fast, modern, SEO-friendly websites built to convert visitors into customers.",
    description:
      "We design and build websites on modern stacks like Next.js, focused on speed, accessibility, and conversion — not just aesthetics. Every site is built to rank well and load fast.",
    points: [
      "Custom design in Figma",
      "Development on Next.js / React",
      "Core Web Vitals optimization",
      "Ongoing maintenance and support",
    ],
  },
  {
    slug: "app-development",
    icon: "Smartphone",
    title: "App Development",
    short: "Native and cross-platform apps built for iOS and Android.",
    description:
      "From concept to launch, we build mobile apps that are fast, reliable, and easy to use — covering everything from UI/UX design to backend integration and App Store deployment.",
    points: [
      "Cross-platform development (React Native)",
      "UI/UX design for mobile",
      "API and backend integration",
      "App Store & Play Store deployment",
    ],
  },
  {
    slug: "digital-marketing",
    icon: "Target",
    title: "Digital Marketing",
    short: "Data-driven campaigns that grow your audience and your revenue.",
    description:
      "We manage Google, Meta, and LinkedIn ad accounts along with organic growth strategy — building, testing, and scaling campaigns that turn budget into measurable results.",
    points: [
      "Google Search & Display campaigns",
      "Meta and LinkedIn ad management",
      "Conversion tracking and A/B testing",
      "Weekly optimization cycles",
    ],
  },
  {
    slug: "branding",
    icon: "Sparkles",
    title: "Branding",
    short: "A visual identity that makes your business impossible to confuse with anyone else's.",
    description:
      "Logo, color system, typography, and brand guidelines — we build identities that hold up across every touchpoint, from your website to your business cards.",
    points: [
      "Logo and visual identity design",
      "Brand guidelines and voice",
      "Marketing collateral templates",
      "Rebrand strategy",
    ],
  },
];

export const stats = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Successful Projects" },
  { value: 150, suffix: "+", label: "Happy Clients" },
  { value: 160, suffix: "", label: "5 Star Reviews" },
];

export const works = [
  {
    slug: "stellar-scripts",
    title: "Content Writing For Video Grapher",
    summary: "How Stellar Scripts elevated a videographer's portfolio website.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    stats: [
      { value: "40%", label: "Increase in website traffic" },
      { value: "70%", label: "Target keywords ranked" },
    ],
  },
  {
    slug: "archivision",
    title: "SEO Success Story of an Architecture Firm",
    summary: "How ArchiVision Architects achieved top rankings with strategic SEO.",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1200&auto=format&fit=crop",
    stats: [
      { value: "3x", label: "Organic lead growth" },
      { value: "90%", label: "Page 1 keyword coverage" },
    ],
  },
  {
    slug: "bluesky-ventures",
    title: "Full-Funnel Growth For a SaaS Startup",
    summary: "How BlueSky Ventures scaled paid and organic acquisition together.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    stats: [
      { value: "2.4x", label: "Return on ad spend" },
      { value: "55%", label: "Lower cost per lead" },
    ],
  },
];

// ⚠️ URGENT — these are placeholder YouTube IDs, not real client testimonial
// videos, and none of them are actually Jasonex clients. The first one
// ("dQw4w9WgXcQ") is literally Rick Astley's "Never Gonna Give You Up" —
// clicking play on the homepage currently Rickrolls visitors instead of
// showing a testimonial. Do not deploy this array as-is; replace every
// entry with a real client's uploaded video ID before launch, or remove
// the video-testimonials section until real footage exists.
export const videoReviews = [
  {
    id: "dQw4w9WgXcQ",
    name: "Magnus Hawthorne",
    role: "Owner, Bayleaf",
  },
  {
    id: "M7lc1UVf-VE",
    name: "Thaddeus Montgomery",
    role: "Owner, Goldgarden",
  },
  {
    id: "eY52Zsg-KVI",
    name: "S. Power",
    role: "Bluesky Ventures",
  },
  {
    id: "aqz-KE-bpKQ",
    name: "Mark Chen",
    role: "MD, Brightstar Technologies",
  },
];

export const textReviews = [
  {
    name: "S. Power",
    role: "Bluesky Ventures",
    text: "Their transparency and communication made them feel like a true partner in our success. We couldn't be happier with the results!",
  },
  {
    name: "Mark Chen",
    role: "MD, Brightstar Technologies",
    // Was "Choosing Celestial Solutions..." — a different, unrelated company
    // name that had nothing to do with Jasonex Technologies or this reviewer.
    text: "Choosing Jasonex Technologies was one of the best decisions we made for our company. Their innovative approach and dedication to understanding our unique needs resulted in a tailored marketing strategy that exceeded our expectations.",
  },
];

export const blogPosts = [
  {
    slug: "seo-keyword-research",
    title: "Unlocking the Power of SEO Keyword Research",
    date: "jul 24, 2026",
    tag: "News",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    content:
      "Keyword research is the foundation of every successful SEO strategy. Before you write a single line of content, you need to understand what your audience is actually typing into search engines. Start by identifying seed keywords related to your niche, then expand that list using tools that reveal search volume, competition, and related queries. Long-tail keywords — longer, more specific phrases — often convert better because they capture users who already know what they want. Group your keywords by search intent (informational, navigational, transactional) and map each group to a specific page on your site. Finally, keep revisiting your keyword list every few months, since search trends shift and new opportunities appear as your industry evolves.",
  },
  {
    slug: "social-media-trends",
    title: "5 Social Media Trends Worth Watching",
    date: "jul 25, 2026",
    tag: "Tips",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1200&auto=format&fit=crop",
    content:
      "Social media keeps moving fast, and brands that adapt early usually win the most attention. Short-form video continues to dominate feeds, rewarding creators who can hook viewers in the first two seconds. Authentic, less-polished content is outperforming heavily produced ads, as audiences increasingly trust creators over brands. Social search is also on the rise, with more users turning to platforms like TikTok and Instagram instead of traditional search engines to find recommendations. Community-driven spaces such as private groups and channels are becoming key for deeper engagement. Finally, AI-assisted content creation is helping teams produce more variations faster, but the brands that stand out are still the ones that keep a clear, consistent voice across every post.",
  },
  {
    slug: "conversion-copywriting",
    title: "Writing Copy That Actually Converts",
    date: "jul 26, 2026",
    tag: "Tips",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200&auto=format&fit=crop",
    content:
      "Great copy doesn't just describe a product — it moves someone to act. The best conversion copy starts with a deep understanding of the reader's problem, spoken in their own words rather than internal jargon. Lead with the benefit, not the feature: instead of listing what something does, explain what changes for the reader once they have it. Strong headlines earn attention, but the real work happens in the first sentence after it, which has to keep that attention alive. Use specific, concrete language over vague claims, back up promises with proof like numbers or testimonials, and always close with a clear, low-friction next step. Testing different versions of your copy over time is what separates good copywriters from great ones.",
  },
];

export const faqs = [
  {
    q: "What is SEO and why is it important?",
    a: "SEO (Search Engine Optimization) is the practice of improving your website so it ranks higher in search results. It matters because higher rankings mean more visibility, more organic traffic, and more customers finding you without paid ads.",
  },
  {
    q: "How long does it take to see results from SEO?",
    a: "Most clients start seeing meaningful movement within 3-4 months, with stronger compounding results after 6-12 months. SEO is a long-term investment, not an overnight switch.",
  },
  {
    q: "What are the key factors that influence SEO rankings?",
    a: "Search engines weigh technical health, content quality and relevance, backlink authority, page speed, and user experience signals together to determine rankings.",
  },
  {
    q: "Do I need to hire an SEO agency, or can I do SEO myself?",
    a: "You can absolutely do parts of SEO yourself, but an experienced agency brings tooling, testing at scale, and time you likely don't have — which usually gets you results faster.",
  },
  {
    q: "How much does SEO cost?",
    a: "Cost depends on your site's size, competitiveness of your industry, and goals. We scope every engagement individually after an initial audit call.",
  },
];