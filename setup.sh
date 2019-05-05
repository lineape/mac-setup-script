#!/bin/bash

set -x

HERE=$(dirname $0)

read -r -d '' TAPS <<EOF
AdoptOpenJDK/openjdk
theseal/blank-screensaver
homebrew/cask-fonts
EOF

read -r -d '' BOTTLES <<EOF
awscli
cmatrix
composer
gradle
gradle-completion
htop
httpie
jq
ncdu
node@10
node@12
telnet
tmux
tree
watch
watchman
wget
yarn
EOF

read -r -d '' CASKS <<EOF
adoptopenjdk
adoptopenjdk8
discretescroll
disk-inventory-x
docker
firefox
font-fira-mono-for-powerline
font-menlo-for-powerline
github
google-chrome
google-drive-file-stream
imageoptim
insomnia
iterm2
jetbrains-toolbox
keepassxc
mightytext
rcdefaultapp
react-native-debugger
scroll-reverser
slack
sourcetree
spotify
steam
teamviewer
telegram
virtualbox
visual-studio-code
EOF


# Install brew
if ! brew list >/dev/null; then
	/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
fi

for tap in $TAPS; do
  brew tap $tap
done

for cask in $CASKS; do
  brew cask install $cask
done

for bottle in $BOTTLES; do
  brew install $bottle
done
