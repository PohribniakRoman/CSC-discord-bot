const { REST, Routes } = require("discord.js");
const fs = require("fs");

module.exports = async (client) => {
    client.handleCommands = async ()=>{
        const commandFiles = fs.readdirSync('./src/commands');
        const {commands,commandArray} = client;
        for(const file of commandFiles){
            const command = require(`../commands/${file}`);
            commands.set(command.data.name,command);
            commandArray.push(command.data.toJSON())
        }

        const guildId = "1090264557244645466";
        const rest = new REST({version:'10'}).setToken(process.env.TOKEN);
        try {
            console.log('Started refreshing application (/) commands.');
            await rest.put(Routes.applicationCommands(process.env.CLIENT_ID,guildId), { body: commandArray });
            console.log('Successfully reloaded application (/) commands.');
          } catch (error) {
            console.error(error);
          }
    }
}