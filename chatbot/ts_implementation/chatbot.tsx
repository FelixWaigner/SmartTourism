const dotenv = require('dotenv');
dotenv.config();
const { App } = require('embedchain');

// Run the app commands inside an async function only
async function Chatbot(){
    const tourism_bot = await App();

    // Embed knowledge from online resource to the foundation model
    await tourism_bot.add('web_page', 'https://en.wikipedia.org/wiki/Tumpak_Sewu_Waterfalls');
    await tourism_bot.add('web_page', 'https://id.wikipedia.org/wiki/Museum_Brawijaya');
    await tourism_bot.add('web_page', 'https://en.wikipedia.org/wiki/Mount_Bromo');

    const response = await tourism_bot.query("Tell me about mount Bromo");

    console.log(response);
    return ( response );
}


export default Chatbot;