import React from 'react';
import styled from 'styled-components';
import Person from './Person';

const StyledHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
`;

const Follow = styled.button`
	border-radius: 20px;
	padding: 8px 32px 8px 32px;
	border: 1px solid #0084b4;
	color: #0084b4;
	font-weight: 800;
	background-color: transparent;
	outline: none;
	cursor: pointer;
	font-size: 0.88em;

	&:hover {
		background-color: #eaf5fd;
	}
`;

const Header = () => (
	<StyledHeader>
		<Person />
		<Follow>Seguir</Follow>
	</StyledHeader>
);

export default Header;
