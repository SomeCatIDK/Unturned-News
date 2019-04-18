import { RichEmbed } from "discord.js";
import { Item } from "rss-parser";

export function buildWebhook(item: Item): RichEmbed {
    const embed = new RichEmbed();

    embed.setAuthor("New Blog Post!");
    embed.setColor("#00FFFF");
    embed.setDescription(item.contentSnippet);
    embed.setThumbnail("https://forum.smartlydressedgames.com/user_avatar/forum.smartlydressedgames.com/system/120/7_2.png");
    embed.setTimestamp(new Date(item.isoDate));
    embed.setTitle(item.title);
    embed.setURL(item.link);

    return embed;
}

export function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
