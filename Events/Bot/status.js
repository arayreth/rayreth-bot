const Discord = require("discord.js")
const Event = require('../../Structure/Event')
const SlashCommand = require("../../Structure/SlashCommand");

module.exports = new Event("ready", async bot => {

    console.log(`${bot.user.username} : En ligne sur ${bot.guilds.cache.size} serveur(s)`)
    
    bot.user.setStatus("online")

    const activities = "On dev"

    bot.user.setActivity(activities, { type: 3})

    await SlashCommand(bot)
})