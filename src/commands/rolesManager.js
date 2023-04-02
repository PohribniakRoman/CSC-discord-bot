const {SlashCommandBuilder, Embed} = require("discord.js");
const SERVER_DATA = require("../SERVER_DATA");


module.exports = {
    data:new SlashCommandBuilder().setName("create-role-manager").setDescription("configurate user roles."),
    async execute(interaction,client){  
        const title = "Привіт!";
        const description = "Обери свою спеціальність та натисни на необхідну реакцію під цим повідомленням";
        const fields=[
            { name: "113", value: `${SERVER_DATA.roleEmoji.s113}\t-\tПрикладна математика` },
            { name: "121", value:`${SERVER_DATA.roleEmoji.s121}\t-\tІнженерія програмного забезпечення` },
            { name: "122", value:`${SERVER_DATA.roleEmoji.s122}\t-\tКомп'ютерні науки` },
            { name: "124", value:`${SERVER_DATA.roleEmoji.s124}\t-\tСистемний аналіз` }] 
        const footer = {
            text:`Раді бачити тебе тут!`,
            icon_url:"https://cdn4.telegram-cdn.org/file/sj2F8bujRXY1Jw_zV45B02uZ30wVXASpwFxvq2rA_eFsT8H5AVTmidvrFfh-nMlPOMO_T4zshTZeXBcxP8r8ICaTazInvMe97rtzOjirR5UqvJRHgTSSl2lO-2GZFgKsRBm1v5gHf-ALVn1FJCZDN7mcp1Sx0KH7ZioKfRyMxCZFrbfunlYYnpD1qQ1Zy2HnmAwcQSL8WqEC0b5pDOgT3QgP4COi_aCPBFy5W8sfYCMdnTu-3Pncc3RpKgkXlqA42ZwWFtvdXgd1asZEXuwhLppZwhBTPM5_kA3oS7PxCBEvvApIKU38WFZXL_LtilVckcFg8t5GP55WHPUmV3pqxw.jpg"
        }
        const thumbnail = {
            url:footer.icon_url,
            width:100,
            height:100,
        }
        const image = {
            url:"https://t4.ftcdn.net/jpg/03/64/94/67/360_F_364946785_HU0G0WLRpd9SjBxecLAy7En93HmdxbL5.jpg",
            width:600,
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