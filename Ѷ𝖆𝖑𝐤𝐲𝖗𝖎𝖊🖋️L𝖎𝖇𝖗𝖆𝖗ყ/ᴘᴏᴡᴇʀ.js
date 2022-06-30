`|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|`;

// ════════════════════════|▷   (𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!   ◁|════════════════════════

`|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|`;
require("./𝕷𝖆ყO𝖚𝖙");
exports.ᴘᴏᴡᴇʀ = async (ᴋᴜɴᴀɪ, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊) => {
  if (
    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message &&
    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup &&
    !Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe &&
    !Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isSenderTUF
  ) {
    let FetchCurrentGroupLink = await ᴋᴜɴᴀɪ.groupInviteCode(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID);
    let GroupLinkRegex = /Fox.whatsapp.com\/([0-9A-Za-z]{20,24})/i;
    let isGroupLink = GroupLinkRegex.exec(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.body);
    let PresentGroupLink = new RegExp(
      `https://chat.whatsapp.com/${FetchCurrentGroupLink}`,
      "i"
    );
    let isCurrentGroupLink = PresentGroupLink.test(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.body);
    if (isGroupLink && !isCurrentGroupLink) {
      await Image_Button(
        ᴋᴜɴᴀɪ,
        Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
        A𝖗𝖌𝖘,
        "./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊👗𝕯𝖗𝖊𝖘𝖘/Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊_Orange.png",
        `🤖𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞: Kicked! 🎊One Less MoFo🎊`
      );
      return await ᴋᴜɴᴀɪ
        .groupParticipantsUpdate(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID, [Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender], "remove")
        .catch((e) => Caught(ᴋᴜɴᴀɪ, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊, e));
    } else if (
      Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.body.includes("https://t.me/") &&
      Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.body.includes("discord.gg") &&
      Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.body.includes("discord.com") &&
      Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.body.includes("/t.me/") &&
      Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.body.includes("wa.me/") &&
      Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.body.includes("www.")
    ) {
      await Image_Button(
        ᴋᴜɴᴀɪ,
        Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
        A𝖗𝖌𝖘,
        "./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊👗𝕯𝖗𝖊𝖘𝖘/Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊_Orange.png",
        `🤖𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞: Kicked! 🎊One Less MoFo🎊`
      );
      return await ᴋᴜɴᴀɪ
        .groupParticipantsUpdate(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID, [Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender], "remove")
        .catch((e) => Caught(ᴋᴜɴᴀɪ, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊, e));
    }
  }
};
`|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|`;

// ════════════════════════|▷   (𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!   ◁|════════════════════════

`|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|`;
