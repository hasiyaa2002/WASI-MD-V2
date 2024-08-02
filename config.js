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
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://hasamg:xlwPPyGX6GedR9xD@cluster0.9qiarq4.mongodb.net/";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Colombo";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "94763118285";
global.sudo = process.env.SUDO || "94763118285";
global.owner = process.env.OWNER_NUMBER || "94763118285";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "true";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkY3NzR2VHRBM2lrYUIxaTRSTlFMaldkbU0rVEJtM2wzZU01azlmYTkzZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidmE4YUZ4Q3JyMmRJWHkrd3JKRVFDS1Q2ZExFaU5CaUlqRkVjcmdzcFhWTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzQ2JxQVQ2QjdQbG1neXV6Q3FWbWZpSlV2bG5hUG5KOHpHRWt2TVpXNG5VPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNcFk5SDU0SVh3dHlxZlBkcm4wOWxmUXk2dlVvOXlSK2VuT1RzQm9nTGhzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlCMXNKeXd1NXBWaFRNOGZDeGJDYVlWdWg3bU5vVXlzRTE5ZXpLUmtzME09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InM5YWxNY3BwdStKT1lHZUtFdUFQSFYzUlp0ZTVHTUJEbno3ZnZ5TEVZeEE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUpVOXdhclVhU3lKOWpUaUZZb3JhcmhaU3U0T3RPNnlPVlVaOWRRNVRHbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYldPczB5TUt6WlhUbjJmNVpDNTdqRXB6bTdFSU9vUEpkSFBYV0lwWDVpdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBZTlRyanJOMTdKRmMzVWZyZ3NRRDBtcGZxa1Y1VjEyY1NPWFBkaDhqcGJKM1RWbkc2L1ozelFLLy9PVFVJWEdDRTBCN0YvK2FkNmpNaFEwcFc0bEJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUyLCJhZHZTZWNyZXRLZXkiOiJTSnlxMDRqY3hKL1Nmd1h1SnZpNkZGRVE4SkxXaXVIcTFGbGxvUWpnQmUwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJTb05JQ3NkN1NNZXNJOHk4M3BDbnBRIiwicGhvbmVJZCI6ImIzOWU5NDJlLWRmNWEtNGU0MS04ZTAxLWNhYjUwNjc4ZGRlZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKYnlzZnkvUVhTZTBENVlDbFRxKzNBK0o1Ync9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSVZwNStrM2pBK3BBRTBoRHkxQ2JMRDBONUhRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjNSRkJITUM0IiwibWUiOnsiaWQiOiI5NzI3NjU5OTI5NDQ6MTdAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8JOEgsqZyp/htIDhtIThtIsg4bSAyp/qnLDhtIAg4bSP6pyw6pywyarhtITJquG0gMqfIOG0oeG0gCDKmeG0j+G0m+C/kCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTyszOWRNREVNZWlzN1VHR0F3Z0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiOHZZT1RqQzBmRW1MaUoxWitaeWRJbUI2KzdhL3l2SGJVZlZKcXBLK3N3UT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiNVlEa0FwVGpxdG9EbU1ZZG1IMlJYZXhuTTF1dFlKWEpRdHFLSmxvcjVaNVZWWG1PS3BkWVdEZCt4elhnVk82NDZzNHNxa1lxMk1JVFVTTXRmU1NtRFE9PSIsImRldmljZVNpZ25hdHVyZSI6IjN0M0tidGVQTGh4cVEvdjhISSt0MmdnZDVkaDVhOTYvZnZ3dVl0OWNLVEN4WU8vZHJYOFVrMzVqdkQ5YUI3K08vMjVuTEVRV0VHZEVmdnVZNk5uTENBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTcyNzY1OTkyOTQ0OjE3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmZMMkRrNHd0SHhKaTRpZFdmbWNuU0pnZXZ1MnY4cngyMUgxU2FxU3ZyTUUifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjI2MDE4MTQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRmpMIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𓄂ʙʟᴀᴄᴋ ᴀʟꜰᴀ࿐ ᴍᴅ",
  author: process.env.PACK_AUTHER || "ᴀʟꜰᴀ",
  packname: process.env.PACK_NAME || "♥",
  botname: process.env.BOT_NAME || "𓄂ʙʟᴀᴄᴋ ᴀʟꜰᴀ࿐ ᴍᴅ",
  ownername: process.env.OWNER_NAME || "ꪖꪶᠻꪖ",
  errorChat: process.env.ERROR_CHAT || "94754625969",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "JZdcMamJae9nAiXKySSKCxkD",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
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
