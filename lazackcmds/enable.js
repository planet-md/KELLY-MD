//import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
  let isEnable = /true|enable|(turn)?on|1/i.test(command)
  let chat = global.db.data.chats[m.chat]
  let user = global.db.data.users[m.sender]
  let bot = global.db.data.settings[conn.user.jid] || {}
  let type = (args[0] || '').toLowerCase()
  let isAll = false,
    isUser = false
  switch (type) {
    case 'welcome':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.welcome = isEnable
      break
    case 'jarvis':
    case 'autotalk':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.jarvis = isEnable
      break
    case 'pmblocker':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      bot.pmblocker = isEnable
      case 'antilink2': case 'antienlace2':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink2 = isEnable 
      break
    case 'autobio':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      bot.autoBio = isEnable
      break
    case 'detect':
    case 'detector':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.detect = isEnable
      break
    case 'autosticker':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.autosticker = isEnable
      break
    case 'antispam':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiSpam = isEnable
      break
    case 'antidelete':
    case 'delete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.delete = !isEnable
      break
    case 'antitoxic':
    case 'antibadword':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiToxic = isEnable
      break

    case 'document':
    case 'documento':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
      }
      chat.useDocument = isEnable
      break
    case 'autostatus':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      chat.viewStory = isEnable
      break

    case 'antilink':
    case 'antilinkwa':
    case 'antilinkwha':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLink = isEnable
      break

    case 'nsfw':
    case '+18':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.nsfw = isEnable
      break

    case 'autolevelup':
      isUser = true
      user.autolevelup = isEnable
      break

    case 'chatbot':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.chatbot = isEnable
      break

    case 'restrict':
    case 'restringir':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      bot.restrict = isEnable
      break
    case 'autotype':
    case 'alwaysonline':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      chat.autotype = isEnable
      break

    case 'anticall':
    case 'nocall':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      bot.antiCall = isEnable
      break
    case 'onlypv':
    case 'onlydm':
    case 'onlymd':
    case 'solopv':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['pconly'] = isEnable
      break

    case 'gponly':
    case 'onlygp':
    case 'grouponly':
    case 'sologp':
    case 'sologrupo':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['gconly'] = isEnable
      break

      case 'self':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['self'] = isEnable
      break

      
    default:
      if (!/[01]/.test(command))
        return m.reply(`
≡ List of options

━━━━━━━━━━━━━【 *⚙️ BOT SETTINGS* ⚙️ 】━━━━━━━━━━━━━
                *✨ Toggle Features ✨*
━━━━━━━━━━━━━━【 *EXAMPLES* 】━━━━━━━━━━━━━━

   To toggle features, use *\`${usedPrefix}on\`* or *\`${usedPrefix}off\`*:

   *\`${usedPrefix}on welcome\`*  
   *\`${usedPrefix}off welcome\`*
   
╭━━━━━━━━━━━━━━【 *👑 OWNER CMD* 】━━━━━━━━━━━━━━╮

🔒 *\`${usedPrefix + command} public\`*  
   ➤ Switch bot between private and public mode

🚫 *\`${usedPrefix + command} pmblocker\`*  
   ➤ Block spam messages in inbox

💫 *\`${usedPrefix + command} autoreaction/reactions\`*  
   ➤ Enable auto-reactions to chats

👑 *\`${usedPrefix + command} ownerreact/oreact\`*  
   ➤ Enable auto owner react to bots messages

♥️ *\`${usedPrefix + command} statuslikes/likes\`*  
   ➤ Enable auto status likes to bot

🥏 *\`${usedPrefix + command} statussaver\`*  
   ➤ Enable auto statussaver to bot

📩 *\`${usedPrefix + command} statusreply/sreply\`*  
   ➤ Enable auto statusreply to bot

🚀 *\`${usedPrefix + command} statusview\`*  
   ➤ Enable auto statusview to bot

💻 *\`${usedPrefix + command} alwaysonline\`*  
   ➤ Enable alwaysonline to bot

💬 *\`${usedPrefix + command} autoread\`*  
   ➤ Enable auto-reard chats

👀 *\`${usedPrefix + command} antiviewonce\`*  
   ➤ Enable viewonce to bot

🦠 *\`${usedPrefix + command} antipmspam\`*  
   ➤ Block spam and viruses in PMs

📩 *\`${usedPrefix + command} onlydm\`*  
   ➤ Limit bot to work only in DMs

👥 *\`${usedPrefix + command} onlyg\`*  
   ➤ Limit bot to work only in groups

⌨️ *\`${usedPrefix + command} autotype\`*  
   ➤ Show typing indicator in chats

🌐 *\`${usedPrefix + command} autobio\`*  
   ➤ Automatically update bot's bio

🚫 *\`${usedPrefix + command} antibotclone\`*  
   ➤ Remove cloned bots from groups

⚠️ *\`${usedPrefix + command} antibot\`*  
   ➤ Remove bots from groups

🔐 *\`${usedPrefix + command} restrict\`*  
   ➤ Restrict features like antilinkall

╭━━━━━━━━━━━━━━【 *⚡ ADMIN CMD* 】━━━━━━━━━━━━━━╮

🌟 *\`${usedPrefix + command} welcome\`*  
   ➤ Send welcome and goodbye messages

🖼️ *\`${usedPrefix + command} autosticker\`*  
   ➤ Automatically create stickers from images and videos

✅ *\`${usedPrefix + command} autoapprove\`*  
   ➤ Enable autoapprove and reject to group
   
🔢 *\`${usedPrefix + command} antifake\`*  
   ➤ Enable antifake to group

🔍 *\`${usedPrefix + command} detect\`*  
   ➤ Feature coming soon…

🎤 *\`${usedPrefix + command} jarvis\`*  
   ➤ Activate the voice chatbot

🛡️ *\`${usedPrefix + command} antispam\`*  
   ➤ Detect and block spammers

📎 *\`${usedPrefix + command} antideletelinks\`*  
   ➤ Delete every links in groups

🚷 *\`${usedPrefix + command} nocmds\`*  
   ➤ Remove users who misuse commands

🌐 *\`${usedPrefix + command} antilinkall\`*  
   ➤ Detect and block all types of links

💢 *\`${usedPrefix + command} antitoxic\`*  
   ➤ Block toxic language

🎵 *\`${usedPrefix + command} antiTiktok\`*  
   ➤ Block Tiktok links

📹 *\`${usedPrefix + command} antiYoutube\`*  
   ➤ Block YouTube links

📱 *\`${usedPrefix + command} antiTelegram\`*  
   ➤ Block Telegram links

📘 *\`${usedPrefix + command} antiFacebook\`*  
   ➤ Block Facebook links

📸 *\`${usedPrefix + command} antiInstagram\`*  
   ➤ Block Instagram links

🐦 *\`${usedPrefix + command} antiTwitter\`*  
   ➤ Block Twitter links

🧵 *\`${usedPrefix + command} antiThreads\`*  
   ➤ Block Threads links

🎮 *\`${usedPrefix + command} antiDiscord\`*  
   ➤ Block Discord links

🎮 *\`${usedPrefix + command} antiTwitch\`*  
   ➤ Block Twitch links

⚠️ *\`${usedPrefix + command} antibot\`*  
   ➤ Remove bots from groups

> ⚠️ *Bot automatically removes violators* ⚠️

╭━━━━━━━━━━━━━━【 *💬 USER CMD* 】━━━━━━━━━━━━━━╮

🗨️ *\`${usedPrefix + command} chatbot\`*  
   ➤ Start a conversation with the bot

🤖 *\`${usedPrefix + command} loftchat\`* or *\`${usedPrefix}loftgpt\`*  
   ➤ Chat with Loftbot (ask anything!)
      throw false
  }

  m.reply(
    `
🚀 *${type}* Now *${isEnable ? 'Active' : 'Deactive'}* ${isAll ? 'for this bot' : isUser ? '' : 'for this bot'}
`.trim()
  )
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['config']
handler.command = /^((en|dis)able|(turn)?o(n|ff)|[01])$/i

export default handler
