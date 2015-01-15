# Contributing

## Issues

We decided to close issues on GitHub for two reasons:

1. Too many developers think GitHub issues is a forum or is StackOverflow.
2. Our ecosystem is build around so many repositories, it would be a complete mess to keep it open.


## Pull requests

### Introducing pull requests

Pull requests are always welcome, but note that all pull requests must be sent to the `development` branch.

We are always thrilled to receive pull requests, and do our best to process them as fast as possible. Not sure if that typo is worth a pull request? Do it! We will appreciate it.

If your pull request is not accepted on the first try, don't be discouraged! If there's a problem with the implementation, hopefully you received feedback on what to improve.

We're trying very hard to keep our ecosystem lean and focused. We don't want it to do everything for everybody. This means that we might decide against incorporating a new feature.

A great pull request contains:
- Minimal changes. Only submit code relevant to the current issue. Other changes should go in new pull requests.
- Minimal commits. Please squash to a single commit before sending your pull request.
- No conflicts. Please rebase off the latest `development` branch before submitting.
- Code conforming to the existing conventions and formats.
- Passing tests. Use existing tests as a reference.
- Relevant comments and documentation.


### Workflow

Adhering to the following process is the best way to get your work included in the project:

1. [Fork](http://help.github.com/fork-a-repo/) the project, clone the `development` branch, and configure the remotes:

   ```bash
   $ git clone https://github.com/<your-username>/extens.io.git -b development
   $ cd extens.io
   $ git remote add upstream https://github.com/extensdotio/extens.io.git
   ```

2. Create a new topic branch (off the main project development branch) to contain your feature, change, or fix:

   ```bash
   $ git checkout -b <topic-branch-name>
   ```

3. Commit your changes in logical chunks. Use Git's [interactive rebase](https://help.github.com/articles/interactive-rebase) feature to tidy up your commits before making them public.

4. Locally merge (or rebase) the upstream development branch into your topic branch:

   ```bash
   $ git pull [--rebase] upstream development
   ```

5. Push your topic branch up to your fork:

   ```bash
   $ git push origin <topic-branch-name>
   ```

6. [Open a Pull Request](https://help.github.com/articles/using-pull-requests/) with a clear title and description against the `development` branch.


## License

By contributing your code to this repository, you agree to license your contribution under the MIT license.

See [MIT License](LICENSE.md) for more information.


## Code of conduct

As contributors and maintainers of this project, we pledge to respect all people who contribute through reporting issues, posting feature requests, updating documentation, submitting pull requests or patches, and other activities.

We are committed to making participation in this project a harassment-free experience for everyone, regardless of level of experience, gender, gender identity and expression, sexual orientation, disability, personal appearance, body size, race, age, or religion.

Examples of unacceptable behavior by participants include the use of sexual language or imagery, derogatory comments or personal attacks, trolling, public or private harassment, insults, or other unprofessional conduct.

Project maintainers have the right and responsibility to remove, edit, or reject comments, commits, code, wiki edits, issues, and other contributions that are not aligned to this Code of Conduct. Project maintainers who do not follow the Code of Conduct may be removed from the project team.
