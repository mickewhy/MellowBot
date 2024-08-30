require('dotenv').config()
const Discord = require('discord.js')
const { Client, Intents } = require('discord.js')
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_PRESENCES,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_MESSAGE_TYPING,
        Intents.FLAGS.DIRECT_MESSAGES,
        Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
        Intents.FLAGS.DIRECT_MESSAGE_TYPING,
    ],
    partials: ['MESSAGE', 'CHANNEL', 'REACTION']
})
const prefix = 'mb '
var tempPassword = generatePassword(5)

function generatePassword(length) {
    var result = ''
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++)
        result += characters.charAt(Math.floor(Math.random() * characters.length))
    return result
}

function shufflePassword() {
    tempPassword = generatePassword(5)
    let embed = new Discord.MessageEmbed().setDescription("**Welcome!**\n`🦨`︵Please type the password to gain access to the rest of the server\n\n" + "`🦨`︵The password is " + tempPassword)
        .setTitle("╭━━━━━━━  VERIFICATION ━━━━━━━╮").setColor(16777215)
    client.channels.cache.get('985805326773260298').messages.fetch('985805819142631515').then(msg => { msg.edit({ embeds: [embed] }) })
}

client.on('ready', async () => {
    console.log(`${client.user.tag} is running!`)
    client.user.setPresence({ activities: [{ type: 'WATCHING', name: 'youtube.com/channel_name' }], status: 'dnd' })
    try {
        shufflePassword()
        setInterval(function () { shufflePassword() }, 1000 * 60 * 2.5) //repeats every 2.5 minutes
    }
    catch (error) { console.log(error) }
})

client.on('messageCreate', async message => {
    if (message.channel.id == 985805326773260298 && message.content == tempPassword) // VERIFICATION
        message.delete().then(message.member.roles.add('868278542486614076'))


    if (message.content.toLowerCase().startsWith(prefix) && !message.author.bot) {
        const args = message.content.slice(prefix.length).split(/ +/)
        const command = args.shift().toLowerCase()

        if (command === 'echo' && message.member.permissions.has("ADMINISTRATOR")) {
            argstoend = args[0]
            for (i = 1; i < args.length; i++)
                argstoend = argstoend + " " + args[i]
            message.delete().then(message.channel.send(argstoend))
        }

        if (command === 'testembed' && message.member.permissions.has("ADMINISTRATOR")) {
            let embed = new Discord.MessageEmbed().setDescription("**Welcome!**\n`🦨`︵Please type the password to gain access to the rest of the server\n\n" + "`🦨`︵The password is " + tempPassword)
                .setTitle("╭━━━━━━━  VERIFICATION ━━━━━━━╮").setColor(16777215)
            message.delete().then(message.channel.send({ embeds: [embed] }))
        }
    }
})

client.login(process.env.token)