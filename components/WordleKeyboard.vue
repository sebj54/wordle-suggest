<template>
    <div class="wordle-keyboard">
        <div
            v-for="(keys, row) in layout"
            :key="row"
            class="wordle-keyboard-row"
        >
            <wordle-keyboard-key
                v-for="key in keys"
                :key="key"
                :letter="key"
                :not-in-word="notInWord"
                :valids="valids"
                :wrong-spots="wrongSpots"
                :style="{
                    '--longest-line': longestLine,
                }"
                @letter="$emit('letter', key)"
            />
        </div>
    </div>
</template>

<script>
const layoutQwerty = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
]

const layoutAzerty = [
    ['A', 'Z', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['Q', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M'],
    ['W', 'X', 'C', 'V', 'B', 'N'],
]

const layoutQwertz = [
    ['Q', 'W', 'E', 'R', 'T', 'Z', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Y', 'X', 'C', 'V', 'B', 'N', 'M'],
]

export default {
    props: {
        notInWord: {
            type: Set,
            required: true,
        },
        valids: {
            type: Array,
            required: true,
        },
        wrongSpots: {
            type: Array,
            required: true,
        },
    },
    emits: ['letter'],
    data() {
        return {
            layout: layoutQwerty,
        }
    },
    computed: {
        longestLine() {
            return Math.max.apply(null, this.layout.map(line => line.length))
        },
    },
    mounted() {
        if (window.localStorage.keyboardLayout === 'AZERTY') {
            this.layout = layoutAzerty
        } else if (window.localStorage.keyboardLayout === 'QWERTZ') {
            this.layout = layoutQwertz
        }
    },
}
</script>

<style lang="scss">
.wordle-keyboard {
    position: fixed;
    bottom: 0;
    left: 50%;
    right: -50%;
    transform: translateX(-50%);
    display: block;
    max-width: var(--max-width);
    padding-top: var(--grid-gap);
    padding-bottom: var(--grid-gap);
    background-color: var(--color-bg);

    &-row {
        display: flex;
        justify-content: center;
    }

    &-key {
        --color-button-shadow: rgba(255, 255, 255, .4);

        position: relative;
        width: calc(100% / var(--longest-line) - var(--grid-gap));
        margin-top: calc(var(--grid-gap) / 1.5);
        margin-bottom: calc(var(--grid-gap) / 1.5);
        margin-left: calc(var(--grid-gap) / 2);
        margin-right: calc(var(--grid-gap) / 2);
        padding-top: calc(120% / var(--longest-line) - var(--grid-gap));
        border-width: 0;
        border-radius: 5px;
        background-color: var(--color-text);
        color: var(--color-bg);
        box-shadow: 0 5px var(--color-button-shadow);
        transition-property: transform, box-shadow;
        transition-timing-function: ease-out;
        transition-duration: .2s;

        &.-not-in-word {
            --color-button-shadow: var(--color-bg-lighter);

            background-color: var(--color-bg-lightest);
            color: var(--color-headline);
            cursor: not-allowed;
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

        &-letter {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 24px;
            font-weight: 700;
        }
    }
}
</style>
