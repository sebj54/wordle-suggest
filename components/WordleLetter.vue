<template>
    <button
        type="button"
        class="wordle-letter-wrapper"
        :class="{
            '-not-in-word': notInWord,
            '-valid': valid,
            '-wrong-spot': wrongSpot,
        }"
        :style="`
            --row: ${row};
            --column: ${column};
        `"
    >
        <span class="wordle-letter">
            {{ letter }}
        </span>
    </button>
</template>

<script>
export default {
    props: {
        column: {
            type: [Number, String],
            default: 'auto',
        },
        letter: {
            type: [String, Number],
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
        --color-button-shadow: rgba(255, 255, 255, .1);

        position: relative;
        grid-column-start: var(--column);
        grid-row-start: var(--row);
        width: 100%;
        padding: 0;
        padding-top: 100%;
        border-width: 0;
        border-radius: 5px;
        box-sizing: content-box;
        background-color: rgba(255, 255, 255, .2);
        color: var(--color-headline);
        box-shadow: 0 5px var(--color-button-shadow);
        transition-property: transform, box-shadow;
        transition-timing-function: ease-out;
        transition-duration: .2s;

        &::before {
            content: "";
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            border-radius: inherit;
            background-color: transparent;
            transition-property: background-color;
            transition-timing-function: inherit;
            transition-duration: inherit;
        }

        &:hover {
            transform: translateY(1px);
            box-shadow: 0 3px var(--color-button-shadow);

            &::before {
                background-color: rgba(255, 255, 255, .2);
            }
        }

        &:active {
            transform: translateY(5px);
            box-shadow: 0 0 var(--color-button-shadow);
        }

        &.-not-in-word {
            --color-button-shadow: var(--color-bg-lighter);

            background-color: var(--color-bg-lightest);
        }

        &.-valid {
            --color-button-shadow: var(--color-green-darker);

            background-color: var(--color-green);
        }

        &.-wrong-spot {
            --color-button-shadow: var(--color-warning-darker);

            background-color: var(--color-warning);
            color: var(--color-warning-text);
        }
    }
}
</style>
