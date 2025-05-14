let handler = async (m, { conn, text, usedPrefix, command }) => {
  // Sound
  let name = m.pushName || conn.getName(m.sender)
  var vn = 'https://cdn.jsdelivr.net/gh/LOFTXMD23/loft-xmd-s24@main/Botify/Mickey.mp3'
  let url = 'https://github.comLOFTXMD22/loft-xmd-s24/'
  let murl = 'https://youtu.be/3j_EIP--2t8?si=4TFWV0On6Bl1wr-e'
  let img ='https://i.imgur.com/IbY6S1C.jpeg'
  let con = {
    key: {
      fromMe: false,
      participant: `${m.sender.split`@`[0]}@s.whatsapp.net`,
      ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}),
    },
    message: {
      contactMessage: {
        displayName: `${name}`,
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
      },
    },
  }
  let doc = {
    audio: {
      url: vn,
    },
    mimetype: 'audio/mpeg',
    ptt: true,
    waveform: [100, 0, 100, 0, 100, 0, 100],
    fileName: 'lazack',

    contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
        title: 'LOFTXMD',
        body: 'loft xmd',
        thumbnailUrl: img,
        sourceUrl: 'https://whatsapp.com/channel/0029Vb6B9xFCxoAseuG1g610',
        mediaType: 1,
        renderLargerThumbnail: true,
      },
    },
  }

  await conn.sendMessage(m.chat, doc, { quoted: con })
}

handler.help = ['alive']
handler.tags = ['main']
handler.command = /^(alive)$/i

export default handler
