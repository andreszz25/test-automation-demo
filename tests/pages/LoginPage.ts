import { Page, Locator } from "@playwright/test";

export class TesterAndres {
    name: string;
    page: Page;
    loginButton: () => Locator;

    constructor(name: string, page: Page) {
        this.name = name;
        this.page = page;
        this.loginButton = () => this.page.getByTestId('Login-submit');
    }

   doSomething() {
    console.log("Doing something in the Tester class");
    }
}
