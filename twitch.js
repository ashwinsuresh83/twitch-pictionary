const form = document.querySelector('#searchChannel');
form.addEventListener('submit', async function(e){
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = {params: {q:searchTerm}
    }
const { ChatClient } = require("dank-twitch-irc");

let client = new ChatClient();

client.on("ready", () => console.log("Successfully connected to chat"));
client.on("close", (error) => {
  if (error != null) {
    console.error("Client closed due to error", error);
  }
});

client.on("PRIVMSG", (msg) => {
    document.body.append(`[#${msg.channelName}] ${msg.displayName}: ${msg.messageText}`);
});

client.connect();
client.join(config);

})