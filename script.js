async function sendMessage() {
    const input = document.getElementById("input");
    const messages = document.getElementById("messages");

    let text = input.value.trim();
    if (text === "") return;

    messages.innerHTML += `
        <div class="message user">
            ${text}
        </div>
    `;

    messages.scrollTop = messages.scrollHeight;
    input.value = "";

    try {
        const response = await fetch(
            "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AQ.Ab8RN6JaNntaB78klqC5cUA_kgiSH9bc0YfqIw8dAe8Vq5HITQ
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

        let answer = "Ошибка.";

        if (
            data.candidates &&
            data.candidates.length > 0 &&
            data.candidates[0].content &&
            data.candidates[0].content.parts
        ) {
            answer = data.candidates[0].content.parts[0].text;
        }

        messages.innerHTML += `
            <div class="message ai">
                ${answer}
            </div>
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
