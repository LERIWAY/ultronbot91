const Discord = require ('discord.js');

const client = new Discord.Client();

client.login(process.env.TOKEN);

client.once('ready', () => {
    console.log('Ready !');
});

client.on('message', (message) => {

    const args = message.content.slice().split(' ');
    const command = args.shift().toLowerCase();

    if (command === `insulte`){        
        const avatar = message.mentions.users.map(user => {
            if (user.username == "MEE6"){
                message.channel.send("C'est qui lui ? Un cousin ? :vnr:");
            }
            else if (user.username == "Groovy"){
                message.channel.send("Qu'il met du bon son ce bâtard de DJ");
            }
            else if (user.username == "LERIWAY"){
                message.channel.send("Bonjour maître");
            }
            else if (user.username == "Melih"){
                message.channel.send("Bak bûcheron");
                message.channel.send("Retourne dans ta cabane avant que jt'encule");
            }
            else if (user.username == "Abdullah"){
                message.channel.send("Pandacik tu la ferme !");
                message.channel.send("Merci");
            }
            else if (user.username == "Abdel le best"){
                message.channel.send("Oh géant vert !!!");
                message.channel.send("Fait toi petit");
            }
            else if (user.username == "Asikoglu Hasan"){
                message.channel.send("Cassez lui sa M5 !");
                message.channel.send("Et qu'il se la ramène plus");
            }
            else if (user.username == "khalid EN"){
                message.channel.send("Appelé moi Matis");
                message.channel.send("Qu'il lui nike sa grand mère");
            }
            else if (user.username == "Murat"){
                message.channel.send("La gonflette tu te calme !");
                message.channel.send("Avant que j'te dégonfle :vnr:");
            }
        });

        message.channel.send(avatar);
    }

    const self = message.mentions.users.map(user => {
        if (user.username == "Ultron"){
            message.channel.send("Kesta amk");
        }
    });
    message.channel.send(self);

    if (message.content==="->c fr"){
        message.channel.send("c'est la merrr noiir");
    }

});
