const Discord = require('discord.js');

var Bot = new Discord.Client();
var prefix = ("$");

Bot.on('ready', () => {
    Bot.user.setPresence({game: {name : '$info'}})
    console.log("Bot Prêt !");
});



Bot.on('message', message => {
    if (message.content === "bonjour"){
        message.reply("Bonjour a Toi!");
        console.log('bonjour Bonjour a Toi!');
    }

    if (message.content === prefix + "info"){
        message.channel.sendMessage("Se Bot n'est la que pour souhaiter le bienvenu sur le serveur.");
        console.log("Commande Help demandée !");
    }

});
Bot.login(process.env.TOKEN);
