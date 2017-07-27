# soc-core

v0.1.21

## Description
This is a sass framework providing styling for base elements of Soc style. 

Soc is an in-house developed front end framework in order to maintain a similar look and feel for all kinds of administrative websites.


## Setup
### Installing prerequisites
* Download and install [git](http://nodejs.org/download/) for your OS 
* Download [nodeJS](http://nodejs.org/download/) for your OS and install. Check by running 'node -v' in a terminal window.
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
Currently, documentation of the various components can be found in the example website which is located in the src/html folder of this project. We hope to extend the docs in a later stage of the project.


### Using soc-core in your own project
Soc-core is built for use with webpack but can be used without it as well. However, without webpack some overhead might exist because of double use of javascript frameworks as we embed them into our bundle files

##### Using it without webpack
1. Change directory to root of your project in a terminal
2. Run 'npm install soc-core --save-dev'
3. Include 'shared.bundle.js', 'vendor.bundle.js' and 'app.bundle.js' as well as 'soc-core.css' in your website
4. Check documentation to get started
5. View html examples in the src/html folder

##### Using it with webpack
A demo project has been set up to show how to use soc-core in your own website. It contains a webpage with a navbar, sidebar and some content copied from the examples page. 

Below is the full explanation of required files to do this 
* TL;DR Try the quick look at https://github.com/svennoreillie/soc-core-sample

##### Create a project.json file
Create a new folder and run 'npm init' in a terminal window at the root of the project.
Answer the questions asked until created. 

##### Install soc-core
Add soc-core to the dependencies by running 'npm install soc-core' in a terminal at the root of your project

##### Install webpack
Webpack is an npm package so install it in your devDependencies by running 'npm install --save-dev webpack'. Do the same for the following webpack loaders and plugins:

* css-loader
* sass-loader
    * sass-loader requires node-sass to be installed as well
* extract-text-webpack-plugin

It's also handy to install the dev server by running 'npm install --save-dev webpack-dev-server'.

##### Create your own sass style
Based upon the soc-core style. To do this create 2 files, a {your project}.scss file and a _templatevariables.scss file containing at least the following:


{your project}.scss
```Sass
//Set our own variables first, these can override the bootstrap variables
@import "templatevariables";

//import soc-core
@import "~soc-core/src/stylesheets/soc.scss";

//Add custom scss below
```

_templatevariables.scss
```Sass
$soc-base-color:                white;
$soc-base-text-color:           black;
$soc-navigation-color:          #eee;
```
Warning: The available template variables shown above are not complete and will change over time. check src/stylesheets/_templatevariables.scss in the soc-core project for an actual overview

If you are following the names given in the rest of this small tutorial, name the main scss file 'test.scss' and place the scss files in the src/stylesheets folder.

##### Add some javascript
Use the features of webpack to start quickly with your file. The idea is that you import the soc-core javascript files which were also bundled in advance. This is quite simple and only requires the following line

```javascript
import soc from 'soc-core';
```

This line will import the main file defined in the project json of a package named soc-core. As soc-core also imports toastr, jquery and bootstrap these will be imported automatically as well. 

More scripting can of course be done as well. For this demo this is not required so we keep it at one line. If you are following the tutorial, you should put this line in a test.js file in the src/javascripts folder.

##### Setup webpack
Create a webpack.config.js file in the root of your project and paste in the following contents
```javascript 
var extractText = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: './src/javascripts/test',
        css: './src/stylesheets/test.scss'
    },

    output: {
        filename: './dist/[name].bundle.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [{
            test: /\.scss$/,
            loader: extractText.extract('css-loader!sass-loader?sourceMap')
        }]
    },

    plugins: [
        new extractText({
            filename: 'dist/test.css',
            disable: false,
            allChunks: true
        }),
    ]
};
```
This is a basic setup of webpack, it tells webpack to look at 2 entries (app and css) at their corresponding paths and put them in /dist/app.bundle.js and /dist/css.bundle.js respectively. The modules define loaders and how to process files with the .scss extension. In this case it will first be compiled using the sass-loader, then the css will interpret url(..) and import statements and embed the results into the css.bundle.js file found in the dist folder. Finally this is extracted back out using the extract text plugin to a test.css file (which is setup in the plugins array)

To start the build simply run 'webpack' in a terminal window on the root of your project (requires webpack to be installed globally and sufficient rights). Another option is to set the scripts of your packages.json file to the following:
```javascript
"scripts": {
    "start": "webpack-dev-server --watch --progress --inline --open",
    "build": "webpack --progress"
},
``` 
If these scripts are set, you can also run 'npm run build' in a terminal to do the same.

##### Creating the html
Create an index.html at the root of your project linking the bundled files created by webpack like the following:
```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <link rel="stylesheet" href="dist/test.css">
    <script src="dist/app.bundle.js"></script>
</head>
<body>
    Content goes here, check docs and examples of soc-core
</body>
</html>
```




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
The project contains all of its source files int the src folder split into separate folders based on the type of file. 

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
