# soc-core

v0.1.0

## Description
This is a sass framework providing styling for base elements of Soc style. 

Soc is an in-house developed front end framework in order to maintain a similar look and feel for all kinds of administrative websites.


## Setup
### Installing prerequisites
* Git installed 
* Donwload nodeJS [http://nodejs.org/download/](http://nodejs.org/download/) for your OS and install. Check by running 'node -v' in a terminal window.
* npm should come installed with node, check by running 'npm -v'
* Because npm is more frequently updated than node, update it by running 'npm install npm@latest -g'

### Quick Look
To have a quick look at the style, without editing.

* Make sure you have the prerequisites (git & npm)
* Open up a terminal at a desired empty folder, make sure you have sufficient administrator rights. 
* Run 'git clone https://github.com/svennoreillie/soc-core.git'
* cd into the soc-core project
* Run 'demo'

A browser should open containing the contents of the built soc-core project 


## Documentation
* TODO => define the here part

Documentation of the various components can be found here. Example sites are located in the Examples folder of this project. 



## Using the project
Make sure you have all the prerequisites mentioned above.

Soc-core is created using Visual Studio Code and it is recommended you use this IDE when contributing to the project. When this project is opened in Code, press Ctrl+Shift+B to run the default build task, the project is configured to install all npm packages, pack the project using webpack, starting a dev server and opening the default browser to the created website.

When Visual Studio code is not an option install npm packages manually and run 'npm start' in a terminal window at the root of the project.
After this you can navigate to 'http://localhost:8080' (or a different port if the default one wasn't available) to view the example website. 

The project is setup to be a live session, meaning changes made in code will automatically trigger a refresh in the browser.



### Use in your own project
* todo
1. Change directory to root of project in a terminal
2. Run 'npm install soc-core --save'
3. Include 'soc.css' and 'soc.js' in your website
4. Check documentation to get started
5. View html examples in the Examples folder


## Contribution guidelines
* Fork this repo
* Add or change styles
* Include example page
* Update the docs
* Create a pull request



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
