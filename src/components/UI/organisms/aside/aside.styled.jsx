import styled from 'styled-components';

export const AsideStyled = styled.aside`
	background-color: ${({ theme }) => theme.aside.bg};
`;

export const NameStyled = styled.span`
	font-size: 2.2rem;
	color: ${({ theme }) => theme.profile.name};
`;

export const ProfileImage = styled.div`
	clip-path: circle(48% at 50% 50%);
`;
