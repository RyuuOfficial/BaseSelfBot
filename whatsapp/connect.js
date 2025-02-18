/*
HAI NAMAKU AQULZZ
YAH DISINI AKU SEBAGAI PEMULA MAU MENCOBA MEMBUAT BOT KU SENDIRI
YANG PASTINYA BANYAK COPY PASTE
OKE TERIMA KASIH
*/
const { WAConnection, MessageType } = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal")
const figlet = require('figlet')
const fs = require('fs')
const { color } = require('../lib/color')

const xinz = new WAConnection()
exports.xinz = xinz

exports.connect = async() => {
    let authofile = './aqulzz.json'
    	xinz.version = [2, 2143, 3]
	xinz.logger.level = 'warn'
	console.log(color(figlet.textSync('Base Self Bot', {
		font: 'Standard',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		width: 80,
		whitespaceBreak: false
	}), 'cyan'))
	console.log(color('[ CREATED BY AQULZZ ]'))
	xinz.on('qr', qr => {
        qrcode.generate(qr, { small: true })
        console.log(color('[XINZ]', 'yellow'), color('Scan Qr'))
    })
    /*
	xinz.on('credentials-updated', () => {
		fs.writeFileSync(authofile, JSON.stringify(xinz.base64EncodedAuthInfo(), null, '\t'))
		console.log(color('Wait....'))
	})
    */
	fs.existsSync(authofile) && xinz.loadAuthInfo(authofile)
	xinz.on('connecting', () => {
		console.log(color('[XINZ]', 'yellow'), color('Connecting...'))
	})
	xinz.on('open', () => {
		console.log(color('[XINZ]', 'yellow'), color('Connect'))
	})
	await xinz.connect({timeoutMs: 30*1000})
    fs.writeFileSync(authofile, JSON.stringify(xinz.base64EncodedAuthInfo(), null, '\t'))
    console.log(color(' ===================================================='))
	console.log(color('│ + Github : https://github.com/zennn08/BaseSelfBot  │'))
	console.log(color('│ + Donate : https://trakteer.id/aqulzz        		│'))
	console.log(color(' ===================================================='))
	return xinz
}
