const { Events } = require("discord.js");

module.exports = {
    name:Events.GuildMemberAdd,
    async execute(guildMember){
        const welcomeRole = guildMember.guild.roles.cache.find(role=>role.name.toLowerCase() === "студент")
        guildMember.roles.add(welcomeRole)
    }
}
