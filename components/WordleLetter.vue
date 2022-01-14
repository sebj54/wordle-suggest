<template>
    <component
        :is="$attrs.onClick ? 'button' : 'div'"
        class="wordle-letter-wrapper"
        :class="{
            '-not-in-word': notInWord,
            '-valid': valid,
            '-wrong-spot': wrongSpot,
        }"
        v-bind="$attrs.onClick ? { type: 'button' } : null"
    >
        <span class="wordle-letter">
            {{ letter }}
        </span>
    </component>
</template>

<script>
export default {
    props: {
        column: {
            type: [Number, String],
            default: 'auto',
        },
        letter: {
            type: String,
            default: null,
        },
        notInWord: {
            type: Boolean,
            default: false,
        },
        row: {
            type: [Number, String],
            default: 'auto',
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
        grid-column-start: v-bind(column);
        grid-row-start: v-bind(row);
        width: 100%;
        padding: 0;
        padding-top: 100%;
        border-style: solid;
        border-width: 2px;
        box-sizing: content-box;
        background-color: var(--color-bg);
        color: var(--color-headline);

        &.-not-in-word {
            background-color: var(--color-bg-lighter);
        }

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
