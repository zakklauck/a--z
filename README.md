# a--z

## Developing

> This site uses [esbuild](https://esbuild.github.io/) to pre-process Sass and JavaScript files.
When editing the theme's javascript or stylesheets, make sure to edit the source files and not
the files located in the `dist` directory.
>
> Bootstrap 5 is included in the package, and the Bootstrap grid is used in the HTML of the site.

- To edit stylesheets, edit the files in `assets/stylesheets`. The majority of the site's styles are in the `assets/stylesheets/base/_foundation.scss` file.
- To edit javascript, edit the files in `assets/javascripts/src`.

You'll need to install node and npm before you are able to compile the assets locally.

Make sure [node.js](https://nodejs.org/en) is installed.

Make sure npm is installed `npm install -g npm`.

Install NPM dependencies

`npm install`

Watch for file changes and rebuild assets

`npm run build`

When you are ready to deploy changes, push and pull to GitHub as necessary. GitHub
Pages will automatically publish the site.
