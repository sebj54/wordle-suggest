<template>
    <div>
        <wordle-grid :dictionary="dictionary" />
    </div>
</template>

<script>
import dictionary from '@/data/dictionaries/en-original.json'

export default {
    data() {
        return {
            dictionary,
        }
    },
}
</script>
