const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ADEEL-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0hreExQb1JTTWpEOUN0MW43aWlzWWhYUXFGV29vbE5iWVF6Rk9mb0Iydz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia3p3Y0RLS2JwZVY3SVhHdjQxN1ExK3YvNHVqTzArclJHbnpIaElQWXNXVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2RXVQQVFPQ1lLTldTUS9IL3JSSEkvMzZueWtJWUViVk1GWVZPQ1BweDE4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpVlZyNEE5NFljNkM0a21xejhpUWFKajhTSjF3SnFnSlNaQjc5eTdxNVQwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFLaXpadjVvV2NHSXVCL1RnWU90NkRKYVZWUy9rWnRMeEd5ZVJPWXNQMHM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZKVmIxcDdLbTZoZno0Y3RxaG1pWGIyZGRiUXpzUllNRFZudmlYOE5QQjQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMk1qdE9sWnJhN1pKdXhZZ3JyM0FyakhWRFUrR1ZSWnVMMHQyUXFKRk9Vdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUzZBNW5WVEljOG9CVGp2RXdBbWRBTktuN0tvMVFwRm1ZN3BWZ2w2cXFoQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRGVDd0eFd2ZjdoYnoxc1hqTDg5bnlYWjV0bUJuR0cwOSt1TzJJUk9NTUtkL0ZUUitJM0s1RjUra01OWGFMZFRZNWp1VG1wU0RTQjV1OVJBTXB2ZWpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI5LCJhZHZTZWNyZXRLZXkiOiJvNkpSVDlZa2ZZZ2Rhd25mREF0ci8vWjl3MXRKNkg4NGlkTllNYlo0SndzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk3MjU2OTE0MDAwNUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQzc1MTdBQjgzNkQwQTU3NzE4MjkzOEQ3MjEzODAyNSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzYyMjQzNzQyfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5NzI1NjkxNDAwMDVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUNBMTUxRENFRkQ4OTY5Q0IwQkE4MDYyQUQ5Q0FGRjEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2MjI0Mzc0Mn0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTcyNTY5MTQwMDA1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDNUU2Njg0MTg3MjE0MkY2RjlBRDkyQTZBODFBMDkwIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjIyNDM3NDV9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkFERUVMNU1EIiwibWUiOnsiaWQiOiI5NzI1NjkxNDAwMDU6MUBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjI3MDI1MjkxNTA4MTI2ODoxQGxpZCIsIm5hbWUiOiJCYWxvY2ggMzAyIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKVFJsL3dIRUkvcHBzZ0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJFZ3BIMWpNdEdyZmpPYnplV3dTRFcrejN4dUhCMENubFppNU1kVFZiQTFnPSIsImFjY291bnRTaWduYXR1cmUiOiJIZ01VMzZUdk9zem5SQzBwcDAvUmRpZVBhSTk3aUxFOXp5eCt4VUE3YXBvY3JicC9YS21keFJTZVB0ZGZWend3dG12cm9INU1qODdLWFZZblNTeVdCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZUw3TFE5cko5SWh4R29OWmpWSFViVXFWK3VnNGNUQmg3Vmw1QzhhSklCQkRoTkZaR0VwSGwycUxFSlpkK21PK0k1cjRUb3BKYzV3Yk9PeXp2MlVjaVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NzI1NjkxNDAwMDU6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSSUtSOVl6TFJxMzR6bTgzbHNFZzF2czk4Ymh3ZEFwNVdZdVRIVTFXd05ZIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQklJRFE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NjIyNDM3NDAsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRk9EIn0=",
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
