const { Client, GatewayIntentBits, Partials, Collection, ActivityType, Events} = require("discord.js");
const { Guilds, GuildMembers, GuildMessages, MessageContent } = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember } = Partials;
const client = new Client({
    intents: [Guilds, GuildMembers, GuildMessages, MessageContent],
    partials: [User, Message, GuildMember, ThreadMember],
    presence: {activities: [{name: "1_C0V3n Radio", type: ActivityType.Listening}], status: "dnd",}
});
const { loadEvents } = require("./Handlers/eventHandler");
const { loadCommands } = require("./Handlers/commandHandler");
require("./Handlers/antiCrash")(client);

client.config = require("./config.json");
const {token} = require("./config.json");
client.events = new Collection();
client.commands = new Collection();

loadEvents(client);
client.login(client.config.token);
