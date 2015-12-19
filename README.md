FreshAir
========

Need new id...

![Codeship Status](https://codeship.com/projects/28ccaa60-4974-0133-3b68-667b3b8a5886/status?branch=master)


Setup instructions
------------------

1. Install NodeJS (5.3+)
2. Commands in root of cloned project:
```
npm install
```

Running server
--------------

```
node server.js
```


Setup Codeship
--------------

* Login to Codeship
* Select project
* Project settings->Test
* Select your technology to prepopulate basic commands: I want to create my own custom commands
* Setup commands:
```
# By default we use the Node.js version set in your package.json or the latest
# version from the 0.10 release
#
# You can use nvm to install any Node.js (or io.js) version you require.
# nvm install 4.0
nvm install 0.10
npm install
# Install grunt-cli for running your tests or other tasks
# npm install -g grunt-cli
pip install -r requirements.txt
```
* Configure Test Pipelines: Test Commands
```
npm test
# grunt test
pybot robotframework
```
