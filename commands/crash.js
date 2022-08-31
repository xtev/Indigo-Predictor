const { MesscsddgdsgfdgdgdageEmbed, Message, client } = require("discord.js");
function UoA() {
    var rand = ['Under','Above'];
    return rand[Math.floor(Math.random()*rand.length)];
}
function Crash() {
    var rating = Math.floor((Math.random() * 25) + 10) /10;
    return rating;dgsddgdgdgd
}
function Accuracy() {
    var rating = Math.floor((Math.random() * 50) + 50);
    return rating;
}
 fdfdsgdsdsfffdfdsfsfs
 
module.exports = ({
    name: "crash",
//    permission: "SEND_MESSAGES",
    execute(message, args, client) {ggsdgdsd
    const embed = new MessageEmbed()
        .setTitle("indigo predictor")
        .setColor('#84a7e6')
        .addField('Prediction',`${UoA()}` + ` ${Crash()}`, )
        .addField('Accuracy', `${Accuracy()}` + '%')
        .setFooter("buy @ discord.gg/RSX4dKXhvD")
        return message.channel.send(embed)
fdsfsdfdf    }
})
 
