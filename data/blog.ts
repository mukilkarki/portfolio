export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string[]; // paragraphs
  date: string; // ISO
  category: string;
  tags: string[];
  readingTime: string;
};

export const posts: BlogPost[] = [
  {
    slug: "why-i-started-creovisia",
    title: "Why I Started Creovisia",
    excerpt:
      "The thinking behind building an AI education and technology studio while still in school.",
    content: [
      "I started Creovisia because I kept running into the same gap: powerful technology exists, but understanding it deeply is still hard for most people. I wanted to close that gap.",
      "Creovisia is my attempt to build products and content that make artificial intelligence and technology approachable, without dumbing them down.",
      "This blog will document what I'm learning and building along the way — the wins, the failed experiments, and everything in between.",
    ],
    date: "2026-01-10",
    category: "Founder Notes",
    tags: ["Creovisia", "AI", "Startup"],
    readingTime: "3 min read",
  },
  {
    slug: "learning-ai-as-a-student",
    title: "Learning AI as a Student: What Actually Works",
    excerpt:
      "A practical breakdown of how I'm learning artificial intelligence and prompt engineering while still in school.",
    content: [
      "Most AI learning advice online is either too theoretical or too shallow. Here's what has actually worked for me: building small, real projects instead of only watching tutorials.",
      "Prompt engineering, in particular, rewards experimentation. I learn more from testing 20 variations of a prompt on a real problem than from reading a single guide.",
      "Consistency beats intensity. A little bit of building every day compounds faster than occasional long sessions.",
    ],
    date: "2026-02-18",
    category: "AI & Learning",
    tags: ["Artificial Intelligence", "Prompting", "Self-Taught"],
    readingTime: "4 min read",
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function getAllCategories() {
  return Array.from(new Set(posts.map((p) => p.category)));
}

export function getAllTags() {
  return Array.from(new Set(posts.flatMap((p) => p.tags)));
}
