import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import { canLevelUp, xpRange } from '../lib/levelling.js'
import fetch from 'node-fetch'
import fs from 'fs'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
import { promises } from 'fs'
import { join } from 'path'
const time = moment.tz('Asia/Kolkata').format('HH')
let wib = moment.tz('Asia/Kolkata').format('HH:mm:ss')
//import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix, command}) => {
    let d = new Date(new Date + 3600000)
    let locale = 'en'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
let pp = './Botify/lazack.jpg'
let user = global.db.data.users[who]
let { name, exp, diamond, lastclaim, registered, regTime, age, level, role, warn } = global.db.data.users[who]
let { min, xp, max } = xpRange(user.level, global.multiplier)
let username = conn.getName(who)
let math = max - xp
let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex')
let totaluser = Object.values(global.db.data.users).length 
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850) 
let greeting = ucapan()
let quote = quotes[Math.floor(Math.random() * quotes.length)];

let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `

╔═══════════════════════════╗
乂───『 *LOFT XMD*』───乂 
> Library :LOFT INFO TECH
> Version : 2.9.0
> source : https://github.com/LOFTXMD23/LOFT-XMD-S24 
> owner : Sir Loft
  *@ LOFTXMD is bot made up by LOFT*
  *Thank you for your cooperation.* 
 乂───『 *ENJOY MY BOT*』───乂
${readMore}
『 *COMMAND MENU* 』 
*use this command by start with prefix*
${readMore}
╚═══════════════════════════╝

${readMore}
👋 *Hello, ${username}!*
${greeting}

 *Date*: ${date}
 *Time*: ${wib}
 *Total Users*: ${totaluser}
 *Registered Users*: ${rtotalreg}

${readMore}
┌────•✧𝘽𝙊𝙏_𝙈𝙀𝙉𝙐✧•────┐

┊ ꒰ ͜͡➸ ${usedPrefix}𝙋𝙞𝙣𝙜 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝙐𝙥𝙩𝙞𝙢𝙚 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝘽𝙤𝙩/𝙋𝙧𝙞𝙣𝙘𝙚 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝙊𝙬𝙣𝙚𝙧 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝙄𝙣𝙛𝙤𝙗𝙤𝙩 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝙂𝙧𝙤𝙪𝙥𝙨 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝘽𝙡𝙤𝙘𝙠𝙡𝙞𝙨𝙩 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝙇𝙞𝙨𝙩𝙥𝙧𝙚𝙢 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝙂𝙜𝙥 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝙂𝙥𝙥𝙧𝙞𝙣𝙘𝙚 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝙈𝙚𝙣𝙪/𝙃𝙚𝙡𝙥/𝙃 ✧
└───── •✧✧✧✧✧✧• ─────┘

${readMore}

┌────•✧𝙊𝙒𝙉𝙀𝙍 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎✧•────┐

┊ ꒰ ͜͡➸ ${usedPrefix}𝘽𝙖𝙣𝙘𝙝𝙖𝙩 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝙐𝙣𝙗𝙖𝙣𝙘𝙖𝙝𝙩 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝘽𝙖𝙣𝙪𝙨𝙚𝙧 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝙐𝙣𝙗𝙖𝙣𝙐𝙨𝙚𝙧 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝙋𝙧𝙚𝙢𝙡𝙞𝙨𝙩 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝘽𝙖𝙣𝙡𝙞𝙨𝙩 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝘼𝙙𝙙𝙥𝙧𝙚𝙢 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝘽𝙧𝙤𝙖𝙙𝙘𝙖𝙨𝙩 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝘽𝙧𝙤𝙖𝙙𝙘𝙖𝙨𝙜𝙘 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝙅𝙤𝙞𝙣 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝙩𝙭 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝙎𝙚𝙩𝙥𝙥𝙗𝙤𝙩 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝙎𝙚𝙩𝙥𝙧𝙚𝙛𝙞𝙭 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝙍𝙚𝙨𝙚𝙩𝙥𝙧𝙚𝙛𝙞𝙭 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝙂𝙚𝙩𝙛𝙞𝙡𝙚 ✧
┊ ꒰ ͜͡➸ ${usedPrefix}𝙂𝙚𝙩𝙥𝙡𝙪𝙜𝙞𝙣 ✧
└───── •✧✧✧✧✧✧✧✧✧✧• ─────┘
   
${readMore}

┌────•✧𝙂𝙍𝙊𝙐𝙋_𝙈𝙀𝙉𝙐✧•────┐
┊ ꒰ ͜͡➸ ${usedPrefix}𝙆𝙞𝙘𝙠      𝙩𝙖𝙜/𝙨𝙡𝙞𝙙𝙚
┊ ꒰ ͜͡➸ ${usedPrefix}𝙋𝙧𝙤𝙢𝙤𝙩𝙚   𝙩𝙖𝙜/𝙨𝙡𝙞𝙙𝙚
┊ ꒰ ͜͡➸ ${usedPrefix}𝘿𝙚𝙢𝙤𝙩𝙚    𝙩𝙖𝙜/𝙨𝙡𝙞𝙙𝙚
┊ ꒰ ͜͡➸ ${usedPrefix}𝙍𝙚𝙨𝙚𝙩𝙡𝙞𝙣𝙠   𝙧𝙚𝙫𝙤𝙠𝙚 𝙜𝙘𝙡𝙞𝙣𝙠
┊ ꒰ ͜͡➸ ${usedPrefix}𝙄𝙣𝙛𝙤𝙜𝙧𝙤𝙪𝙥   𝙜𝙘 𝙞𝙣𝙛𝙤
┊ ꒰ ͜͡➸ ${usedPrefix}𝙇𝙞𝙣𝙠        𝙘𝙪𝙧𝙧𝙚𝙣𝙩 𝙜𝙘𝙡𝙞𝙣𝙠
┊ ꒰ ͜͡➸ ${usedPrefix}𝙎𝙚𝙩𝙥𝙥      𝙘𝙪𝙧𝙧𝙚𝙣𝙩 𝙜𝙘 𝙥𝙧𝙤𝙛𝙞𝙡𝙚
┊ ꒰ ͜͡➸ ${usedPrefix}𝙎𝙚𝙩𝙣𝙖𝙢𝙚    𝙜𝙘 𝙣𝙖𝙢𝙚
┊ ꒰ ͜͡➸ ${usedPrefix}𝙎𝙚𝙩𝙙𝙚𝙨𝙘     𝙜𝙘 𝙙𝙚𝙨𝙘𝙧𝙞𝙥𝙩𝙞𝙤𝙣
┊ ꒰ ͜͡➸ ${usedPrefix}𝙎𝙚𝙩𝙬𝙚𝙡𝙘𝙤𝙢𝙚  𝙬𝙚𝙡𝙘𝙤𝙢𝙚 𝙢𝙨𝙜
┊ ꒰ ͜͡➸ ${usedPrefix}𝙎𝙚𝙩𝙗𝙮𝙚      𝙗𝙮𝙚 𝙢𝙨𝙜
┊ ꒰ ͜͡➸ ${usedPrefix}𝙃𝙞𝙙𝙚𝙩𝙖𝙜     𝙩𝙖𝙜 𝙖𝙣𝙮𝙩𝙝𝙞𝙣𝙜 
┊ ꒰ ͜͡➸ ${usedPrefix}𝙒𝙖𝙧𝙣       𝙬𝙖𝙧𝙣 𝙪𝙨𝙚𝙧
┊ ꒰ ͜͡➸ ${usedPrefix}𝙐𝙣𝙬𝙖𝙧𝙣     𝙪𝙣𝙬𝙖𝙧 𝙪𝙨𝙚𝙧
┊ ꒰ ͜͡➸ ${usedPrefix}𝙂𝙧𝙤𝙪𝙥      𝙤𝙥𝙚𝙣/𝙘𝙡𝙤𝙨𝙚
┊ ꒰ ͜͡➸ ${usedPrefix}𝙀𝙣𝙖𝙗𝙡𝙚      𝙛𝙤𝙧 𝙘𝙢𝙙𝙨
┊ ꒰ ͜͡➸${usedPrefix}𝙊𝙉/𝙊𝙁𝙁      𝙛𝙤𝙧 𝙘𝙢𝙙𝙨
└───── •✧✧✧✧✧✧✧• ──────┘

${readMore}

┌────•✧𝘿𝙇 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎✧•────┐

┊ ꒰ ͜͡➸ ${usedPrefix}𝙋𝙡𝙖𝙮     𝙉𝙖𝙖𝙩...
┊ ꒰ ͜͡➸ ${usedPrefix}𝙋𝙡𝙖𝙮2    𝙉𝙖𝙖𝙩...
┊ ꒰ ͜͡➸ ${usedPrefix}𝙄𝙜      𝙐𝙍𝙇
┊ ꒰ ͜͡➸ ${usedPrefix}𝙁𝙗       𝙐𝙍𝙇
┊ ꒰ ͜͡➸ ${usedPrefix}𝙄𝙢𝙜      𝙉𝙖𝙢𝙚
┊ ꒰ ͜͡➸ ${usedPrefix}𝙂𝙙𝙧𝙞𝙫𝙚     𝙐𝙍𝙇
┊ ꒰ ͜͡➸ ${usedPrefix}𝙂𝙞𝙩𝙘𝙡𝙤𝙣𝙚    𝙐𝙍𝙇
┊ ꒰ ͜͡➸ ${usedPrefix}𝙞𝙜𝙨𝙩𝙖𝙡𝙠      𝙐𝙨𝙚𝙧𝙣𝙖𝙢𝙚
┊ ꒰ ͜͡➸ ${usedPrefix}𝙈𝙚𝙙𝙞𝙖𝙛𝙞𝙧𝙚     𝙐𝙍𝙇
┊ ꒰ ͜͡➸ ${usedPrefix}𝙈𝙛𝙞𝙧𝙚      𝙐𝙍𝙇
┊ ꒰ ͜͡➸ ${usedPrefix}𝙏𝙞𝙠𝙩𝙤𝙠.     𝙐𝙍𝙇
┊ ꒰ ͜͡➸ ${usedPrefix}𝙏𝙞𝙠𝙩𝙤𝙠𝙨𝙩𝙖𝙡𝙠     𝙐𝙨𝙚𝙧𝙣𝙖𝙢𝙚
┊ ꒰ ͜͡➸ ${usedPrefix}𝙏𝙬𝙞𝙩𝙩𝙚𝙧     𝙐𝙍𝙇
┊ ꒰ ͜͡➸ ${usedPrefix}𝙔𝙩𝙨      𝙉𝙖𝙢𝙚/𝙐𝙍𝙇
┊ ꒰ ͜͡➸ ${usedPrefix}𝙔𝙩𝙢𝙥4    𝙐𝙍𝙇
┊ ꒰ ͜͡➸ ${usedPrefix}𝙔𝙩𝙢𝙥3    𝙐𝙍𝙇
┊ ꒰ ͜͡➸ ${usedPrefix}𝙔𝙩𝙖      𝙐𝙍𝙇
┊ ꒰ ͜͡➸ ${usedPrefix}𝙎𝙤𝙣𝙜    𝙉𝙖𝙢𝙚
┊ ꒰ ͜͡➸ ${usedPrefix}𝙑𝙞𝙙𝙚𝙤    𝙐𝙍𝙇
┊ ꒰ ͜͡➸ ${usedPrefix}𝘼𝙥𝙠     𝙉𝙖𝙢𝙚/𝙐𝙍𝙇
┊ ꒰ ͜͡➸ ${usedPrefix}𝙋𝙞𝙣𝙩𝙚𝙧𝙚𝙨𝙩    𝙐𝙍𝙇
└───── •✧✧✧✧✧✧✧✧✧• ─────┘

${readMore}

┏━━━ʕ•𝙁𝙐𝙉 𝙈𝙀𝙉𝙐•ʔ━━━┓

⎪⌲ _${usedPrefix}character_
⎪⌲ _${usedPrefix}truth_
⎪⌲ _${usedPrefix}dare_
⎪⌲ _${usedPrefix}flirt_
⎪⌲ _${usedPrefix}gay_
⎪⌲ _${usedPrefix}shayeri_
⎪⌲ _${usedPrefix}ship_
⎪⌲ _${usedPrefix}waste_
⎪⌲ _${usedPrefix}simpcard_
⎪⌲ _${usedPrefix}hornycard_
⎪⌲ _${usedPrefix}ytcomment_
⎪⌲ _${usedPrefix}stupid_
⎪⌲ _${usedPrefix}lolicon_

┗━━━ʕ•😂•ʔ━━━┛

${readMore}
┏━━━ʕ•𝙂𝘼𝙈𝙀 𝙈𝙀𝙉𝙐•ʔ━━━┓

⎪⌲🎮 _${usedPrefix}tictactoe_
⎪⌲🎮 _${usedPrefix}delttt_
⎪⌲🎮 _${usedPrefix}math_
⎪⌲🎮 _${usedPrefix}math answer_
⎪⌲🎮 _${usedPrefix}ppt_
⎪⌲🎮 _${usedPrefix}slot_

┗━━━ʕ•🕹️•ʔ━━━┛

${readMore}

┏━━━ʕ•𝙎𝙏𝙄𝘾𝙆𝙀𝙍 𝙈𝙀𝙉𝙐•ʔ━━━┓

⎪⌲ _${usedPrefix}sticker_
⎪⌲ _${usedPrefix}take_
⎪⌲ _${usedPrefix}scircle_
⎪⌲ _${usedPrefix}smaker_
⎪⌲ _${usedPrefix}sremovebg_
⎪⌲ _${usedPrefix}getsticker_
⎪⌲ _${usedPrefix}emojimix_
⎪⌲ _${usedPrefix}toimg_
⎪⌲ _${usedPrefix}tovid_
⎪⌲ _${usedPrefix}ttp_
⎪⌲ _${usedPrefix}ttp2_
⎪☞ _${usedPrefix}ttp3_
⎪⌲ _${usedPrefix}ttp4_
⎪⌲ _${usedPrefix}ttp5_
⎪⌲ _${usedPrefix}attp_
⎪⌲ _${usedPrefix}attp2_
⎪⌲ _${usedPrefix}attp3_

┗━━━ʕ•📸•ʔ━━━┛
          
 ${readMore}         
   ┏━━━ʕ•𝙏𝙊𝙊𝙇𝙎 𝙈𝙀𝙉𝙐•ʔ━━━┓

⎪⌲ _${usedPrefix}autosticker_
⎪⌲ _${usedPrefix}pdf_
⎪⌲ _${usedPrefix}whatmusic_
⎪⌲ _${usedPrefix}calc_
⎪⌲ _${usedPrefix}google_
⎪⌲ _${usedPrefix}lyrics_
⎪⌲ _${usedPrefix}readmore_
⎪⌲ _${usedPrefix}ssweb_
⎪☞ _${usedPrefix}tts_
⎪⌲ _${usedPrefix}translate_
⎪⌲ _${usedPrefix}tourl_
⎪⌲ _${usedPrefix}wikipedia_
⎪⌲ _${usedPrefix}nowa_
⎪⌲ _${usedPrefix}qrmaker_
⎪⌲ _${usedPrefix}readqr_
⎪⌲ _${usedPrefix}styletext_
⎪⌲ _${usedPrefix}weather_
⎪⌲ _${usedPrefix}siri_
⎪⌲ _${usedPrefix}alexa_
⎪⌲ _${usedPrefix}dalle_
⎪⌲ _${usedPrefix}wa_
⎪⌲ _${usedPrefix}itunes_
⎪⌲ _${usedPrefix}tinyurl/shorturl_
⎪⌲ _${usedPrefix}readvo_
⎪⌲ _${usedPrefix}true_

┗━━━━━━━ʕ•🧬•ʔ━━━━━━┛

loft_

       // await conn.sendMessage(m.chat, { video: { url: [pp, pp2, pp3, pp4, pp5, pp6, pp7, pp8, pp9, pp10, pp11, pp12, pp13, pp14, pp15].getRandom() }, gifPlayback: true, caption: text.trim(), mentions: [m.sender] }, { quoted: estilo })

       await conn.sendMessage(
        m.chat,
        {
          image: { url: pp }, // `pp` is the image URL or buffer
          caption: str,       // `str` is your caption
          contextInfo: {
            mentionedJid: [m.sender], // Mentioning the sender
            isForwarded: true,
            forwardingScore: 999,
            forwardedNewsletterMessageInfo: {
              newsletterJid: '120363314875614529@newsletter', // Replace with actual channel JID
              newsletterName: 'LOFTXMD', // Replace with actual channel name
              serverMessageId: -1,
            },
          },
        },
        { quoted: m }
      );

      m.react(done);


}
handler.help = ['main']
handler.tags = ['group']
handler.command = ['menu2', 'help2'] 

export default handler
function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

    function ucapan() {
      const time = moment.tz('Asia/Kolkata').format('HH')
      let res = "happy early in the day☀️"
      if (time >= 4) {
        res = "Good Morning 🌄"
      }
      if (time >= 10) {
        res = "Good Afternoon ☀️"
      }
      if (time >= 15) {
        res = "Good Afternoon 🌇"
      }
      if (time >= 18) {
        res = "Good Night 🌙"
      }
      return res
    }
    const quotes = [
      "I'm not lazy, I'm just on my energy saving mode.",
      "Life is short, smile while you still have teeth.",
      "I may be a bad influence, but darn I am fun!",
      "I'm on a whiskey diet. I've lost three days already.",
      "Why don't some couples go to the gym? Because some relationships don't work out.",
      "I told my wife she should embrace her mistakes... She gave me a hug.",
      "I'm great at multitasking. I can waste time, be unproductive, and procrastinate all at once.",
      "You know you're getting old when you stoop to tie your shoelaces and wonder what else you could do while you're down there.",
      "I'm so good at sleeping, I can do it with my eyes closed.",
      "If you think nobody cares if you’re alive, try missing a couple of payments.",
      "I used to think I was indecisive, but now I'm not so sure.",
      "If you can't convince them, confuse them.",
      "I told my wife she was drawing her eyebrows too high. She looked surprised.",
      "I'm not clumsy, I'm just on a mission to test gravity.",
      "I told my wife she should do more push-ups. She said, 'I could do a hundred!' So I counted to ten and stopped.",
      "Life is like a box of chocolates; it doesn't last long if you're hungry.",
      "I'm not saying I'm Wonder Woman, I'm just saying no one has ever seen me and Wonder Woman in the same room together.",
      "Why do they call it beauty sleep when you wake up looking like a troll?",
      "I don't always lose my phone, but when I do, it's always on silent.",
      "My bed is a magical place where I suddenly remember everything I was supposed to do.",
      "I love the sound you make when you shut up.",
      "I'm not arguing, I'm just explaining why I'm right.",
      "I'm not a complete idiot, some parts are missing.",
      "When life gives you lemons, squirt someone in the eye.",
      "I don't need anger management. You just need to stop making me angry.",
      "I'm not saying I'm Batman. I'm just saying no one has ever seen me and Batman in the same room together.",
      "I'm not saying I'm Superman. I'm just saying no one has ever seen me and Superman in the same room together.",
      "I'm not saying I'm Spider-Man. I'm just saying no one has ever seen me and Spider-Man in the same room together.",
      "I'm not saying I'm a superhero. I'm just saying no one has ever seen me and a superhero in the same room together.",
      "The early bird can have the worm because worms are gross and mornings are stupid.",
      "If life gives you lemons, make lemonade. Then find someone whose life has given them vodka and have a party!",
      "The road to success is always under construction.",
      "I am so clever that sometimes I don't understand a single word of what I am saying.",
      "Some people just need a high-five. In the face. With a chair.",
      "I'm not saying I'm perfect, but I'm pretty close.",
      "A day without sunshine is like, you know, night.",
      "The best way to predict the future is to create it.",
      "If you can't be a good example, then you'll just have to be a horrible warning.",
      "I don't know why I keep hitting the escape button. I'm just trying to get out of here.",
      "I'm not lazy. I'm on energy-saving mode.",
      "I don't need a hairstylist, my pillow gives me a new hairstyle every morning.",
      "I don't have a bad handwriting, I have my own font.",
      "I'm not clumsy. It's just the floor hates me, the table and chairs are bullies, and the walls get in my way.",
      "I'm not saying I'm Batman. I'm just saying no one has ever seen me and Batman in the same room together.",
      "I'm not saying I'm Wonder Woman. I'm just saying no one has ever seen me and Wonder Woman in the same room together.",
      "I'm not saying I'm Superman. I'm just saying no one has ever seen me and Superman in the same room together.",
      "I'm not saying I'm Spider-Man. I'm just saying no one has ever seen me and Spider-Man in the same room together.",
      "I'm not saying I'm a superhero. I'm just saying no one has ever seen me and a superhero in the same room together.",
];
