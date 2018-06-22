module.exports = {
    extends: "airbnb",
    plugins:['react', 'jsx-a11y', 'import'],
    rules: {
        "jsx-a11y/anchor-is-valid":0,
        "react/jsx-filename-extension": 0,
        "react/prop-types": 0,
    },
    globals: {
        "document":1
    },
    parser: "babel-eslint",
    env: {
        browser: 1
    }
};