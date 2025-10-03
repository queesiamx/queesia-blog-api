import { withCors } from "../_cors.js";

export default async function handler(req, res) {
  if (withCors(req, res)) return;
  const { slug } = req.query;

  // Ejemplo simple
  res.status(200).json({
    id: slug,
    title: `Detalle de ${slug}`,
    contentHtml: "<p>Contenido del post…</p>"
  });
}
