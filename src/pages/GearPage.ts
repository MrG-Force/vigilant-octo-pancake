import BasePage from "./BasePage";
import FitnessEquipmentPage from "./FitnessEquipmentPage";

type Category = "Bags" | "Fitness Equipment" | "Watches";

export default class GearPage extends BasePage {
    async init() {
        return this;
    }

    private async clickCategory(category: Category) {
        await this.page.locator(".sidebar-main")
            .locator(".filter")
            .locator(`a:has-text("${category}")`)
            .click();
    }

    async goToFitnessEquipment() {
        await this.clickCategory("Fitness Equipment");
        return new FitnessEquipmentPage(this.page).init();
    }

}
