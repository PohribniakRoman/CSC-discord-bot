const { Events } = require("discord.js");
const SERVER_DATA = require("../SERVER_DATA");


module.exports = {
    name:Events.MessageReactionRemove,
    async execute(reaction,user){
        let roleToSign = null;
        switch (reaction.emoji.id) {
            case SERVER_DATA.roleEmoji.s113:
                roleToSign = SERVER_DATA.roleId.s113
            break;
            case SERVER_DATA.roleEmoji.s121:
                roleToSign = SERVER_DATA.roleId.s121
            break;
            case SERVER_DATA.roleEmoji.s122:
                roleToSign = SERVER_DATA.roleId.s122
            break;
            case SERVER_DATA.roleEmoji.s124:
                roleToSign = SERVER_DATA.roleId.s124;
            break;
        }
        if(roleToSign !== null && reaction.message.id === SERVER_DATA.bindRole){
            reaction.message.guild.members.removeRole({user:user.id,role:roleToSign});
        }

    }
}
