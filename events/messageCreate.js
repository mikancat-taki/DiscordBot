export default {
  name: 'messageCreate',
  execute(message) {
    if (message.author.bot) return;
    if (message.content === 'おはよう') message.reply('おはよう☀️');
    if (message.content === 'おやすみ') message.reply('おやすみ🌙');
  }
};
