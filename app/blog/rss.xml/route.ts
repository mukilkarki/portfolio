import { posts } from "@/data/blog";
import { site } from "@/data/site";

export async function GET() {
  const items = posts
    .map(
      (post) => `
    <item>
      <title>${post.title}</title>
      <link>${site.url}/blog/${post.slug}</link>
      <guid>${site.url}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description><![CDATA[${post.excerpt}]]></description>
    </item>`
    )
    .join("");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${site.fullName} Blog</title>
    <link>${site.url}/blog</link>
    <description>Notes on AI, software development, and building ${site.brandName}.</description>
    ${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: { "Content-Type": "application/xml" },
  });
}
