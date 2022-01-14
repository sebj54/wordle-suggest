<template>
    <h2 class="wordle-grid-label">
        Pas dans le mot&nbsp;:
    </h2>

    <div class="wordle-grid -not-in-word">
        <wordle-letter
            v-for="letter in notInWord"
            :key="letter"
            :letter="letter"
            not-in-word
            @click="toggleAddNotInWordMode"
        />

        <wordle-letter
            :letter="isAdding.isNotInWord ? '' : '+'"
            :not-in-word="isAdding.isNotInWord"
            @click="toggleAddNotInWordMode"
        />
    </div>

    <h2 class="wordle-grid-label">
        Dans le mot&nbsp;:
    </h2>

    <div class="wordle-grid">
        <template
            v-for="(valid, index) in valids"
            :key="index"
        >
            <wordle-letter
                :column="index + 1"
                :row="1"
                :letter="valid || (isAdding.index === index ? '' : '+')"
                :valid="Boolean(valid) || (isAdding.index === index && isAdding.isValid)"
                :wrong-spot="(isAdding.index === index && isAdding.isValid === false)"
                @click="valid ? removeValid(index) : toggleAddMode(index)"
            />

            <template v-if="!valid && isAdding.index === index && isAdding.isValid === null">
                <wordle-letter
                    :column="index + 1"
                    :row="2"
                    letter="+"
                    valid
                    @click="toggleAddValidMode"
                />

                <wordle-letter
                    :column="index + 1"
                    :row="3"
                    letter="+"
                    wrong-spot
                    @click="toggleAddWrongSpotMode"
                />
            </template>
        </template>

        <template
            v-for="(wrongSpot, index) in wrongSpots"
            :key="index"
        >
            <wordle-letter
                v-for="(wrongSpotLetter, letterIndex) in wrongSpot"
                :key="`${index}-${letterIndex}`"
                tag="button"
                :column="index + 1"
                :row="(isAdding.index === index && isAdding.isValid === null ? 4 : 2) + letterIndex"
                :letter="wrongSpotLetter"
                wrong-spot
                @click="removeWrongSpot(index, wrongSpotLetter)"
            />
        </template>
    </div>

    <wordle-keyboard
        v-if="(isAdding.index !== null && isAdding.isValid !== null) || isAdding.isNotInWord"
        @letter="addLetter"
    />
</template>

<script>
export default {
    data() {
        return {
            isAdding: {
                index: null,
                isValid: null,
                isNotInWord: null,
            },
            count: 0,
            notInWord: new Set(),
            valids: [],
            wrongSpots: [],
        }
    },
    created() {
        this.init(5)
    },
    methods: {
        addLetter(letter) {
            if (this.isAdding.isNotInWord) {
                this.notInWord.add(letter)
            } else if (this.isAdding.index !== null) {
                if (this.isAdding.isValid) {
                    this.valids[this.isAdding.index] = letter
                } else {
                    this.wrongSpots[this.isAdding.index].add(letter)
                }
            }

            this.toggleAddMode()
        },
        init(count) {
            this.count = count

            this.valids.length = count
            this.wrongSpots.length = count

            this.valids.fill(undefined)

            for (let i = 0; i < count; i++) {
                this.wrongSpots[i] = new Set()
            }

            this.notInWord.clear()
        },
        removeNotInWord(letter) {
            this.notInWord.delete(letter)
        },
        removeValid(index) {
            this.valids[index] = undefined
        },
        removeWrongSpot(index, letter) {
            this.wrongSpots[index].delete(letter)
        },
        toggleAddMode(index) {
            if (index !== undefined && this.isAdding.index === null) {
                this.isAdding.index = index
            } else {
                this.isAdding.index = null
            }

            this.isAdding.isNotInWord = null
            this.isAdding.isValid = null
        },
        toggleAddNotInWordMode() {
            this.isAdding.isNotInWord = !this.isAdding.isNotInWord
        },
        toggleAddValidMode() {
            this.isAdding.isValid = true
        },
        toggleAddWrongSpotMode() {
            this.isAdding.isValid = false
        },
    },
}
</script>

<style lang="scss">
.wordle-grid {
    display: grid;
    grid-template-columns: repeat(v-bind(count), minmax(32px, 64px));
    grid-gap: var(--grid-gap);
    justify-content: center;
    margin-bottom: 2em;

    &-label {
        text-align: center;
        color: var(--color-headline);
    }
}
</style>
