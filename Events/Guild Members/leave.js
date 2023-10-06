const { Events, Client } = require("discord.js");
module.exports = {
    name: Events.GuildMemberRemove,
    once: false,
    async execute (member) {
        const channelID = "1089639440944734229"
        const message = `${member} just left the server!`;
        const channel = member.guild.channels.cache.get(channelID);
        channel.send(message)
    }};