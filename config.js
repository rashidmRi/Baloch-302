const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ADEEL-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOENHcHdzdzcvREJ5d2FpUUVvdStNck1xV1VhL3UwWXBBSGx5eEtVZWdrcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVll0S2RQZ0VVK3Q1OEFtZ09TdlBFTzR3KzhIUit6UVpWZXBZS2pRV3V5TT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFQjRUOHNpWlNid0MwY3BzcUlNQmhybDVjbUJrYk9yaFVTWFJ2cTc1STJZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUUDNvNSt4QnNqZEp3d0EydVlqRVhaMndENEhGTUhsU0FsZ0lBc3ZXaVRJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVCTHo1SGQwOHFuRDFVZVBtRk1Eekp6U0RHUHhDYStRYk5pMW02RzY0RzA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImQ3d3QvYWJzcEtSMERHQkZHeUhDU01IVjhlL1RKdVJaRjNBUmxyWTQ5UXc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUhLdjV6RjdtbUU1TmkrVXNvZC9MMzBXRG9kYW9OL0RWU21XSzI3WlMxVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSE1UcnNXdmRhbHQvWWFGdHBVWmxhM1ZvZSs4bVgvZkJqclZXYnBlWllURT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InI4U3BzNVZ5bkt6dWJEYldxNEFzNDN4N25DU0V2Q1JpV3EzckdpNHc4cW1GdjAwTUVUK1dwanNEU2FYdnc2YmticE5rY1Z5NXpvQVl2MWw4dFkyVkJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzEsImFkdlNlY3JldEtleSI6IjJsNXV4Sit2Q2VNT2xCSWt2VlJCb3RjOEx2TUdsbnlXSnVsUnZhU05Ranc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiNTA0OTQzNjQzMTdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUM2MzVGQTNCQTQ1MjQ5MzM1QkNEREUzODdBNUFGMjgifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2MzQ4MDg3N30seyJrZXkiOnsicmVtb3RlSmlkIjoiNTA0OTQzNjQzMTdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUMxRDQ5QUU0OTdDNUNFREY2NDVDRjA3Q0RDQTY0NTAifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2MzQ4MDg3N30seyJrZXkiOnsicmVtb3RlSmlkIjoiNTA0OTQzNjQzMTdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUNGMDE3NzU2Mjg0OTQ5MkUyQTc5MjgzM0U2MzJBMzkifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2MzQ4MDg4MX0seyJrZXkiOnsicmVtb3RlSmlkIjoiNTA0OTQzNjQzMTdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUNFQ0M5QjJEMjU5RDkzOEVCODIzNjkyMUY4RjFGQUYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2MzQ4MDg4MX1dLCJuZXh0UHJlS2V5SWQiOjgxMywiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjgxMywiYWNjb3VudFN5bmNDb3VudGVyIjoyLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJBREVFTDVNRCIsIm1lIjp7ImlkIjoiNTA0OTQzNjQzMTc6NUBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjYxOTY4NDA4OTI4MzY5OjVAbGlkIiwibmFtZSI6IkJhc0RoYWggR2FOZyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUGZXcFBZQkVKMnE4c2dHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiKzc3U2d5QUJrTENJa25RVkU2TEJNSlplWkxkY0hPUkR3K3Z4NEhyNWxSOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiT09tQTJoNy83U3d4OHo1RXJPZEZWeW10RFpzZENMcWNueEQ3OWhEUkJ2enJjMFFidkJ0TjBBYzFIODZ6djE5V0d4eDI2YkY0M3VrZ2UxenpMalFHQkE9PSIsImRldmljZVNpZ25hdHVyZSI6ImJHdGhwNXFhSlM4MWZBV01lWCtQSUFxM3E1VXpnS1krU3NqWGx6Rm1iK3ZkNjFWbVdYQnRWOXJOODVmbzNnZ3ZPNnBwOU9SeCt0ei9uNWVsMVo0NkRnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNTA0OTQzNjQzMTc6NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmdSswb01nQVpDd2lKSjBGUk9pd1RDV1htUzNYQnprUThQcjhlQjYrWlVmIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQklJQ0FnQyJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NjM0ODA4NzUsImxhc3RQcm9wSGFzaCI6IjNSOVozOSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQzY0In0=",
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
