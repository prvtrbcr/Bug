////recodee by : famofc
//// wa: 923350963366

































































require("../../../config");

module.exports = {
    type: 'convert',
    command: ['textmaker'],
    operate: async (context) => {
        const { famofc, m, q, prefix, command, reaction, sleep, zreply, toTelegra, quoted } = context;
        
        if (!q) {
            await zreply(`Add input, Example: *${prefix + command} top text|bottom text*`);
            await reaction(m.chat, "❗");
            return;
        }
        
        let [peenis, pepekk] = q.split("|");
        pepekk = pepekk ? pepekk : " ";

/*        if (!peenis || !pepekk) {
            await zreply(`Invalid input. Ensure you have both top and bottom text separated by '|'. Example: *${prefix + command} teks atas|teks bawah*`);
            await reaction(m.chat, "❗");
            return;
        }*/

        try {
            let dwnld = await famofc.downloadAndSaveMediaMessage(quoted)
            let Bjirka = await toTelegra(dwnld);
            let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(peenis)}/${encodeURIComponent(pepekk)}.png?background=${Bjirka}`;

            await reaction(m.chat, "🔁");
//            await sleep(1500)
            await famofc.sendMessage(m.chat, {
                image: { url: smeme },
                caption: '© 𝗙𝗮𝗺𝘇𝘆𝗰𝗿𝗮𝘀𝗵 - #ꜰᴀᴍᴢʏ-ᴍᴅ'
            }, { quoted: m });

            await reaction(m.chat, "✅");
        } catch (error) {
            console.error('Error:', error);
            await zreply('Failed to generate meme. Please try again later.');
            await reaction(m.chat, "❌");
        }
    }
}