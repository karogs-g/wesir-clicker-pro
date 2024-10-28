import { Telegraf, Markup } from 'telegraf';

const token = '7819726537:AAFkIBiBEZWQkOnmIQ489MfaW18rue24GaE';
const webAppUrl = 'https://wesir-clicker-pro.web.app';

const bot = new Telegraf(token);

bot.command('start', (ctx) => {
  ctx.reply(
    'Hello! Press to start the app',
    Markup.inlineKeyboard([
      Markup.button.webApp('Open mini app', `${webAppUrl}?ref=${ctx.payload}`),
    ])
  );
});

bot.launch();
