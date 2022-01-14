<template>
    <header>
        <h1>Wordle Suggest</h1>
    </header>

    <main>
        <slot />
    </main>
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
    --grid-gap: 6px;
}

html {
    margin: 0;
    background-color: var(--color-bg);
}

body {
    max-width: 500px;
    margin: 0 auto;
    font-family: Comfortaa, sans-serif;
    font-size: 14px;
    color: var(--color-text);
}

#__nuxt {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

header {
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: var(--color-text);
    text-align: center;
    color: var(--color-headline);
    text-transform: uppercase;

    h1 {
        margin: 0;
        padding: .25em;
    }
}

main {
    position: relative;
    flex-grow: 1;
    padding: 1em;
}

button {
    cursor: pointer;
}
</style>
