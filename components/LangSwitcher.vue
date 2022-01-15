<template>
    <div class="lang-switcher">
        <button
            type="button"
            class="lang-switcher-toggle"
            @click="toggle"
        >
            <!-- eslint-disable-next-line vue/max-attributes-per-line -->
            <svg class="lang-switcher-toggle-icon" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M27.85 29H30l-6-15h-2.35l-6 15h2.15l1.6-4h6.85Zm-7.65-6 2.62-6.56L25.45 23ZM18 7V5h-7V2H9v3H2v2h10.74a14.71 14.71 0 0 1-3.19 6.18A13.5 13.5 0 0 1 7.26 9h-2.1a16.47 16.47 0 0 0 3 5.58A16.84 16.84 0 0 1 3 18l.75 1.86A18.47 18.47 0 0 0 9.53 16a16.92 16.92 0 0 0 5.76 3.84L16 18a14.48 14.48 0 0 1-5.12-3.37A17.64 17.64 0 0 0 14.8 7Z" /></svg>

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
export default {
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

    &-toggle {
        display: flex;
        align-items: center;
        border-width: 0;
        background-color: transparent;
        color: currentColor;

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
    }
}
</style>
