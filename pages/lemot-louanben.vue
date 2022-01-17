<template>
    <div>
        <wordle-grid :dictionary="dictionary" />
    </div>
</template>

<script>
import dictionary from '@/dictionaries/fr-louanben.json'

export default {
    data() {
        return {
            dictionary,
        }
    },
}
</script>
