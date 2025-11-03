const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ADEEL-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUVDMUlLMm1VY1RvYkxSc1pQWWtpb1BXVHhwNjh0NFcrWnp0Mnl6eHMzVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib2JRYzhFNWs3VEF3NVVKcFYwUXY0MmNTcEpxTDN0L2xxckcxOHpXcHUwdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxUC9FUGllUTVuRndQR3ZnUnRRSHkrWGpqcyttQU1nYzl0dDBSUkZ5S1ZBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4VGFzc2dDWjVFY1A1R2pKKzk1TVZOUytDM1pvMy9XODMvVU9IcWt4UDAwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFFZGdvcldjNnJla0RIUjJlc2ZjT1ArZzlONFpab1FwdHd5ejR0My90R2M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpVa2VLV2xXaThjRzFMa0ZWZ3Zaa3ZQb0pDRCttblFHdFNkRUVIU2xmemM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEdOL3lHc3EvbGVSMUpVeER3UE13azBnUzNNdlo5OHFZVWw3TkhaeHZrWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMVIwMWtjdjkrbXVBY21xUFpmdHRZQU1MRVZHdE1LbUpDbXQ5U2hReW5TND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJYWFprZkhTSjM5TUg1WEluMGZGYllBWUtrRUFDb3hpQUhsdVBzd1EwSVg0K0k4dUJwTDQ0N0liNldsazRWU3ZySkVvN0M2czdPcGhFRDZTVEgxc0NRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ0LCJhZHZTZWNyZXRLZXkiOiJUM1d2MkZXRXJ2NDlGazZ3RDBZTDNEZ3VwNGJQdEpySGR4Szk0QkNOS29FPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk4OTE1MTc4MjMwMkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQ0ZCM0M4MkM0MTlCQUUwMTJGRTlFMUI1NjkxQTk2MSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzYyMTU1NTY1fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5ODkxNTE3ODIzMDJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUMyRTgyQjczQTlFNjA3ODYxNDMwQzAyMERCMEJERTQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2MjE1NTU2NX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiQURFRUw1TUQiLCJtZSI6eyJpZCI6Ijk4OTE1MTc4MjMwMjozQHMud2hhdHNhcHAubmV0IiwibGlkIjoiNTgwMDg0OTkzOTI2Mzc6M0BsaWQiLCJuYW1lIjoi2LHYp9i02YDZgNmA2YDZgNmA2K8g2KjZgNmE2YDZiNqG8J2fr/Cdn6zwnZ+uIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMN0h5WHdRbjdpaHlBWVlBeUFBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI3K2dFUklMTXlCYnU3U2RENnY2ZDNkTkFMZlNscmpDdUVSaS9kV2x4d0FvPSIsImFjY291bnRTaWduYXR1cmUiOiJYVkVWZUZGWDFwbzc0ZGE4MmhIbThuV3hiY0FzbWhqbEg1Z1h3NVMwVkNZWGQ1SEZjdmtXdkNqeHRuR3FIMTE3dDlzY0VGMTJ4dWRZdHBrTVBrVGFBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiTVJrRXNIb3lmaE45dmEzK0NFMmZlY2R1Z2hkekkzSVNtNkVBM3FEaFNMSk5TbC9WQzhNaVRQd1MvN245cFE5MW8za0l2bmxmd255R3lCZ2pWSW5BQ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5ODkxNTE3ODIzMDI6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlL29CRVNDek1nVzd1MG5RK3IrbmQzVFFDMzBwYTR3cmhFWXYzVnBjY0FLIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWdJRFE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NjIxNTU1NjMsImxhc3RQcm9wSGFzaCI6IjJQMVloZiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQ2V3In0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY ADEEL-MD 🇵🇰*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://cdn-bandaheali.vercel.app/file/ADEEL-MD31424.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "ADEEL-MD",
// add bot namw here for menu
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// true to get auto status react
STICKER_NAME: process.env.STICKER_NAME || "ADEEL-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923035512967",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "ADEEL-MD",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀᴅᴇᴇʟ-ᴍᴅ*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://cdn-bandaheali.vercel.app/file/ADEEL-MD31424.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive*ADEEL-MD*🇵🇰",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923035512967",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
