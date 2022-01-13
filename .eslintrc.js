module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    extends: [
        'standard',
        'plugin:nuxt/recommended',
        'plugin:vue/vue3-recommended',
    ],
    plugins: [
    ],
    overrides: [
        {
            files: ['layouts/*.vue', 'pages/*.vue'],
            rules: {
                'vue/multi-word-component-names': 'off',
            },
        },
    ],
    // add your custom rules here
    rules: {
        'comma-dangle': [
            'error',
            {
                arrays: 'always-multiline',
                objects: 'always-multiline',
                imports: 'always-multiline',
                exports: 'always-multiline',
                functions: 'never',
            },
        ],
        indent: [
            'error',
            4,
            {
                SwitchCase: 1,
            },
        ],
        semi: ['error', 'never'],
        'space-before-function-paren': ['error', 'never'],
        'vue/component-name-in-template-casing': ['error', 'kebab-case', {
            registeredComponentsOnly: false,
        }],
        'vue/html-indent': ['error', 4],
        'vue/max-attributes-per-line': ['error', {
            singleline: 1,
            multiline: 1,
        }],
    },
}
