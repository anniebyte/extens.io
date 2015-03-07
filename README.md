# extens.io

extens.io is an open-source governance Node.js ecosystem to make a new kind of realtime web applications build on top of the Sails framework.

Build on top of the Sails framework using the extens.io ecosystem means your application requires Sails and you trust extens.io to give you more features, hooks, updates, etc.

extens.io contributions, releases, and contributorship are under an open governance model. We intend to land, with increasing regularity, releases which are compatible with Sails and Waterline.


## Notes

This is a developer preview and not ready for production yet. A lot of work still need to be done. Please see our [roadmap](ROADMAP.md) to have more information about our plans.

We currently require our ecosystem dependencies from GitHub but we'll create a npm registry for the beta version.

Documentation will come soon. In the meantime, you can access the official Sails documentation here: [http://sailsjs.org/#/documentation](http://sailsjs.org/#/documentation).


## Requirements

- [Node.js](http://nodejs.org/): >= 0.10.35
- [npm](https://www.npmjs.com/): >= 2.1.0


## Getting started

### Basics

You can install the whole ecosystem simply by running:

```bash
$ npm install extens.io -g
```

Create and lift your first application with:

```bash
$ extens.io new myApp
$ cd myApp
$ extens.io lift
```

Note: On Windows, you will probably need to run `$ extensio` instead of `$ extens.io`.

You can access your admin dashboard at [http://localhost:1337/admin/](http://localhost:1337/admin/).


### Useful command lines

Access the Sails console with:

```bash
$ cd myApp
$ extens.io console
```


## About us

The extens.io project team comprises a group of core collaborators and a sub-group that forms the Technical Committee (TC) which governs the project.

- Loïc Saint-Roch ([@loicsaintroch](https://github.com/loicsaintroch))
- Aurélien Georget ([@aurelsicoko](https://github.com/aurelsicoko))
- Jim Laurie ([@hack1337](https://github.com/hack1337))
- Pierre Burgy ([@pierreburgy](https://github.com/pierreburgy))

Collaborators should be familiar with the [guidelines](CONTRIBUTING.md) and also understand the project governance model as outlined in [the open governance document](GOVERNANCE.md).

We owe huge gratitude and props to the authors of all the open-source projects we use. We want to thank every contributors who helped us make this project better every day. extens.io could never have been developed without your tremendous contributions.


## Resources

- [F.A.Q.](FAQ.md)
- [Changelog](CHANGELOG.md)
- [Roadmap](ROADMAP.md)
- [Contributing guide](CONTRIBUTING.md)
- [Open governance](GOVERNANCE.md)
- [Modules](MODULES.md)
- [MIT License](LICENSE.md)


## Links

- [Website](http://extens.io/)
- [Ecosystem](https://github.com/extensdotio)
- [Twitter](https://twitter.com/extensdotio)
- [Gitter](https://gitter.im/extensdotio/extens.io)
