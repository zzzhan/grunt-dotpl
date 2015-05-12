# grunt-dotpl

> This is a grunt plugin of [dotpl-js](https://github.com/zzzhan/dotpl-js), which is a lite javacript template engine. Using this tool, you can combine template and json files to generate different views.One advanage is using it as your pages localization tool.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-dotpl --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-dotpl');
```

## The "dotpl" task

### Overview
In your project's Gruntfile, add a section named `dotpl` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  dotpl: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.tpl
Type: `String`

A string value that is the path of the template file.

#### options.renderer
Type: `Function`

A function that is used to custom the data for generating view.It is optional.

### Usage Example

In this example, the options are used to localize the home page to two language, english and chinese.Its will be generated in "tmp" folder.
On the chinese options, there are two json files, the first "en-us.json" is using as default if the key unfound on the second "zh-cn.json".And there is a custom function "renderer", which will replace the key "foo" on template file with the custom string.
You may run the example with this command:
```shell
grunt test
```

```js
grunt.initConfig({
  dotpl: {
      options: {
        tpl:'test/tpl/index.tpl'
      },
      default_lang: {
        files: {
          'tmp/index.html': ['test/lang/en-us.json']
        }
      },
      zh_cn: {
        options:{
          renderer:function(k,v) {
            if(k==='foo') {
              v = 'This is replaced by custom option.';
            }
            return v;
          }
        },
        files: {
          'tmp/zh-cn/index.html': ['test/lang/en-us.json', 'test/lang/zh-cn.json']
        }
      }
    },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
