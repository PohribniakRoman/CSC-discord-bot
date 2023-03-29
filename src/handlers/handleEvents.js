const fs = require("fs");

module.exports = async (client) => {
    client.handleEvents = async()=>{
        const eventFiles = fs.readdirSync('./src/events');
        for(const file of eventFiles){
            const event = require(`../events/${file}`)
            if(event.once) client.once(event.name,(...args)=> event.execute(...args,client));
            else client.on(event.name,(...args) => event.execute(...args,client))
        }
    }
}