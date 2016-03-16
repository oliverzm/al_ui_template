# al_ui_template Framework

## Getting started  

### Requirements

- You must have XCode installed and accept the licensing agreement before continuing with this document.  Be advised that XCode is a massive download!
- You must have a [Github](https://github.com/) account, with SSH keys configured.

    Tip!  Run the following commands to validate your access to both public and enterprise githubs:

    ```$ ssh -T git@github.com```

    Both of these commands must indicate that you are properly authenticated.  For help with SSH authentication, refer to [this page](https://help.github.com/articles/generating-ssh-keys/).

- [Homebrew](http://brew.sh) (the excellent package management system) must be installed.  You can install homebrew from the terminal with this command:

    ```$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"```  

- [Node](http://nodejs.org/) (a javascript runtime used to run Ozone's commandline and development support tools) must be installed.  You can install NodeJS from the terminal with this command:

    ```$ brew install node```  

- Your system must be configured to handle a large number of open files.  Note: the consequences of not enabling this are subtle, and this step is NOT necessary if you simply want to build a deployable artifact or review functionality.  

    ```$ echo 'kern.maxfiles=32768' | sudo tee -a /etc/sysctl.conf```
    ```$ echo -e 'limit maxfiles 8192 32768\nlimit maxproc 1000 2000' | sudo tee -a /etc/launchd.conf```
    ```$ echo 'ulimit -n 32768' | sudo tee -a /etc/profile```

    Please note: you MUST reboot for these changes to be effective.

### Setting Up Your Development Environment

Create a personal fork of all UI projects and its proprietary dependencies to begin working on them. To do this, visit each of the repositories listed below and click the fork button at the top right.

Clone the Alertlogic fork of the al_ui_template repository into your local file system.  We recommend ~/workspace and documentation will refer to this path, but it is quite arbitrary.  Use the following sequence of commands to perform the clone and install your local development environment.  Be sure to substitute your github enterprise username for the 'ALGITHUB_USERNAME' parameter in the last command:

    $ git clone git@github.com:alertlogic/al_ui_template.git al_ui_template
    $ cd al_ui_template
    $ build/install.sh

This script will perform the following actions:

- Fully installs the operating environment and all of its dependencies

###Working in Your Environment  

The NPM install process used to set up the development environment adds some important and very useful functionality to the framework.  In addition to providing a local web server, real-time code linting, unit testing (provided via [Karma](http://karma-runner.github.io/0.13/index.html) and [Jasmine](http://jasmine.github.io/2.0/introduction.html)), a documentation generator, pre-push hooks, and a deployable artifact generator, it also makes it extremely easy to add new support functionality in the form of node or bash scripts.

Automated task management is available via multiple [NPM](https://www.npmjs.org/) commands if you wish to run them.  To have everything watched automatically you may run:
 ```$ npm run watch```
 You may also just run the built in webserver by running the [NPM](https://www.npmjs.org/) start task.
 ```$ npm start```
 To execute on-demand linting and testing run:
 ```$ npm test```

You my now visit [http://127.0.0.1:8888/](http://http://1.27.0.0.1:8888/)  

### Building the al_ui_template artifact

al_ui_template's build process runs a series of filters to make sure that the resulting deployable artifact is well formed and functional.  You can produce a build artifact at any time by running

```$ npm run build```
