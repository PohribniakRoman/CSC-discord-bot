const {SlashCommandBuilder} = require("discord.js")



module.exports = {
    data:new SlashCommandBuilder().setName("ping").setDescription("pong"),
    async execute(interaction,client){
        const message = await interaction.reply({
            content:`Choose your way!`,
            fetchReply:true
        })
        message.react("💻")
    }
}