const axios = require('axios');
const input = require('input');

(async () => {
    console.log('Hoşgeldiniz!\nGithub: github.com/fastuptime\nAPI: herc-ai\n\n');
    let username = await input.text('Adınız: ');
    if(!username) username = 'Kullanıcı';
    console.clear();
    while (true) {
        let q = await input.text('Soru: ');
        console.log('Cevap: ' + (await axios.get(`https://herc-ai.onrender.com/v2/hercai?question=${encodeURIComponent(q)}`)).data.reply.replaceAll('@User', username).replaceAll('Alexander Aranas', username));
    }
})();