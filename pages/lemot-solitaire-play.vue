<template>
    <div>
        <game-version v-bind="gameVersion" />

        <wordle-grid :fetch-dictionary="fetchDictionary" />
    </div>
</template>

<script>
import gameVersions from '@/data/games.json'

export default {
    data() {
        return {
            gameVersion: gameVersions['lemot-solitaire-play'],
        }
    },
    methods: {
        async fetchDictionary() {
            const { words } = await import('@/data/dictionaries/fr-solitaire-play.json')
            return words
        },
    },
}
</script>
