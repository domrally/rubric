import {
	background,
	fade,
	grey,
	highlight,
	primary,
	secondary,
} from './dark.mjs'

const //
	clear = '#0000',
	darkest = '#000',
	lightest = '#fff'

const colors = {
	$schema: 'vscode://schemas/color-theme',
	type: 'dark',
	colors: {
		focusBorder: clear,
		foreground: grey,
		disabledForeground: fade,
		'widget.shadow': clear,
		'selection.background': background,
		descriptionForeground: fade,
		errorForeground: primary,
		'icon.foreground': fade,
		'sash.hoverBorder': secondary,
		'activityBar.background': background,
		'editor.background': background,
		'editor.foreground': grey,
		'editor.hoverHighlightBackground': darkest,
		'editor.lineHighlightBackground': darkest,
		'editor.lineHighlightBorder': clear,
		'editor.selectionBackground': highlight,
		'editor.selectionHighlightBackground': highlight,
		'editor.wordHighlightBackground': highlight,
		'editor.wordHighlightBorder': clear,
		'editor.wordHighlightStrongBackground': highlight,
		'editor.wordHighlightStrongBorder': highlight,
		'editorBracketMatch.background': highlight,
		'editorBracketMatch.border': clear,
		'editorCursor.foreground': lightest,
		'editorLineNumber.activeForeground': lightest,
		'editorLineNumber.foreground': fade,
		'list.activeSelectionBackground': background,
		'list.activeSelectionForeground': lightest,
		'list.inactiveSelectionBackground': background,
		'list.inactiveSelectionForeground': lightest,
		'sideBar.background': background,
		'sideBarSectionHeader.background': background,
	},
	tokenColors: [
		{
			scope: ['keyword', 'punctuation', 'storage'],
			settings: {
				foreground: fade,
			},
		},
		{
			scope: ['string', 'constant', 'support.constant'],
			settings: {
				foreground: grey,
				fontStyle: 'italic',
			},
		},
		{
			scope: ['support', 'keyword.operator.new', 'entity.name'],
			settings: {
				foreground: primary,
			},
		},
		{
			scope: ['comment'],
			settings: {
				foreground: secondary,
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
				foreground: secondary,
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
				foreground: primary,
			},
		},
	],
}

console.log(JSON.stringify(colors, null, 3))
