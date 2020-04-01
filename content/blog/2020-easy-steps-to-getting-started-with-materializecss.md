---
title: Easy Steps to Getting started with Materialize CSS
read: 2 MIN READ
date: 2020-04-01
description: 'A modern responsive UI focused framework based on Material Design'
tag: '#materializeCSS #responsive #UI'
---

[MaterializeCSS](https://materializecss.com/) is a modern responsive UI focused framework based on Material Design that is easy to work with and speeds up development process. Designed by [Google](www.google.com). If you are coming from other UI frameworks or library like [Bootstrap](https://getbootstrap.com/),  working with `materializeCSS` will be pretty seamless.

**USAGE**

working with `materializeCSS` is pretty straightforward,  all you need do is to either download the file into your local development environment or access it via a [content delivery network](https://cdnjs.com/libraries/materialize) (CDN),  there is also an option for [npm](https://www.npmjs.com/) & [bower](https://bower.io/) installation.  All this procedure,  can found in their get started [page](https://materializecss.com/getting-started.html).


After downloading,You'll notice that there are two sets of the files. The `min` means that the file is "compressed" to reduce load times. These minified files are usually used in production while it is better to use the unminified files during development.

```structure
| --css
|     |-- materialize.css 
|     |--materialize.min.css
| --js
|     |--materialize.js
|     |--materialize.min.js
| --Licence 
| --README
```

To start implementing it,  you need to include it in the `<head>` section of your html file as thus

```html
  <!DOCTYPE html>
  <html>
    <head>
      <!--Import Google Icon Font-->
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <!--Import materialize.css-->
      <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>

      <!--Let browser know website is optimized for mobile-->
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </head>

    <body>

      <!--JavaScript at end of body for optimized loading-->
      <script type="text/javascript" src="js/materialize.min.js"></script>
    </body>
  </html>
```

After that is set up,  you can now fully utilize the functionalities of [Materialize CSS,](https://materializecss.com/getting-started.html)  all the features are at your disposal to create that stunning responsive website .
