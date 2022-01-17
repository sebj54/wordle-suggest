<template>
    <div>
        <h2>{{ $t('whatisit') }}</h2>

        <p>{{ $t('introduction') }}</p>

        <p>
            {{ $t('about') }}

            <a
                href="https://github.com/sebj54"
                target="_blank"
                rel="noopener"
            >Sébastien JEAN</a>

            {{ $t('source') }}

            <a
                href="https://github.com/sebj54/wordle-suggest"
                target="_blank"
                rel="noopener"
            >GitHub</a>).
        </p>

        <h2>
            <label for="input-locale">{{ $t('lang') }}</label>
        </h2>

        <p>
            <select
                id="input-locale"
                name="locale"
                @change="$router.push(switchLocalePath($event.currentTarget.value))"
            >
                <option
                    v-for="locale in $i18n.locales"
                    :key="locale.code"
                    :selected="locale.code === $i18n.locale"
                    :value="locale.code"
                >
                    {{ locale.name }}
                </option>
            </select>
        </p>

        <h2>
            <label for="input-keyboard">{{ $t('keyboard') }}</label>
        </h2>

        <p>
            <select
                id="input-keyboard"
                v-model="keyboardLayout"
                name="keyboard"
            >
                <option
                    v-for="layout in availableKeyboardLayouts"
                    :key="layout"
                >
                    {{ layout }}
                </option>
            </select>
        </p>

        <h2>{{ $t('gameVersion') }}</h2>

        <div class="game-versions">
            <nuxt-link
                v-for="(gameVersion, index) in gameVersions"
                :key="index"
                :to="localePath(gameVersion.link)"
                class="game-version"
            >
                <span class="game-version-name">{{ gameVersion.name }}</span>

                <span class="game-version-author">{{ $t('gameVersionBy', gameVersion) }}</span>
            </nuxt-link>
        </div>

        <p>
            {{ $t('requestVersion') }}

            <a
                href="https://github.com/sebj54/wordle-suggest/issues/new"
                target="_blank"
                rel="noopener"
            >GitHub</a>.
        </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            gameVersions: [
                {
                    name: 'Wordle (original) 🇬🇧',
                    author: '@powerlanguish',
                    link: 'original',
                },
                {
                    name: 'Le Mot 🇫🇷',
                    author: '@louanben',
                    link: 'lemot-louanben',
                },
                {
                    name: 'Le Mot 🇫🇷',
                    author: 'solitaire-play.com',
                    link: 'lemot-solitaire-play',
                },
            ],
            keyboardLayout: 'QWERTY',
            availableKeyboardLayouts: [
                'QWERTY',
                'AZERTY',
                'QWERTZ',
            ],
        }
    },
    watch: {
        keyboardLayout() {
            window.localStorage.keyboardLayout = this.keyboardLayout
        },
    },
    mounted() {
        const defaultLayout = this.$i18n.locale === 'fr' ? 'AZERTY' : 'QWERTY'
        this.keyboardLayout = window.localStorage.keyboardLayout ?? defaultLayout
    },
}
</script>

<style lang="scss">
.game-versions {
    display: flex;
    flex-wrap: wrap;
    margin: -.5em;
    margin-bottom: .5em;
}

.game-version {
    display: flex;
    flex-direction: column;
    margin: .5em;
    padding: 1em;
    border-style: solid;
    border-width: 1px;
    border-radius: 6px;
    color: var(--color-headline);
    text-align: center;
    text-decoration: none;

    &:hover {
        background-color: rgba(255, 255, 255, .2);
    }
}
</style>
