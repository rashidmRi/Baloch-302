const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ADEEL-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0hWYlVBR25Va3BUczlFVWlQY2tCekZsdDFOMUo0cW1OWHhKVGNjdTYzdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicjJyRmZMSFppa2NiZ202aXFCVElJZ0Vza1pnMDZxNlRaVllGOW5ZMzBIaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtSDliQ2lUTEF5MEdMNm9KRXE3RWZCM0drb0NuTGdFRWMwalhQUUc4ZmxFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzU1JrV1IzRENXRFZBNDA5VUx2VTZIUGp3TlBxUUxuQW53WU1EVVo1bEEwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRGRFN2dmIwR1R0Sk9sWGtyNVJhUGt3MTBOM2dCSHM1b3ZSYjZsWWxTMUU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InQwTE9qVlRialE1K0ljbHkvWHBuL3ZnZlh1TURyeFk4bmVFWVZNZ0RWemc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUQvWnRGK0N2TnhBRFF1MldNVmhWalZlN1d5bk93ZjBOOUlLcmFMTEVtaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM3FpaHpLWWlYV3Vic3M3eU5rTklQc1laR2I4SjlabFplWmdYb1lodTBUUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1YVVZEWnFlZUtDNVpWMElsUUhOdFRaWTkzM2tpeC9HcUlnRGc2TG5oallXcUZRejIyZXB6THF1ZkdGaDVHK0Q4Y1pmbUgvZktnbUpZNFBxUVBmSWdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU5LCJhZHZTZWNyZXRLZXkiOiJlMC84eFRGd2hTVmVDN3FlbytHYnhuNGdJZkxjWUNKT1ZMcTRBSmJTaU5rPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjUwNDk0MzY0MzE3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDMjE3NzM1NkUyNjRGQkZGOEFGMzVFRjUwM0E0NUI0In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjQzMDM5NDN9LHsia2V5Ijp7InJlbW90ZUppZCI6IjUwNDk0MzY0MzE3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDRkMyOEYwNzM4MzFCNDFGNzEyQzg5QUI1QTI4OEIxIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjQzMDM5NDN9LHsia2V5Ijp7InJlbW90ZUppZCI6IjUwNDk0MzY0MzE3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDQkQ0RkZDOENGM0REMkJEMDY1Nzc0ODhFQTRENkU4In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjQzMDM5NDR9LHsia2V5Ijp7InJlbW90ZUppZCI6IjUwNDk0MzY0MzE3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDNDI0MzZDNzQ3RUU3QUIyNEVCMzExQzIzM0U3OEUwIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjQzMDM5NDV9XSwibmV4dFByZUtleUlkIjo4MTMsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo4MTMsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiQURFRUw1TUQiLCJtZSI6eyJpZCI6IjUwNDk0MzY0MzE3OjEwQHMud2hhdHNhcHAubmV0IiwibGlkIjoiNjE5Njg0MDg5MjgzNjk6MTBAbGlkIiwibmFtZSI6IkJhc0RoYWggR2FOZyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTCszd2FZRUVMZklwTWtHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiMDQ4VlJVYk5WbjIyZDl2NksrZkRjbVBNbkFvdFFYYkxSaWZhRWZDQ2tXMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZ1BYVTJMUzFIem51N1RmM3RmeHR1b2ZMUWJDV3AwOUNyVGJleWJlTnR5Um9MSFpVUW9pUkNTOE9LQkE2YWZpRWthUm5STzRwWklINFFyREFRd1ZuQmc9PSIsImRldmljZVNpZ25hdHVyZSI6ImNOMVhkVzRFaEdYYitOd0NpMTZjMUIzV0NoQnliMU0xS1ZpVDVUekxram0xd212Q2N1Wk1aa0dWckdjd1VJS2xJK3Jzb2s3eGlPb3NESWRDQkVwNGd3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNTA0OTQzNjQzMTc6MTBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZE9QRlVWR3pWWjl0bmZiK2l2bnczSmp6SndLTFVGMnkwWW4yaEh3Z3BGdCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSUNBZ0MifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzY0MzAzOTQxLCJsYXN0UHJvcEhhc2giOiIzUjlaMzkiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUcvNSJ9",
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
