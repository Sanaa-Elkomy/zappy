# Zappy

Zappy is the name of the tool that you’re required to develop. Zappy integrates with a Slack channel and
listens on specific messages. For simplicity, we the tool will listen on all messages containing the word
“go”. As soon as any member of the marketing team, places a messages on a channel containing the
message “go”, the tool fetches twitter feeds from the FictionFone account and saves in a mongo
collection

### Prerequisites
Nodejs and mongodb

### Installation


Install the dependencies and devDependencies and start the server.

```sh
$ git clone https://github.com/Sanaa-Elkomy/zappy.git
$ cd zapper
$ npm install 
$ node index.js //running app with these enviroment variables
SLACK_TOKEN='workspace token' 
CONSUMER_KEY='twitter api key'
CONSUMER_SECRET='twitter secret key'
ACCESS_TOKEN_KEY='access token'
ACCESS_TOKEN_SECRET='access secret'
```
###  Database
zappy is connected to a local mongo database running in 127.0.0.1:27017

### Testing
```sh
$ npm test
```
