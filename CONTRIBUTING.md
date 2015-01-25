# Contributing

## Issues and pull requests

When opening new issues or commenting on existing issues on this repository please make sure discussions are related to concrete technical issues with the extens.io ecosystem.

Courtesy should always be shown to individuals submitting issues and pull requests to the extens.io project.

Collaborators should feel free to take full responsibility for managing issues and pull requests they feel qualified to handle, as long as this is done while being mindful of these guidelines, the opinions of other Collaborators and guidance of the TC.

Collaborators may close any issue or pull request they believe is not relevant for the future of the extens.io project. Where this is unclear, the issue should be left open for several days to allow for additional discussion. Where this does not yield input from extens.io Collaborators or additional evidence that the issue has relevance, the issue may be closed. Remember that issues can always be re-opened if necessary.

We're trying very hard to keep our ecosystem lean and focused. We don't want it to do everything for everybody. This means that we might decide against incorporating a new feature.

A great pull request contains:

- Minimal changes. Only submit code relevant to the current issue. Other changes should go in new pull requests.
- Minimal commits. Please squash to a single commit before sending your pull request.
- No conflicts. Please rebase off the latest `development` branch before submitting.
- Code conforming to the existing conventions and formats.
- Passing tests. Use existing tests as a reference.
- Relevant comments and documentation.


## Accepting modifications

All modifications to the the extens.io code should be performed via GitHub pull requests, including modifications by Collaborators and TC members.

All pull requests must be reviewed and accepted by a Collaborator with sufficient expertise who is able to take full responsibility for the change. In the case of pull requests proposed by an existing Collaborator, an additional Collaborator is required for sign-off.

In some cases, it may be necessary to summon a qualified Collaborator to a pull request for review by @-mention.

If you are unsure about the modification and are not prepared to take full responsibility for the change, defer to another Collaborator.

Where there is no disagreement amongst Collaborators, a pull request may be landed given appropriate review. Where there is discussion amongst Collaborators, consensus should be sought if possible. The lack of consensus may indicate the need to elevate discussion to the TC for resolution (see below).


## Workflow

The extens.io project has an open governance model and welcomes new contributors. Individuals making significant and valuable contributions are made Collaborators and given commit-access to the project.

Since extens.io is build around a lot of modules, it can be pretty difficult to contribute to the extens.io ecosystem. That's why we created some Gists to make the process simple:

- [Clone and link every repositories](https://gist.github.com/loicsaintroch/839266a586d91997c081): this alias clones the main repository, links it to your global node modules and clones sub modules inside it. Then, you will be able to directly work inside your global extens.io node module.
- [Update locally every repositories](https://gist.github.com/loicsaintroch/e9b20f0ac69fc680dbfb): this alias is pretty convenient to reset your current branch, checkout and pull the `development` branch.

If someone has a better way to do it, please let us know!

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

By making a contribution to this project, I certify that:

- (a) The contribution was created in whole or in part by me and I have the right to submit it under the open source license indicated in the file; or
- (b) The contribution is based upon previous work that, to the best of my knowledge, is covered under an appropriate open source license and I have the right under that license to submit that work with modifications, whether created in whole or in part by me, under the same open source license (unless I am permitted to submit under a different license), as indicated in the file; or
- (c) The contribution was provided directly to me by some other person who certified (a), (b) or (c) and I have not modified it.

By contributing your code to the [@extensdotio](https://github.com/extensdotio) repositories, you agree to license your contribution under the MIT license.

See [MIT License](LICENSE.md) for more information.


## Code of conduct

As Contributors of this project, we pledge to respect all people who contribute through reporting issues, posting feature requests, updating documentation, submitting pull requests or patches, and other activities.

We are committed to making participation in this project a harassment-free experience for everyone, regardless of level of experience, gender, gender identity and expression, sexual orientation, disability, personal appearance, body size, race, age, or religion.

Examples of unacceptable behavior by participants include the use of sexual language or imagery, derogatory comments or personal attacks, trolling, public or private harassment, insults, or other unprofessional conduct.

The TC have the right and responsibility to remove, edit, or reject comments, commits, code, wiki edits, issues, and other contributions that are not aligned to this Code of Conduct. Project maintainers who do not follow the Code of Conduct may be removed from the TC.
