export default {
  name: 'guildMemberAdd',
  execute(member) {
    const channel = member.guild.systemChannel;
    if (channel) channel.send(`🎉 ようこそ ${member} さん！`);
  }
};
