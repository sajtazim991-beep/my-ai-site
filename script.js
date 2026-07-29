function askAI() {
    let question = document.getElementById("question").value.toLowerCase();
    let answer = "";

    if (question.includes("привет")) {
        answer = "Привет! 👋 Рад тебя видеть.";
    } 
    else if (question.includes("как дела")) {
        answer = "У меня всё хорошо 🤖";
    } 
    else if (question.includes("кто ты")) {
        answer = "Я AI помощник, которого ты создаёшь 🚀";
    } 
    else if (question.includes("2+2")) {
        answer = "2+2 = 4 ✅";
    } 
    else {
        answer = "Я пока не знаю этот вопрос, но учусь 📚";
    }

    document.getElementById("box").innerHTML = answer;
}
    
