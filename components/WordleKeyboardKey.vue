<template>
    <button
        type="button"
        class="wordle-keyboard-key"
        :class="{
            '-not-in-word': isNotInWord,
            '-valid': isValid,
            '-wrong-spot': isWrongSpot,
        }"
        :disabled="isNotInWord"
        @click="isNotInWord ? null : $emit('letter', letter)"
    >
        <span class="wordle-keyboard-key-letter">{{ letter }}</span>
    </button>
</template>

<script>
export default {
    props: {
        letter: {
            type: String,
            required: true,
        },
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
    computed: {
        isNotInWord() {
            return this.notInWord.has(this.letter)
        },
        isValid() {
            return this.valids.includes(this.letter)
        },
        isWrongSpot() {
            return this.wrongSpots.some(letters => letters.has(this.letter))
        },
    },
}
</script>
