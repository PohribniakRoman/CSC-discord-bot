const {SlashCommandBuilder} = require("discord.js")

const ROLES = {
    pm:'1090315383187189940',
    pi:"1090315390271373332",
    kn:"1090315394163691631",
    sa:"1090315396244058194"
}

module.exports = {
    data:new SlashCommandBuilder().setName("create-role-manager").setDescription("configurate user roles."),
    async execute(interaction,client){
        const message = await interaction.reply({
            content:`Choose your way!`,
            fetchReply:true
        })
        message.react("💻")
    }
}