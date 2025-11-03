export default {
  name: 'ready',
  once: true,
  execute(client) {
    console.log(`✅ ログイン完了: ${client.user.tag}`);
    client.user.setActivity('/ping | /chat | /play');
  }
};
