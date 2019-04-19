# Unturned News Service

Unturned News Service is a small service that simply tracks the SDG blog, and in the future it will track the Steam news page, and posts a webhook to Discord everytime a new blog or news item is posted.

### Requirements: 
- Latest version of [Node.JS](https://github.com/nodejs/node) installed.
- Latest version of [git](https://github.com/git/git) installed.
- Latest version of [npm](https://github.com/npm/cli) installed.
- A MySQL v5.x server.

### Installation:

1. To begin clone this repository with the following command:

```bash
git clone https://github.com/SomeCatIDK/Unturned-News
```

2. Navigate to the folder it cloned:

```bash
cd Unturned-News
```

3. Install dependencies using npm:

```bash
npm i
```

4. Open `src/config.ts` with whatever text editor you prefer and enter in the MySQL connenction info and webhook info.

The default file should like like this:

```typescript
export default {
    MySQL: {
        address: "localhost",
        database: "unturned-news",
        password: "toor",
        port: 3306,
        table_prefix: "u_",
        user: "root"
    },
    Webhook: {
        blogpost_webhooks: [],
        checktime: 30
    }
};
```

To add a webhook to use for the blogposts, add a string into the `blogpost_webhooks` array using the `"` marks in the following style: `"<WEBHOOK_ID>/<WEBHOOK_TOKEN>"`

Here's an example after adding a fake webhooks:


```typescript
export default {
    MySQL: {
        address: "localhost",
        database: "unturned-news",
        password: "toor",
        port: 3306,
        table_prefix: "u_",
        user: "root"
    },
    Webhook: {
        blogpost_webhooks: [
            "1234567890/abcdefghijklmnopqrstuvwxyz1234567890"
        ],
        checktime: 30
    }
};
```

5. Build the bot:

```bash
npm run build
```

6. Start the bot:

```bash
npm start
```

7. That's it! Hope everything goes well, and stay unturned! :D
