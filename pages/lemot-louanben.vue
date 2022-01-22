<template>
    <div>
        <game-version v-bind="gameVersion" />

        <wordle-grid :dictionary="dictionary" />
    </div>
</template>

<script>
import dictionary from '@/data/dictionaries/fr-louanben.json'
import gameVersions from '@/data/games.json'

export default {
    data() {
        return {
            dictionary,
            gameVersion: gameVersions['lemot-louanben'],
        }
    },
}
</script>
