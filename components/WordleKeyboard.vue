<template>
    <div class="wordle-keyboard">
        <template
            v-for="(keys, row) in layout"
            :key="row"
        >
            <button
                v-for="(key, index) in keys"
                :key="key"
                type="button"
                class="wordle-keyboard-key"
                :style="`
                    --row: ${row + 1};
                    --column: ${index + 1 + ((longestLine - keys.length) / 2)};
                `"
                @click="$emit('letter', key)"
            >
                <span class="wordle-keyboard-key-letter">{{ key }}</span>
            </button>
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
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: grid;
    grid-template-columns: repeat(v-bind(longestLine), minmax(32px, 1fr));
    grid-gap: var(--grid-gap);

    &-key {
        position: relative;
        grid-column-start: var(--column);
        grid-row-start: var(--row);
        padding-top: 120%;
        border-width: 0;
        border-radius: 4px;
        background-color: var(--color-bg-lighter);
        color: var(--color-headline);

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
