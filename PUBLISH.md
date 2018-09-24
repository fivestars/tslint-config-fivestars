# Publishing this Style Guide

**Requirement**: `npm` (Node Package Manager) which is included in [Node](https://nodejs.org/en/download/)

1. Open terminal to `tslint-config-fivestars` directory
1. `npm login`
    1. _Username_: fivestars-infra
    1. _Password_: \<contact Jeff Kimble or Rob Corell\>
    1. _Email_: infra@fivestars.com
1. `git pull --rebase`
1. `npm version <update-type>`
    Where `<update-type>` is
    * `major` : We rewrite everything (probably never used)
    * `minor` : We make one or more rules more restrictive and optionally relax other rules
    * `patch` : We only relax rules
1. `git push`
    You remembered to set `git config --global push.default current` first, didn't you?
1. `npm publish`
