# .gitignore

## DESCRIPTION

A .gitignore is file was written about untracked files.

## SETTING

`touch .gitignore' create .gitignore file.

If you want to ignore file that is already checked in<br>
you should untracked it and add a rule to ignore.<br>

`git rm --cached <filename>`

## PATTERN

### Comment

`# this line is comment`

if lines start with `#`, means that a comment

### Exclude particular extension

`*.ext`

### Exclude all the contents of a specific derectory

`bin/`

### Don't ignore pattern

`!/dirname/*.exe`

if lines start with `!`, The meaning is the opposite

### Exclude .gitignore

Any files can be excluded by adding to .git/info/exclude

---

See the [gitignore](https://docs.github.com/ja/github/getting-started-with-github/getting-started-with-git/ignoring-files#gitignore-%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%82%92%E4%BD%9C%E6%88%90%E3%81%9B%E3%81%9A%E3%81%AB%E3%83%AD%E3%83%BC%E3%82%AB%E3%83%AB%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%82%92%E9%99%A4%E5%A4%96%E3%81%99%E3%82%8B) on GitHub Docs for more detail.
