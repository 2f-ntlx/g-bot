import { Bot } from "https://deno.land/x/grammy@v1.13.0/mod.ts";
import { config } from "https://deno.land/x/dotenv@v3.2.0/mod.ts";

const BOT_TOKEN = config().BOT_TOKEN;
// Create an instance of the `Bot` class and pass your authentication token to it.
const bot = new Bot(BOT_TOKEN); // <-- put your authentication token between the ""

// You can now register listeners on your bot object `bot`.
// grammY will call the listeners when users send messages to your bot.

// Handle the /start command.
bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));
// You can force a reply like this:
bot.command("force", async (ctx) => {
  await ctx.reply("Hi! I can only read messages that explicitly reply to me!", {
    // Make Telegram clients automatically show a reply interface to the user.
    reply_markup: { force_reply: true },
  });
});
// Handle other messages.
bot.on("message", (ctx) => ctx.reply("Got another message!"));


// Now that you specified how to handle messages, you can start your bot.
// This will connect to the Telegram servers and wait for messages.

// Start the bot.
bot.start();
