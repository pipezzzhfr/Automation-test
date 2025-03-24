import { $ } from '@wdio/globals'
import Page from './page.js';


class LoginPage extends Page {
    
    get Username () {
        return $('#user-name');
    }

    get Password () {
        return $('#password');
    }

    get btnS () {
        return $('#login-button');
    }

    
    async login (username, password) {
        await this.Username.setValue(username);
        await this.Password.setValue(password);
        await this.btnS.click();
    }

    
    open () {
        return super.open('#login');
    }
}

export default new LoginPage();
