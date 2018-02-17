const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
console.log("Discord Bot By Ahmed");
  console.log('Ahmed')
  console.log('Ahmed')
  console.log('Ahmed')
  console.log('Ahmed')
  console.log('Ahmed')


});

client.on("guildMemberAdd", member => {
  member.createDM().then(function (author) {
  return author.send('رابط السيرفر  سيرفر فيه اكثرمن ١٥ الف عضو بسبب الالعاب الحلوه المختلفة اللي فية ، افكار مجنونة وبوتات على مستوى الابداع خورافيـة! اكثر من ١٢ لعبة مختلفة ، شيء جميل جدا جدا لايفوتك ، وهذا مجرد مثال    https://discord.gg/gfPkDxQ')

}).catch(console.error)
})
client.on("guildMemberAdd", member => {
    member.createDM().then(function (author) {
    return author.send('https://cdn.discordapp.com/attachments/407592632286445570/414151307511726080/image-6.jpg')
  
  }).catch(console.error)
  })
  client.on("guildMemberAdd", member => {
    member.createDM().then(function (author) {
    return author.send('https://cdn.discordapp.com/attachments/407592632286445570/414151347445956609/image-2.png')
  
  }).catch(console.error)
  })
  client.on("guildMemberAdd", member => {
    member.createDM().then(function (author) {
    return author.send('https://cdn.discordapp.com/attachments/407592632286445570/414151462399246336/image-4.jpg')
  
  }).catch(console.error)
  })

client.login("NDE0Mzk2MDYzMTg1ODk1NDM2.DWnQaA.QfiNHrbHuX1XbHYnP00s9qiy4HI");
