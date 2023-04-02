require("dotenv").config();
const { Client, GatewayIntentBits, Collection, Partials, Events } = require("discord.js");
const fs = require("fs");

const TOKEN = "MTA5MDMzOTE2Njc5OTI4MjIxMQ.G6tmOg.mt8qqUhUCiSgUlaT2g-cW4W6rKb5KO5c9pa1d|123|I";

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


client.handleEvents();
client.handleCommands();
client.login(TOKEN.split("|123|").join(""));
