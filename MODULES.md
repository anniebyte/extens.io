# Modules

extens.io is a large ecosystem, with many modular components. Each module is located in its own repository, and in most cases is tested individually.


## Ecosystem

Core modules maintained by the extens.io team:

* [extens.io](https://github.com/extensdotio/extens.io) is the main package. It only contains the command-line tool interacting with the Sails framework.
  * [sails](https://github.com/extensdotio/sails) is the core of the Sails framework, a realtime MVC Node.js framework. It is designed to resemble the MVC architecture from frameworks but with support for the more modern, data-oriented style of web app development.
  * [sails-admin](https://github.com/extensdotio/sails-admin) is the user interface managing the Sails framework. From the Sails framework to a Data Management Framework with a powerful UI and default back-end features.
  * [sails-build-dictionary](https://github.com/extensdotio/sails-build-dictionary) recursively builds a dictionary of modules on top of Sails.
  * [sails-generate](https://github.com/extensdotio/sails-generate) is the master of ceremonies for the built-in generators. Allows you to generate stuff on the fly via the CLI.
    * [sails-generate-api](https://github.com/extensdotio/sails-generate-api) generates an API in the `./api` directory.
    * [sails-generate-backend](https://github.com/extensdotio/sails-generate-backend) generates the default backend code. Automatically called by the `new` generator when you generate a new project.
    * [sails-generate-config](https://github.com/extensdotio/sails-generate-config) generates the config directory at `./config`. Automatically called by the `new` generator when you generate a new project.
    * [sails-generate-controller](https://github.com/extensdotio/sails-generate-controller) generates a controller in the `./api` directory.
    * [sails-generate-controller-module](https://github.com/extensdotio/sails-generate-controller-module) generates a controller for module.
    * [sails-generate-controller-template](https://github.com/extensdotio/sails-generate-controller-template) generates a controller for a specific template of a module.
    * [sails-generate-infos](https://github.com/extensdotio/sails-generate-infos) generates some basic information files (dot files and Markdown). Automatically called by the `new` and `module` generators.
    * [sails-generate-model](https://github.com/extensdotio/sails-generate-model) generates a model in the `./api` directory.
    * [sails-generate-model-template](https://github.com/extensdotio/sails-generate-model-template) generates a model for a specific template of a module.
    * [sails-generate-module](https://github.com/extensdotio/sails-generate-module) generates a bootstrap module in the `./modules` directory.
    * [sails-generate-new](https://github.com/extensdotio/sails-generate-new) is called when you want to create a new application. Calls the `backend`, `config` and `infos` generators.
  * [sails-hooks](https://github.com/extensdotio/sails-hooks) is the master of ceremonies for the built-in hooks. A hook is a Node.js module that adds functionality to the Sails core.
    * [sails-hook-controllers](https://github.com/extensdotio/sails-hook-controllers) uses `sails.moduleloader` to read `controllers` from the user's application. Also listens for `route:typeUnknown` on Sails, interprets route syntax which should match a `controller`, and bind the appropriate middleware (this will happen later, when the router is loaded, after all the hooks).
    * [sails-hook-cors](https://github.com/extensdotio/sails-hook-cors) functiona as a secure method to circumvent the same-origin policy; allowing your Sails server to successfully respond to requests from client-side JavaScript code running on a page from some other domain. But unlike JSONP, it works with more than just GET requests.
    * [sails-hook-http](https://github.com/extensdotio/sails-hook-http) uses an additional configurable middleware on top of the Express stack just for handling HTTP requests. Each time your application receives an HTTP request, the configured HTTP middleware stack runs in order.
    * [sails-hook-i18n](https://github.com/extensdotio/sails-hook-i18n) provides built-in support for detecting user language preferences and translating static words/sentences.
    * [sails-hook-moduleloader](https://github.com/extensdotio/sails-hook-moduleloader) loads modules from your configured directories in `sails.config.paths`. It is always loaded first.
    * [sails-hook-orm](https://github.com/extensdotio/sails-hook-orm) allows the Sails application to easily communicate with the Waterline ORM. Loads `models` and `adapters`.
    * [sails-hook-policies](https://github.com/extensdotio/sails-hook-policies) reads `policies` from the user's application. Listens for `route:typeUnknown` and bind a policy if the route requests it. Listen for `router:before` and when it fires, transform loaded middleware that match the policy mapping config to arrays of functions, where the original middleware is "protected" by one or more relevant policy middleware.
    * [sails-hook-pubsub](https://github.com/extensdotio/sails-hook-pubsub) helps smooth away by introducing the concept of resourceful PubSub (Publish / Subscribe). In fact, for apps that rely heavily on real-time client-server communication sending and listening for socket events can quickly become overwhelming.
    * [sails-hook-request](https://github.com/extensdotio/sails-hook-request) accesses all of the Node.js and Express methods and properties on the `req` object wherever it is accessible.
    * [sails-hook-responses](https://github.com/extensdotio/sails-hook-responses) accesses all of the Node.js and Express methods and properties on the `res` object wherever it is accessible.
    * [sails-hook-services](https://github.com/extensdotio/sails-hook-services) allows your Sails application to contain functions that you might want to use in many places of your application. The main benefit of using services in Sails is that they are globalized, you don't have to use `require()` to access them.
    * [sails-hook-session](https://github.com/extensdotio/sails-hook-session) verifies valid configuration of the connect session store (configurable in `sails.config.session`) at configuration-time. At lift-time, it instantiates the session store and makes it accessible via `sails.session`.
    * [sails-hook-sockets](https://github.com/extensdotio/sails-hook-sockets) fires up the Socket.IO server, listens for connect / disconnect events and exposes sockets on the Sails application at `sails.sockets.*`.
    * [sails-hook-userconfig](https://github.com/extensdotio/sails-hook-userconfig) loads application-level user configuration using the `moduleloader` hook (from the config directory located at `sails.config.paths.config`).
    * [sails-hook-userfeatures](https://github.com/extensdotio/sails-hook-userfeatures) exposes `machines` from the `moduleloader` hook. Also exposes and mounts `modules` and `plugins` from the `moduleloader` hook.


## Adapters

The Waterline ORM uses the concept of an `adapter` to translate a predefined set of methods into a query that can be understood by your data store. Adapters allow you to use various datastores such as MySQL, PostgreSQL, MongoDB, Redis, etc. and have a clear API for working with your model data.

Community adapters:

* [ArangoDB](https://github.com/rosmo/sails-arangodb) by [@rosmo](https://github.com/rosmo)
* [Azure Tables](https://github.com/azuqua/sails-azuretables) by [@azuqua](https://github.com/azuqua)
* [Couchbase](https://github.com/CaseyJones-/sails-couchbase) by [@CaseyJones-](https://github.com/CaseyJones-)
* [CouchDB](https://github.com/shmakes/sails-couchdb) by [@shmakes](https://github.com/shmakes)
* [IBM DB2](https://github.com/IbuildingsItaly/sails-db2) by [@IbuildingsItaly](https://github.com/IbuildingsItaly)
* [DynamoDB](https://github.com/dohzoh/sails-dynamodb) by [@dohzoh](https://github.com/dohzoh)
* [Elasticsearch](https://github.com/DarthHater/sails-elasticsearch) by [@DarthHater](https://github.com/DarthHater)
* [Firebird](https://github.com/johntom/sails-firebirdsql) by [@johntom](https://github.com/johntom)
* [FoundationDB](https://github.com/FoundationDB/sql-layer-adapter-sails) by [@FoundationDB](https://github.com/FoundationDB)
* [Google Apps](https://github.com/robwormald/sails-google-apps) by [@robwormald](https://github.com/robwormald)
* [LevelDB](https://github.com/mbinot/sails-leveldb) by [@mbinot](https://github.com/mbinot)
* [Local disk](https://github.com/balderdashy/sails-disk) by [@balderdashy](https://github.com/balderdashy)
* [Microsoft SQL](https://github.com/swelham/sails-mssql) by [@swelham](https://github.com/swelham)
* [MongoDB](https://github.com/balderdashy/sails-mongo) by [@balderdashy](https://github.com/balderdashy)
* [MySQL](https://github.com/balderdashy/sails-mysql) by [@balderdashy](https://github.com/balderdashy)
* [NeDB](https://github.com/adityamukho/sails-nedb) by [@adityamukho](https://github.com/adityamukho)
* [Neo4j](https://github.com/natgeo/sails-neo4j) by [@natgeo](https://github.com/natgeo)
* [OData](https://github.com/TheSharpieOne/sails-odata) by [@TheSharpieOne](https://github.com/TheSharpieOne)
* [Oracle](https://github.com/mayconheerdt/sails-oracle) by [@mayconheerdt](https://github.com/mayconheerdt)
* [OrientDB](https://github.com/vjsrinath/sails-orientdb) by [@vjsrinath](https://github.com/vjsrinath)
* [Parse](https://github.com/tskaggs/sails-parse) by [@tskaggs](https://github.com/tskaggs)
* [PostgreSQL](https://github.com/balderdashy/sails-postgresql) by [@balderdashy](https://github.com/balderdashy)
* [RavenDB](https://github.com/austinsc/sails-raven) by [@austinsc](https://github.com/austinsc)
* [Redis](https://github.com/balderdashy/sails-redis) by [@balderdashy](https://github.com/balderdashy)
* [RethinkDB](https://github.com/dsincl12/sails-rethinkdb) by [@dsincl12](https://github.com/dsincl12)
* [Riak](https://github.com/balderdashy/sails-riak) by [@balderdashy](https://github.com/balderdashy)
* [SQLite](https://github.com/AndrewJo/sails-sqlite3) by [@AndrewJo](https://github.com/AndrewJo)
* [TingoDB](https://github.com/andyhu/sails-tingo) by [@andyhu](https://github.com/andyhu)


## Side-projects

Here are some interesting projects extens.io depends on and you might be interested in:

* [Waterline](https://github.com/balderdashy/waterline) is an adapter-based ORM for Node.js. Used in extens.io with `sails-hook-orm`.
* [Skipper](https://github.com/balderdashy/skipper) makes it easy to implement streaming file uploads to disk, S3, or any of its supported file adapters.
* The [machine](http://node-machine.org/) specification is an open standard for Javascript functions. Each machine has a single, clear purpose—whether it be sending an email, translating a text file, or fetching a web page.
