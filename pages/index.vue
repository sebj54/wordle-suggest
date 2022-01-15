<template>
    <div>
        <wordle-grid :dictionary="dictionary" />
    </div>
</template>

<script>
import dictionaryEn from '@/dictionaries/en.json'
import dictionaryFr from '@/dictionaries/fr.json'

export default {
    data() {
        return {
            dictionary: [],
        }
    },
    fetch() {
        if (this.$i18n.locale === 'fr') {
            this.dictionary = dictionaryFr
        } else {
            this.dictionary = dictionaryEn
        }
    },
}
</script>
