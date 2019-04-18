import discord from "discord.js";
import rss from "rss-parser";
import config from "../config";
import * as database from "../database/database";
import { buildWebhook, sleep } from "../util";

const parser = new rss();

export default async function RunCheck() {
    const feed = await parser.parseURL("http://blog.smartlydressedgames.com/feed/");
    const databaseEntries = await database.getAllEntries();
    const webhooks = config.Webhook.blogpost_webhooks;

    for (const item of feed.items.reverse()) {
        for (const webhook of webhooks) {
            if (!databaseEntries.find((entry) => entry[0] === webhook && entry[1] === item.link)) {
                console.log(`Found new post: ${item.title} for the webhook: ${webhook}!`);

                const embed = buildWebhook(item);
                const webhookData = webhook.split("/");
                const client = new discord.WebhookClient(webhookData[0], webhookData[1]);

                await client.send(embed).then(async () => {
                    await database.insertNewEntry([webhook, item.link]);
                    console.log("Succesfully posted!");
                }).catch((err) => {
                    console.error("There was an error posting the webhooks!");
                    console.error(err);
                });

                await sleep(500);
            }
        }
    }
}
