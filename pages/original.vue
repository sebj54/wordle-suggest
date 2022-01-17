<template>
    <div>
        <wordle-grid :dictionary="dictionary" />
    </div>
</template>

<script>
import dictionary from '@/dictionaries/en-original.json'

export default {
    data() {
        return {
            dictionary,
        }
    },
}
</script>
