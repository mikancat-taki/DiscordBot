import { SlashCommandBuilder } from 'discord.js';

export default {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Botの応答速度を確認'),
  async execute(interaction) {
    await interaction.reply(`🏓 Pong! ${Date.now() - interaction.createdTimestamp}ms`);
  },
};
