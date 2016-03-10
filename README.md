# Stackable Nodejs boilerplate

A barebones Node.js app using [Express 4](http://expressjs.com/) and Stackable API

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/get-stackable/stackable-nodejs-boilerplate)

## Getting Started

Make sure you have [Node.js](http://nodejs.org/) installed.

The easiest way to get started is to clone the repository:

```shell
# Get the latest snapshot
git clone --depth=1 https://github.com/stackable/stackable-nodejs-boilerplate myproject

# Change directory
cd myproject

# Set stack Private Key

Paste in your Stack's private key in `config/main.js`

# Install NPM dependencies
npm install

npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deployment

Easiest solution to deploy your app is [https://www.heroku.com/](https://www.heroku.com/)

If you are using Heroku first time sign-up for an account and follow this [tutorial](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up) to setup nodejs app.

```
heroku create
git push heroku master
heroku open
```
