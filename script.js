function askAI() {
    let question = document.getElementById("question").value;

    if(question == "") {
        document.getElementById("box").innerHTML =
        "Напиши сначала вопрос 🙂";
    } else {
        document.getElementById("box").innerHTML =
        "Ты спросил: " + question + "<br><br>🤖 Я пока учусь отвечать!";
    }
}
