export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST requests allowed" });
  }

  try {
    const { message } = req.body;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.AQ.Ab8RN6JaNntaB78klqC5cUA_kgiSH9bc0YfqIw8dAe8Vq5HITQ}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: message,
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(500).json(data);
    }

    const answer =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Не удалось получить ответ.";

    return res.status(200).json({ answer });

  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
}
