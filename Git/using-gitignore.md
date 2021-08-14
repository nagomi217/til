# using .gitignore for exclude specific files

### Description

A .gitignore is file was written about untracked files.

### Setting

First create .gitignore file.

`touch .gitignore`

If you want to ignore file that is already checked in<br>
you should untracked it and add a rule to ignore.<br>

`git rm --cached <filename>`

### Pattern

#### Comment

`# this line is comment`

if lines start with `#`, means that a comment

#### Exclude particular extension

`*.ext`

#### Exclude specific directory and all of contents inside directory

`bin/`

#### Don't ignore pattern

`!/dirname/*.exe`

if lines start with `!`, The meaning is the opposite

#### Exclude any file (e.g. .gitignore)

Any files can be excluded by adding to .git/info/exclude

---

See the [gitignore](https://docs.github.com/en/get-started/getting-started-with-git/ignoring-files) on GitHub Docs for more detail.
