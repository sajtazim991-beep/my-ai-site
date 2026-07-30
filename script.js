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
        const response = await fetch("/api/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: text
            })
        });

        const data = await response.json();

        messages.innerHTML += `
            <div class="message ai">
                ${data.answer || data.error || "Ошибка"}
            </div>
        `;

        messages.scrollTop = messages.scrollHeight;

    } catch (error) {
        messages.innerHTML += `
            <div class="message ai">
                ❌ Не удалось подключиться к серверу.
            </div>
        `;
        console.error(error);
    }
}

function handleEnter(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}
