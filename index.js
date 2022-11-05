import { formatHex } from 'culori'

const //
	ler = 0.845,
	c = 0,
	h = 0,
	der = 0.18,
	d = 0.3

const //
	mode = 'oklch',
	clear = '#0000',
	darkest = '#000',
	darker = formatHex({ mode, l: der, c, h }),
	dark = formatHex({ mode, l: (3 * d + der) / 4, c, h }),
	sidebar = formatHex({ mode, l: (3 * der + d) / 4, c, h }),
	three = formatHex({ mode, l: d, c, h }),
	light = formatHex({ mode, l: 0.5, c, h }),
	lighter = formatHex({ mode, l: ler, c, h }),
	lightest = '#fff',
	pink = formatHex({ mode, l: ler, c: 0.145, h: 327 }),
	blue = formatHex({ mode, l: ler, c: 0.145, h: 208 })

const colors = {
	$schema: 'vscode://schemas/color-theme',
	type: 'dark',
	colors: {
		focusBorder: clear,
		foreground: lighter,
		disabledForeground: light,
		'widget.shadow': clear,
		'selection.background': darker,
		descriptionForeground: light,
		errorForeground: pink,
		'icon.foreground': light,
		'sash.hoverBorder': blue,
		'activityBar.background': dark,
		'editor.background': darker,
		'editor.foreground': lighter,
		'editor.hoverHighlightBackground': darkest,
		'editor.lineHighlightBackground': darkest,
		'editor.lineHighlightBorder': clear,
		'editor.selectionBackground': three,
		'editor.selectionHighlightBackground': three,
		'editor.wordHighlightBackground': dark,
		'editor.wordHighlightBorder': clear,
		'editor.wordHighlightStrongBackground': dark,
		'editor.wordHighlightStrongBorder': three,
		'editorBracketMatch.background': three,
		'editorBracketMatch.border': clear,
		'editorCursor.foreground': lightest,
		'editorLineNumber.activeForeground': lightest,
		'editorLineNumber.foreground': light,
		'list.activeSelectionBackground': darker,
		'list.activeSelectionForeground': lightest,
		'list.inactiveSelectionBackground': darker,
		'list.inactiveSelectionForeground': lightest,
		'sideBar.background': sidebar,
		'sideBarSectionHeader.background': dark,
	},
	tokenColors: [
		{
			scope: ['keyword', 'punctuation', 'storage'],
			settings: {
				foreground: light,
			},
		},
		{
			scope: ['string', 'constant', 'support.constant'],
			settings: {
				foreground: lighter,
				fontStyle: 'italic',
			},
		},
		{
			scope: ['support', 'keyword.operator.new', 'entity.name'],
			settings: {
				foreground: pink,
			},
		},
		{
			scope: ['comment'],
			settings: {
				foreground: blue,
			},
		},
		{
			scope: [
				'entity.name.type.alias',
				'entity.name.type.class',
				'entity.name.type.interface',
				'meta.definition.function',
			],
			settings: {
				fontStyle: 'bold',
			},
		},
		{
			scope: 'token.info-token',
			settings: {
				foreground: blue,
			},
		},
		{
			scope: 'token.warn-token',
			settings: {
				foreground: '#cd9731',
			},
		},
		{
			scope: 'token.error-token',
			settings: {
				foreground: '#f44747',
			},
		},
		{
			scope: 'token.debug-token',
			settings: {
				foreground: pink,
			},
		},
	],
}

console.log(JSON.stringify(colors, null, 3))
