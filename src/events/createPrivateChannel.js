const { Events, Collection } = require("discord.js");
let voiceIdArr = []; 

module.exports = {
    name:Events.VoiceStateUpdate,
    async execute(oldState,newState){
        const user = await newState.client.users.fetch(newState.id);
        const member = await newState.guild.members.fetch(user);
        const channelName = `${user.tag.split("#")[0]}🔊`;
        if(newState.channelId === "1090935205587587213"){
            const result = voiceIdArr.filter(channel=>channel.id === oldState.channelId && channel.name == channelName);
            if(result.length === 0){
                const channel = await newState.guild.channels.create({name:channelName,type:2,parent:newState.channel.parent})
                voiceIdArr.push({id:channel.id,name:channelName,channel});
                member.voice.setChannel(channel);
            }else{
                member.voice.setChannel(result[0].channel);
            }
        }
        if(oldState.channelId !== null && voiceIdArr.filter(channel=>channel.id === oldState.channelId).length > 0){
            if(oldState.channel.members.toJSON().length === 0){
              oldState.channel.delete();
            }
        }
    }
}
