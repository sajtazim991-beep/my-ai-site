let chats = JSON.parse(localStorage.getItem("chats")) || [];


function sendMessage() {

    let input = document.getElementById("input");
    let text = input.value.trim();

    if (text === "") return;


    let messages = document.getElementById("messages");


    messages.innerHTML += `
    <div class="message user">
        ${text}
    </div>
    `;


    let answer = getAnswer(text);


    setTimeout(() => {

        messages.innerHTML += `
        <div class="message ai">
            ${answer}
        </div>
        `;

        messages.scrollTop = messages.scrollHeight;

    }, 500);



    saveChat(text);

    input.value = "";

}



function getAnswer(text) {

    let q = text.toLowerCase();


    if (q.includes("привет")) {
        return "Привет! 👋 Я твой AI помощник.";
    }


    if (q.includes("как дела")) {
        return "У меня всё хорошо 🤖";
    }


    if (q.includes("кто ты")) {
        return "Я AI помощник, которого ты создаёшь.";
    }


    if (q.includes("2+2")) {
        return "2+2 = 4 ✅";
    }


    if (q.includes("спасибо")) {
        return "Пожалуйста! 😊";
    }


    return "Я пока учусь отвечать на такие вопросы 📚";

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




function saveChat(text) {

    chats.unshift(text);

    chats = chats.slice(0, 10);

    localStorage.setItem("chats", JSON.stringify(chats));

    showHistory();

}




function showHistory() {

    let history = document.getElementById("history");

    history.innerHTML = "";


    chats.forEach(item => {

        history.innerHTML += `
        <div class="history-item">
            ${item}
        </div>
        `;

    });

}


showHistory();
