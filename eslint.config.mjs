import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import playwright from "eslint-plugin-playwright";

export default defineConfig([
  // Base configuration
  {
    files: ["**/*.ts"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  // JavaScript standard rules
  js.configs.recommended,

  // TypeScript rules (less strict version)
  ...tseslint.configs.recommended,
  
  // Playwright rules (practical subset)
  {
    plugins: {
      playwright,
    },
    rules: {
      ...playwright.configs.recommended.rules,
      // Custom Playwright rules (only the most valuable ones)
      "playwright/no-page-pause": "error",
      "playwright/no-wait-for-timeout": "error",
      "playwright/prefer-web-first-assertions": "error",
      "playwright/no-useless-not": "error",
    },
  },

  // TypeScript-specific rules (practical subset)
  {
    rules: {
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/await-thenable": "error",
      // Disable overly strict rules
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-return": "off",
      "@typescript-eslint/consistent-type-definitions": "off",
      // Enable useful but not too strict rules
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
]);