export default {
  name: 'guildMemberRemove',
  execute(member) {
    const channel = member.guild.systemChannel;
    if (channel) channel.send(`👋 ${member.user.tag} さんが退出しました。`);
  }
};
