const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');




//coddeed by  SAIDALI 


Asena.addCommand({ pattern: 'number ?(.*)', fromMe: true, desc: 'owner number' }, (async (message, match) => {


const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:SHAH MWOL\n' // full name
            + 'ORG:script SAIDALI;\n' // the organization of the contact
            + 'TEL;type=CELL;type=VOICE;waid=994406368079:+91 7736951082\n' // WhatsApp ID + phone number
            + 'END:VCARD'
await message.client.sendMessage(message.jid,{displayname: "SHAH MWOL", vcard: vcard}, MessageType.contact)
}))
