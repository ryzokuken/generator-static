const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

  initializing() { }

  prompting() {
    const prompts = [{
      type: 'list',
      name: 'css',
      message: 'Which CSS Preprocessor would you like to use?',
      choices: [ 'None', 'SCSS', 'LESS' ],
      default: 0
    }, {
      type: 'list',
      name: 'html',
      message: 'Which HTML Preprocessor would you like to use?',
      choices: [ 'None', 'Pug' ],
      default: 0
    }];

    return this.prompt(prompts).then(answers => {
      this.css = answers.css;
      this.html = answers.html;
    });
  }

  printing() {
    this.log(this.html);
    this.log(this.css);
  }
};
