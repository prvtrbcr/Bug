global.prefa = ['','!','.',',','🐤','🗿']
global.owner = ['6285749517016']
global.ownMain = '6285749517016'
global.NamaOwner = 'Chloe -𝗱𝗲𝘃 𝗯𝘂𝗴'
global.sessionName = 'session'
global.foto = 'https://i.postimg.cc/B6wVRnzf/famofc.jpg'
global.simbol = '>'
global.connect = true
global.namabot = 'Chloe -𝗱𝗲𝘃 𝗯𝘂𝗴😂'
global.author = 'famofc-dev'
global.packname = 'Chloe -𝗱𝗲𝘃 𝗯𝘂𝗴'
global.url = '-'
global.urlWa = 'https://wa.me/6285749517016'
global.url1 = '-'
global.url2 = '-'
global.xcrash = {
    kz: "ᛃͣͮdevelopers ⌕",
    xv: "🧬༑𝐂⃟⃟𝐫𝐚𝐬𝐡꙲ౄ҈҉ャ",
    xz: "🖤⟩ ༘྅ɖɛᏉᎾֆɨx𝙲Ꮎʀɛ ⿻ ꧏ🤍҈ ༑",
    xk: "*👑༘⃰༡͜͡ⅅⅇ̄𝕧̷𝕠̤𝕤̊ⅈ͓߲𝕩𝕔𝕠̷̲𝕣ⅇ̈ 𑅆༏",
    xc: "🔥⃟༑𝐂𝐎𝐒𝐓𝐒༑⃟🧐⃟ ⟩ 𝐛𝐲 rizal-dev ☆ >",
    xq: "📱Chloe -𝗱𝗲𝘃 𝘃𝗲𝗿𝘀𝗶𝗼𝗻 9 𝗯𝘂𝗴😂✔️"
}

global.domain = ''
global.apikey = 'pltc'
global.capikey = 'ptla'
global.eggsnya = '15'
global.location = '1'

global.mess = {
wait: '𝗪𝗮𝗶𝘁𝗶𝗻𝗴 𝗳𝗼𝗿 𝗽𝗿𝗼𝗰𝗲𝘀𝘀𝗶𝗻𝗴!',
bugwait: `<!> 𝗣𝗥𝗢𝗦𝗘𝗦 𝗦𝗘𝗡𝗗 
𝘸𝘢𝘪𝘵 𝘢 𝘮𝘰𝘮𝘦𝘯𝘵 𝘣𝘦𝘤𝘢𝘶𝘴𝘦 𝘵𝘩𝘦 𝘣𝘶𝘨 𝘪𝘴 𝘲𝘶𝘪𝘵𝘦 𝘩𝘦𝘢𝘷𝘺 👾`,
ingroup: 'This feature can only be used in groups.',
admin: 'This feature is specifically for group admins.',
owner: 'You are not the owner <!> vanz.',
premium: 'You are not a premium user.',
seller: 'This feature can only be used by resellers and owners.',
usingsetpp: `Setpp can only be used by the owner, do you think I'm stupid?`,
success: 'Success',
bugrespon: `<!> 𝗣𝗥𝗢𝗦𝗘𝗦 𝗦𝗘𝗡𝗗 𝗕𝗢𝗞𝗘𝗣
𝘸𝘢𝘪𝘵 𝘢 𝘮𝘰𝘮𝘦𝘯𝘵 𝘣𝘦𝘤𝘢𝘶𝘴𝘦 𝘵𝘩𝘦 𝘣𝘶𝘨 𝘪𝘴 𝘲𝘶𝘪𝘵𝘦 𝘩𝘦𝘢𝘷𝘺 👾`
}
global.autOwn = 'req(62-8S57547ms11).287p'
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
	require('fs').unwatchFile(file)
	console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
	delete require.cache[file]
	require(file)
})