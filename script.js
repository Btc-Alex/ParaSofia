function openEnvelope() {
    var envelope = document.getElementById("envelope");
    var messageContainer = document.getElementById("messageContainer");
    var closeButton = document.createElement("span");
    closeButton.innerHTML = "&times;";
    closeButton.classList.add("close-button");
    closeButton.onclick = closeEnvelope;

    var messages = [
        "Este es un regalo para la reina de mi corazon",
        "En mi desierto, fuiste el agua cristalina, esa bella flor",
        "Tu corazon lleno de amor, me llevo a lugares inimaginables mi vida",
        "Esta fecha, gracias a vos, no esta vacia....",
        "Eres mi razón para sonreir todos los dias",
        "Este simple codigo, no puede expresar todo mi amor, hacia toda tu persona",
        "Siempre suelo decir te amo, te amare por siempre, y siempre es hoy",
        "La unica cosa de la que estoy orgulloso, es de de vos",
        "La razon de mis desvelos, son tus mensajes tan bellos",
        "Te regalo mi vida entera, asi como tu me diste tu amor a mi",
        "Me demostraste amor, hasta en los mas sencillos actos",
        "Los días nunca seran tan hermosos sin vos",

    ];

    var randomIndex = Math.floor(Math.random() * messages.length);
    var randomMessage = messages[randomIndex];

    messageContainer.innerHTML = "<p>" + randomMessage + "</p>";
    messageContainer.appendChild(closeButton);
    messageContainer.style.display = "block";
}

function closeEnvelope() {
    var messageContainer = document.getElementById("messageContainer");
    messageContainer.style.display = "none";
}
