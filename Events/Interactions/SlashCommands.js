const { ChatInputCommandInteraction, Events } = require("discord.js");

module.exports = {
    name: Events.InteractionCreate,
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction
     */
    execute(interaction, client) {
        if (!interaction.isChatInputCommand()) return;

        const command = client.commands.get(interaction.commandName);
        if(!command)
        return interaction.reply({
            content: "This command is outdated! Please contact blckhrt.",
            ephemeral: true
        });

        if(command.developer && interaction.user.id !== "800222752572702731")
        return interaction.reply({content: "This command is only available to the developer!",
        ephemeral: true
        });

        command.execute(interaction, client);
    }
};