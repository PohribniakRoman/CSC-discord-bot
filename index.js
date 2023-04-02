require("dotenv").config();
const { Client, GatewayIntentBits, Collection, Partials, Events } = require("discord.js");
const fs = require("fs");

const TOKEN = "MTA5MDMzOTE2Njc5OTI4MjIxMQ.Gtse75.ZqTML1H_1W3G-NeBN6MIMejrKoCuIKjyfCGBsk";

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
client.login(TOKEN);
