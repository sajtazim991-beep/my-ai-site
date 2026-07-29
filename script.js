
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

let answer = data.answer;


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
