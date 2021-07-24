const BASE_PALETTE = {
	LIGHT_BLUE: '#A6C5E8',
	SKY_BLUE: '#DBEDFE',
	GREY: '#F5F7FB',
	LIGHT_GREEN: '#E9F8F5',
	LIGHT_YELLOW: '#FFF7E3',
	LIGHT_LILAC: '#EEF0FF',
	SEA_GREEN: '#02AF92',
	YELLOW: '#FAD167',
	PURPLE: '#7178F6',
	LIGHT_ORANGE: '#FAD1BA',
	BURNT_ORANGE: '#FC5823',
	PALE_ORANGE: '#FFEEEB',
	DARK_GREY: '#474B5A',
	WHITE: '#FFF',
};

const COLORS = {
	PRIMARY_COLOR: BASE_PALETTE.BURNT_ORANGE,
	PRIMARY_COLOR_SOFT: BASE_PALETTE.LIGHT_ORANGE,
	PRIMARY_COLOR_INVERT: BASE_PALETTE.DARK_GREY,
	SECONDARY_COLOR: BASE_PALETTE.SKY_BLUE,
	TERTIARY_COLOR: BASE_PALETTE.LILAC,
	TILE1: BASE_PALETTE.LIGHT_GREEN,
	TILE2: BASE_PALETTE.LIGHT_YELLOW,
	TILE3: BASE_PALETTE.LIGHT_LILAC,
	WHITE: BASE_PALETTE.WHITE,
	PRIMARY_FONT: BASE_PALETTE.DARK_GREY,
};

export const theme = {
	banner: {
		bg: COLORS.WHITE,
	},
	content: {
		bg: COLORS.SECONDARY_COLOR,
	},
	header: {
		borderBottom: COLORS.PRIMARY_COLOR,
	},
	tile: {
		border: COLORS.PRIMARY_COLOR,
		hover: COLORS.TERTIARY_COLOR,
	},
	sideNavbar: {
		background: COLORS.GREY,
	},
	button: {
		bg: COLORS.PRIMARY_COLOR,
		color: COLORS.WHITE,
		border: COLORS.PRIMARY_COLOR,
		hover: {
			bg: COLORS.PRIMARY_COLOR_SOFT,
			border: COLORS.PRIMARY_COLOR_SOFT,
			color: COLORS.PRIMARY_COLOR_INVERT,
		},
	},
	tiles: {
		tile1: {
			background: COLORS.TILE1,
			svgColor: COLORS.WHITE,
		},
		tile2: {
			background: COLORS.TILE2,
			svgColor: COLORS.WHITE,
		},
		tile3: {
			background: COLORS.TILE3,
			svgColor: COLORS.WHITE,
		},
	},
};
