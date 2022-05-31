const logfile = process.env.LOGFILE || process.argv[2];
if (!logfile) {
  console.error("No Log File Path Provided");
  process.exit(1);
}
const webhookurl = process.env.WEBHOOKURL || process.argv[3];
if (!webhookurl) {
  console.error("No WEBHOOK URL Provided");
  process.exit(1);
}
console.log("LOGFILE:", logfile);
console.log("WEBHOOK:", webhookurl);
const axios = require('axios');
const Tail = require('tail').Tail;
let logp = new Tail(logfile, { follow: true });

postToDiscord = async function (message) {

  // Only logs if it is a Parse Error or a Fatal Error
  if (message.includes('PHP Parse error') || message.includes('PHP Fatal error') || message.includes('local.ERROR')) {

    // Find everything between brackets
    let regExp = /\[(.*?)\]/g;
    let matches = regExp.exec(message);
    let msg = message;

    // Remove everything between brackets from the log line
    msg = msg.replace(/\[(.*?)\]/g, "").substring(0, 2000);

    // Force PHP logs to have proper line-breaks
    msg = msg.toString().split("\\n").join('\n')

    await axios.post(webhookurl, {
        embeds: [{
            title: msg.includes('PHP Parse error') ? "PHP Parse error" : (msg.includes('PHP Fatal error') ? "PHP Fatal error" : ''),
            fields: [
                {
                    name: "Date",
                    value: matches[0].replace("[", "").replace("]", "")
                },
                {
                    name: "Description",
                    value: msg.replace("Got error 'PHP message: PHP Fatal error:  ", "").replace("Got error 'PHP message: PHP Parse error:  ", "")
                }
            ]
        }]
    });
  }

}
logp.on('exit', (code, signal) => {
  console.log('LOGS EXIT');
})
function handle(message) {
  postToDiscord(message).then(() => console.log("Sent message:", message)).catch((e) => console.error("Error occured: ", e))
}

logp.on('line', postToDiscord);
logp.on("error", postToDiscord);