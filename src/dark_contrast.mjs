import { formatHex } from 'culori'

const //
	ch = { mode: 'oklch', c: 0, h: 0 },
	// background
	darker = { ...ch, l: 1 / 7 },
	// highlight
	dark = { ...ch, l: 1 / 6 },
	// fade
	shadow = { ...ch, l: 3 / 4 },
	// grey
	light = { ...ch, l: 4 / 5, c: 0.1, h: 268 },
	// pink
	lighter = { ...ch, l: 5 / 6 },
	// blue
	lightest = { ...ch, l: 6 / 7, c: 0.28, h: 142 }

export const // dark
	background = formatHex(darker),
	highlight = formatHex(dark),
	fade = formatHex(shadow),
	grey = formatHex(lighter),
	secondary = formatHex(light),
	primary = formatHex(lightest)
