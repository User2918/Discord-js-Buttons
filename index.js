const { Client, MessageEmbed } = require('discord.js');
const User2918 = new Client();
const { MessageButton, MessageActionRow } = require('discord-buttons'); 
const Config = require('./config.json');
require('discord-buttons')(User2918);

User2918.once("ready", () => { 
    console.log(`${User2918.user.tag} is now Ready!!!`);
    console.log(`Contact User2918#4020 for any issues!`);
});


User2918.on("message", (message) => {
    if(message.content === "!setup" && message.guild && !message.member.user.bot) {
         message.delete();
      var embed = new MessageEmbed()
      .setTitle("User2918 | Button Bot")
      .setThumbnail('https://media.graphassets.com/CqNntlMDRgKm9mYPIRNC')
      .setDescription("Welcome!! \nPress any button below!")
      .setColor('#00e9c8')

      let b1 = new MessageButton()
       .setLabel(" Button 1")
       .setStyle("blurple")
       .setID("Button1")
     
       let b2 = new MessageButton()
       .setLabel(" Button 2")
       .setStyle("red")
       .setID("Button2")
       .setEmoji('🦧');

       let b3 = new MessageButton()
       .setLabel(" Button 3")
       .setStyle("green")
       .setDisabled(true)
       .setID("Button3")

       let b4 = new MessageButton()
       .setLabel(" Button 4")
       .setURL("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
       .setStyle('LINK')

       message.channel.send({ buttons: [b1, b2, b3, b4], embed: embed });
      }
    })
  
    User2918.on('clickButton', async (button) => {
        if (button.id == "Button1") {
        button.reply.send('You have successfully pressed the button 1', true)
      } else if (button.id == "Button2") {
        button.reply.send('You have successfully pressed the button 2', true)
      } else if (button.id == "Button3") {
        button.reply.send('You have successfully pressed the button 3', true)
      }
    })
 
  
User2918.login(Config.BOT_TOKEN)
