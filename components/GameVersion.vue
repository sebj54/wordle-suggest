<template>
    <div class="game-version">
        <h1 class="game-version-title">
            <span class="game-version-name">{{ name }}</span>

            <span class="game-version-author">{{ $t('gameVersionBy', { author }) }}</span>
        </h1>

        <nuxt-link
            :to="localePath('/')"
            class="game-version-back-link"
        >
            {{ $t('gameVersionBackLink') }}
        </nuxt-link>
    </div>
</template>

<script>
export default {
    props: {
        author: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
    },
}
</script>

<style lang="scss">
.game-version {
    margin-top: 1em;
    margin-bottom: 1.5em;
    text-align: center;

    &-author {
        font-size: .8em;
        font-style: italic;
    }

    &-title,
    &-back-link {
        display: inline;
        vertical-align: middle;
    }

    &-title {
        margin-top: 0;
        margin-bottom: 0;
        margin-right: .5em;
    }
}
</style>
