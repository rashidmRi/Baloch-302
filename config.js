const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ADEEL-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUliZHJtZHFDdVFyK2lCQ3RHZGdwM3VHb1IrZTdiWXRCeDVWbWsvSEhYTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic2RNSUVZSWxJQ0lSNmJUcFVNV01sbkdMMTlzUkJUQTQ2YWZXS1pJMWduZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFQ2pkZVAxQkJtaGp2Z092blgvQmNFMGVLV1ZxZnJNRk5wakErVjl6RW1vPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRNmI2ZnhIbWxUVjZITzc4OTVTTStTV2lpWUwvUlJsOWlWd0VNZjYzZHdRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1FRWZTK1RxVXFVak5JYStqK0VjQkFmRGgzbXFkZmR4ellLaERTNDlGMFE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitMRkRJcUIxQTlkdkJidXRzSSswKzh5dHgydFZmaTBzMHR6bDliUjViaXM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMk5velorUzZmNU1DdzZDcEJLOTJaZE9mSUxhR3VWT21CRWtzWFh3SFRFZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU3o5RFFxRWVObDFxL3ZPQjVrVzdQZTFEdXpSM1BkR3piSkhlNkpwNEkwOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVSRDg0bEtvblIrQmxsTTMrQzRmODM2VmwvK1JCYlFidy9saG0vbXM3YVNSQ3A2TDBWUDdyQTVyaTJ2V3d2UWhVOG9Eb0gxdjdWTGJOaGdWRkh0K0N3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzQsImFkdlNlY3JldEtleSI6Im9TbFFzanBkL2hVTHNTbEhldmw0azJERU1ZdCtuNHJqaURzdExOTGFnVmc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTkyOTI5NDc3ODg4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjZCRjFGNUE3OEVBMjM0Q0EyQ0RCRUI2OTBCNEQyNTQ2In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjM3MDM2MjZ9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk5MjkyOTQ3Nzg4OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI3M0RCRTIzRDhEOUFFRjFERTRDRkM5NTkzNjJENTMzNCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzYzNzAzNjI2fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5OTI5Mjk0Nzc4ODhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOUE3NzNDOTVBOTQ5OEYxMzk3MjdDQjZGRkYxMjRGMzkifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2MzcwMzYyNn0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTkyOTI5NDc3ODg4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFGMjg5QTUxRUY4QzgwQjU2Qjk4RDJCNDZGNkE5Mjg5In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjM3MDM2Mjd9XSwibmV4dFByZUtleUlkIjo4MTMsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo4MTMsImFjY291bnRTeW5jQ291bnRlciI6MiwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiQURFRUw1TUQiLCJtZSI6eyJpZCI6Ijk5MjkyOTQ3Nzg4ODoxQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTE1NDEwNTUyODA3NTU0OjFAbGlkIiwibmFtZSI6IkJhZFNoYUggR2FOZyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUFRZZ2F3R0VMdjIvOGdHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoieFF4UFBJSFhpMzhQcXd0WXNkeUIyMVVBSnliUEdEc1ZyVlJ1MXZseVVSRT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiV3hYbjBtZEhuMHJ2TmtVemZSdy8xRjVsc1cwVUcxcTZKZEhQS1BaclFvVG1PWlhjVG1XdEwyWGw1ZERsMkYyUm9CTVFPQlczT05ZUThqTXVjVFpiQWc9PSIsImRldmljZVNpZ25hdHVyZSI6IkFLOTExcGhMSnBjMHdYS3NEaW1YTGlvSjc2WkV2M3UzMXhGQi9jdThvbFF1d2gzU3JDTDNZQzV1aERlaFZrZHNud3NKWjl6UWtJU0JialZOaTdMcERBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTkyOTI5NDc3ODg4OjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY1VNVHp5QjE0dC9ENnNMV0xIY2dkdFZBQ2NtenhnN0ZhMVVidGI1Y2xFUiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSUFnZ1MifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzYzNzAzNjI0LCJsYXN0UHJvcEhhc2giOiJubTNCYiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSVpCIn0=",
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
