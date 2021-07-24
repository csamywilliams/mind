import styled from 'styled-components';
import { devices } from '../../../../js/devices';

export const TileStyled = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	text-align: center;
	align-content: center;

	.tile {
		width: 100%;
		border-radius: 0.5rem;
		padding: 1rem;
		margin: 1rem;
		width: 40vw;

		&--journal {
			background-color: ${({ theme }) => theme.tiles.tile1.background};

			&:hover {
				background: ${({ theme }) => theme.tiles.tile1.hover};
			}
		}

		&--goals {
			background-color: ${({ theme }) => theme.tiles.tile2.background};

			&:hover {
				background: ${({ theme }) => theme.tiles.tile2.hover};
			}
		}

		@media ${devices.laptop} {
			width: 20rem;
			flex-direction: row;
		}
	}
`;
