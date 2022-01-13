<template>
    <div class="wordle-line">
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
    grid-template-columns: repeat(v-bind(letters), minmax(32px, 64px));
    grid-gap: var(--grid-gap);
    justify-content: center;
    margin-bottom: var(--grid-gap);
}
</style>
