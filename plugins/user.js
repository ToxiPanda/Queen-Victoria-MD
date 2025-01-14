const { command } = require("../lib");

/* Copyright (C) 2023 Queeen Victoria.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Queen Victoria - Mithum-Indumina
*/

command(
  {
    pattern: "setpp ",
    fromMe: true,
    desc: "Set profile picture",
    type: "user",
  },
  async (message, match, m) => {
    if (!message.reply_message.image)
      return await message.reply("_Reply to a Photo_");
    let buff = await m.quoted.download();
    await message.setPP(message.user, buff);
    return await message.reply("_Profile Picture Updated_");
  }
);

/* Copyright (C) 2023 Queeen Victoria.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Queen Victoria - Mithum-Indumina
*/

command(
  {
    pattern: "setname",
    fromMe: true,
    desc: "Set User name",
    type: "user",
  },
  async (message, match) => {
    if (!match) return await message.reply("_Enter Name_");
    await message.updateName(match);
    return await message.reply(`_Username Updated : ${match}_`);
  }
);
 /* Copyright (C) 2023 Queeen Victoria.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Queen Victoria - Mithum-Indumina
*/

command(
  {
    pattern: "block",
    fromMe: true,
    desc: "Block a person",
    type: "user",
  },
  async (message, match) => {
    if (message.isGroup) {
      let jid = message.mention[0] || message.reply_message.jid;
      if (!jid) return await message.reply("_Reply to a Person or Mention_");
      await message.block(jid);
      return await message.sendMessageMessage(`_@${jid.split("@")[0]} Blocked_`, {
        mentions: [jid],
      });
    } else {
      await message.block(message.jid);
      return await message.reply("_User Blocked_");
    }
  }
);

/* Copyright (C) 2023 Queeen Victoria.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Queen Victoria - Mithum-Indumina
*/

command(
  {
    pattern: "unblock",
    fromMe: true,
    desc: "Unblock a person",
    type: "user",
  },
  async (message, match) => {
    if (message.isGroup) {
      let jid = message.mention[0] || message.reply_message.jid;
      if (!jid) return await message.reply("_Reply to a Person or Mention_");
      await message.block(jid);
      return await message.sendMessage(`_@${jid.split("@")[0]} unblocked_`, {
        mentions: [jid],
      });
    } else {
      await message.unblock(message.jid);
      return await message.reply("_User Unblocked_");
    }
  }
);

/* Copyright (C) 2023 Queeen Victoria.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Queen Victoria - Mithum-Indumina
*/

command(
  {
    pattern: "jid",
    fromMe: true,
    desc: "Give jid of chat/user",
    type: "user",
  },
  async (message, match) => {
    return await message.sendMessage(
      message.mention[0] || message.reply_message.jid || message.jid
    );
  }
);

/* Copyright (C) 2023 Queeen Victoria.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Queen Victoria - Mithum-Indumina
*/

command(
  {
    pattern: "dlt",
    fromMe: true,
    desc: "deletes a message",
    type: "user",
  },
  async (message, match,m,client) => {
    if (message.isGroup) {
      client.sendMessage(message.jid, { delete: message.reply_message.key })
    }
  }
);
