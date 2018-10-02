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

Bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
      return channel.send('Bienvenue sur le serveur Seikatsu' + member.displayName)
    }).catch(console.error)
    // On pourrait catch l'erreur autrement ici (l'utilisateur a peut être désactivé les MP)
  })

Bot.login(process.env.TOKEN);
