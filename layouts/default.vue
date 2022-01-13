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
    background-color: var(--color-bg);
}

body {
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
    font-family: Comfortaa, sans-serif;
    font-size: 14px;
    color: var(--color-text);
}

header {
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: var(--color-text);
    text-align: center;
    color: var(--color-headline);
    text-transform: uppercase;

    h1 {
        margin: .25em;
    }
}

main {
    padding: 1em;
}

button {
    cursor: pointer;
}
</style>
