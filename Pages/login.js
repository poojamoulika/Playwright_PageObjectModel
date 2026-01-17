exports.LoginPage = class LoginPage {

    constructor(page) {

        this.page = page
        this.username_textbox = page.getByRole('textbox', { name: 'Username' })
        this.pasword_textbox = page.getByRole('textbox', { name: 'Password' })
        this.login_button = page.getByRole('button', { name: ' Login' })

    }

    async gotoLoginPage(){
        await this.page.goto('https://the-internet.herokuapp.com/login');
    }

    async login(username, Password){
        await this.username_textbox.fill(username)
        await this.pasword_textbox.fill(Password)
        await this.login_button.click()

    }


}