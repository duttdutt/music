// LINK: https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	runtimeConfig: {
		// Специальный синтаксис идентификаторов для автоматического подхвата:
		// LINK: https://nuxt.com/docs/guide/going-further/runtime-config#environment-variables
		secretToken: process.env.NUXT_SECRET_TOKEN,
		public: {
			token: "",
		},
	},
	compatibilityDate: "2024-11-01",
	css: ["~/assets/scss/styles.scss"],

	vite: {},

	typescript: {
		typeCheck: true,
	},

	devtools: {
		enabled: true,
		timeline: {
			enabled: true,
		},
	},

	modules: [
		"@pinia/nuxt",
		"@nuxt/eslint",
		"@nuxtjs/color-mode",
		"@nuxtjs/google-fonts",
	],

	/* Plugins */
	/**
	 * @package
	 * @link https://google-fonts.nuxtjs.org/getting-started/setup
	 * @param {string | number} app Testing.
	 */
	googleFonts: {
		overwriting: true, // prevents files from being downloaded more than once
		families: {
			Kanit: [100, 400, 600, 900],
			Inter: [100, 400, 600, 900],
			Nunito: [100, 400, 600, 900],
		},
	},
	/**
	 * @package
	 * @link https://color-mode.nuxtjs.org/#configuration
	 */
	colorMode: {
		preference: "light",
		fallback: "dark",
		hid: "nuxt-color-mode-script",
		globalName: "__NUXT_COLOR_MODE__",
		componentName: "ColorScheme",
		classPrefix: "",
		classSuffix: "",
		storage: "localStorage",
	},
});
