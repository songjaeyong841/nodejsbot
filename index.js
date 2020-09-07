const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;
const welcomeChannelName = "입장";
const byeChannelName = "퇴장";
const welcomeChannelComment = "어서오세요.";
const byeChannelComment = "안녕히가세요.";

client.on('ready', () => {
  console.log('켰다.');
});

client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  const newUser = member.user;
  const welcomeChannel = guild.channels.find(channel => channel.name == welcomeChannelName);

  welcomeChannel.send(`<@${newUser.id}> ${welcomeChannelComment}\n`);

  member.addRole(guild.roles.find(role => role.name == "신입"));
});

client.on("guildMemberRemove", (member) => {
  const guild = member.guild;
  const deleteUser = member.user;
  const byeChannel = guild.channels.find(channel => channel.name == byeChannelName);

  byeChannel.send(`<@${deleteUser.id}> ${byeChannelComment}\n`);
});

client.on('message', (message) => {
  if(message.author.bot) return;

  if(message.content === '작동') {
    message.reply(':game_die:작동중입니다:game_die:');
  }
});


client.on('message', (message) => {
  if(message.author.bot) return;

  if(message.content === 'ㅠ') {
    message.reply('울지마요 ㅠㅠ 토닥토닥');
  }
});

client.on('message', (message) => {
  if(message.author.bot) return;

  if(message.content === '사랑해') {
    message.reply('우웩:face_vomiting:');
  }
});

client.on('message', (message) => {
  if(message.author.bot) return;

  if(message.content === '숭연') {
    message.reply('♥나은');
  }
});

client.on('message', (message) => {
  if(message.author.bot) return;

  if(message.content === '나은') {
    message.reply('♥숭연');
  }
});

client.on('message', (message) => {
  if(message.author.bot) return;

  if(message.content === '!rank') {
    message.reply('봇 채널에서 사용해주세요.');
  }
});

client.on('message', (message) => {
  if(message.author.bot) return;

  if(message.content === '응애') {
    message.reply(':eyes:');
  }
});

client.on('message', (message) => {
  if(message.author.bot) return;

  if(message.content === '제거') {
    message.reply('누구를 제거할까요?');
  }
});


client.on('message', (message) => {
  if(message.author.bot) return;

  if(message.content === '!제거 바코드') {
    message.reply('확실한가요?');
  }
});

client.on('ready', () => {
  console.log('켰다.');
  client.user.setPresence({ game: { name: '!help를 쳐보세요.' }, status: 'online' })
});

client.on('guildMemberAdd', async member => {
  member.send(`${member.displayName} 안녕하세요:wave: 예쁜사랑 클럽방 입니다. 자기소개방에 롤닉 나이 성별 (별명) 이렇게 설정해주세요. 저희 규칙을 간단하게 설명해드릴게요! 1번 저희를 롤을 중심으로 합니다! 2번 저희 디스코드 서버를 이용하실려면 롤 클럽은 필수로 들어오셔야 합니다! 3번 보이스 여부! 만약 보이스를 안쓰시면 역할중 보이스x 라는 역할도 드리니 맘 놓으세요! (단일 보이스를 쓸 경우 공지 읽으시고 보이스 확인이 있으니 알아두세요! 4번 오시게 된 경로! 디스보드or지인 소개 필수로 말해주세요 오시면 면접관/관리자/클럽장 세명중 한명을 태그하여 보이스 면접보러 왔습니다 해주시면 됩니다!`)
})

client.login(token);