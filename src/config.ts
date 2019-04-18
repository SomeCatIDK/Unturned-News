import EWebhookType from "./model/webhook-type";

export default {
    MySQL: {
        address: "localhost",
        database: "unturned-changelog",
        password: "root",
        port: 3306,
        user: "root"
    },
    Webhooks: [
        {
            address: "https://discordapp.com/api/webhooks/{WEBHOOK_ID}/{TOKEN}",
            type: EWebhookType.ALL
        }
    ]
};
