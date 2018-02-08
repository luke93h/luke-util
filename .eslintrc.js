module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "indent": [
            2,
            "4"
        ],
        "quotes": [
            1,
            "single"
        ],
        "semi": [
            0,
            "never"
        ],
        "no-unused-vars": ["error", { "varsIgnorePattern": "React" }],
        "no-console": 0,
        "indent": ["error", 4],
        "react/prop-types":  0
    },
    "globals": {
        "IScroll": true
    }
};