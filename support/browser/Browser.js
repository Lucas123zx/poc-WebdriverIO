import { browser } from '@wdio/globals';
import 'dotenv/config';

export class Browser {

    async open(path) {
        return await browser.url(`${process.env.BASE_URL}${path}`);
    };

}
