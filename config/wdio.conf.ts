import { browser } from '@wdio/globals';
import * as fs from 'fs';
import * as path from 'path';

export let currentTestTitle = '';
export let currentSpecFile  = '';

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
        acceptInsecureCerts: true
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
        currentTestTitle = test.title;
        currentSpecFile  = specFileName;
    },  
}
