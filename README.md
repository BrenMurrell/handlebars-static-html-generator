# handlebars-static-html-generator
Handlebars based boilerplate for developing static html template files from partials

## Basics
This repo includes everything you need to get going (assuming you're using Gulp already). To install:

```npm install```

Next you'll want to create some templates in the `src` folder. We've thrown in a few examples to get you started. These templates will pull in partials from the `partials` folder.

Running the default task starts a watch on the `src` folder, updates the `filelist.json` and compiles .html files to the `dist` folder.

Thanks to [Kaanon MacFarlane](http://github.com/kaanon) for his work, which I've happily forked from https://github.com/kaanon/gulp-compile-handlebars
