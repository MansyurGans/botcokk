let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `

╠═〘 IKUTI MANSYUR 〙 ═
║
║➥YOUTUBE: https://bit.ly/35skPNh
╠➥ INSTAGRAM: https://bit.ly/3sgwd8v
╠➥ TIK TOK: -
╠➥ WHATSAPP: https://bit.ly/2LzVB8u
║
╠═〘 DONASI 〙 ═
╠➥ Dana: 0813-5867-9254
╠➥ Gopay: 0813-5867-9254
╠➥ Tsel: 0813-5867-9254
║
║
╠═〘 IKUTI MANSYUR 〙 ═

`.trim(), m)
}
handler.command = /^(ikuti)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

