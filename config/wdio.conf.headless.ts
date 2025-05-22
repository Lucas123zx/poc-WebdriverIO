import { browser } from '@wdio/globals';
import * as fs from 'fs';
import * as path from 'path';

export let currentTestTitleHeadless = '';
export let currentSpecFileHeadless  = '';

export const config: WebdriverIO.Config = {
    runner: 'local',
    tsConfigPath: './tsconfig.json',
    reporters: [
        'spec',
        ['mochawesome', {
            outputDir: './reports/mochawesome/json',
            outputFileFormat: function (opts) {
                return `results-${opts.cid}.json`;
            }
        }]
    ],
    specs: [
        '../e2e/specs/**/*.spec.ts'
    ],
    exclude: [],
    maxInstances: 1,
    capabilities: [{
        browserName: 'chrome',
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
            args: [
                '--headless',
                '--no-sandbox',
                '--disable-gpu',
                '--disable-dev-shm-usage',
                '--window-size=1920,1080',
                '--disable-dev-tools',
                '--disable-extensions'
            ],
        }
    }],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
    },
 
    afterTest: async function (test, context, { error }) {
        if (error) {
            await browser.takeScreenshot();
        }
    },
    
    beforeTest: async function (test) {
        const specFileName = path.basename(test.parent).replace(/\s+/g , '_');
        const screenshotFolder = path.join(process.cwd(), 'screenshots', specFileName); // Define o caminho da pasta
        if (!fs.existsSync(screenshotFolder)) {
            fs.mkdirSync(screenshotFolder, { recursive: true }); // Cria a pasta
            console.log(`📂 Pasta criada: ${screenshotFolder}`);
        } else {
            console.log(`✅ A pasta já existe: ${screenshotFolder}`);
        }
        currentTestTitleHeadless = test.title;
        currentSpecFileHeadless   = specFileName;
    },  

   
}
