# soc-core

v0.1.21

## Description
This is a sass framework providing styling for base elements of Soc style. 

Soc is an in-house developed front end framework in order to maintain a similar look and feel for all kinds of administrative websites.


## Setup
### Installing prerequisites
* Download and install [git](http://nodejs.org/download/) for your OS 
* Donwload [nodeJS](http://nodejs.org/download/) for your OS and install. Check by running 'node -v' in a terminal window.
* npm should come installed with node, check by running 'npm -v'
* Because npm is more frequently updated than node, update it by running 'npm install npm@latest -g'

### Quick Look
When all prerequisites are met, having a look at the style is possible using only 3 commands.

* Open up a terminal at a desired empty folder, make sure you have sufficient administrator rights. 
* Run 'git clone https://github.com/svennoreillie/soc-core.git'
* cd into the soc-core project
* Run 'demo'

A browser should open containing the contents of the built soc-core project 


### Documentation
Currently, documentation of the various components can be found in the examples which are located in the src/html folder of this project. We hope to extend the docs in a later stage of the project.


### Using soc-core in your own project
1. Change directory to root of your project in a terminal
2. Run 'npm install soc-core --save-dev'
3. Include 'shared.bundle.js', 'vendor.bundle.js' and 'app.bundle.js' as well as 'soc-core.css' in your website
4. Check documentation to get started
5. View html examples in the src/html folder


## Contribution guidelines
* Fork this repo
* Add or change styles
* Include example page
* Update the docs
* Create a pull request

### Extending the project
Make sure you have all the prerequisites as mentioned above and run 'npm install' at the root of the project.

Soc-core is created using Visual Studio Code and it is recommended you use this IDE when contributing to the project. When this project is opened in Code, press Ctrl+Shift+B (or run the build command) to run the default build task, the project is configured to pack the project using webpack, start a dev server and opening the default browser to the created website.

When Visual Studio code is not an option install npm packages manually and run 'npm start' in a terminal window at the root of the project.
After this you can navigate to 'http://localhost:8080' (or a different port if the default one wasn't available) to view the example website. 

The project is setup to be a live session, meaning changes made in code will automatically trigger a refresh in the browser.

### Guidelines
The project contains all of its source files int the src folder split into seperate folders based on the type of file. 

#### Sass files
Sass files belong in the stylesheets folder. Keep these clean as this is the core of the project. We opted to work with a soc.scss file importing all the partial files which are divided based on the feature or element they style.

The _variables are imported before the bootstrap variables in order to override the bootstrap ones. 

##### Template variables
Template variables are not meant to override the soc-core variables, even though it is possible to do this. This file is meant to define a color scheme, some width and height definitions are given, settings for general animation can be set here as well. 
#### Javascript files
A soc-core.js file exists to provide scripts for the style. Scripts specific for the examples in the html folder belong in the site-specific.js file as this will not be bundled with the others. When using external frameworks, a require link should be provided in the vendor.js file. 
#### Html files
These are only for the example pages and provide samples as well as documentation, when changing styling or features, make sure there are plenty of examples to make clear what your change brings to the updated version.

### Building soc-core
Soc-core uses webpack to build so you can just run 'webpack' in a terminal at the root of the project which will create a dist folder containing javascript bundles and generated css files. Before a new version is published to npm a build must be ran for all files to be updated correctly. 

Testing only using the dev-server will not be enough as this will build its resources in memory and does not update the dist folder.

The delivery method of this npm packages is not final and might change over time.

## License
MIT License

Copyright (c) 2017 

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
