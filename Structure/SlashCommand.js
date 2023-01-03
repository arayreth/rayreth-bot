const { REST } = require('@discordjs/rest');
const { Routes } = require("discord-api-types/v9")
const { SlashCommandBuilder } = require("@discordjs/builders");
const { token } = require('../config');

module.exports = async(bot) => {
      
    const commands = [
        
        // Ping
        new SlashCommandBuilder()
        .setName("ping")
        .setDescription('Permet de connaitre la latence du bot'),
    ]

    const rest = new REST({ version: '10' }).setToken(token);
      
    bot.guilds.cache.forEach(async guild => {
        await rest.put(Routes.applicationGuildCommands(bot.user.id, guild.id), { body: commands });

    })

    console.log("Les slash commandes ont étés crées avec succès")
 
}