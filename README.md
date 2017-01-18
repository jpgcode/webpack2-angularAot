# web-davita-com
This is the front end project for the www.davita.com, medicalgroup.davita.com and kidneycare.davita.com website.

## Requirements

- Install Node.js (version 6.9.1 required)
	- on OSX install [home brew](http://brew.sh/) and type `brew install node`
	- on Windows install [chocolatey](https://chocolatey.org/)
    - open command prompt as administrator
        - type `choco install nodejs`
        - type `choco install nodejs.install`
- Install webpack `npm i -g webpack`

##Webpack
Webpack is being used as Front end module bundler. It is integrated with Express to provide Hot Module reload and watchers to sass and typescript.

##Development mode
Start local development server using the command `npm start`

##Production mode
Compile the PROD ready assets to the `public folder` using `npm run build`. This is done automatically by Jenkins when the changes are pushed to git and the build is triggered.

## Quick Start for local development
  1. Navigate to the project folder in the terminal and install dependencies with `npm i` command.
  2. Install and run redis with `redis-server` command.
  3. Clone the API project locally and make it run with `npm start`
  4. Start the web project using `npm start`

## Features

###Backend
- Express app
- Handlebars layout, partials
- Common JS modules.
- Redis Cache
    - Install Redis: $ brew install redis
    - Start Server:  $ redis-server

###Front End
- Webpack as module bundler
- Hot Module replacement (live reload)
- Webpack bundling provide concat and minify out of the box
- Typescript provides ES6 features and static types.
- NPM as package manager
- SASS compilation & Autoprefixer
- Eslint code quality cool
- Webpack fully integrated with Express in development mode
- Karma and Jasmine for unit testing

## Coding Standards & Tools
    - Handlebars for HTML templating on the server
    - NPM as package manager
    - BEM methodology for writing predictable and maintainable CSS
    - Use revealing module pattern inside your ES6 modules to expone the main object.
    - Follow all Digitas coding and accessibility guidelines - http://engineering.digitas.com/guidelines.php

## Git Workflow
    - All code changes should be integrated, built and tested locally with the latest from the origin
    - Check-in completed code into the `dev` branch
    - Each check-in should be accompanied with an appropriate commit message starting with a Jira ticket number (Example: 'davita-1234: commit message')

## Code Quality
    - Project is configured with ESLint for automatic js syntax and code style checking.
    - Eslint runs automatically when you save any JS file.
    - You can run eslint as well using `npm run test:lint` command in your terminal.

## CSS
    - Project uses sass files for styling. Webpack is setup to compile and auto-prefix the scss files to css.
    - Usage: import the sass files on each JS module, webpack will generate a separate CSS file with all your styles in the build task.

## Frameworks & Plugins
    Please check with the team before adding any new frameworks or plugins.

    Front End

        - JavaScript
            - Frameworks: jQuery, Angular2

        - CSS
            - Grid System: Flexbox



