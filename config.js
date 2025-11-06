const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ADEEL-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUpBbEdIMmduUVVCdlVaYzhmdUY2Y20wTjJGVmV5RElJSkdWNGRDaXBGZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYTloUnNQaFlqV2E4RG1hQ3A1RDI3MVlUbGdBcGhvejRqNTFyMXRUNjFtYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4QjF1b2Y1SW5ldC8wNmZIbXpSRFB0eVR0YXRQYnhNeTc5d1YxVEd0VmxzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUOXpoY1dIUXFXbVFPT0g2c2hYNGdjK0IycDFHNnc5dDZ6NjZpaHlxQlJjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklKRHVuWjZ2WDN6YldodE1yNW82QjZOYXhmWXpGNFpMcXJYbXVYbFkra3M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjY3dThJdUYxLzVxT2hyU3hHZkNtQkRMTWZabmtGVGZlSzE0SVRibmdQelU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT1BCdFFFNnFSVFM0a3hNNWplOEJ3MTBZd0VJK0V0aTZxbzEwOVpXMkFsUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidFVQVzBTMk5zd2ErTE5BbWk1U3l1WDRLRC9DTk9XZmxXbUx2anVLUyt6dz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRBZ3RoemlZbXZmQnRDV05WeCs1bnV5U3o4QWFvQVFobG9KZ0pvSFhTdW41TENpbWxQd0ZyVmEyQk1QUUFCZ0RSVWpMRncwYTY3d1pIamxzUXZEbGlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjcsImFkdlNlY3JldEtleSI6IlZxZEY4ZE5RMmlKdG9QZnJCd1B3WlJnR3dvcGJqOUtYMDRZSlNaUm5wQ1E9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiNzkyNzI2ODgxMzFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTU1MkI2MDRGQ0I2OUY0NkI4Q0E5MzUxMUEwNDJERUEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2MjQxNTg5NX0seyJrZXkiOnsicmVtb3RlSmlkIjoiNzkyNzI2ODgxMzFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTU2QzQ2RDU2RTIxMjlGMDc2NjI5RjAyMDVFNjJGOEUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2MjQxNTg5NX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiQURFRUw1TUQiLCJtZSI6eyJpZCI6Ijc5MjcyNjg4MTMxOjVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiYmFsb2NoIiwibGlkIjoiMjc4ODI1MDE1NDc2MjM3OjVAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKejJoeVlRaWFxeHlBWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJKVUdaZ3NPamJ5NlRrNnFjeTZNRTZMK0FkbjFVYWhOVWVqWXFsZkJpVFVZPSIsImFjY291bnRTaWduYXR1cmUiOiJWNFBUWEgyblN4NWt0cHQwZkVweFFoY0E5V3J0MnMxcnNraUNsZlRlcDNJZUZyYjB6bEdjTCtlMVdqdUxIQlZVaDVnYmJXMnNWaVIzN0I3eWsySEFDQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiYzlxVytWTFdLbDNLRGV5QzhNTTB6UXFWb1ZtREVlbzBYbmZoaGZxaW1JQWEra2hrZFhiUjloS3huY05xT0xFTGUyV1V1MEtGTEg5Wkp4enJteGU3aUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI3OTI3MjY4ODEzMTo1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlNWQm1ZTERvMjh1azVPcW5NdWpCT2kvZ0haOVZHb1RWSG8yS3BYd1lrMUcifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElFZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc2MjQxNTg5MywibGFzdFByb3BIYXNoIjoiM1I5WjM5IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFFeG4ifQ==",
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
