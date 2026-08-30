export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  readTime: string;
  body: string[]; // paragraphs — kept as plain strings for simplicity
};

// Three seed articles matching the SEO strategy from the roadmap.
// Add one per state next ("Texas roofing: what homeowners should know
// about hail season", etc.) following this exact shape.
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-long-do-asphalt-shingles-last",
    title: "How long do asphalt shingles actually last?",
    excerpt:
      "Manufacturer ratings and real-world lifespan are two different numbers. Here's what actually determines when your roof needs attention.",
    date: "2026-01-15",
    readTime: "5 min read",
    body: [
      "Most asphalt shingles are rated for 20 to 30 years, but that number assumes ideal installation and moderate climate conditions. In practice, heat, UV exposure, and storm activity all accelerate aging well before the rated lifespan is reached.",
      "The real driver of shingle failure isn't age by itself — it's oil loss. Asphalt shingles rely on petroleum-based oils to stay flexible. As those oils evaporate over the years, shingles become brittle, crack under thermal expansion, and shed the protective granule layer that shields them from UV damage.",
      "That's the mechanism roof restoration treatments target directly: reintroducing oils to restore flexibility, rather than tearing off and replacing shingles that may still have structural life left in them.",
      "If you're unsure where your roof stands, a free inspection is the fastest way to get a straight answer — including whether restoration is even the right fit, or if replacement genuinely is the better call.",
    ],
  },
  {
    slug: "roof-restoration-cost-vs-replacement",
    title: "Roof restoration cost vs. full replacement: a real breakdown",
    excerpt:
      "Replacement isn't always necessary. Here's how the two options actually compare on cost, time, and long-term value.",
    date: "2026-02-03",
    readTime: "6 min read",
    body: [
      "A full roof replacement for an average single-family home typically involves a complete tear-off, disposal of old materials, and installation of new shingles, underlayment, and flashing — a multi-day project with a correspondingly higher price tag.",
      "Roof restoration treats the existing shingles in place. There's no tear-off, no dumpster of waste, and most residential jobs complete in one to two days rather than a week or more.",
      "The tradeoff: restoration only works within a specific window. Once granule loss exceeds roughly 30%, or a roof has recurring leaks pointing to poor original installation, replacement becomes the safer long-term choice. This is exactly what a free inspection is designed to determine before any money changes hands.",
    ],
  },
  {
    slug: "signs-your-roof-needs-attention",
    title: "Signs your roof needs attention before the next storm season",
    excerpt: "Five warning signs homeowners consistently miss until it's too late.",
    date: "2026-03-10",
    readTime: "4 min read",
    body: [
      "Granules collecting in gutters or at downspouts are one of the earliest visible signs of shingle aging — they indicate the protective coating is wearing away.",
      "Curling or cupping shingle edges signal that oils have evaporated and the material has lost flexibility, making it more prone to wind and hail damage.",
      "Dark streaking is usually algae growth, cosmetic on its own but often a sign of trapped moisture nearby.",
      "Granule loss, curling, and any interior water stains together are the three things worth getting checked before storm season, not after.",
    ],
  },
];

export function getPost(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
