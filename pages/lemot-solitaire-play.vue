<template>
    <div>
        <wordle-grid :dictionary="dictionary" />
    </div>
</template>

<script>
import dictionary from '@/data/dictionaries/fr-solitaire-play.json'

export default {
    data() {
        return {
            dictionary,
        }
    },
}
</script>
