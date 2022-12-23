# Node Push Notification Server

## _Chinedu19 first push notification_

This server was created to send push notifcation and also generate VAPID keys required to authenticate and send push notifications.

With push notifications, you can:

- Inform user of new updates in your app
- Convey messages
- Increasing User Retention

## Features

- Send push notification to web browsers
- Generate VAPID public & private keys (application keys)
- Store subscription info (if needed)
- Learn more about push notifications

## How to use

> Install all dependencies using `npm install`

> Start server using `node index` or if you have node installed `nodemon index`

> Generate push applicationKeys(VAPID) in the required endpoint

## Tech

- [Express] - fast node.js network app framework [@tjholowaychuk]
- [Web Push] - awesome library that encrypts data according to the Message Encryption for Web Push spec.
- [node.js] - a very cool backend technology
