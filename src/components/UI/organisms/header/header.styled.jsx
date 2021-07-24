import styled from 'styled-components';

export const Title = styled.h1`
	font-size: 1.6rem;
	text-align: center;
	color: palevioletred;
	border-bottom: 1px solid ${({ theme }) => theme.header.borderBottom};
`;
