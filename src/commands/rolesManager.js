const {SlashCommandBuilder} = require("discord.js");
const SERVER_DATA = require("../SERVER_DATA");


module.exports = {
    data:new SlashCommandBuilder().setName("create-role-manager").setDescription("configurate user roles."),
    async execute(interaction,client){
        const message = await interaction.reply({
            content:`Choose your way!`,
            fetchReply:true
        })

        const reactions = SERVER_DATA.roleEmoji;
        for(const reaction in reactions){
            message.react(reactions[reaction]);
        }
    }
}