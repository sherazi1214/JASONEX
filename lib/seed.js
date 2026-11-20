// Pehli dafa chalne par yehi data JSON file me save hota hai (jo abhi site pe dikh raha hai).
import { posts as seedPosts } from "../app/blog/postsData.js";

export const seedTeam = [
  { name: "Sayed Zeeshan Haider", role: "MARKETING GENIUS", title: "Founder & CEO", image: "/About/zeeshan.png" },
  { name: "Ijaz Hussain", role: "SEO MASTERMIND", title: "SEO Specialist", image: "/About/ijaz.jpeg" },
  { name: "Sayed Wajahat Ali Shah", role: "DESIGNER & DEVELOPER", title: "Senior Developer", image: "/About/wajahat.jpeg" },
  { name: "Abdul Rahman", role: "GRAPHIC DESIGNER", title: "UI/UX Designer", image: "/About/graphic.jpeg" },
  { name: "Measum", role: "CONTENT CREATOR", title: "UI/UX Designer", image: "/About/masim.jpeg" },
  { name: "Abdullah", role: "VIDEO EDITOR", title: "UI/UX Designer", image: "/About/abdul.jpeg" },
].map((m, i) => ({ id: `seed-team-${i + 1}`, ...m }));

export const seedSnaps = [
  "gallery-1a", "gallery-1b", "gallery-1c", "gallery-2a", "gallery-2b", "gallery-2c", "gallery-2d",
].map((n, i) => ({ id: `seed-snap-${i + 1}`, image: `/About/${n}.jpeg`, caption: "" }));

export const seedFounder = {
  name: "Sayed Zeeshan Haider",
  role: "Founder & CEO",
  intro:
    "Sayed Zeeshan Haider, is the Founder & CEO of Jasonex Technologies (Pvt.) Ltd with 8 years of experience in digital technology, software development, AI-powered automation, and performance marketing. Throughout his career, he has helped startups, SMEs, and established businesses build their digital presence through custom web development, eCommerce solutions, search engine optimization (SEO), Google Ads, Meta Ads, branding, and business automation.",
  details:
    "As a strong advocate of innovation, Zeeshan specializes in integrating Artificial Intelligence into modern business processes, enabling organizations to automate workflows, enhance customer experiences, and make data-driven decisions. Under his leadership, Jasonex Technologies is committed to delivering cutting-edge technology solutions that empower businesses to thrive in an increasingly digital world.\n\nHis long-term vision is to establish Jasonex Technologies as a globally recognized technology company, delivering world-class AI, software, and digital transformation solutions to clients across the globe.",
  tags: ["Visionary Thinker", "Empathetic Leader", "Creative Problem-Solver", "Passionate Mentor"],
  featuredIn: ["Logoipsum", "Logo IPSUM", "LOGOIPSUM", "logo ipsum", "logo ipsum"],
  photo: "/zeeshan.png",
};

export const seedPostsWithIds = seedPosts.map((p, i) => ({
  id: `seed-post-${i + 1}`,
  slug: p.slug,
  title: p.title,
  date: p.date,
  category: p.category,
  featured: Boolean(p.featured),
  image: p.image,
  content: p.content,
}));
