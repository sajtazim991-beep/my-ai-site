async function sendMessage() {
    const input = document.getElementById("input");
    const messages = document.getElementById("messages");

    const text = input.value.trim();
    if (!text) return;

    messages.innerHTML += `
        <div class="message user">${text}</div>
    `;
    input.value = "";
    messages.scrollTop = messages.scrollHeight;

    try {
        const response = await fetch(
            "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AQ.Ab8RN6IYDKpQQRRWDlS23wvu_xwOWoWyI6zPedZGvGQm-5RZjw",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    contents: [
                        {
                            parts: [
                                {
                                    text: text
                                }
                            ]
                        }
                    ]
                })
            }
        );

        const data = await response.json();

        const answer =
            data.candidates?.[0]?.content?.parts?.[0]?.text ||
            data.error?.message ||
            "Не удалось получить ответ.";

        messages.innerHTML += `
            <div class="message ai">${answer}</div>
        `;

        messages.scrollTop = messages.scrollHeight;

    } catch (err) {
        messages.innerHTML += `
            <div class="message ai">
                ❌ Ошибка подключения к Gemini.
            </div>
        `;
        console.error(err);
    }
}

function handleEnter(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

function newChat() {
    document.getElementById("messages").innerHTML = `
        <div class="message ai">
            Привет! 👋 Новый чат создан.
        </div>
    `;
}        
