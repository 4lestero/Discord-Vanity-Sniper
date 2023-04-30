const request = require('request');
const { Client } = require('discord.js-selfbot-v13');
const Alestero = new Client({ checkUpdate: false });

Alestero.config = {
    "Token": "ODU1ODY0NzI3NDM5NDA5MTY0.Gq-RLT.Albn-tS84nOiGH5J27Oehr73Ua5rn8S2YQyFpE",
    "Server": "1091290846437064755",
    "Url": "justicekingdom",
};

Alestero.on("ready", async() => {
  console.log( "(" + Alestero.guilds.cache.get(Alestero.config.Server).name + ") " + Alestero.user.tag + " Giriş yaptı");
  spam();
});

Alestero.on("guildUpdate", async (oldGuild, newGuild) => {
  if(newGuild.vanityURLCode !== oldGuild.vanityURLCode && oldGuild.vanityURLCode === Alestero.config.Url &&  newGuild.vanityURLCode !== Alestero.config.Url) {
    console.log(Date.now());
    spam();
  };
});

async function spam() {
  if(Alestero.guilds.cache.get(Alestero.config.Server).vanityURLCode === Alestero.config.Url) return;    
  console.log("denendi")
  const vuramk = {
    url: `https://discord.com/api/v8/guilds/${Alestero.config.Server}/vanity-url`,
    body: {
      code: `${Alestero.config.Url}`
    },
    json: true,
    method: 'PATCH',
    headers: {
      "Authorization": `${Alestero.config.Token}`
    }
  };
  request(vuramk, (err, res, body) => {
    if (err) {
        console.log(vuramk)
      console.log(err);
      return;
    }
    console.log(Date.now());
    if(Alestero.guilds.cache.get(Alestero.config.Server).vanityURLCode === Alestero.config.Url) {
      console.log("Url Alındı!");
     
    }
  });
}

Alestero.login(Alestero.config.Token);
