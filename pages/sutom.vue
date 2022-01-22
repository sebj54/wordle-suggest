<template>
    <div>
        <game-version v-bind="gameVersion" />

        <wordle-grid
            :min-count="6"
            :max-count="9"
            :fetch-dictionary="fetchDictionary"
        />
    </div>
</template>

<script>
import gameVersions from '@/data/games.json'

export default {
    data() {
        return {
            gameVersion: gameVersions.sutom,
        }
    },
    methods: {
        async fetchDictionary(count) {
            const { words } = await import(`@/data/dictionaries/fr-sutom/${count}.json`)
            return words
        },
    },
}
</script>
