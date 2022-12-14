module.exports = {
    extends: [
        "next",
        "prettier",
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
    ],
    plugins: ["unused-imports", "prettier", "storybook"],
    rules: {
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/no-unused-vars": "error",
        "unused-imports/no-unused-imports": "error",
    },
};
