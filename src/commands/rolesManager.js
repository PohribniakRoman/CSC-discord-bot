const {SlashCommandBuilder, Embed} = require("discord.js");
const SERVER_DATA = require("../SERVER_DATA");


module.exports = {
    data:new SlashCommandBuilder().setName("create-role-manager").setDescription("configurate user roles."),
    async execute(interaction,client){  
        const title = "Привіт!";
        const description = "Обери свою спеціальність та натисни на необхідну реакцію під цим повідомленням";
        const fields=[
            { name: "113", value: `${interaction.guild.emojis.cache.find(emoji => emoji.name === '113')}\t-\tПрикладна математика` },
            { name: "121", value:`${interaction.guild.emojis.cache.find(emoji => emoji.name === '121')}\t-\tІнженерія програмного забезпечення` },
            { name: "122", value:`${interaction.guild.emojis.cache.find(emoji => emoji.name === '122')}\t-\tКомп'ютерні науки` },
            { name: "124", value:`${interaction.guild.emojis.cache.find(emoji => emoji.name === '124')}\t-\tСистемний аналіз` }] 
        const footer = {
            text:`Раді бачити тебе тут!`,
            icon_url:"https://scontent.fdnk3-2.fna.fbcdn.net/v/t39.30808-6/298428573_513910303870458_8762761012613065550_n.png?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=eB5STRd_GqsAX_NMH7o&_nc_ht=scontent.fdnk3-2.fna&oh=00_AfBA0JJZG3K6Hg0AXQf7Chprp8ZWEyBcC2zPqfoH4bOQHA&oe=64323AD0"
        }
        const thumbnail = {
            url:"https://scontent.fdnk3-2.fna.fbcdn.net/v/t39.30808-6/298428573_513910303870458_8762761012613065550_n.png?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=eB5STRd_GqsAX_NMH7o&_nc_ht=scontent.fdnk3-2.fna&oh=00_AfBA0JJZG3K6Hg0AXQf7Chprp8ZWEyBcC2zPqfoH4bOQHA&oe=64323AD0",
            width:150,
            height:150,
        }
        const image = {
            url:"https://csc.knu.ua/media/news/4baeba3a-2e49-410f-990d-1aa54ffcfd18.jpg",
            width:900,
            height:150,
        }
        const color = 0x0099FF;
        const textContainer = new Embed({thumbnail,image,title,description,footer,fields,color});
        const message = await interaction.reply({embeds:[textContainer],fetchReply:true})
        SERVER_DATA.bindRole = message.id;
        const reactions = SERVER_DATA.roleEmoji;
        for(const reaction in reactions){
            message.react(reactions[reaction]); 
        }
    }
}