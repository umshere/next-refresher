import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    rules: {
      "no-console": "warn", // Warns on console statements
      semi: ["error", "always"], // Enforces semicolons
      quotes: ["error", "double"], // Enforces double quotes
      indent: ["error", 2], // Enforces 2 spaces for indentation
      "react/jsx-uses-react": "off", // Example of React-specific rule
      "react/react-in-jsx-scope": "off", // Next.js specific
    },
  },
];

export default eslintConfig;
