// ===============================================================================
// 🎮ᴍᴇᴇ6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ
// ===============================================================================
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
require("python-format-js");
exports.catch = async (error, υℓтяσηℓιєηт, ᴍᴇᴇ6) => {
  await υℓтяσηℓιєηт.sendMessage(
    ᴍᴇᴇ6.logGroup,
    {
      url: "https://i.postimg.cc/mkdqGhr5/Mee6-Error.png",
    },
    MessageType.image,
    {
      mimetype: Mimetype.png,
      caption: `⚡𝐔𝐥𝐭𝐫𝐨𝐧™⚡ ᴅɪᴅ ɴᴏᴛ ᴡᴏʀᴋ ᴀꜱ ᴇxᴘᴇᴄᴛᴇᴅ❗

⚠️𝗘𝗿𝗿𝗼𝗿: 
➛ ${error}

      
*↱   🐞RΣPӨЯƬ   ↰*
_🔸ᴡʜᴀᴛꜱᴀᴘᴘ_
⇀ https://chat.whatsapp.com/FmMcEeSqZQw85qAkgUs3f5

_🔸ᴅɪꜱᴄᴏʀᴅ_
⇀ https://discord.gg/xcFN6NDHEV`,
    }
  );
  await υℓтяσηℓιєηт.sendMessage(
    ᴍᴇᴇ6.chatId,
    {
      url: "https://i.postimg.cc/mkdqGhr5/Mee6-Error.png",
    },
    MessageType.image,
    {
      mimetype: Mimetype.png,
      caption: `⚡𝐔𝐥𝐭𝐫𝐨𝐧™⚡ ᴅɪᴅ ɴᴏᴛ ᴡᴏʀᴋ ᴀꜱ ᴇxᴘᴇᴄᴛᴇᴅ❗

⚠️𝗘𝗿𝗿𝗼𝗿: 
➛ ${error}

      
*↱   🐞RΣPӨЯƬ   ↰*
_🔸ᴡʜᴀᴛꜱᴀᴘᴘ_
⇀ https://chat.whatsapp.com/FmMcEeSqZQw85qAkgUs3f5

_🔸ᴅɪꜱᴄᴏʀᴅ_
⇀ https://discord.gg/xcFN6NDHEV`,
    }
  );
};
// ===============================================================================
// 🎮ᴍᴇᴇ6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ
// ===============================================================================
