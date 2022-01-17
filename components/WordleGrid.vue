<template>
    <div
        class="wordle-grid-wrapper"
        :style="`--count: ${count};`"
    >
        <h2 class="wordle-grid-label">
            {{ $t('notInWord') }}
        </h2>

        <template v-if="valids && wrongSpots && notInWord">
            <div class="wordle-grid -not-in-word">
                <wordle-letter
                    v-for="letter in notInWord"
                    :key="`not-in-word-${letter}`"
                    :letter="letter"
                    not-in-word
                    @click.native="removeNotInWord(letter)"
                />

                <wordle-letter
                    :letter="isAdding.isNotInWord ? '' : '+'"
                    :not-in-word="isAdding.isNotInWord"
                    @click.native="toggleAddNotInWordMode"
                />
            </div>

            <h2 class="wordle-grid-label">
                {{ $t('inWord') }}
            </h2>

            <div class="wordle-grid">
                <template
                    v-for="(valid, index) in valids"
                >
                    <wordle-letter
                        :key="`valid-${index}`"
                        :column="index + 1"
                        :row="1"
                        :letter="valid || (isAdding.index === index ? '' : '+')"
                        :valid="Boolean(valid) || (isAdding.index === index && isAdding.isValid)"
                        :wrong-spot="(isAdding.index === index && isAdding.isValid === false)"
                        @click.native="valid ? removeValid(index) : toggleAddMode(index)"
                    />

                    <template v-if="!valid && isAdding.index === index && isAdding.isValid === null">
                        <wordle-letter
                            :key="`valid+-${index}`"
                            :column="index + 1"
                            :row="2"
                            letter="+"
                            valid
                            @click.native="toggleAddValidMode"
                        />

                        <wordle-letter
                            :key="`wrong-spot+-${index}`"
                            :column="index + 1"
                            :row="3"
                            letter="+"
                            wrong-spot
                            @click.native="toggleAddWrongSpotMode"
                        />
                    </template>
                </template>

                <template
                    v-for="(wrongSpot, index) in wrongSpots"
                >
                    <wordle-letter
                        v-for="(wrongSpotLetter, letterIndex) in wrongSpot"
                        :key="`wrong-spot-${index}-${letterIndex}`"
                        tag="button"
                        :column="index + 1"
                        :row="(isAdding.index === index && isAdding.isValid === null ? 4 : 2) + letterIndex"
                        :letter="wrongSpotLetter"
                        wrong-spot
                        @click.native="removeWrongSpot(index, wrongSpotLetter)"
                    />
                </template>
            </div>

            <h2 class="wordle-grid-label">
                {{ $tc('possibleWords', wordsFiltered.length, { count: wordsFiltered.length }) }}
            </h2>

            <ul class="wordle-grid-words">
                <li
                    v-for="word in wordsFiltered"
                    :key="word"
                    class="wordle-grid-word"
                >
                    {{ word }}
                </li>
            </ul>

            <wordle-keyboard
                v-if="(isAdding.index !== null && isAdding.isValid !== null) || isAdding.isNotInWord"
                :not-in-word="notInWord"
                :valids="valids"
                :wrong-spots="wrongSpots"
                @letter="addLetter"
            />
        </template>
    </div>
</template>

<script>
import Vue from 'vue'

export default {
    props: {
        count: {
            type: Number,
            default: 5,
        },
        dictionary: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            isAdding: {
                index: null,
                isValid: null,
                isNotInWord: null,
            },
            valids: [],
            wrongSpots: [],
            notInWord: new Set(),
            wordsFiltered: [],
        }
    },
    fetch() {
        this.valids.length = this.count
        this.wrongSpots.length = this.count

        this.valids.fill(undefined)

        for (let i = 0; i < this.count; i++) {
            Vue.set(this.wrongSpots, i, new Set())
        }

        this.notInWord.clear()

        this.wordsFiltered = this.dictionary
    },
    watch: {
        dictionary() {
            this.filterWords()
        },
    },
    mounted() {
        window.addEventListener('keydown', (event) => {
            if (/^[a-zA-Z]$/.test(event.key)) {
                if (this.isAdding.isNotInWord || this.isAdding.index !== null) {
                    this.addLetter(event.key.toUpperCase())
                }
            }
        })
    },
    methods: {
        addLetter(letter) {
            if (this.isAdding.isNotInWord) {
                this.notInWord.add(letter)
            } else if (this.isAdding.index !== null) {
                if (this.isAdding.isValid) {
                    Vue.set(this.valids, this.isAdding.index, letter)
                } else {
                    this.wrongSpots[this.isAdding.index].add(letter)
                }
            }

            this.toggleAddMode()
            this.filterWords()
        },
        filterWords() {
            const validPattern = this.valids.map(letter => letter ?? '.').join('')
            const wrongSpotPattern = this.wrongSpots.map((wrongSpotLetters) => {
                if (wrongSpotLetters.size) {
                    return `[^${Array.from(wrongSpotLetters).join('')}]`
                }

                return '.'
            }).join('')

            const inWordLetters = this.wrongSpots.reduce((inWordLetters, wrongSpotLetters) => {
                wrongSpotLetters.forEach(letter => inWordLetters.add(letter))
                return inWordLetters
            }, new Set())

            this.wordsFiltered = this.dictionary
                .filter(word => !word.match(new RegExp(`[${Array.from(this.notInWord).join('')}]`)))
                .filter((word) => {
                    for (const letter of inWordLetters) {
                        if (!word.includes(letter)) {
                            return false
                        }
                    }

                    return true
                })
                .filter(word => word.match(new RegExp(validPattern)))
                .filter(word => word.match(new RegExp(wrongSpotPattern)))
        },
        removeNotInWord(letter) {
            this.notInWord.delete(letter)
            this.filterWords()
        },
        removeValid(index) {
            Vue.set(this.valids, index, undefined)
            this.filterWords()
        },
        removeWrongSpot(index, letter) {
            this.wrongSpots[index].delete(letter)
            this.filterWords()
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
    grid-template-columns: repeat(var(--count), minmax(32px, 64px));
    grid-gap: var(--grid-gap);
    justify-content: center;
    margin-bottom: 2em;

    &-label {
        text-align: center;
        color: var(--color-headline);
    }

    &-words {
        display: grid;
        grid-template-columns: repeat(2, max-content);
        justify-content: center;
        margin: 0;
        padding: 0;
        list-style-type: none;
        font-size: 1.5em;
    }

    &-word {
        margin-bottom: .5em;
        padding-left: .5em;
        padding-right: .5em;
    }
}
</style>
