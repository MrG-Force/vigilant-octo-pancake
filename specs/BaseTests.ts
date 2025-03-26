import { test as base, expect as baseExpect, Page } from "@playwright/test";
import BasePage from "../src/pages/BasePage";


export const test = base.extend<{ open: Open }>({
    open: async ({ page, baseURL }, use) => {
        // TODO: Add environment validation
        await page.goto(baseURL!);
        // Execute tests with the page factory available in context
        await use(pageFactory(page));
    },
});

export const expect = baseExpect;

/**
 * Type definition for the open function
 * @param type The page class to instantiate
 * @returns A promise that resolves to the instantiated page
 * @template T Page class extending BasePage
 */
export type Open = <T extends BasePage>(type: new (page: Page) => T) => Promise<T>;

/**
 * Factory function to create a new page instance
 * @param page The Playwright Page instance
 * @returns A function that creates a new page instance
 */
const pageFactory = (page: Page) => 
    async <T extends BasePage>(type: new (page: Page) => T) => new type(page).init()