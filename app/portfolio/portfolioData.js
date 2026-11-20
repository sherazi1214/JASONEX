// Har item ka `pdf` field public/portfolio/ folder ki PDF ki taraf jata hai.
// Nayi PDF add karni ho to file public/portfolio/ me rakho aur yahan ek item add karo.
export const projects = [
  {
    slug: "sunshine-scrap-metals",
    category: "Portfolio",
    title: "Sunshine Scrap Metal Turning",
    shortDesc: "How Stellar Scripts elevated a videographer's portfolio website.",
    image: "/projects/content-writing.png",
    pdf: "/portfolio/sunshine-scrap-metals.pdf",
    cardStats: [
      { value: "40%", label: "Increase in website traffic" },
      { value: "70%", label: "Target keywords ranked" },
    ],
  },
  {
    slug: "seo-success-architecture-firm",
    category: "Portfolio",
    title: "SEO Success Story of an Architecture Firm",
    shortDesc: "How ArchiVision Architects achieved top rankings with strategic SEO.",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1200&auto=format&fit=crop",
    pdf: "/portfolio/seo-success-architecture-firm.pdf",
    cardStats: [
      { value: "3x", label: "Organic lead growth" },
      { value: "90%", label: "Page 1 keyword coverage" },
    ],
  },
  {
    slug: "full-funnel-growth-saas-startup",
    category: "Portfolio",
    title: "Full-Funnel Growth For a SaaS Startup",
    shortDesc: "How BlueSky Ventures scaled paid and organic acquisition together.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    pdf: "/portfolio/full-funnel-growth-saas-startup.pdf",
    cardStats: [
      { value: "2.4x", label: "Return on ad spend" },
      { value: "55%", label: "Lower cost per lead" },
    ],
  },
];
