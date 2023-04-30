const { Client } = require('discord.js-selfbot-v13');
const request = require('request')
const User = new Client({checkUpdate: false});

User.config = {
    "Token": "Self Token",
    "Server": "Url yi alacağınız sunucu",
    "Url": "Almak istediğin url",
};

User.on("ready", async() => {
    console.log( "(" + User.guilds.cache.get(User.config.Server).name + ") " + User.user.tag + " Giriş yaptı");
})
User.on("ready", async() => {
    console.log( "(" + User.guilds.cache.get(User.config.Server).name + ") " + User.user.tag + " Giriş yaptı");
    spam();
})
User.on("guildUpdate", async (oldGuild, newGuild) => {
    if(newGuild.vanityURLCode !== oldGuild.vanityURLCode && oldGuild.vanityURLCode === User.config.Url &&  newGuild.vanityURLCode !== User.config.Url) {
           console.log(Date.now())
 spam();
    };
});

async function spam() {
  if(User.guilds.cache.get(User.config.Server).vanityURLCode === User.config.Url) return;    
  console.log("denendi")
  const vuramk = {
    url: `https://discord.com/api/v8/guilds/${User.config.Server}/vanity-url`,
    body: {
      code: `${User.config.Url}`
    },
    json: true,
    method: 'PATCH',
    headers: {
      "Authorization": `${User.config.Token}`
    }
  };
  request(vuramk, (err, res, body) => {
    if (err) {
      return console.log(err);
    }
  })
         console.log(Date.now())
 if(User.guilds.cache.get(User.config.Server).vanityURLCode === User.config.Url) {
        console.log("Url Alındı!");
        User.config.Users.forEach(Id => {
            User.users.cache.get(Id).send({ content: ` ${User.config.Url} urlsi sunucuya alındı!` }).catch({});
        });
    }
  }
User.login(User.config.Token)
