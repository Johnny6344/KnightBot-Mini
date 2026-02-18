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
   
    KnightBot!H4sIAAAAAAAAA5VU25KiSBT8l3rVGOV+ieiIRbmIgK0ojc3GPKAUUC1SWMVFnPDfN7CnZ/phd6L3rShO5MmTmad+gBIjCh3YA/UHqAhq4xoOx7qvIFDBrElTSMAYJHEdAxVsvas5j9PLtbx6F+e6XW6s1M9H4a4wBdK3ldOsJsh1YcbhJ3Afg6o5FOj4B0DKVcuNGZ7nXCqGbOhLOG1c5u16QdHMcK6OqJsVNtKanOkTuA+IMSKozIwqh2dI4sKB/TpG5Gv0jy5Ng2BJ18vFdlVcriHh5KB0Ip17tTcLXxC6GFbnVJifpl+k/yaeZwazF9MZ23uM3Eh++1b62ubE3gh6hiGftvsXProF2Tt9irISJnYCyxrV/Zd1ny7SUe93q8vquXl5Dl0vS6ek7F41yefRdXITnsuY7A7S5GR/jXiUvB65gItsGrUaLnnPsRy3uHRy2LC6l0xRvl+y1j7bMvgz8TX5yMrp/+hum2zr0yUMrsFSvggXZ2GPoh6HuqFE7qHZ64136vLNK2dtvkj/olGY7CfMRjNcYznRSifrOs0V5bUi63nm+XOZp1l9uX3SPa4b8ieWqwpvjGkR3CzbLqyGP0pS4OWRrLWT5dxWFB0LyqyaRWvTsqLDdRK0B1e2F0pxcYPihe5I1mOJ12iwJeF04jmsJWh59vSY6AR7OwEqcx8DAjNEaxLXCJePO0UZgzhpt/BIYP2QF6wv5574ke/uYh1DZFXUC27+c88kK65z2nRziEqLOyR5uHkCY1ARfISUwmSBaI1J70FK4wxSoP79fQxKeK3fjRvaccwYpIjQOiibqsBx8uHqx8/4eMRNWW/78jgfDpAAdfr7GtY1KjM66NiUMTnmqIXzPK4pUNO4oPDXhJDABKg1aeCvrZ3jZBBejkTBm7EiGIPzwxCUABXwCiOwgsBzMiMwKqP8Rb91A25cVd9KWIMxKB51ksjLiiiJgjSVGHEoHO7vvxgOgAmsY1RQoIL5Ct6U10A3bMdlvc6yNCPT5pkGfk/0EY136XOdniE6hQu2G70VL+xuNMdBgL19FwQbnX2b2tr0WT6mzyV9+hcQoAJmVBirLW+/rHbNjde1YLbGImM6dLdb+KPMc/29VXl7Wp6unb9eMHBNbvP+mq6wyYshFW6H16PSsW2FtmsuZ3ftdCtqm6ehWwJbdISfm21qXZo1M4SXZcLtYegYAhX10TRdwdGFrXhzRLbLdZsfamOn3LKdsehs0z0Rynd1/cJkb9P2mIjhBPqhjs6LdFJbcta9h/axNMXPxwo94jR4NXymCD52v4wHB7/g3TvzIWPT+/gTyM/n5D9Wcva6kZYlrsxcoWssvCSnSXYxTUc3ZdM0NAUrc22lt4vFrZLA/f59DKoirlNMzkAFcZkQjBIwBgQ3Q2jtMsV/aDbXMlvLstUwehHTWvu9CDt0hrSOzxVQGUlieE7hFf69ak1wtYhpDlTA+UrEKeD+D+qXJk1WBwAA
    
    }
};
  
