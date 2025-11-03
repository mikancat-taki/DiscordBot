import { SlashCommandBuilder } from 'discord.js';

export default {
  data: new SlashCommandBuilder()
    .setName('chat')
    .setDescription('シンプルなチャットBot（AIなし）')
    .addStringOption(option => 
      option.setName('message')
      .setDescription('Botに話しかける内容')
      .setRequired(true)
    ),
  async execute(interaction) {
    const msg = interaction.options.getString('message');
    let reply = 'うーん、よくわかんないけどがんばって！';
    if (msg.includes('こんにちは')) reply = 'こんにちは！元気？';
    else if (msg.includes('疲れた')) reply = 'お疲れさま！無理しないでね。';
    else if (msg.includes('ありがとう')) reply = 'どういたしまして😊';
    await interaction.reply(reply);
  }
};
