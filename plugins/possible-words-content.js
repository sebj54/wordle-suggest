import Vue from 'vue'

Vue.directive('possible-words-content', (el, { value }) => {
    let content = ''

    if (value && Array.isArray(value)) {
        content = value.reduce((content, word) => {
            return `${content} <li class="wordle-grid-word">${word}</li>`
        }, '')
    }

    el.innerHTML = content
})
