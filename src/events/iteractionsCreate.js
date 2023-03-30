
module.exports = {
    name:"interactionCreate",
    async execute(interaction,client){
        if(interaction.isChatInputCommand()){
            const {commands} = client;
            const command = commands.get(interaction.commandName);
            if(!command) return;
            try{
                await command.execute(interaction,client);
            }catch(err){
                throw err;
            }
        }
    }
}