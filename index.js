const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;
const welcomeChannelName = "입장";
const byeChannelName = "퇴장";
const welcomeChannelComment = "환영합니다!! DM내용 숙지 부탁드려요~";
const byeChannelComment = "ㅃㅃ";

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

  if(message.content === '나은이 번호') {
    message.reply('알고싶어?');
  }
});


client.on('message', (message) => {
  if(message.author.bot) return;

  if(message.content === 'ㄷㅂㅂㅂ') {
    message.reply('금지어 사용으로 뮤트합니다.')
    member.addRole(role => role.name == "MUTED");
  }
});
client.on('message', (message) => {
  if(message.author.bot) return;

  if(message.content === '단비바보') {
    message.reply('금지어 사용으로 뮤트합니다.');
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
  client.user.setPresence({ game: { name: 'Made by 나은' }, status: 'online' })
});

client.on('guildMemberAdd', async member => {
  member.send(`${member.displayName} 안녕하세요:wave: 예쁜사랑 클럽방 입니다. 닉네임을 롤닉네임 나이 성별 이렇게 설정해주세요. 저희 규칙을 간단하게 설명해드릴게요! 1번 저희를 롤을 중심으로 합니다! 2번 저희 디스코드 서버를 이용하실려면 롤 클럽은 필수로 들어오셔야 합니다! 3번 보이스 여부! 만약 보이스를 안쓰시면 역할중 보이스x 라는 역할도 드리니 맘 놓으세요! (단일 보이스를 쓸 경우 공지 읽으시고 보이스 확인이 있으니 알아두세요! 4번 오시게 된 경로! 디스보드or지인 소개 필수로 말해주세요 오시면 면접관/관리자/클럽장 세명중 한명을 태그하여 보이스 면접보러 왔습니다 해주시면 됩니다!`)
})

client.on('message', (message) => {
  if(message.author.bot) return;

  if(message.content == 'ping') {
    return message.reply('pong');
  }

  if(message.content == '나은이 정보') {
    let img = 'https://cdn.discordapp.com/attachments/752419720766029864/752579451652538408/image0.png';
    let embed = new Discord.RichEmbed()
      .setTitle('세젤예 나은')
      .setURL('http://www.naver.com')
      .setAuthor('세젤예 나은', img, 'http://www.naver.com')
      .setThumbnail(img)
      .addBlankField()
      .addField('Inline field title', 'Some value here')
      .addField('Inline field title', 'Some value here', true)
      .addField('Inline field title', 'Some value here', true)
      .addField('Inline field title', 'Some value here', true)
      .addField('Inline field title', 'Some value here1\nSome value here2\nSome value here3\n')
      .addBlankField()
      .setTimestamp()
      .setFooter('나은이가 작성함', img)

    message.channel.send(embed)
  } else if(message.content == '!help') {
    let helpImg = 'https://images-ext-1.discordapp.net/external/RyofVqSAVAi0H9-1yK6M8NGy2grU5TWZkLadG-rwqk0/https/i.imgur.com/EZRAPxR.png';
    let commandList = [
      {name: '!help', desc: 'help'},
      {name: 'ping', desc: '현재 핑 상태'},
      {name: 'embed', desc: 'embed 예제1'},
      {name: '!전체공지', desc: 'dm으로 전체 공지 보내기'},
      {name: '!전체공지2', desc: 'dm으로 전체 embed 형식으로 공지 보내기'},
      {name: '!청소', desc: '텍스트 지움'},
      {name: '!초대코드', desc: '해당 채널의 초대 코드 표기'},
      {name: '!초대코드2', desc: '봇이 들어가있는 모든 채널의 초대 코드 표기'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('Help of 콜라곰 BOT', helpImg)
      .setColor('#186de6')
      .setFooter(`콜라곰 BOT ❤️`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  } else if(message.content == '!초대코드2') {
    client.guilds.array().forEach(x => {
      x.channels.find(x => x.type == 'text').createInvite({maxAge: 0}) // maxAge: 0은 무한이라는 의미, maxAge부분을 지우면 24시간으로 설정됨
        .then(invite => {
          message.channel.send(invite.url)
        })
        .catch((err) => {
          if(err.code == 50013) {
            message.channel.send('**'+x.channels.find(x => x.type == 'text').guild.name+'** 채널 권한이 없어 초대코드 발행 실패')
          }
        })
    });
  } else if(message.content == '!초대코드') {
    if(message.channel.type == 'dm') {
      return message.reply('dm에서 사용할 수 없는 명령어 입니다.');
    }
    message.guild.channels.get(message.channel.id).createInvite({maxAge: 0}) // maxAge: 0은 무한이라는 의미, maxAge부분을 지우면 24시간으로 설정됨
      .then(invite => {
        message.channel.send(invite.url)
      })
      .catch((err) => {
        if(err.code == 50013) {
          message.channel.send('**'+message.guild.channels.get(message.channel.id).guild.name+'** 채널 권한이 없어 초대코드 발행 실패')
        }
      })
  } else if(message.content.startsWith('!전체공지2')) {
    if(checkPermission(message)) return
    if(message.member != null) { // 채널에서 공지 쓸 때
      let contents = message.content.slice('!전체공지2'.length);
      let embed = new Discord.RichEmbed()
        .setAuthor('공지 of 콜라곰 BOT')
        .setColor('#186de6')
        .setFooter(`콜라곰 BOT ❤️`)
        .setTimestamp()
  
      embed.addField('공지: ', contents);
  
      message.member.guild.members.array().forEach(x => {
        if(x.user.bot) return;
        x.user.send(embed)
      });
  
      return message.reply('공지를 전송했습니다.');
    } else {
      return message.reply('채널에서 실행해주세요.');
    }
  } else if(message.content.startsWith('!전체공지')) {
    if(checkPermission(message)) return
    if(message.member != null) { // 채널에서 공지 쓸 때
      let contents = message.content.slice('!전체공지'.length);
      message.member.guild.members.array().forEach(x => {
        if(x.user.bot) return;
        x.user.send(`<@${message.author.id}> ${contents}`);
      });
  
      return message.reply('공지를 전송했습니다.');
    } else {
      return message.reply('채널에서 실행해주세요.');
    }
  } else if(message.content.startsWith('!청소')) {
    if(message.channel.type == 'dm') {
      return message.reply('dm에서 사용할 수 없는 명령어 입니다.');
    }
    
    if(message.channel.type != 'dm' && checkPermission(message)) return

    var clearLine = message.content.slice('!청소 '.length);
    var isNum = !isNaN(clearLine)

    if(isNum && (clearLine <= 0 || 100 < clearLine)) {
      message.channel.send("1부터 100까지의 숫자만 입력해주세요.")
      return;
    } else if(!isNum) { // c @나긋해 3
      if(message.content.split('<@').length == 2) {
        if(isNaN(message.content.split(' ')[2])) return;

        var user = message.content.split(' ')[1].split('<@!')[1].split('>')[0];
        var count = parseInt(message.content.split(' ')[2])+1;
        let _cnt = 0;

        message.channel.fetchMessages().then(collected => {
          collected.every(msg => {
            if(msg.author.id == user) {
              msg.delete();
              ++_cnt;
            }
            return !(_cnt == count);
          });
        });
      }
    } else {
      message.channel.bulkDelete(parseInt(clearLine)+1)
        .then(() => {
          AutoMsgDelete(message, `<@${message.author.id}> ` + parseInt(clearLine) + "개의 메시지를 삭제했습니다. (이 메세지는 잠시 후에 사라집니다.)");
        })
        .catch(console.error)
    }
  }
});

function checkPermission(message) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) {
    message.channel.send(`<@${message.author.id}> ` + "명령어를 수행할 관리자 권한을 소지하고 있지않습니다.")
    return true;
  } else {
    return false;
  }
}

function changeCommandStringLength(str, limitLen = 8) {
  let tmp = str;
  limitLen -= tmp.length;

  for(let i=0;i<limitLen;i++) {
      tmp += ' ';
  }

  return tmp;
}

async function AutoMsgDelete(message, str, delay = 3000) {
  let msg = await message.channel.send(str);

  setTimeout(() => {
    msg.delete();
  }, delay);
}


client.login(token);