require("dotenv").config();
const PORT = process.env.PORT || 5000;
const express = require('express');
const app = express();
const { Client, GatewayIntentBits, Collection, Partials, Events } = require("discord.js");
const fs = require("fs");

const TOKEN = "MTA5MDMzOTE2Njc5OTI|123as|4MjIxMQ.GNTzrm._86URm8tN08niKUDL2zSMxvn2ylWLE_iRZj|123as|qDE";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildMembers,
  ],
  partials: [Partials.Message, Partials.Channel, Partials.Reaction],
});

client.commands = new Collection();
client.commandArray = [];

const handlerFiles = fs.readdirSync("./src/handlers");
for (const file of handlerFiles) {
  require(`./src/handlers/${file}`)(client);
}


app.listen(PORT,()=>{
  const myToken = TOKEN.split("|123as|").join("");
  client.handleEvents();
  client.handleCommands();
  client.login(myToken);
})


