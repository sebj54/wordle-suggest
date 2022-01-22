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
            gameVersion: gameVersions['lemot-louanben'],
        }
    },
    methods: {
        async fetchDictionary() {
            const { words } = await import('@/data/dictionaries/fr-louanben.json')
            return words
        },
    },
}
</script>
