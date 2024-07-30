//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923195628811@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923192173398";
global.owner = process.env.OWNER_NUMBER || "923192173398";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUZaTk5xcnhjbTB4QnV6VHhqNGVCSVZIQ3BCQzRlTUczSXY0SjVwYW4yQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidFBVSndTN1Qwb25CQmR0Z2VxeU9wcHNwdmREN2ZtRVdZYnlONHhvZzN5Zz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2UG5kUk9ZTEV0Y1c0RE5lcjQ1eXpJTnU4SlpvZHpIbUprd051TTVHbm1JPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4ZWx2K0lWYUFJa1dJQzJKVWVObUQ4QnpCTWNGZE1RSURCa0xmUUpWYmw0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlHOEY2SXI5b3I0OGZad2xzTUJYOFFBY0xiLzVXL05mWGUvTXV2UWRXVUk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9UTTZrSVpVb0FjdUgvZ3Z2T01hOU5pWGtqQjhWWTdlSFkxRWx3aDBVaTQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0VrSjVLRGkycExGUWM1aHlxSTB6T1BXaEFXWDMvV0F5UWlpUTMwQWhHbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMlFmRVBBVzNhN1J1am5hVXdPYmdMRXNCZlZ2NDMwVTE1aDBtRWx3cHVIST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldtaVpwckljaDFjU24rRTlDQ25HU0Jyd0t6MGo5OFRKS3dUdHRoeURjc0lYU2pQRDlONDVOclAzUlhZVDVacXozcENPRzRxWmYwb0E1YnI1WWZBZWp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAzLCJhZHZTZWNyZXRLZXkiOiJKbG82cG1ZZzNGUFpzNDI3NFQ4c2UrbG84VWVCczROUExaVm14SjF1eWNvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzE5NTYyODgxMUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzODIzN0ZCRUVGQ0RFOUQxQzdBODIxRTQ2N0RCMzYzNiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyMzM3NDQ4fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMxOTU2Mjg4MTFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMzdBN0Q0OEFBODQ4NzE2QjU5MEZBRTk0Njg1NDQyQ0IifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMjMzNzQ0OH0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMTk1NjI4ODExQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjhDMjg4MDg3ODhCRDcyQUVBREY0MkU2QTM0QTgzRThFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjIzMzc0NTF9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzE5NTYyODgxMUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzNUFCOEE2OURCMURCMjc5NjA5NzA0RUI2QTY0NDdCRiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyMzM3NDUxfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJOVDNHNURpMVJQaU9mMXRQX3FocThBIiwicGhvbmVJZCI6ImU4MjYyZjVhLWY4M2ItNGIyMy05ZDY3LTY4YmVlODg4ZGMyMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5WW16Zk1DaFUvT3lpUWtrL1cyRHlRamRyR3c9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYTRESENwU0t4M0dJc1RzMVlhQjAvRVNKcTBVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik5XQk5OWVlDIiwibWUiOnsiaWQiOiI5MjMxOTU2Mjg4MTE6NEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJGQUxDT04ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1Bud3o2NEJFSm1SbzdVR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IllOUlZtSkd2TzBkZGVoYnA0TlFRc2QxR2JsOUc0MVVtb1lsZmZVR1FGblk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjFCOTE1d2ZqbXZ3TTMvS1pJSWJmZDlBa05uOEdSbHFVUFZEWUwxdGhHWWxMYzFuZkJ0aEM5VVFiOHlCZkJrR3BMQ3NlVzRjSFZRZTg3Sk9JRTRLVkF3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiI3dVk5eFNiTVhTV25GcEZHdU8zOTVHU3FHbWtTcm1TL2s5b1hFZ1hvOWNJZGNHbGlvZVgxSHZwcGdkS21mYXBRV2NmWFJTZXAzb3BkUnQyd3lYaUJpZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzE5NTYyODgxMTo0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldEVVZaaVJyenRIWFhvVzZlRFVFTEhkUm01ZlJ1TlZKcUdKWDMxQmtCWjIifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjIzMzc0NDYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQUFUIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝕿𝖍𝖊 𝖋𝖆𝖑𝖈𝖔𝖓😍",
  author: process.env.PACK_AUTHER || "FALCON",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝕿𝖍𝖊 𝖋𝖆𝖑𝖈𝖔𝖓",
  ownername: process.env.OWNER_NAME || "FALCON",
  errorChat: process.env.ERROR_CHAT || "923195628811",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "PUBLIC",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
