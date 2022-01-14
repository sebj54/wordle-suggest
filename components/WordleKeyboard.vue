<template>
    <div class="wordle-keyboard">
        <template
            v-for="(keys, row) in layout"
            :key="row"
        >
            <wordle-keyboard-key
                v-for="(key, index) in keys"
                :key="key"
                :letter="key"
                :not-in-word="notInWord"
                :valids="valids"
                :wrong-spots="wrongSpots"
                :style="`
                    --row: ${row + 1};
                    --column: ${index + 1 + ((longestLine - keys.length) / 2)};
                `"
                @letter="$emit('letter', key)"
            />
        </template>
    </div>
</template>

<script>
const layout = [
    ['A', 'Z', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['Q', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M'],
    ['W', 'X', 'C', 'V', 'B', 'N'],
]

const longestLine = Math.max.apply(null, layout.map(line => line.length))

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
            layout,
            longestLine,
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
    display: grid;
    grid-template-columns: repeat(v-bind(longestLine), minmax(32px, 1fr));
    grid-gap: var(--grid-gap);
    max-width: var(--max-width);
    padding-top: var(--grid-gap);
    padding-bottom: var(--grid-gap);
    background-color: var(--color-bg);

    &-key {
        position: relative;
        grid-column-start: var(--column);
        grid-row-start: var(--row);
        padding-top: 120%;
        border-width: 0;
        border-radius: 2px;
        background-color: var(--color-text);
        color: var(--color-bg);

        &.-not-in-word {
            background-color: var(--color-bg-lighter);
            color: var(--color-headline);
            cursor: not-allowed;
        }

        &.-valid {
            background-color: var(--color-green);
        }

        &.-wrong-spot {
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
