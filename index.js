require("dotenv").config();
const { Client, GatewayIntentBits, Collection } = require("discord.js");
const fs = require("fs");

const {TOKEN} = process.env;

const client = new Client({intents:GatewayIntentBits.Guilds})

client.commands = new Collection();
client.commandArray = [];

const handlerFiles = fs.readdirSync('./src/handlers');
for(const file of handlerFiles){
  require(`./src/handlers/${file}`)(client);
}

client.handleEvents();
client.handleCommands();
client.login(TOKEN);