// Enviar mensaje a la app nativa
document.getElementById("sendToApp").addEventListener("click", () => {
    const inputField = document.getElementById("inputMessage");
    const message = inputField.value.trim();

    if (!message) {
        alert("Por favor, escribe un mensaje antes de enviarlo.");
        return;
    }

    // Enviar mensaje a la app usando AndroidBridge
    if (typeof AndroidBridge !== "undefined") {
        AndroidBridge.handleMessage(message);
        // Mostrar el mensaje enviado
        const sentContainer = document.getElementById("sentMessagesContainer");
        const sentMessageElement = document.createElement("p");
        sentMessageElement.textContent = `Mensaje enviado: ${message}`;
        sentContainer.appendChild(sentMessageElement);

        // Limpiar el campo de entrada
        inputField.value = "";
    } else {
        console.warn("AndroidBridge no está disponible");
    }
});

// Escuchar mensajes desde la app nativa
window.addEventListener("message", (event) => {
    console.log("Mensaje recibido de la app:", event.data);
    alert("Mensaje llegado",event.data)
    // Mostrar el mensaje recibido
    const receivedContainer = document.getElementById("receivedMessagesContainer");
    const receivedMessageElement = document.createElement("p");
    receivedMessageElement.textContent = `Mensaje de la app:`;
    receivedContainer.appendChild(receivedMessageElement);

});