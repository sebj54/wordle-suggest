<template>
    <div class="game-version">
        <h1 class="game-version-title">
            <span class="game-version-name">{{ name }}</span>

            <span class="game-version-author">{{ $t('gameVersionBy', { author }) }}</span>
        </h1>

        <a
            :href="link"
            class="game-version-game-link"
            target="_blank"
            rel="noopener"
        >
            <span class="sr-only">{{ $t('goToGame') }}</span>

            <external-link-svg
                class="game-version-link-icon"
                aria-hidden
            />
        </a>

        <nuxt-link
            :to="localePath('/')"
            class="game-version-back-link"
        >
            {{ $t('gameVersionBackLink') }}
        </nuxt-link>
    </div>
</template>

<script>
import ExternalLinkSvg from '~/assets/svg/external-link.svg?inline'

export default {
    components: {
        ExternalLinkSvg,
    },
    props: {
        author: {
            type: String,
            required: true,
        },
        link: {
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
        margin-right: .25em;
    }

    &-game-link {
        display: inline-block;
        vertical-align: middle;
        width: 1.2em;
        height: 1.2em;
        margin-right: .5em;
        color: var(--color-headline);
    }
}
</style>
