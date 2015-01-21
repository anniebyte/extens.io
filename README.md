# extens.io

extens.io is an open-source governance Node.js ecosystem to make a new kind of realtime web applications build on top of the Sails framework.

Sails is the framework. Build on top of the Sails framework using the extens.io ecosystem means your application requires Sails and you trust extens.io to give you more features, hooks, updates, etc.


## Notes

This is a developer preview and not ready for production yet. A lot of work still need to be done. Please see our [roadmap](ROADMAP.md) to have more information about our plans.

We currently require our ecosystem dependencies from GitHub but we'll create a npm registry for the alpha version.

Documentation will come soon. In the meantime, you can access the official Sails documentation here: [http://sailsjs.org/#/documentation](http://sailsjs.org/#/documentation).


## Requirements

- [Node.js](http://nodejs.org/): >= 0.10.35
- [npm](https://www.npmjs.com/): >= 2.1.0
- [MongoDB](http://www.mongodb.org/): >= 2.5.0


## Getting started

### npm cache

If you already installed a previous version of extens.io, please do:

```bash
$ [sudo] npm uninstall extens.io -g
$ [sudo] npm cache clear
```


### Basics

You can install the whole ecosystem simply by running (do not run the installation with `sudo`):

```bash
$ npm install extens.io -g
```

Before doing anything else, please make sure you have a MongoDB process running:

```bash
$ mongod
```


Create and lift your first application with:

```bash
$ extens.io new myApp [--no-frontend]
$ cd myApp
$ extens.io lift
```

You can access your admin dashboard at [http://localhost:1337/sails-admin/](http://localhost:1337/sails-admin/).


### Useful command lines

Access the Sails console with:

```bash
$ cd myApp
$ extens.io console
```


## About us

We are a bunch of students from Paris, France. We often have some tests, school and freelance projects. extens.io is a side-project for us (for now), but it is made with trust, love and passion. We welcome every feedback and request.

The team:

- [Loïc Saint-Roch](https://github.com/loicsaintroch)
- [Aurélien Georget](https://github.com/aurelsicoko)
- [Jim Laurie](https://github.com/hack1337)
- [Pierre Burgy](https://github.com/pierreburgy)
- [Hugo Caillard](https://github.com/hugocaillard)

We owe huge gratitude and props to the authors of all the open-source projects we use. We want to thank every contributors who helped us make this project better every day. extens.io could never have been developed without your tremendous contributions.


## Resources

- [F.A.Q.](FAQ.md)
- [Changelog](CHANGELOG.md)
- [Roadmap](ROADMAP.md)
- [Contributing guide](CONTRIBUTING.md)
- [MIT License](LICENSE.md)


## Links

- [Website](http://extens.io/)
- [Ecosystem](https://github.com/extensdotio)
- [Twitter](https://twitter.com/extensdotio)
