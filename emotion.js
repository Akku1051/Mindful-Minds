const chatLog = document.getElementById("chat-log");
const userInput = document.getElementById("user-input");

function appendMessage(message, isUser = false) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add(isUser ? "user-message" : "bot-message");
    messageDiv.innerText = message;
    chatLog.appendChild(messageDiv);
}

function appendQuote(quote) {
    const quoteDiv = document.createElement("div");
    quoteDiv.classList.add("quote");
    quoteDiv.innerText = quote;
    chatLog.appendChild(quoteDiv);
}

function getRandomResponse(responses) {
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
}

function handleUserInput(userMessage) {
    const positiveKeywords = ["happy", "good", "joy", "excited"];
    const negativeKeywords = ["sad", "bad", "depressed", "unhappy"];

    const randomQuote = getRandomResponse(famousQuotes);

    let botResponse = "";

    for (const keyword of positiveKeywords) {
        if (userMessage.includes(keyword)) {
            botResponse = getRandomResponse(positiveResponses);
            break; 
        }
    }

    for (const keyword of negativeKeywords) {
        if (userMessage.includes(keyword)) {
            botResponse = getRandomResponse(negativeResponses);
            break; 
        }
    }

  
    if (!botResponse) {
        botResponse = getRandomResponse(neutralResponses);
    }

    botResponse += `\nHere's a quote for you:\n${randomQuote}`;

    appendMessage(`You: ${userMessage}`, true);
    appendMessage(`Emotional Support: ${botResponse}`);
}

userInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        const userMessage = userInput.value;
        handleUserInput(userMessage);
        userInput.value = "";
    }
});

const positiveResponses = [
    "I'm here to listen. How are you feeling?",
    "It's great that you reached out. Can you share more about what's on your mind?",
    "You're not alone. Emotional Support is here to provide support.",
    "I'm glad that you are feeling well and happy"
];

const neutralResponses = [
    "I see. Please know that it's okay to feel this way.",
    "It's natural to experience ups and downs in life. How can Emotional Support assist you further?",
    "I'm not sure I fully understand, could you try again?"
];

const negativeResponses = [
    "I'm really sorry to hear that you're feeling this way. you can tell me more.",
    "I'm here to help. Please share what's troubling you.",
    "Remember that you don't have to go through this alone. Emotional Support is here to listen.",
    "I am deeply sorry you are experiencing that, I want you to know I will always be here for you.",
    "Hard times create good times, keep persevering my friend.",
    "Hard times are harder when your alone, you should reach out to a friend or family member if you are unwell"
];

const famousQuotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "In the middle of every difficulty lies opportunity. - Albert Einstein",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Remember diamonds are built under pressure, good times will come soon.",
    "A winner is a dreamer who never gives up. ― Nelson Mandela.",
    "Our greatest glory is not in never falling, but in rising every time we fall - Confucius",
    "Life is what happens when you're busy making other plans. — John Lennon",
];

    let botResponse = "";
    if (userMessage.includes("happy") || userMessage.includes("good")) {
        botResponse = getRandomResponse(positiveResponses);
    } else if (userMessage.includes("sad") || userMessage.includes("bad")) {
        botResponse = getRandomResponse(negativeResponses);
    } else {
        botResponse = getRandomResponse(neutralResponses);
    }

    const randomQuote = getRandomResponse(famousQuotes);
    botResponse += `\n 
    
    Here's a quote for you:\n${randomQuote}`;

    appendMessage(`You: ${userMessage}`, true);
    appendMessage(`Emotional Support: ${botResponse}`);
   


userInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        const userMessage = userInput.value;
        handleUserInput(userMessage);
        userInput.value = "";
    }
});

appendMessage("Welcome to Emotional Support. How can I assist you?");

function back() {
    window.location = "index.html";
    console.log("returned to home page");
}

