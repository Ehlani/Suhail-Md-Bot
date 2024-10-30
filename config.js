const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_07_45_10_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTE1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzksXG4gICAgICAgIDI1MyxcbiAgICAgICAgNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTg2LFxuICAgICAgICAyNCxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDY2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzLFxuICAgICAgICA4MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODgsXG4gICAgICAgIDYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTksXG4gICAgICAgIDE5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjksXG4gICAgICAgIDExNCxcbiAgICAgICAgNjksXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODMsXG4gICAgICAgIDg3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjUxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjksXG4gICAgICAgIDMxLFxuICAgICAgICAyNDksXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDExLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxODAsXG4gICAgICAgIDI2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTgsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDY0LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwLFxuICAgICAgICA2OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMzksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDk0LFxuICAgICAgICA4NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMixcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTgxLFxuICAgICAgICA1NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTksXG4gICAgICAgIDksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDU1LFxuICAgICAgICAxNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODEsXG4gICAgICAgIDgwLFxuICAgICAgICAxOTksXG4gICAgICAgIDY1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI3LFxuICAgICAgICA0MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDQwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDExMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTE1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUsXG4gICAgICAgIDExLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgODUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDksXG4gICAgICAgIDI5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxODcsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxODMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjIyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTEzLFxuICAgICAgICA0MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDgxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTU5LFxuICAgICAgICA3MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDExLFxuICAgICAgICAxNzAsXG4gICAgICAgIDY4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2MixcbiAgICAgICAgNDcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjI3LFxuICAgICAgICA3NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWDZJdVQxbEtjTFU5MFgrenFCTjdBcVJjU2VRYnNTZDBnQWNoKzJJOURRND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNjM3Nzk2NjA3MzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkNGRkRGNTcxOTc0RUU2QTUwRTQ2RURFNzY2NzdGMTc4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMDI3NDMwOVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI2Mzc3OTY2MDczNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMjUyRDczMUMzQjlCQzQzRjIxOTJBNEFCQUFDNzhDRjFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMwMjc0MzA5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImxOa1ZMNk5tVGItQTY2TVN6TEQwbndcIixcbiAgXCJwaG9uZUlkXCI6IFwiMTE2MTRiY2QtMDkzNC00MjI1LWJhMjktMTZmOWYxMDM2NDlmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ5LFxuICAgICAgMTcwLFxuICAgICAgMjM0LFxuICAgICAgMjMsXG4gICAgICAxNTAsXG4gICAgICAxOCxcbiAgICAgIDIyMSxcbiAgICAgIDEwOSxcbiAgICAgIDIxOSxcbiAgICAgIDIyOSxcbiAgICAgIDExNSxcbiAgICAgIDEzMSxcbiAgICAgIDc1LFxuICAgICAgNjcsXG4gICAgICA4OCxcbiAgICAgIDExOSxcbiAgICAgIDIyNyxcbiAgICAgIDgyLFxuICAgICAgNDcsXG4gICAgICAxNjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzMyxcbiAgICAgIDE4NixcbiAgICAgIDE4NyxcbiAgICAgIDEwOSxcbiAgICAgIDIyOSxcbiAgICAgIDU2LFxuICAgICAgMTExLFxuICAgICAgMTgzLFxuICAgICAgMTI4LFxuICAgICAgNTksXG4gICAgICA0NCxcbiAgICAgIDg3LFxuICAgICAgMTQ0LFxuICAgICAgOTgsXG4gICAgICAyMTgsXG4gICAgICA3LFxuICAgICAgMjE0LFxuICAgICAgMjE2LFxuICAgICAgMjEwLFxuICAgICAgMTU2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUDJDOXFvR0VQekhoN2tHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJndVNYWFpwWFBhdXpTNEx3Q1Q3YkhnQk1rTG9XVEMwREplTmMvTmo3T0QwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjlocGlTYUhtZVJuZERhOElTSE1zNUg3ZWxndC84T0hDOE9lYmdSVU9UNXBKeUsxOEJBZUFqTlViOXEwaDRjQ2Z4eEUxQzNkV29HOFhpN09pRTBrbENnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImFYaDFsd3Znem1BaWswSXRjcDd3TE9NVUZYajhyKzQ2aGdIQ0JKNjNLRTZsTVZYM2s0Y2lQd1Q4T0Vna09VVjc0ektpTmpDbWVKOWZJK2N1cEwxQmlnPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzc5NjYwNzM0OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJuXCIsXG4gICAgXCJsaWRcIjogXCIxNTMyODc5ODY4MTA5NTY6MUBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2Mzc3OTY2MDczNDoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDI3NDMwNSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUIycVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQjJxLmpzb24iOiAie1wia2V5RGF0YVwiOlwidEZHRHVTQThjVFdZdStCc25Ubmk5Q25VMUlJVURKWXd2bzNUeXBKWld0VT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzAwNjI2ODEzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzAyNzQzMDUyODRcIn0iCn0=",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
