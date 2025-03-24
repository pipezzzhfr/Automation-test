import { $ } from '@wdio/globals'
import Page from './page.js';


class Logo extends Page {
    
    get image () {
        return $('//img[@alt="Sauce Labs Backpack"]');
    }
}

export default new Logo();
