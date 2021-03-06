# 🚀 UPWORD.LY Front-End Microservice 🚀

![Build Status](https://travis-ci.com/stanographer/upwordly-local.svg?branch=master)

This app runs a Next.js front-end microservice that communicates with Upword.ly's backend server allowing stenographers to create accounts, view, edit, and modify their transcriptions, and their consumers to view and edit them, as well.

To get started you will need Docker, Node 10+, and npm.
Your deployment server will need latest version of npm and pm2 installed.

## Commands

```
npm run build
```

Bundles and builds then Next.js app.

```
npm run test
```

Runs tests on front-end components.

```
npm run dev
```
Runs the dev environment.

```
npm start
```

Runs Upword.ly

```
npm run pm2dev
```

Runs Upword.ly as a pm2 process in dev mode.

```
npm run pm2prod
```

Runs Upword.ly as a pm2 process in production mode.


