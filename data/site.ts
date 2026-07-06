// ─────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH FOR ALL SITE CONTENT
// Edit this file to update names, links, projects, skills, etc.
// ─────────────────────────────────────────────────────────────

export const site = {
  fullName: "Mukil Karki M",
  brandName: "Creovisia",
  tagline: "Understand Deeply. Create Fearlessly.",
  role: "Founder, Creovisia — AI Developer & Technology Builder",
  url: "https://creovisia.com", // TODO: replace with your real deployed domain
  email: "hello@creovisia.com", // TODO: replace with your real email
  location: "India",
  about:
    "I'm Mukil Karki M, a 17-year-old self-taught developer, AI enthusiast, and the founder of Creovisia—an AI education and technology product studio. I'm passionate about artificial intelligence, software development, cybersecurity, and building digital products that solve real-world problems. I enjoy learning emerging technologies, turning ideas into practical solutions, and sharing knowledge to make complex concepts easier to understand. My mission is to simplify technology, inspire curiosity, and build innovative products that create a meaningful impact. I believe continuous learning and fearless creation are the keys to shaping the future.",
  aboutTa:
    "நான் முகில் கார்க்கி மு, 17 வயதுடைய சுயமாகக் கற்றுக்கொண்ட மென்பொருள் உருவாக்குநர் (Self-Taught Developer), செயற்கை நுண்ணறிவு (AI) ஆர்வலர், மேலும் Creovisia என்ற AI கல்வி மற்றும் தொழில்நுட்ப தயாரிப்பு நிறுவனத்தின் நிறுவனர். செயற்கை நுண்ணறிவு, மென்பொருள் மேம்பாடு, சைபர் பாதுகாப்பு மற்றும் நிஜ உலகப் பிரச்சினைகளுக்கு தீர்வளிக்கும் டிஜிட்டல் தயாரிப்புகளை உருவாக்குவதில் எனக்கு மிகுந்த ஆர்வம் உள்ளது. புதிய தொழில்நுட்பங்களை தொடர்ந்து கற்றுக்கொள்வதும், புதுமையான யோசனைகளை நடைமுறை தீர்வுகளாக மாற்றுவதும், சிக்கலான தொழில்நுட்பக் கருத்துகளை அனைவரும் எளிதாகப் புரிந்துகொள்ளும் வகையில் பகிர்வதும் எனக்கு மிகவும் பிடித்தவை. தொழில்நுட்பத்தை எளிமைப்படுத்தி, புதிய சிந்தனையை ஊக்குவித்து, சமூகத்தில் அர்த்தமுள்ள மாற்றத்தை உருவாக்கும் புதுமையான தயாரிப்புகளை உருவாக்குவதே என் நோக்கம். தொடர்ந்து கற்றுக்கொள்வதும், அச்சமின்றி புதுமைகளை உருவாக்குவதும் எதிர்காலத்தை வடிவமைக்கும் முக்கியமான திறவுகோல்கள் என்று நான் நம்புகிறேன்.",

  social: {
    github: "https://github.com/mukilkarki",
    linkedin: "", // TODO: add your LinkedIn URL
    twitter: "", // TODO: add your X/Twitter URL
    instagram: "", // optional
  },

  resumeUrl: "", // TODO: add path to your resume PDF, e.g. "/resume.pdf"

  skills: [
    { name: "Artificial Intelligence", level: "Learning", note: "Applied ML concepts, model behavior, prompt-driven systems" },
    { name: "AI Prompting", level: "Learning", note: "Prompt design, evaluation, iteration for real products" },
    { name: "Cybersecurity Fundamentals", level: "Basic", note: "Network & system security basics, ethical hacking foundations" },
    { name: "Technical Content Creation", level: "Practicing", note: "Explaining complex tech in simple, accessible language" },
    { name: "Problem Solving", level: "Core strength", note: "Breaking down ambiguous problems into buildable systems" },
    { name: "Product Idea & Design", level: "Practicing", note: "Turning concepts into usable, well-scoped products" },
    { name: "Git & GitHub", level: "Comfortable", note: "Version control, collaboration workflows" },
  ],

  techStack: {
    Languages: ["C", "C++", "CSS", "HTML", "JavaScript", "Next.js", "Python", "Tailwind CSS", "TypeScript"],
    Tools: ["Android Studio", "Canva", "Claude AI", "ChatGPT", "Firebase", "Figma", "Git", "GitHub", "GitHub Copilot", "Kali Linux", "Netlify", "OpenAI API", "Supabase", "Termux", "Vercel", "VS Code"],
  },

  projects: [
    {
      slug: "ECE SPARK",
      name: "ECE SPARK",
      description:
        "⚡ Official ECE-SPARK platform by Creovisia — empowering ECE students with smart learning, AI assistance, progress tracking, and career development.",
      problem:
        "New ECE students has not a centralized platform that bridges the gap between academic learning and real-world industry requirements.",
      solution:
        "ECE-SPARK is a modern student productivity and career development platform built specifically for Electronics and Communication Engineering students. The platform combines academic management, skill development, project tracking, placement preparation, and emerging technology roadmaps into a single ecosystem. From first-year fundamentals to industry-ready expertise, ECE-SPARK helps students track, learn, build, and grow throughout their engineering journey.",
      features: [
        "📚 Academic Management",
        "📈 Performance Tracking",
        "🧮 Student Utilities",
        "💼 Career Development",
        "🤖 AI Engineering",
        "🔐 Cybersecurity",
      ],
      stack: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/mukilkarki/ECE-SPARK", // TODO: add GitHub link
      demo: "https://ecespark.netlify.app/", // TODO: add live demo link
      metrics: { performance: "TBD", accessibility: "TBD" },
    },
    {
      slug: "promptforge",
      name: "PromptForge",
      description:
        "An AI-powered prompt engineering platform for creating, managing, and optimizing prompts.",
      problem:
        "Prompt engineering is scattered across notes, docs, and trial-and-error with no structured way to version, test, or reuse prompts.",
      solution:
        "PromptForge gives builders a dedicated workspace to draft, organize, and refine prompts, with version history and structured testing built in.",
      features: [
        "Prompt library with tagging and search",
        "Version history for iterative refinement",
        "Optimization suggestions based on structure",
        "Firebase-backed sync across devices",
      ],
      stack: ["Next.js", "React", "Firebase", "Tailwind CSS"],
      github: "", // TODO: add GitHub link
      demo: "", // TODO: add live demo link
      metrics: { performance: "TBD", accessibility: "TBD" },
    },
    {
      slug: "creovisia-website",
      name: "Creovisia Website",
      description:
        "Official website showcasing AI education, technology products, and future innovations.",
      problem:
        "Creovisia needed a single, credible home online to present its mission, products, and educational content to students and partners.",
      solution:
        "A fast, SEO-optimized marketing site built to scale as new products and content are added.",
      features: [
        "SEO-first architecture",
        "Modular sections for future product launches",
        "Optimized for Core Web Vitals",
      ],
      stack: ["Next.js", "Tailwind CSS"],
      github: "", // TODO: add GitHub link
      demo: "", // TODO: add live demo link
      metrics: { performance: "TBD", accessibility: "TBD" },
    },
  ],

  timeline: [
     {
      year: "Now",
      title: "Founder, Creovisia",
      description: "Building an AI education and technology product studio.",
    },
    
    {
      year: "Ongoing",
      title: "Self-Taught AI Practitioner",
      description: "Learning artificial intelligence and prompt engineering through building real projects.",
    },
  ],

  education: [
    {
      title: "Self-Taught: Artificial Intelligence",
      place: "At Home",
      period: "Ongoing",
      description: "Continuous, self-directed learning in AI, prompting, and applied machine learning.",
    },
    {
      title: "BE. ECE (Electronics and Communication Engineering)",
      place: "Sethu Institute of Technology, Pulloor, Kariapatti – 626 115, Virudhunagar District, Tamilnadu.", // TODO: add school name if you want it publice
      period: "Present",
      description: "lets start a new journey of education in deep science.",
    },
    {
      title: "Higher Secondary Education",
      place: "The Krishnamal Ramasubbaiyer School (KRS) is located at T.V.R Nagar, Aruppukottai Road, Eliyarpathi Village, Madurai, Tamil Nadu, PIN – 625022.", // TODO: add school name if you want it public
      period: "2024-2026",
      description: "Currently completing higher secondary education.",
    },
    {
      title: "Low-Higher Education",
      place: "St. Mary's Matriculation School in Kariapatti is located on Kallakudi Road, Kariapatti, Virudhunagar District, Tamil Nadu 626106.", // TODO: add school name if you want it public
      period: "****-2024",
      description: "Wbere i learn about respect,happy vibe,",
    },
    
  ],

  achievements: [], // TODO: add achievements/certificates later

  languages: ["en", "ta"] as const,

  analytics: {
    vercel: true,
  },
};

export type Site = typeof site;
