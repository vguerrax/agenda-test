const
  { ConsoleReporter } = require('@serenity-js/console-reporter');
const { ArtifactArchiver } = require('@serenity-js/core');
const { SerenityBDDReporter } = require('@serenity-js/serenity-bdd');
const { Photographer, TakePhotosOfFailures } = require('@serenity-js/web');

exports.config = {
  baseUrl: 'http://64.227.26.166',

  specs: ['features/*.feature'],

  framework: 'custom',
  frameworkPath: require.resolve('@serenity-js/protractor/adapter'),

  serenity: {
    crew: [
      ArtifactArchiver.storingArtifactsAt('./target/site/serenity'),
      new SerenityBDDReporter(),
      ConsoleReporter.forDarkTerminals(),
      Photographer.whoWill(TakePhotosOfFailures),
      // new StreamReporter(),
    ],
    // actors: new Actors(),
  },

  cucumberOpts: {
    require: [
      'features/step_definitions/**/*.steps.ts',
      'features/support/setup.ts',
    ],
    'require-module': ['ts-node/register'],
  },

  chromeDriver: './drivers/chromedriver',
  directConnect: true,

  capabilities: {
    browserName: 'chrome',
    acceptInsecureCerts: true,

    loggingPrefs: {
      browser: 'INFO',
    },

    'goog:chromeOptions': {
      // As of version 75, ChromeDriver is W3C by default, which Protractor does not fully support.
      w3c: false,
      args: [
        '--disable-web-security',
        '--allow-file-access-from-files',
        '--allow-file-access',
        '--disable-infobars',
        '--headless',
        '--disable-gpu',
        '--start-maximized',
        '--window-size=1280x720',
      ],
    },
  },
};
