const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ADEEL-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0tvdHRGc25qUE9meWVTczFPa3M3eUdySjc1VnNGUzRwOTZ3TkFIbkRIRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMUlvb3ZhbU1jd1l6RzZlYUZDVHVHL1lvSC9XVWJHSHNQTnhKZE9KcmszUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzRFF1a3Q0bTdwd0FKV3dzd1lsV2F6UkFrTDJXV3d5ckI5U3R2M01NelVzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSZFA2TjNyclFRQk1RTmhLNmp4Y2pJRFVEdFN2T1VHQThGK2JGRVRBbFhZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndKTTVIRm9KM1kzMmZIRHlFVGMxZk1hSnI5R3M0dkxrVUtzN3k2MXprM3c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IisybGJJaDk2M2daTjJtdjh1TmNsQkFJZEpZdkpPMjczSm9NSTRIdGk5Rnc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEpnTVpEQVpLejViNFZsaFZzVGR4NEI3ckdXNjczOUt3NjNqR0pqanpGQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidmlnUmF5R09pZDhzVWp3SUw0WGk4ZXgrSXF2SFRLdUZDeVhxcEl0dEREaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJmTWdxMXFFWE9LV2w1UjM0b1Q3SVVheFNIWTBIbTBidEJSdTFZMlEwTVVYeGtDYjdsdHE0TWlQQVRJcXZOekhoUmNxZjFVMmtsU1QwbFowSE9MeUNnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzUsImFkdlNlY3JldEtleSI6ImlCNnNWNG5JbFQ3Nkdjd0V3QTkvbCtiS0pHc1IzMU9aT0RVSDJJaSs3dU09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiNzkyNzI2ODgxMzFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTU4QzcxOTk3NjUxQjdEMkRCRTc4OTc3ODBENDk0N0MifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2MjQxNjE1MX0seyJrZXkiOnsicmVtb3RlSmlkIjoiNzkyNzI2ODgxMzFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTVEQTg3QzBENTE0MzEyNkJEODUyREJGMjNCNTlBNTgifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2MjQxNjE1Mn0seyJrZXkiOnsicmVtb3RlSmlkIjoiNzkyNzI2ODgxMzFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTVCODM5RUU3QzA1MjM3QjBFMjIwRjIyNjEwMENBMTgifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2MjQxNjE1NX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiQURFRUw1TUQiLCJtZSI6eyJpZCI6Ijc5MjcyNjg4MTMxOjZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiYmFsb2NoIiwibGlkIjoiMjc4ODI1MDE1NDc2MjM3OjZAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKejJoeVlRaUt5eHlBWVlBaUFBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJKVUdaZ3NPamJ5NlRrNnFjeTZNRTZMK0FkbjFVYWhOVWVqWXFsZkJpVFVZPSIsImFjY291bnRTaWduYXR1cmUiOiJWMWNXQzhOanNsMGZFejBUNEhmM1cwMjdnb3RmODdCR0swSlJUbzd6ZHl5eXlUbk1nSkt1dHA4YTBFdEdwMFA5cGt2cStDd0ZvRTJpUmZpdGY5S0RBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoieXhBK0I4aG5rbGl5bmJvS2g3VlJkUStMbTJITUVaKzFWVitTRnhVNENnTllId1hmcVowVzZPdWlsTTdPSmFqME1OVmF6SGI0NFRiNXhBZkJ5dnlTQ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI3OTI3MjY4ODEzMTo2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlNWQm1ZTERvMjh1azVPcW5NdWpCT2kvZ0haOVZHb1RWSG8yS3BYd1lrMUcifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElFZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc2MjQxNjE1MCwibGFzdFByb3BIYXNoIjoiM1I5WjM5IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFFeG4ifQ==",
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
