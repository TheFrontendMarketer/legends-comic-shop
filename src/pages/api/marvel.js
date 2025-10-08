import crypto from "crypto";

export async function GET() {
  const MARVEL_PUBLIC_KEY = import.meta.env.MARVEL_PUBLIC_KEY;
  const MARVEL_PRIVATE_KEY = import.meta.env.MARVEL_PRIVATE_KEY;

  if (!MARVEL_PUBLIC_KEY || !MARVEL_PRIVATE_KEY) {
    return new Response(JSON.stringify({ error: "API keys not configured" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  const ts = Date.now().toString();
  const hash = crypto
    .createHash("md5")
    .update(ts + MARVEL_PRIVATE_KEY + MARVEL_PUBLIC_KEY)
    .digest("hex");

  // Fetch more comics to have a better selection for randomization
  const url = `https://gateway.marvel.com/v1/public/comics?limit=100&orderBy=-onsaleDate&apikey=${MARVEL_PUBLIC_KEY}&ts=${ts}&hash=${hash}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const allComics = data.data?.results || [];

    // Filter out comics without proper images and titles
    const validComics = allComics.filter(
      (comic) =>
        comic.thumbnail &&
        comic.thumbnail.path &&
        !comic.thumbnail.path.includes("image_not_available") &&
        comic.title
    );

    // Randomly select 5 comics
    const shuffled = validComics.sort(() => 0.5 - Math.random());
    const randomComics = shuffled.slice(0, 5);

    return new Response(JSON.stringify(randomComics), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching Marvel comics:", error);
    return new Response(JSON.stringify([]), {
      headers: { "Content-Type": "application/json" },
    });
  }
}
