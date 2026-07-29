function askAI() {
    let input = document.getElementById("question");
    let text = input.value.trim();

    if (text === "") return;

    let chat = document.getElementById("chat");

    // сообщение пользователя
    chat.innerHTML += `
    <div class="message user">
        👤 ${text}
    </div>
    `;

    let answer = "Я пока не знаю этот вопрос, но учусь 📚";

    let q = text.toLowerCase();

    if (q.includes("привет")) {
        answer = "Привет! 👋 Рад тебя видеть.";
    } 
    else if (q.includes("как дела")) {
        answer = "У меня всё отлично 🤖";
    } 
    else if (q.includes("кто ты")) {
        answer = "Я AI помощник, которого ты создаёшь 🚀";
    }
    else if (q.includes("2+2")) {
        answer = "2+2 = 4 ✅";
    }
    else if (q.includes("пока")) {
        answer = "До встречи! 👋";
    }

    // ответ AI
    chat.innerHTML += `
    <div class="message ai">
        🤖 ${answer}
    </div>
    `;

    input.value = "";

    chat.scrollTop = chat.scrollHeight;
}
