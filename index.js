const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const bot = new TelegramBot(process.env.TOKEN, { polling: true });
const app = express();

app.use(express.json());
app.use(cors());

const botInfo = bot.getMe();
botInfo.then((info) => console.log(`Bot started. Username: ${info.username}`));

bot.on('message', async (msg) => {
	const chatId = msg.chat.id;
	const text = msg.text;

	if (text === '/start') {
		await bot.sendMessage(chatId, 'Form button', {
			reply_markup: {
				keyboard: [[{ text: 'Form', web_app: { url: process.env.WebAppUrl + 'form' } }]],
			},
		});

		await bot.sendMessage(chatId, 'Order button', {
			reply_markup: {
				inline_keyboard: [[{ text: 'Order', web_app: { url: process.env.WebAppUrl } }]],
			},
		});
	}

	if (msg?.web_app_data?.data) {
		try {
			const data = JSON.parse(msg?.web_app_data?.data);
			await bot.sendMessage(chatId, 'Thank You!');
			await bot.sendMessage(chatId, 'Country: ' + data?.country);
			await bot.sendMessage(chatId, 'Street: ' + data?.street);

			setTimeout(async () => {
				await bot.sendMessage(chatId, '(O_O)');
			}, 3000);
		} catch (e) {
			console.log(e);
		}
	}
});

app.post('/web-data', async (req, res) => {
	const { queryId, products, totalPrice } = req.body;

	try {
		await bot.answerWebAppQuery(queryId, {
			type: 'article',
			id: queryId,
			title: 'Success',
			input_message_content: { message_text: 'You spend ' + totalPrice },
		});
		return res.status(200);
	} catch (e) {
		await bot.answerWebAppQuery(queryId, {
			type: 'article',
			id: queryId,
			title: 'Fail',
			input_message_content: { message_text: 'Fail' },
		});
		return res.status(500).json({});
	}
});

app.listen(process.env.PORT, () => console.log(`Server started on PORT = ${process.env.PORT}`));
