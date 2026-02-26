/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['91xxxxxxxxxxx','4915255438151'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Knight Bot Mini', 'Professor'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Knight Bot Mini',
    prefix: '/',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || '',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Knight Bot Mini',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot', // set bot or all via cmd
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Asia/Kolkata',
    
    // Limits
    maxWarnings: 3,

    KnightBot!H4sIAAAAAAAAA5VU25KiSBD9l3rVGAFFwIiOWK6CeMELim7MQwkFFiBgVaHihP++gT09PQ+7E71vRZJx8mSek/kDFCWmyEUNGP0AFcFXyFD7ZE2FwAhodRwjArogggyCESjNM9uvOXhSt3VNQonwvuLi1XaQLJTeRg2iy913jVmQjfdv4NkFVX3McfgHwIPCHmzphfe0yGJyXznJyujd5gc3OAheeOvlBxZdNsdhrmVv4NkiQkxwkZjVCZ0RgbmLGg9i8jX6SzuNx7ns6HJzrYxJk+2D8WIRepf07Er3NK1JvUImmSJ/+TX6ztyZBJGgVf3I3EL3esj0tDMrHHOeGkfVMIhxpZmlsoW1fKdPcVKgyIlQwTBrvjz3syrqh+OFv8j+Cm8jtD2v8UTY2fY+kDPPlXI8m+6ite0VydeIs7pEgTnY9x4n3+LThhXjVVOqh4JW04ew3wfaNXsshtNOP/yduEc+vJL9n7nrYx9ONPVs5vehvbAG4cZ1KOxvSSgutCNXL4VFfdwt6JSbfY3+RKRLMi5Lbax5DaqKjeoqO8HYeiTf2LIrCb1ix6PHepZyn/Qhq8mfWN6wxcunMK/S5pzcVGIST6yw/bjdTOj712Yn97GNLLTT+KbnxA7tHPOZt0gOswkHaRkjZHN5EI6PXj71K0/czE879fb26ihDjROBEf/sAoISTBmBDJfFKzbguwBG1zUKCWKv8YIBC418WAR9Y2g42uw2CR4Ta7KBW2u4m6dOZvtZqbjlZDJQ30AXVKQMEaUosjFlJWlmiFKYIApGf3/vggLd2btwbbk+3wUxJpT5RV3lJYw+VP34CcOwrAu2bopQbx+IgBH3GUaM4SKh7RzrApLwhK9IP0FGwSiGOUW/OkQERWDESI1+ba1eRu3gRclTD7IagC44vwTBUduzwouCKA76Mi/yI4H7i367tbiwqr4ViIEuyF950nAgK0NpKEqcxA/bxDb+/MWwBYwQgzinrfXm6KHsfcNcoCCh3HisOomqJyr47OjDGu+jPxn0jHC2s4VbJ823wqajl75fzoKb7y8NIeUclVvIYbwo6Nu/gIAREDprJA3leaSZAxQct0VC+g8boesdbwxd1/3qKATb/Wk2S/rSYTkXybS51Bd1HlxkEl2PR59SHxW3lRQQxx7b/KoxdfWtrRahKw7R78UWGmVLriLBbj7knbOolQ85JOh4UDaw2gnpgybpbkvgYT+88yblx16ngifTK4cdGEtry+jAPURUZI5pOIIkxbq71tR3076WJv95rPDLTq1W7WeM0Wv3C9gq+AXt3pm3HuOe3d9Afp6T/1hJbb+UJkVZWSeFeqW4jbJecrEs17BkyzJVpVR0dW5cbftRSeD5/N4FVQ5ZXJIzGAFYRKTEEegCUtataZ0iLv90pdTEUZNk3raeQ8rUz0XY4DOiDJ4rMOIlSeAFRRCV9yyPlJUN6QmMQH+lHPoKeP4DC6LpD1YHAAA=
    
