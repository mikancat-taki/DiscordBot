import { SlashCommandBuilder } from 'discord.js';
import { joinVoiceChannel, createAudioPlayer, createAudioResource, AudioPlayerStatus } from '@discordjs/voice';
import ytdl from 'ytdl-core';

export default {
  data: new SlashCommandBuilder()
    .setName('play')
    .setDescription('YouTubeの音楽を再生')
    .addStringOption(option =>
      option.setName('url').setDescription('YouTubeのURL').setRequired(true)
    ),
  async execute(interaction) {
    const url = interaction.options.getString('url');
    const channel = interaction.member.voice.channel;
    if (!channel) return interaction.reply('🎧 ボイスチャンネルに参加してから使ってね！');

    try {
      const connection = joinVoiceChannel({
        channelId: channel.id,
        guildId: channel.guild.id,
        adapterCreator: channel.guild.voiceAdapterCreator,
      });

      const stream = ytdl(url, { filter: 'audioonly', highWaterMark: 1<<25 });
      const resource = createAudioResource(stream);
      const player = createAudioPlayer();
      connection.subscribe(player);
      player.play(resource);

      player.on(AudioPlayerStatus.Idle, () => connection.destroy());

      await interaction.reply('🎵 再生を開始しました！');
    } catch (err) {
      console.error(err);
      await interaction.reply('❌ 再生に失敗しました。URLを確認してね。');
    }
  },
};
