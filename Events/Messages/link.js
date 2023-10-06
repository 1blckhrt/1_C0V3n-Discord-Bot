const { Events } = require("discord.js");

module.exports = {
    name: Events.MessageCreate,
    once: false,
    async execute(message) {
        const roles = ["1087337107560865844", "1086290884099846194", "1051602870367170611"];

        if (message.channel.id === "1051601562746753087" ) {
        if (
            message.content.includes("https://soundcloud.com") ||
            message.content.includes("https://on.soundcloud.com") ||
            message.content.includes("https://open.spotify.com") ||
            message.content.includes("https://music.apple.com") ||
            message.content.includes("https://www.youtube.com") ||
            message.content.includes("discord.gg") ||
            message.content.includes(" https://soundcloud.com ") ||
            message.content.includes(" https://on.soundcloud.com ") ||
            message.content.includes(" https://open.spotify.com ") ||
            message.content.includes(" https://music.apple.com ") ||
            message.content.includes(" https://www.youtube.com ") ||
            message.content.includes(" discord.gg ")
        ) {

            if (roles.some(role => message.member.roles.cache.get(role))) return;
            else {
                try {
                    console.log(message.content);
                    await message.channel.send({
                        content: `${message.author}, you can't send music links or server invites here! Please wait one week since joining the server to be able to post links in the promo channel!`,
                    });

                    await message.delete(message.id);
                } catch (error) {
                    console.error("Error deleting message:", error);
                }
            }
        }
    }}};