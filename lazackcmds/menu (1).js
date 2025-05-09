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
    

✨🌟 *WELCOME TO LOFT XMD* 🌟✨
╭━━━⊱ 💫 *USER* 💫 ⊱━━━
🖋️ *NAME:* Sir Loft
╰━━━━━━━━━━━━━━

╭━━━⊱ ⚙️ *BOT INFO* ⚙️ ⊱━━━
🛡️ *MODE:** PRIVATE* 
📱 *PLATFORM:* *LINUX* 
💻 *TYPE:* *POWERFUL BOT*
🔑 *PREFIX:* [ *.* ]
⏳ *UPTIME:* *1.0.0*
💾 *DATABASE:* 🚀🚀
╰━━━━━━━━━━━━━━`;   
┌────•✧𝙊𝙒𝙉𝙀𝙍 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎✧•────┐
┊ ꒰ ͜͡➸ 𝘽𝙖𝙣𝙘𝙝𝙖𝙩 ✧
┊ ꒰ ͜͡➸ 𝙐𝙣𝙗𝙖𝙣𝙘𝙖𝙝𝙩 ✧
┊ ꒰ ͜͡➸ 𝘽𝙖𝙣𝙪𝙨𝙚𝙧 ✧
┊ ꒰ ͜͡➸ 𝙐𝙣𝙗𝙖𝙣𝙐𝙨𝙚𝙧 ✧
┊ ꒰ ͜͡➸ 𝙋𝙧𝙚𝙢𝙡𝙞𝙨𝙩 ✧
┊ ꒰ ͜͡➸ 𝘽𝙖𝙣𝙡𝙞𝙨𝙩 ✧
┊ ꒰ ͜͡➸ 𝘼𝙙𝙙𝙥𝙧𝙚𝙢 ✧
┊ ꒰ ͜͡➸ 𝘽𝙧𝙤𝙖𝙙𝙘𝙖𝙨𝙩 ✧
┊ ꒰ ͜͡➸ 𝘽𝙧𝙤𝙖𝙙𝙘𝙖𝙨𝙜𝙘 ✧
┊ ꒰ ͜͡➸ 𝙅𝙤𝙞𝙣 ✧
┊ ꒰ ͜͡➸ 𝙩𝙭 ✧
┊ ꒰ ͜͡➸ 𝙎𝙚𝙩𝙥𝙥𝙗𝙤𝙩 ✧
┊ ꒰ ͜͡➸ 𝙎𝙚𝙩𝙥𝙧𝙚𝙛𝙞𝙭 ✧
┊ ꒰ ͜͡➸ 𝙍𝙚𝙨𝙚𝙩𝙥𝙧𝙚𝙛𝙞𝙭 ✧
┊ ꒰ ͜͡➸ 𝙂𝙚𝙩𝙛𝙞𝙡𝙚 ✧
┊ ꒰ ͜͡➸ 𝙂𝙚𝙩𝙥𝙡𝙪𝙜𝙞𝙣 ✧
└───── •✧✧✧✧✧✧✧✧✧✧• ─────┘`; // 
          break;
          case 'groupmenu':
          lkr = `┌────•✧𝙂𝙍𝙊𝙐𝙋_𝙈𝙀𝙉𝙐✧•────┐
┊ ꒰ ͜͡➸ 𝙆𝙞𝙘𝙠      𝙩𝙖𝙜/𝙨𝙡𝙞𝙙𝙚
┊ ꒰ ͜͡➸ 𝙋𝙧𝙤𝙢𝙤𝙩𝙚   𝙩𝙖𝙜/𝙨𝙡𝙞𝙙𝙚
┊ ꒰ ͜͡➸ 𝘿𝙚𝙢𝙤𝙩𝙚    𝙩𝙖𝙜/𝙨𝙡𝙞𝙙𝙚
┊ ꒰ ͜͡➸ 𝙍𝙚𝙨𝙚𝙩𝙡𝙞𝙣𝙠   𝙧𝙚𝙫𝙤𝙠𝙚 𝙜𝙘𝙡𝙞𝙣𝙠
┊ ꒰ ͜͡➸ 𝙄𝙣𝙛𝙤𝙜𝙧𝙤𝙪𝙥   𝙜𝙘 𝙞𝙣𝙛𝙤
┊ ꒰ ͜͡➸ 𝙇𝙞𝙣𝙠        𝙘𝙪𝙧𝙧𝙚𝙣𝙩 𝙜𝙘𝙡𝙞𝙣𝙠
┊ ꒰ ͜͡➸ 𝙎𝙚𝙩𝙥𝙥      𝙘𝙪𝙧𝙧𝙚𝙣𝙩 𝙜𝙘 𝙥𝙧𝙤𝙛𝙞𝙡𝙚
┊ ꒰ ͜͡➸ 𝙎𝙚𝙩𝙣𝙖𝙢𝙚    𝙜𝙘 𝙣𝙖𝙢𝙚
┊ ꒰ ͜͡➸ 𝙎𝙚𝙩𝙙𝙚𝙨𝙘     𝙜𝙘 𝙙𝙚𝙨𝙘𝙧𝙞𝙥𝙩𝙞𝙤𝙣
┊ ꒰ ͜͡➸ 𝙎𝙚𝙩𝙬𝙚𝙡𝙘𝙤𝙢𝙚  𝙬𝙚𝙡𝙘𝙤𝙢𝙚 𝙢𝙨𝙜
┊ ꒰ ͜͡➸ 𝙎𝙚𝙩𝙗𝙮𝙚      𝙗𝙮𝙚 𝙢𝙨𝙜
┊ ꒰ ͜͡➸ 𝙃𝙞𝙙𝙚𝙩𝙖𝙜     𝙩𝙖𝙜 𝙖𝙣𝙮𝙩𝙝𝙞𝙣𝙜 
┊ ꒰ ͜͡➸ 𝙒𝙖𝙧𝙣       𝙬𝙖𝙧𝙣 𝙪𝙨𝙚𝙧
┊ ꒰ ͜͡➸ 𝙐𝙣𝙬𝙖𝙧𝙣     𝙪𝙣𝙬𝙖𝙧 𝙪𝙨𝙚𝙧
┊ ꒰ ͜͡➸ 𝙂𝙧𝙤𝙪𝙥      𝙤𝙥𝙚𝙣/𝙘𝙡𝙤𝙨𝙚
┊ ꒰ ͜͡➸𝙀𝙣𝙖𝙗𝙡𝙚      𝙛𝙤𝙧 𝙘𝙢𝙙𝙨
┊ ꒰ ͜͡➸𝙊𝙉/𝙊𝙁𝙁      𝙛𝙤𝙧 𝙘𝙢𝙙𝙨
└───── •✧✧✧✧✧✧✧• ──────┘`; // 
          break;
          case 'downloadermenu':
            case 'dlmenu' :
          lkr = `┌────•✧𝘿𝙇 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎✧•────┐
┊ ꒰ ͜͡➸ 𝙋𝙡𝙖𝙮     𝙉𝙖𝙖𝙩...
┊ ꒰ ͜͡➸ 𝙋𝙡𝙖𝙮2    𝙉𝙖𝙖𝙩...
┊ ꒰ ͜͡➸ 𝙄𝙜      𝙐𝙍𝙇
┊ ꒰ ͜͡➸ 𝙁𝙗       𝙐𝙍𝙇
┊ ꒰ ͜͡➸ 𝙄𝙢𝙜      𝙉𝙖𝙢𝙚
┊ ꒰ ͜͡➸ 𝙂𝙙𝙧𝙞𝙫𝙚     𝙐𝙍𝙇
┊ ꒰ ͜͡➸ 𝙂𝙞𝙩𝙘𝙡𝙤𝙣𝙚    𝙐𝙍𝙇
┊ ꒰ ͜͡➸ 𝙞𝙜𝙨𝙩𝙖𝙡𝙠      𝙐𝙨𝙚𝙧𝙣𝙖𝙢𝙚
┊ ꒰ ͜͡➸ 𝙈𝙚𝙙𝙞𝙖𝙛𝙞𝙧𝙚     𝙐𝙍𝙇
┊ ꒰ ͜͡➸ 𝙈𝙛𝙞𝙧𝙚      𝙐𝙍𝙇
┊ ꒰ ͜͡➸ 𝙏𝙞𝙠𝙩𝙤𝙠.     𝙐𝙍𝙇
┊ ꒰ ͜͡➸ 𝙏𝙞𝙠𝙩𝙤𝙠𝙨𝙩𝙖𝙡𝙠     𝙐𝙨𝙚𝙧𝙣𝙖𝙢𝙚
┊ ꒰ ͜͡➸ 𝙏𝙬𝙞𝙩𝙩𝙚𝙧     𝙐𝙍𝙇
┊ ꒰ ͜͡➸ 𝙔𝙩𝙨      𝙉𝙖𝙢𝙚/𝙐𝙍𝙇
┊ ꒰ ͜͡➸ 𝙔𝙩𝙢𝙥4    𝙐𝙍𝙇
┊ ꒰ ͜͡➸ 𝙔𝙩𝙢𝙥3    𝙐𝙍𝙇
┊ ꒰ ͜͡➸ 𝙔𝙩𝙖      𝙐𝙍𝙇
┊ ꒰ ͜͡➸ 𝙎𝙤𝙣𝙜    𝙉𝙖𝙢𝙚
┊ ꒰ ͜͡➸ 𝙑𝙞𝙙𝙚𝙤    𝙐𝙍𝙇
┊ ꒰ ͜͡➸ 𝘼𝙥𝙠     𝙉𝙖𝙢𝙚/𝙐𝙍𝙇
┊ ꒰ ͜͡➸ 𝙋𝙞𝙣𝙩𝙚𝙧𝙚𝙨𝙩    𝙐𝙍𝙇
└───── •✧✧✧✧✧✧✧✧✧• ─────┘`; // 
                  
          break;
          case 'funmenu':
          lkr = `┏━━━ʕ•𝙁𝙐𝙉 𝙈𝙀𝙉𝙐•ʔ━━━┓
⎪⌲ _character_
⎪⌲ _truth_
⎪⌲ _dare_
⎪⌲ _flirt_
⎪⌲ _gay_
⎪⌲ _shayeri_
⎪⌲ _ship_
⎪⌲ _waste_
⎪⌲ _simpcard_
⎪⌲ _hornycard_
⎪⌲ _ytcomment_
⎪⌲ _stupid_
⎪⌲ _lolicon_
┗━━━ʕ•🎁•ʔ━━━┛`; // 
   
          break;
          case 'gamemenu':
          lkr = `┏━━━ʕ•𝙂𝘼𝙈𝙀 𝙈𝙀𝙉𝙐•ʔ━━━┓
⎪⌲🎮 _tictactoe_
⎪⌲🎮 _delttt_
⎪⌲🎮 _math_
⎪⌲🎮 _math answer_
⎪⌲🎮 _ppt_
⎪⌲🎮 _slot_
┗━━━ʕ•🎁•ʔ━━━┛`; // 
          break;
          case 'stickermenu':
          lkr = `┏━━━ʕ•𝙎𝙏𝙄𝘾𝙆𝙀𝙍 𝙈𝙀𝙉𝙐•ʔ━━━┓
⎪⌲ _sticker_
⎪⌲ _take_
⎪⌲ _scircle_
⎪⌲ _smaker_
⎪⌲ _sremovebg_
⎪⌲ _getsticker_
⎪⌲ _emojimix_
⎪⌲ _toimg_
⎪⌲ _tovid_
⎪⌲ _ttp_
⎪⌲ _ttp2_
⎪⌲ _ttp3_
⎪⌲ _ttp4_
⎪⌲ _ttp5_
⎪⌲ _attp_
⎪⌲ _attp2_
⎪⌲ _attp3_
┗━━━ʕ•🎁•ʔ━━━┛`; 
          break;
          case 'toolmenu':
          lkr = `┏━━━ʕ•𝙏𝙊𝙊𝙇𝙎 𝙈𝙀𝙉𝙐•ʔ━━━┓
⎪⌲ _autosticker_
⎪⌲ _pdf_
⎪⌲ _whatmusic_
⎪⌲ _calc_
⎪⌲ _google_
⎪⌲ _lyrics_
⎪⌲ _readmore_
⎪⌲ _ssweb_
⎪⌲ _tts_
⎪⌲ _translate_
⎪⌲ _tourl_
⎪⌲ _wikipedia_
⎪⌲ _nowa_
⎪⌲ _qrmaker_
⎪⌲ _readqr_
⎪⌲ _styletext_
⎪⌲ _weather_
⎪⌲ _siri_
⎪⌲ _alexa_
⎪⌲ _dalle_
⎪⌲ _wa_
⎪⌲ _itunes_
⎪⌲ _tinyurl/shorturl_
⎪⌲ _readvo_
⎪⌲ _true_
┗━━━━━━━ʕ•🧬•ʔ━━━━━━┛`; // 



😁 *Tip*: Use the prefix *${usedPrefix}* and one of the commands above. For feedback, use ${usedPrefix}report.
`

    

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
              newsletterJid: '120363419996770740@newsletter', // Replace with actual channel JID
              newsletterName: 'PRINCETECH', // Replace with actual channel name
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
handler.command = ['menu', 'help'] 

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
