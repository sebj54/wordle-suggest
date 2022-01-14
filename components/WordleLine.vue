<template>
    <div
        class="wordle-line"
        :style="`--letter: ${letter};`"
    >
        <slot />
    </div>
</template>

<script>
export default {
    props: {
        letters: {
            type: Number,
            default: 5,
        },
    },
}
</script>

<style lang="scss">
.wordle-line {
    display: grid;
    grid-template-columns: repeat(var(--letters), minmax(32px, 64px));
    grid-gap: var(--grid-gap);
    justify-content: center;
    margin-bottom: var(--grid-gap);
}
</style>
