# Roadmap

List of new features we'll be working on soon:

* **v0.12.0**
  * i18n
    * for the global admin module
    * for the contributed data
    * for the user modules
    * prepare management of theme translation


* **v0.13.0**
  * Move the Witicons font icons to an independent repository
  * APIs creator
    * Add search bar
    * Better hierarchy of the data
    * Improve fields management
  * Improve UI/UX of the admin dashboard


* **v0.14.0**
  * OAuth authentification
  * User management:
    * Local registration
    * Social media login (with Passport)
    * Account management
    * Groups and permissions
    * Tokens


* **v0.15.0**
  * Emit sockets from back-end
  * Update settings from the UI:
    * Basic info
    * Language
    * Environment


* **v0.16.0**
  * Add, update and delete connections from the UI
  * Change the connection for every models from the UI
  * APIs creator:
    * Add relation fields to link many collections
    * Add hidden fields


* **v0.17.0**
  * Manage plugins
  * Add default plugins
    * Categories
    * Comments


* **v0.18.0**
  * Data visualization/administration tool
    * List every models
    * Display data from a specific model
    * Add, edit and remove data
    * Cross data between different models


* **v0.19.0** (alpha version)
  * API manager


* **v0.20.0**
  * Realtime and collaborative Markdown and TinyMCE editor


* **v0.21.0**
  * Powerful media management


* **v0.22.0** (beta version)
  * Add other template engines for the front-office


# Wishlist

* ArangoDB adapter (we are in love, we really need this stuff)
* Monitoring dashboard with pm2
* Ionic generator

[Feel free to help us on making the ecosystem better everyday.](CONTRIBUTING.md)


# Todo

List of technical improvements we can make on the ecosystem:

* Better connections management between the application and the modules (`sails-hook-userfeatures`).
* Update tests to make them work (`sails`, `sails-generate`, `sails-hook-cors`, `sails-hook-csrf`, `sails-hook-i18n`, `sails-hook-policies`, `sails-hook-pubsub`, `sails-hook-request`, `sails-hook-sockets`, `sails-hook-userconfig` and `sails-hook-views`). **Owner**: [@loicsaintroch](https://github.com/loicsaintroch)
* Write tests for every hooks without tests.
* Continuous Integration with Travis.
* Get rid of `sails-util`.
* Merge `sails-generate-controller`, `sails-generate-controller-module` and `sails-generate-controller-template` into one generator (`sails-generate-controller`). **Owner**: [@loicsaintroch](https://github.com/loicsaintroch)
* Merge `sails-generate-model`, `sails-generate-model-module` and `sails-generate-model-template` into one generator (`sails-generate-model`). **Owner**: [@loicsaintroch](https://github.com/loicsaintroch)
* Improve `sails-hook-views` for layouts support. We also can simplify the hook.
* `sails-hook-machines` should work even if there is no `./api/machines` directory. **Owner**: [@loicsaintroch](https://github.com/loicsaintroch)

If you are feeling pretty confident helping us, please make a pull request and add you as `owner` of the improvement or create a new one. We'll discuss on the subject and if the community agrees we'll merge your proposal and let you write your pull request on the desired repositories.

Nothing is perfect, we always can improve everything. [Feel free to help us on making the ecosystem better everyday.](CONTRIBUTING.md)
