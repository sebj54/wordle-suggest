<template>
    <div>
        <wordle-line>
            <wordle-letter />
            <wordle-letter />
            <wordle-letter />
            <wordle-letter />
            <wordle-letter />
        </wordle-line>

        <wordle-line>
            <wordle-letter
                v-for="n in 5"
                :key="n"
                tag="button"
                letter="+"
                valid
            />
        </wordle-line>

        <wordle-line>
            <wordle-letter
                v-for="n in 5"
                :key="n"
                tag="button"
                letter="+"
                wrong-spot
            />
        </wordle-line>
    </div>
</template>

<script>
import dictionary from '@/dictionaries/fr.json'

export default {
    data() {
        return {
            dictionary,
        }
    },
}
</script>
