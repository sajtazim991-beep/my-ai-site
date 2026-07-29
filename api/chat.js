export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST requests allowed" });
  }

  try {
    const { message } = req.body;

    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-5.5",
        input: message
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(500).json(data);
    }

    const answer =
      data.output?.[0]?.content?.[0]?.text ||
      "Не удалось получить ответ.";

    return res.status(200).json({ answer });

  } catch (error) {
    return res.status(500).json({
      error: error.message
    });
  }
}
