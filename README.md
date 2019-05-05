<img src="https://img.shields.io/badge/likes-turtles-blue.svg?logo=evernote&style=popout-square"> <img src="https://img.shields.io/badge/can't-identify_turtles-red.svg?logo=tapas&style=popout-square">

# Setup script notes
Run `./setup-initial.sh` to install things the first time around. Only use this once.

Run `./setup.sh` to install brew, add taps, casks and bottles

## Home Dir
### Syncing
Note: only files in the `/home-files/` directory will be synced. All others are ignored.

#### Initial setup
* Run `./sync-to-home`

#### Workflow for editing home files
* Run `./sync-from-home`
* Check the git diff to see if the file has been changed externally
* Make any edits
* Run `./sync-to-repo`
* If any problems arise from the changes, rollback by copying the most recent backup from /home-dir-backup/


## Mac Specific
### Keyboard
Disable the keyboard shortcut for "Search man Page Index in Terminal" as it conflicts with intellij action menu.

`System Preferences -> Keyboard -> Shortcuts -> Services -> Search man Page Index in Terminal`

### Apps to install outside brew
#### App Store
* XCode
* Magnet (Window Manager)

### Permissions
In many cases, you need to go to Security and Privacy and allow these 3rd party apps access (look in general tab, under "Allow apps downloaded from").

Some apps need to have their permissions set (Accessibility, etc.) manually

### Login items (apps to start at boot)
In order for apps to start with macos, the app needs to added to the Login Items in `System Preferences -> User & Groups -> Login Items`

#### Login Items
* Scroll Reverser
* Magnet
* DiscreteScroll

### Spotlight
Sometimes spotlight indexes things you don't want. Programs, folders, etc.

To instruct spotlight not to index something go to `System Preferences -> Spotlight -> Privacy` and drag the app / directory to the list.

#### Spotlight ignore
* Google Drive
* ~/projects
* Terminal.app


## Terminal / CLI setup
### Global commands
* `npm install -g @aws-amplify/cli`
* `npm install -g react-native-cli`

### Keys
Copy the `~/.ssh` and `~/.aws` directories from the old install

### iterm2
* [make the terminal the default](https://superuser.com/questions/379342/setting-iterm2-as-the-default-terminal-osx-lion)
* set the font size `iTerm2 -> Preferences -> Profiles -> Text` to 14pt Menlo Regular for Powerline
* set the color theme to Tango Dark

