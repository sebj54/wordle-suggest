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
            gameVersion: gameVersions.original,
        }
    },
    methods: {
        async fetchDictionary() {
            const { words } = await import('@/data/dictionaries/en-original.json')
            return words
        },
    },
}
</script>
