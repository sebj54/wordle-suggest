<template>
    <div>
        <header>
            <h1>
                <nuxt-link :to="localePath('/')">
                    Wordle Suggest
                </nuxt-link>
            </h1>

            <lang-switcher />
        </header>

        <main>
            <nuxt />
        </main>
    </div>
</template>

<style lang="scss">
:root {
    --color-bg: #0f0e17;
    --color-bg-lighter: #36334b;
    --color-text: #a7a9be;
    --color-headline: #fffffe;
    --color-primary: #f25f4c;
    --color-secondary: #e53170;
    --color-green: #27ae60;
    --color-warning: #ffd803;
    --color-warning-text: #272343;

    --max-width: 500px;
    --grid-gap: 6px;
}

html {
    margin: 0;
    background-color: var(--color-bg);
}

body {
    max-width: var(--max-width);
    margin: 0 auto;
    font-family: Comfortaa, sans-serif;
    font-size: 14px;
    color: var(--color-text);
}

header {
    display: flex;
    align-items: center;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: var(--color-text);
    text-align: center;
    text-transform: uppercase;

    h1 {
        margin: 0;
        padding: .25em;

        @media (max-width: 400px) {
            font-size: 1.5em;
        }

        a {
            color: inherit;
            text-decoration: none;

            &:hover {
                text-decoration: underline;
            }
        }
    }
}

main {
    padding: 1em;
}

a {
    color: var(--color-primary);

    &:hover {
        text-decoration: none;
    }
}

button {
    font-family: inherit;
    font-weight: 700;
    cursor: pointer;

    &:focus {
        outline-color: var(--color-primary);
    }
}

h1,
h2 {
    margin-top: 1em;
    margin-bottom: .5em;
    color: var(--color-headline);
}

p {
    margin-top: 0;
    margin-bottom: 1em;
}
</style>
