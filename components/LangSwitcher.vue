<template>
    <div class="lang-switcher">
        <button
            type="button"
            class="lang-switcher-toggle"
            @click="toggle"
        >
            <translate-svg class="lang-switcher-toggle-icon" />

            {{ $t('lang') }}
        </button>

        <ul
            class="lang-switcher-menu"
            :class="{
                '-active': isActive,
            }"
        >
            <li
                v-for="locale in $i18n.locales"
                :key="locale.code"
                class="lang-switcher-option"
            >
                <nuxt-link
                    :to="switchLocalePath(locale.code)"
                    class="lang-switcher-link"
                    @click.native="close"
                >
                    {{ locale.name }}
                </nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
import TranslateSvg from '~/assets/svg/translate.svg?inline'

export default {
    components: {
        TranslateSvg,
    },
    data() {
        return {
            isActive: false,
        }
    },
    methods: {
        close() {
            this.isActive = false
        },
        toggle() {
            this.isActive = !this.isActive
        },
    },
}
</script>

<style lang="scss">
.lang-switcher {
    position: relative;
    margin-left: auto;
    color: var(--color-headline);

    &-toggle {
        display: flex;
        align-items: center;
        border-width: 0;
        border-radius: 4px;
        background-color: transparent;
        color: currentColor;

        &:hover {
            background-color: rgba(255, 255, 255, .2);
        }

        &-icon {
            width: 1.5em;
            height: 1.5em;
            margin-right: .5em;
            fill: currentColor;
        }

        &::after {
            content: "";
            width: 0;
            height: 0;
            margin-top: .5em;
            margin-left: .4em;
            border: .5em solid transparent;
            border-top-color: currentColor;
        }
    }

    &-menu {
        position: absolute;
        top: 100%;
        right: 0;
        min-width: 100%;
        margin: 0;
        padding: 0;
        background-color: var(--color-bg);
        list-style-type: none;
        text-align: right;

        &:not(.-active) {
            display: none;
        }
    }

    &-link {
        display: block;
        padding: .5em;
        color: currentColor;

        &:hover {
            background-color: rgba(255, 255, 255, .2);
        }
    }
}
</style>
