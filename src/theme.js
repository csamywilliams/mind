const BASE_PALETTE = {
	SAND: '#AA9D89',
	BLUSH: '#F5CFC4',
	LILAC: '#BDB3BF',
	BLUE: '#69919D',
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
	PRIMARY_COLOUR: BASE_PALETTE.BURNT_ORANGE,
	SECONDARY_COLOR: BASE_PALETTE.SAND,
	TERTIARY_COLOUR: BASE_PALETTE.LILAC,
	TILE1: BASE_PALETTE.LIGHT_GREEN,
	TILE2: BASE_PALETTE.LIGHT_YELLOW,
	TILE3: BASE_PALETTE.LIGHT_LILAC,
	WHITE: BASE_PALETTE.WHITE,
	PRIMARY_FONT: BASE_PALETTE.DARK_GREY,
};

export const theme = {
	header: {
		borderBottom: COLORS.PRIMARY_COLOUR,
	},
	tile: {
		border: COLORS.PRIMARY_COLOUR,
		hover: COLORS.TERTIARY_COLOUR,
	},
	sideNavbar: {
		background: COLORS.GREY,
	},
	button: {
		backgroundColor: COLORS.PRIMARY_COLOR,
		color: COLORS.PRIMARY_COLOR,
		border: COLORS.PRIMARY_COLOR,
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
