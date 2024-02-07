module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        'eslint:recommended',
        'plugin:react/recommended',
        "standard-with-typescript",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        project: resolve(__dirname, './tsconfig.json'),
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
    }
}
