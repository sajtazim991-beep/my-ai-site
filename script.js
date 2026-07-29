
function sendMessage() {

    const input = document.getElementById("input");
    const messages = document.getElementById("messages");

    let text = input.value.trim();

    if (text === "") return;


    messages.innerHTML += `
        <div class="message user">
            ${text}
        </div>
    `;


    let answer = "Я пока учусь отвечать 📚";

    if (text.toLowerCase().includes("привет")) {
        answer = "Привет! 👋 Я твой AI помощник.";
    }

    if (text.toLowerCase().includes("кто ты")) {
        answer = "Я твой личный AI помощник 🤖";
    }


    setTimeout(() => {

        messages.innerHTML += `
            <div class="message ai">
                ${answer}
            </div>
        `;

        messages.scrollTop = messages.scrollHeight;

    }, 500);


    input.value = "";

}



function handleEnter(event) {

    if (event.key === "Enter") {
        sendMessage();
    }

}



function newChat() {

    document.getElementById("messages").innerHTML = `
        <div class="message ai">
            Новый чат создан 🤖
        </div>
    `;

}
