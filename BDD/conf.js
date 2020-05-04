exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        browserName:'chrome',
        args: ['no-sandbox']
    },
    allScriptsTimeout: 10000,
    framework: 'custom',  // set to "custom" instead of cucumber.
    frameworkPath: require.resolve('protractor-cucumber-framework'),  // path relative to the current config file
    specs: [
        './e2e/*.feature'     // Specs here are the cucumber feature files
    ],
    // restartBrowserBetweenTests: true,
    // cucumber command line options
    cucumberOpts: {
        'no-colors': true,
        require: ['./e2e/*.steps.js'],  // require step definition files before executing features
        tags: [],                      // <string[]> (expression) only execute the features or scenarios with tags matching the expression
        strict: true,                  // <boolean> fail if there are any undefined or pending steps
        dryRun: false,                 // <boolean> invoke formatters without executing steps
        compiler: [],                   // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        failFast: true
    },
    onPrepare: function () {
        browser.manage().window().maximize();  // maximize the browser before executing the feature files
        const {Given, Then, When, Before} = require('cucumber');
        global.Given = Given;
        global.When = When;
        global.Then = Then;
        global.Before = Before; 
    },
    getPageTimeout: 30000,
    allScriptsTimeout: 30000,
    plugins: []
};