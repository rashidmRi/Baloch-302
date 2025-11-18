const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ADEEL-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUcvSS9ibHJLN1psUjNKUDUveUdqejhHZEgzd3AwQWh6Q1NNb2RwenpXQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicFVNZHZGazR0SUlEdWFGWDZrc2xVbWd1NXMwWWxDSHhnMEZCZGxHdHVRZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnSDV5RWFYa2g4YlorQWZ2VzhwVExsNER5V2hIWWlUODE3dzRUMjBuSzF3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRQlMzVGpHYTB6cjZWQktzM0drNFFFQVEyM2grN05LblhUZ1k0aDdSY1RzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklMUkVhdXlIQjhHaTBWSTE1eUpmeWE2T3M4cVNzbWdyNFN3UXJlUHRJMnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVJOHpFdDRRbkdZanZOYWYwVE9zT3ZxNU1TS3pqYmhlUnlKTEM3TnZhUTQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUIwOVh2NFp0RzRudjlhc0VyM3h4Vm1zWGJLMjZiOThBK2Iwek9qa1lGQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiREM3WWYwa1Zia0pTRm5XcmdPdkUxemhIdSttNEFUbHlKbWx6RGpaV3NWVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik94SkZRbWZybUxRd1NuNFlxSkEzZjJEUmtqeW9sUEQxVkZ0WEQ3T0RzL0JYNnFQYTZDbkllbGZMNVhDSzExMmZQeUpYTGUzNzNTRHlLZ2JpT3lXY0RRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjEsImFkdlNlY3JldEtleSI6Imc2Z0tKOXQ4QXBSWWJKcnJEYlNUa2g4eDlhMFpjNWtGcFVDUmdwY1c4Nzg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiNTA0OTQzNjQzMTdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUM4M0U4NTg4NkZEN0M0OTg2NkM2NjA4QTBFQUVCOTAifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2MzQ4MTQzOH0seyJrZXkiOnsicmVtb3RlSmlkIjoiNTA0OTQzNjQzMTdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUMxRjVBMDgxQzc3MUI5NjMzMkMyOUREMTFDNjAyQjAifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2MzQ4MTQzOH0seyJrZXkiOnsicmVtb3RlSmlkIjoiNTA0OTQzNjQzMTdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUNEOEJDMjM3QjE0QTQ4QzVDNjU3RERBMDY0RUIxOTIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2MzQ4MTQzOX0seyJrZXkiOnsicmVtb3RlSmlkIjoiNTA0OTQzNjQzMTdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUM5MjU0QkVCRkU2RjJEQjNGM0Q0OTMyMDc5MTQ4RUEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2MzQ4MTQ0MX1dLCJuZXh0UHJlS2V5SWQiOjgxMywiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjgxMywiYWNjb3VudFN5bmNDb3VudGVyIjoyLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJBREVFTDVNRCIsIm1lIjp7ImlkIjoiNTA0OTQzNjQzMTc6NkBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjYxOTY4NDA4OTI4MzY5OjZAbGlkIiwibmFtZSI6IkJhc0RoYWggR2FOZyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUGpXcFBZQkVNK3U4c2dHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiKzc3U2d5QUJrTENJa25RVkU2TEJNSlplWkxkY0hPUkR3K3Z4NEhyNWxSOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiaHovZ0d5VEhKYVZlLzJ5V3R2dlY3OVVGYkNXYW4rbzI4bndWN2lFa0NYd3pvZkV0aGh0UlBGNUxvaUNVRXh0b1QyREZIY01tMmt2Z0h1akxFQlN4RGc9PSIsImRldmljZVNpZ25hdHVyZSI6InFBTUZYdVVaeGNLMHJyWnpucUQ4Qm1KMlZjY0d5Rjc4NC9JM3JxUkVpTlQ1ajhRVEVIdXNjaDdyUVh5YWNVQ2pRNWdlRUJoWjdsTVk1VnA2bGllZ0RRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNTA0OTQzNjQzMTc6NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmdSswb01nQVpDd2lKSjBGUk9pd1RDV1htUzNYQnprUThQcjhlQjYrWlVmIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQklJQ0FnQyJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NjM0ODE0MzYsImxhc3RQcm9wSGFzaCI6IjNSOVozOSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTmFYIn0=",
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
