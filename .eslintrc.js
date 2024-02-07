module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
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
                "project": 'Bworks/tsconfig.json',
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "project": 'Bworks/tsconfig.json',
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
    }
}
