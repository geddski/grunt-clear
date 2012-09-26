# grunt-clear
Clears your command line. Automate all the things. 

## Getting Started
Install this grunt plugin next to your project's [Gruntfile][getting_started] with: `npm install grunt-clear`

Then add this line to your project's Gruntfile:

```javascript
grunt.loadNpmTasks('grunt-clear');
```

[grunt]: https://github.com/cowboy/grunt
[getting_started]: https://github.com/cowboy/grunt/blob/master/docs/getting_started.md

## Documentation
Turn your console output into a live dashboard by clearing it before displaying new results. 
Add this task to your "watch" task:

```javascript
watch: {
  //clear terminal on any watch task. beauty.
  tasks: ['clear'],
  jshint: {...},
  ...etc
}
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt][grunt].

## Release History
_(Nothing yet)_

## Todo 
Write tests
Make sure it works on windows
Make sure it works on linux
Do screencast

## License
Copyright (c) 2012 Dave Geddes  
Licensed under the MIT license.
