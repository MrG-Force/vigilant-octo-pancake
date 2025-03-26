import BasePage from "./BasePage";
import GearPage from "./GearPage";

export default class HomePage extends BasePage {
    // maybe place locators here
    async init() {
        return this;
    }
    async clickGearMenu() {
        await this.page.getByRole("menuitem", { name: " Gear" }).click();
        return new GearPage(this.page).init();
    }
}
