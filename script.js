jokeIndex = 0;

const jokes = [
  ["What did 0 say to 8?", "Nice belt."],
  ["If the internet had a boat, where would they park it?", "In Google Docs."],
  /* ["Why don't scientists trust atoms?", "Because they make up everything!"] */
];

const chatContent = document.querySelector(".chat-content");
const jokeButton = document.getElementById("requestJokeButton");


function appendBotMessage (messageText) {
  const messageDiv = document.createElement("div");
  messageDiv.className = "message bot-message";
  chatContent.appendChild(messageDiv);

  const avatar = document.createElement("div");
  avatar.className = "fas fa-robot message-avatar";
  messageDiv.appendChild(avatar);

  const contentDiv = document.createElement("div");
  contentDiv.className = "message-content";
  contentDiv.textContent = messageText;
  messageDiv.appendChild(contentDiv);
}

appendBotMessage("Hello! I am Comedian Bot, here to make you laugh. Let me think of a joke.");

function appendUserMessage() {
  const messageDiv = document.createElement("div");
  messageDiv.className = "message user-message";
  chatContent.appendChild(messageDiv);

  const avatar = document.createElement("div");
  avatar.className = "fas fa-smile message-avatar";
  messageDiv.appendChild(avatar);

  const contentDiv = document.createElement("div");
  contentDiv.className = "message-content";
  contentDiv.textContent = "Tell me a joke!";
  messageDiv.appendChild(contentDiv);
}

function requestJoke() {

  appendUserMessage();

  if (jokeIndex >= jokes.length) {
    appendBotMessage("Sorry, I'm out of jokes for now!");
    return;
  }

  jokeButton.style.display = "none";

  setTimeout(function () {
    appendBotMessage("Ok, got one.");
  }, 1000);

  setTimeout(function () {
    appendBotMessage(jokes[jokeIndex][0]);
  }, 1500);

  setTimeout(function () {
    appendBotMessage(jokes[jokeIndex][1]);
    jokeIndex++;
    jokeButton.style.display = "inline-block";
  }, 2000);
}

//Look into Font Awesome and replace the bot icon with another one
//Give the bot more options to respond when it runs out of jokes
//Automatically scroll to the bottom of the web page if a new text is added