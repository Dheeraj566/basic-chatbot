document.getElementById('sendBtn').addEventListener('click', sendMessage);
document.getElementById('userInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const userInput = document.getElementById('userInput').value.trim();
    if (userInput === '') return;

    // Display user's message
    displayMessage(userInput, 'user-message');

    // Respond with bot's message after a delay
    setTimeout(function() {
        const botResponse = getBotResponse(userInput);
        displayMessage(botResponse, 'bot-message');
    }, 1000);

    // Clear the input field
    document.getElementById('userInput').value = '';
}

function displayMessage(message, className) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', className);
    messageElement.textContent = message;

    // Add the message to the chat box
    document.getElementById('chatBox').appendChild(messageElement);

    // Scroll to the bottom of the chat box
    document.getElementById('chatBox').scrollTop = document.getElementById('chatBox').scrollHeight;
}

function getBotResponse(userMessage) {
    const responses = {
        'hi': 'Hello! How can I help you today?',
        'hello': 'Hey there! How can I assist you?',
        'how are you': 'I\'m just a bot, but I\'m doing great! How about you?',
        'bye': 'Goodbye! Have a great day!',
        '2+2':'4',
    };

    // Convert the message to lowercase for simple matching
    userMessage = userMessage.toLowerCase();

    // Default response if message is not recognized
    return responses[userMessage] || "I'm sorry, I didn't understand that. Can you try again?";
}
