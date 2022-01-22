<template>
    <div>
        <game-version v-bind="gameVersion" />

        <wordle-grid :dictionary="dictionary" />
    </div>
</template>

<script>
import dictionary from '@/data/dictionaries/fr-solitaire-play.json'
import gameVersions from '@/data/games.json'

export default {
    data() {
        return {
            dictionary,
            gameVersion: gameVersions['fr-solitaire-play'],
        }
    },
}
</script>
