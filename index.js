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

'use strict';

const utils = require('../../framework/utils');

module.exports = {
  name: 'join',
  category: 'voice',
  aliases: ['join', 'j'],
  optArgs: [],
  reqArgs: [],
  permissions: [],
  description: (locale) => { return locale['voice']['join']; },
  executeCommand: async (args) => {
    let joinLocale = args.locale['voice']['join'];

    //Find author's voice channel
    let channel = args.message.member.voiceChannel;

    if (channel) {
      await args.message.channel.send(utils.getRichEmbed(args.client, 0x0affda, joinLocale.title, utils.replace(joinLocale.content, channel.name)));
      try {
        await channel.join();
      } catch (reason) {
        args.message.channel.send(utils.getRichEmbed(args.client, 0xff0000, joinLocale.title, utils.replace(joinLocale['errors']['failed'], channel.name)));
        return (`Error connecting to voice channel: ${reason}`);
      }

      return `Successfully connected to voice channel: ${channel.name} (id: ${channel.id})`;
    } else {
      await args.message.channel.send(utils.getRichEmbed(args.client, 0xff0000, joinLocale.title, joinLocale['errors'].noChannel));
      return 'no channel';

    }
  }
}
Bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
      return channel.send('Bienvenue sur le serveur ' + member.displayName)
    }).catch(console.error)
    // On pourrait catch l'erreur autrement ici (l'utilisateur a peut être désactivé les MP)
  })

Bot.login(process.env.TOKEN);
