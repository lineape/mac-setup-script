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
composer
go
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
cyberduck
discretescroll
disk-inventory-x
firefox
font-fira-mono-for-powerline
font-menlo-for-powerline
google-backup-and-sync
google-chrome
google-drive-file-stream
handbrake
imageoptim
insomnia
iterm2
jetbrains-toolbox
keepassxc
rcdefaultapp
react-native-debugger
scroll-reverser
slack
sourcetree
spotify
steam
teamviewer
telegram
visual-studio-code
vlc
vmware-fusion
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
