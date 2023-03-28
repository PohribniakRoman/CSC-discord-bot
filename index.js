import { config } from 'dotenv';
config();
import { ActionRowBuilder, ButtonBuilder, ButtonStyle, Client, Events, GatewayIntentBits, Routes } from 'discord.js';
import { REST } from '@discordjs/rest';

const TOKEN = process.env.TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.login(TOKEN);

const rest = new REST({ version: '10' }).setToken(TOKEN);

const commands = [];

const ROLES = {
    pm:'1090315383187189940',
    pi:"1090315390271373332",
    kn:"1090315394163691631",
    sa:"1090315396244058194"
}

client.on('ready', async () => {
    const channel = client.channels.cache.get('1090314115072929943');
    channel.send({
        content:"HI!",
        components:[
            new ActionRowBuilder().setComponents(
                new ButtonBuilder().setCustomId("pm").setLabel("113 pm").setStyle(ButtonStyle.Danger)
            )
        ]
    })
   
});

client.on(Events.InteractionCreate,async interactions => {
    if(interactions.isButton()){
       return interactions.member.roles.add(ROLES.pm);
    }
})


async function bootstrap() {
  try {
    await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });
  } catch (err) {
    console.log(err);
  }
}

bootstrap();
