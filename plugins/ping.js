const config = require('../config')
const { cmd, commands } = require('../command')

cmd({
    pattern: "ping",
    desc: "Check bot's response time.",
    category: "main",
    react: "🚀",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
       
        await conn.sendMessage(from, {
          text: "*_😈𝑭𝒆𝒓𝒈𝒂𝒏𝒅𝒐 𝑴𝑫 Ping Test👺_*",
          contextInfo: {
            externalAdReply: {
              title: '𝑭𝒆𝒓𝒈𝒂𝒏𝒅𝒐 𝑴𝑫',
              body: 'By Fergando Generels👨‍💻 .',
              thumbnail: { url: `https://i.ibb.co/mcGKFZD/3769.jpg` }, // Thumbnail URL
              sourceUrl: 'https://whatsapp.com/channel/0029Vb1mgOeCXC3K15xnyF2z', // Optional link
              mediaType: 1,
              renderLargerThumbnail: false
            }
          }
        });   
        const startTime = Date.now()
        const endTime = Date.now()
        const ping = endTime - startTime
  
  let status = `*_😈𝑭𝒆𝒓𝒈𝒂𝒏𝒅𝒐 𝑴𝑫 𝗕𝗢𝗧 𝗣𝗜𝗡𝗚 ➔ 999+ Ｍ s👺_* 
`
    
    
   await conn.sendMessage(from, {
          text: status,
          contextInfo: {
            externalAdReply: {
              title: '𝑭𝒆𝒓𝒈𝒂𝒏𝒅𝒐 𝑴𝑫',
              body: 'By Fergando Generals .',
              thumbnail: { url: `https://i.ibb.co/mcGKFZD/3769.jpg` }, // Thumbnail URL
              sourceUrl: 'https://whatsapp.com/channel/0029Vb1mgOeCXC3K15xnyF2z', // Optional link
              mediaType: 1,
              renderLargerThumbnail: false
            }
          }
        }); 
    
    
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})

          }
        }); 
    
    
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})
