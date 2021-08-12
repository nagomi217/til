# .gitignore

## DESCRIPTION

A .gitignore is file was written about untracked files.

## SETTING

`touch .gitignore' create .gitignore file.

## PATTERN

### Comment

`# this line is comment`

if lines start with `#`, means that a comment

### ignore particular extension

`*.ext`

### ignore all the contents of a specific derectory

`bin/`

### Don't ignore pattern

`!/dirname/*.exe`

if lines start with `!`, The meaning is the opposite

See the [gitignore.txt](https://github.com/git/git/blob/v2.19.1/Documentation/gitignore.txt#L70) on Git repo for more detail.
