import { withCors } from "./_cors.js";

export default async function handler(req, res) {
  if (withCors(req, res)) return;

  // Datos de ejemplo (cámbialos por tu BD cuando quieras)
  const items = Array.from({ length: 7 }).map((_, i) => ({
    id: `p-${i}`,
    slug: i === 0 ? "comparativa-2025" : `post-${i}`,
    title: i === 0 ? "ChatGPT vs Claude vs Gemini: Comparativa 2025" : `Post ${i}`,
    excerpt: "Resumen breve del artículo.",
    coverUrl: `https://picsum.photos/seed/ia${i}/1200/700`,
    tags: ["tutoriales", "noticias", "casos de éxito"].slice(0, 1 + (i % 3)),
    readMins: 5 + i,
    author: { name: ["Dr. Ana Martínez", "Carlos Mendoza", "María López"][i % 3] },
    publishedAt: new Date().toISOString()
  }));

  res.status(200).json({ items });
}
