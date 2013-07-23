typescript-amd
==============

A simple demo Backbone app structured using RequireJS AMD format written in TypeScript.

Compile JS dependencies using:

    tsc --module AMD app.ts

The important parts of note are:

1. Module dependency declaration to let TypeScript know that you have an external dependency.
    
    `/// <amd-dependency path="backbone" \>`<br/> 
    `/// <reference path="backbone.d.ts" \>`

2. Refer to your 'imported' module with a `module = require('moduleName'))` statement which will be available in the _define_ block so no need to worry about a load callback
