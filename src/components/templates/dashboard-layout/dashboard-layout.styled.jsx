import styled from 'styled-components';

export const DashboardStyled = styled.div``;

export const MainStyled = styled.main`
	display: flex;
	background: ${({ theme }) => theme.content.bg};
	border-top-left-radius: 1%;
`;

export const ContentStyled = styled.div`
	display: flex;
	height: 100vh;

	& > aside {
		flex-basis: 10vw;
		padding: 2%;
	}
`;
