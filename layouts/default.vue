<template>
    <div>
        <header>
            <h1
                v-if="isRoot"
                class="header-brand"
            >
                Wordle Suggest
            </h1>
            <nuxt-link
                v-else
                :to="localePath('/')"
                class="header-brand"
            >
                Wordle Suggest
            </nuxt-link>

            <lang-switcher />
        </header>

        <main>
            <nuxt />
        </main>
    </div>
</template>

<script>
export default {
    computed: {
        isRoot() {
            return this.$route.name.startsWith('index___')
        },
    },
}
</script>

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
}

.header-brand {
    display: block;
    margin: 0;
    padding: .25em;
    font-size: 2em;
    font-weight: 700;
    color: var(--color-headline);
    text-decoration: none;

    @media (max-width: 400px) {
        font-size: 1.5em;
    }
}

a.header-brand:hover {
    text-decoration: underline;
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

svg {
    fill: currentColor;
}

.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
}
</style>
