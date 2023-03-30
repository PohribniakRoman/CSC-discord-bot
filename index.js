require("dotenv").config();
const { Client, GatewayIntentBits, Collection, Partials, Events } = require("discord.js");
const fs = require("fs");

const { TOKEN } = process.env;

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildVoiceStates
  ],
  partials: [Partials.Message, Partials.Channel, Partials.Reaction],
});

client.commands = new Collection();
client.commandArray = [];

const handlerFiles = fs.readdirSync("./src/handlers");
for (const file of handlerFiles) {
  require(`./src/handlers/${file}`)(client);
}

// client.on("voiceStateUpdate",async (oldState,newState)=>{
//   const user =await client.users.fetch(newState.id);
//   console.log();
//   console.log(user);
//   const member = newState.guild.member(user);
//   if(!oldState && newState.channel.id === "1090935205587587213"){
//     const channel = await newState.guild.channels.create
//     voiceCollection.set(user.id,channel.id);
//   }else if(!newState.channel){
//     if(oldState.channel === voiceCollection.get(newState.id))return oldState.channel.delete();
//   }
// })

client.handleEvents();
client.handleCommands();
client.login(TOKEN);
