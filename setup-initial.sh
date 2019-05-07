#!/bin/bash

set -x

/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

sh -c "$(wget https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"

sudo gem install cocoapods

git clone https://github.com/buonomo/yarn-completion.git ~/.yarn-completion