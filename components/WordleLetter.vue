<template>
    <component
        :is="tag"
        class="wordle-letter-wrapper"
        :class="{
            '-valid': valid,
            '-wrong-spot': wrongSpot,
        }"
    >
        <span class="wordle-letter">
            {{ letter }}
        </span>
    </component>
</template>

<script>
export default {
    props: {
        letter: {
            type: String,
            default: null,
        },
        tag: {
            type: String,
            default: 'div',
        },
        valid: {
            type: Boolean,
            default: false,
        },
        wrongSpot: {
            type: Boolean,
            default: false,
        },
    },
}
</script>

<style lang="scss">
.wordle-letter {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 32px;
    font-weight: 700;

    &-wrapper {
        position: relative;
        width: 100%;
        padding: 0;
        padding-top: 100%;
        border-style: solid;
        border-width: 2px;
        box-sizing: content-box;
        color: var(--color-headline);

        &.-valid {
            background-color: var(--color-green);
        }

        &.-wrong-spot {
            background-color: var(--color-warning);
            color: var(--color-warning-text);
        }
    }
}
</style>
