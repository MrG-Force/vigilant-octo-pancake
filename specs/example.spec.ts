import HomePage from "../src/pages/HomePage";
import { test, expect } from "./BaseTests";


test("Add items to cart and verify that it displays the correct total and quantity for the items", async ({
    page, open
}) => {
    const homePage = await open(HomePage);
    const gearPage = await homePage.clickGearMenu();
    const fitnessEquipmentPage = await gearPage.goToFitnessEquipment();
    // 4. From the shopping options on the left, filter by ‘Material’ and choose ‘Foam’ option
    
    // 5. Assert there are 3 items in the results
    
    // 6. Click the ‘Sprite Foam Yoga Brick’ card to open it
    
    // 7. Enter quantity of 2
    
    // 8. Click ‘Add to Cart’
    
    // 9. Assert that there are 2 items added to the shopping cart at the top of the page
    
    // 10. Open the cart from the shopping cart icon at the top of the page
    
    // 11. Click ‘View and Edit Cart’ link
    
    // 12. Assert that the ‘Sprite Foam Yoga Brick’ option is shown, and total price and quantity is correct
    
    // 13. Take a screenshot programmatically of the cart state
    
});
