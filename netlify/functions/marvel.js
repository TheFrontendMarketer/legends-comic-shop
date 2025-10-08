const crypto = require("crypto");

exports.handler = async (event, context) => {
  const MARVEL_PUBLIC_KEY = process.env.MARVEL_PUBLIC_KEY;
  const MARVEL_PRIVATE_KEY = process.env.MARVEL_PRIVATE_KEY;

  if (!MARVEL_PUBLIC_KEY || !MARVEL_PRIVATE_KEY) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "API keys not configured" }),
    };
  }

  const ts = Date.now().toString();
  const hash = crypto
    .createHash("md5")
    .update(ts + MARVEL_PRIVATE_KEY + MARVEL_PUBLIC_KEY)
    .digest("hex");

  // Target character series we want to focus on
  const targetSeries = [
    "Spider-Man",
    "X-Men",
    "Avengers",
    "X-Force",
    "Deadpool",
    "Wolverine",
    "Iron Man",
    "Captain America",
    "Thor",
    "Hulk",
    "Fantastic Four",
    "Guardians of the Galaxy",
    "Black Panther",
  ];

  try {
    // Fetch comics and filter by series/title keywords
    const url = `https://gateway.marvel.com/v1/public/comics?limit=100&orderBy=-onsaleDate&apikey=${MARVEL_PUBLIC_KEY}&ts=${ts}&hash=${hash}`;
    const response = await fetch(url);
    const data = await response.json();
    const allComics = data.data?.results || [];

    // Filter for comics from our target series
    const validComics = allComics.filter((comic) => {
      // Basic requirements
      if (
        !comic.thumbnail ||
        !comic.thumbnail.path ||
        comic.thumbnail.path.includes("image_not_available") ||
        !comic.title
      ) {
        return false;
      }

      // Check if comic title contains any of our target series
      const title = comic.title.toLowerCase();
      return targetSeries.some(
        (series) =>
          title.includes(series.toLowerCase()) ||
          title.includes(series.replace("-", " ").toLowerCase())
      );
    });

    // Randomly select 5 comics
    const shuffled = validComics.sort(() => 0.5 - Math.random());
    const randomComics = shuffled.slice(0, 5);

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(randomComics),
    };
  } catch (error) {
    console.error("Error fetching Marvel comics:", error);
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify([]),
    };
  }
};
