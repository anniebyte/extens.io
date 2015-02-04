# Changelog

*Only notable changes are written.*


## v0.11.3
### 2015-02-04

- **[IMPROVEMENT]** Use `sails-disk` by default. We don't need to have a MongoDB instance running anymore. By [@loicsaintroch](https://github.com/loicsaintroch).
- **[FIX]** Fix connections when we create a module via the UI. No need to update its `connections` anymore. By [@loicsaintroch](https://github.com/loicsaintroch).
- **[IMPROVEMENT]** Removed `sails-generate-adapter`, `sails-generate-hardwired` and `sails-generate-service` since we don't want developers to use them. By [@loicsaintroch](https://github.com/loicsaintroch).
- **[IMPROVEMENT]** No front-end at all anymore. Removed `sails-hook-csrf`, `sails-hook-grunt`, `sails-generate-frontend` and `sails-generate-views-ejs`. By [@loicsaintroch](https://github.com/loicsaintroch).


## v0.11.2
### 2015-01-25

- **[IMPROVEMENT]** Better open-source governance and contributing workflow. By [@loicsaintroch](https://github.com/loicsaintroch).
- **[IMPROVEMENT]** Add some styles for notifications. By [@pierreburgy](https://github.com/pierreburgy).
- **[FIX]** Remove duplicated JavaScript libraries in `sails-admin`. By [@pierreburgy](https://github.com/pierreburgy).
- **[FEATURE]** Add a breadcrumb in the admin dashboard. By [@pierreburgy](https://github.com/pierreburgy).
- **[FIX]** Fix views error pages in `sails-hook-responses`. By [@loicsaintroch](https://github.com/loicsaintroch).
- **[IMPROVEMENT]** Add custom default views using the Foundation framework. By [@loicsaintroch](https://github.com/loicsaintroch).
- **[IMPROVEMENT]** Better error logs in `sails-hook-responses`. By [@loicsaintroch](https://github.com/loicsaintroch).
- **[IMPROVEMENT]** From AJAX to sockets in `sails-admin`. By [@pierreburgy](https://github.com/pierreburgy).
- **[IMPROVEMENT]** Better logs when lifting an application. By [@loicsaintroch](https://github.com/loicsaintroch).


## v0.11.1
### 2015-01-21

- **[FIX]** Add `extensio` as a valid command to avoid conflicts on Windows. In fact, Windows thinks `extens.io` is a file since there is a dot. By [@loicsaintroch](https://github.com/loicsaintroch).
- **[ENHANCEMENT]** Delete duplicated Sails dependencies. Remove the Sails dependencies and use relative paths to the node modules avoid useless deep dependencies and duplicated node modules. By [@loicsaintroch](https://github.com/loicsaintroch).
- **[FIX]** Delete `grunt-browser-sync` dependency to avoid conflicts with Socket.IO and require useless deep dependencies. By [@loicsaintroch](https://github.com/loicsaintroch).
