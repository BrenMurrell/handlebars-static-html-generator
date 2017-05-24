# handlebars-static-html-generator
Handlebars based boilerplate for developing static html template files from partials

## Basics
This repo includes everything you need to get going (assuming you're using Gulp already). To install:

```npm install```

Next you'll want to create some templates in the `src` folder. We've thrown in a few examples to get you started. These templates will pull in partials from the `partials` folder.

Every time you add a new handlebars file to the `src` folder you'll wanna run the `createFileIndex` task to regenerate the file list in `filelist.json`.  Once you've done this, you'll be able to run the default gulp task which will compile all of your full templates in the root of `src` and put them in the `dist` folder.  We realise this is a little cumbersome, but we'll be working toward fixing this to be more automated in the future.

Thanks to [Kaanon MacFarlane](http://github.com/kaanon) for his work, which I've happily forked from https://github.com/kaanon/gulp-compile-handlebars
