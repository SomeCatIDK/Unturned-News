import config from "./config";
import initBlogPost from "./services/blog-poster";

console.log(`Beginning feed checks every ${config.Webhook.checktime} seconds.`);

setInterval(async () => await initBlogPost(), config.Webhook.checktime * 1000);
