# Changelog

*Only notable changes are written.*


## `development` branch

- **[ENHANCEMENT]** Brand new admin dashboard on top of Bootstrap.
- **[ENHANCEMENT]** Add the ability to generate custom models using `$ extens.io generate model <myModel> [attribute|attribute:type ...]`.
- **[ENHANCEMENT]** Better default connections management when we generate a new module.
- **[DEPRECATED]** Removed the `views` hook. We'll only focus on the back-end, we don't take care of the front-end at all anymore.
- **[FIX]** Fix every generators from the CLI (we had an issue with a trivial function).
- **[DEPRECATED]** Removed the `/config/settings.json` file. We can get those information from the `package.json`.
- **[ENHANCEMENT]** The admin panel is now exposed at `sails.admin` and is mounted at `/admin`.
- **[FEATURE]** Modules and plugins are now exposed at `sails.modules` and `sails.plugins`. Note: the Sails modules loaded from the `moduleloader` previously available at `sails.modules` are now exposed at `sails.moduleloader`.
- **[DEPRECATED]** Removed the `rc` dependency and `rconf` features since we don't want developers to use lazy hardwired configuration.
- **[DEPRECATED]** Removed the `logger` hook. It's not a feature like the other ones. Now implemented in the core.


## v0.11.3
### 2015-02-04

- **[ENHANCEMENT]** Use `sails-disk` by default. You don't need to have a MongoDB instance running anymore.
- **[FIX]** Fix connections when we create a module via the UI. No need to update its `connections` anymore.
- **[DEPRECATED]** Removed `sails-generate-adapter`, `sails-generate-hardwired` and `sails-generate-service` because we don't want developers to use them.
- **[DEPRECATED]** No front-end at all anymore. Removed `sails-hook-csrf`, `sails-hook-grunt`, `sails-generate-frontend` and `sails-generate-views-ejs`. Note: we just keep the `views` hook for a few days waiting for a few things to be stable.


## v0.11.2
### 2015-01-25

- **[ENHANCEMENT]** Better open-source governance and contributing workflow.
- **[FIX]** Remove duplicated JavaScript libraries in `sails-admin`.
- **[FIX]** Fix views error pages in `sails-hook-responses`.
- **[ENHANCEMENT]** Better error logs in `sails-hook-responses`.
- **[ENHANCEMENT]** Moving from AJAX to sockets in `sails-admin`.
- **[ENHANCEMENT]** Better logs when lifting an application.


## v0.11.1
### 2015-01-21

- **[FIX]** Add `extensio` as a valid command to avoid conflicts on Windows. In fact, Windows thinks `extens.io` is a file since there is a dot.
- **[ENHANCEMENT]** Delete duplicated Sails dependencies. Remove the Sails dependencies and use relative paths to the node modules avoid useless deep dependencies and duplicated node modules. Note: this will probably be fixed with npm v3.
- **[FIX]** Delete `grunt-browser-sync` dependency to avoid conflicts with Socket.IO and require useless deep dependencies.
