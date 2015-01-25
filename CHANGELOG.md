# Changelog

*Only notable changes are written.*


## v0.11.1
### 2015-01-21

- **[FIX]** Add `extensio` as a valid command to avoid conflicts on Windows. In fact, Windows thinks `extens.io` is a file since there is a dot. By [@loicsaintroch](https://github.com/loicsaintroch).
- **[ENHANCEMENT]** Delete duplicated Sails dependencies. Remove the Sails dependencies and use relative paths to the node modules avoid useless deep dependencies and duplicated node modules. By [@loicsaintroch](https://github.com/loicsaintroch).
- **[FIX]** Delete `grunt-browser-sync` dependency to avoid conflicts with Socket.IO and require useless deep dependencies. By [@loicsaintroch](https://github.com/loicsaintroch).
