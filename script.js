function askAI() {
    let question = document.getElementById("question").value.toLowerCase();
    let answer = "";

    if (question.includes("привет")) {
        answer = "Привет! 👋 Я твой AI помощник.";
    } 
    else if (question.includes("кто ты")) {
        answer = "Я простой AI, которого ты создаёшь.";
    }
    else if (question.includes("2+2")) {
        answer = "2+2 = 4 ✅";
    }
    else if (question.includes("как дела")) {
        answer = "У меня всё отлично 🤖";
    }
    else {
        answer = "Я пока не знаю этот вопрос, но я учусь 🚀";
    }

    document.getElementById("box").innerHTML = answer;
}
