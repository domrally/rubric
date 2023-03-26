export const themes = {
	dark_contrast: {
		lch: { l: 0.845, c: 0.145 },
		// background
		darkest: { l: 0.8, c: 0.19 },
		// highlight
		darker: { l: 0.8, c: 0.19 },
		// fade
		dark: { l: 0.8, c: 0.19 },
		// grey
		light: { l: 0.8, c: 0.19 },
		// cyan
		lighter: { h: 208, ...lch },
		// magenta
		lightest: { h: 327, ...lch },
	},
	light: {
		lch: { c: 0.19 },
		// blue
		darkest: { l: 0.277, h: 265, ...lch },
		// grey
		darker: { l: 0.8, c: 0.19 },
		// highlight
		dark: { l: 0.8, c: 0.19 },
		// background
		light: { l: 0.8, c: 0.19 },
		// fade
		lighter: { h: 208, ...lch },
		// green
		lightest: { l: 0.905, h: 142.5, ...lch },
	},
	light_contrast: {
		lch: { l: 0.43, c: 0.145 },
		// blue
		darkest: { h: 256, ...lch },
		// green
		darker: { h: 142.5, ...lch },
		// grey
		dark: { l: 0.8, c: 0.19 },
		// fade
		light: { l: 0.8, c: 0.19 },
		// highlight
		lighter: { h: 208, ...lch },
		// background
		lightest: { h: 327, ...lch },
	},
}
