<template>
    <div>
        <wordle-grid />
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
