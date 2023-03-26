import { formatHex } from 'culori'

const //
	ch = { mode: 'oklch', c: 0, h: 0 },
	// background
	darker = { ...ch, l: 1 / 5 },
	// highlight
	dark = { ...ch, l: 1 / 4 },
	// fade
	shadow = { ...ch, l: 1 / 2, c: 0.1, h: 200 },
	// grey
	light = { ...ch, l: 2 / 3 },
	// pink
	lighter = { ...ch, l: 3 / 4 },
	// blue
	lightest = { ...ch, l: 4 / 5, c: 0.19, h: 327 }

export const // dark
	background = formatHex(darker),
	highlight = formatHex(dark),
	fade = formatHex(light),
	grey = formatHex(lighter),
	secondary = formatHex(shadow),
	primary = formatHex(lightest)
