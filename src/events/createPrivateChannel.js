const { Events, Collection } = require("discord.js");
const voiceCollection = new Collection();

module.exports = {
    name:Events.VoiceStateUpdate,
    async execute(oldState,newState){
        const user = await newState.client.users.fetch(newState.id);
        const member = await newState.guild.members.fetch(user);
        if(newState.channel.id === "1090935205587587213"){
          const channel = await newState.guild.channels.create({name:`${user.tag} room`,type:2,parent:newState.channel.parent})
            
          member.voice.setChannel(channel);
          voiceCollection.set(user.id,channel.id);
        }else if(!newState.channel){
            if(oldState?.channel?.id === voiceCollection.get(newState.id))return oldState.channel.delete();
        }
        if(oldState?.channel?.name ===`${user.tag} room`)return oldState.channel.delete();
    }
}
