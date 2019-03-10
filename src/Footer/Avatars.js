import React from 'react';
import styled from 'styled-components';
import global from '../global';

const StyledAvatars = styled.li`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	width: 60%;
`;

const Link = styled.a`
	padding: 11px 2px;
	width: 28px;
	height: 28px;

	&:first-child {
		padding-left: 12px;
		border-left: 1px solid #e6ecf0;
	}
`;

const Avatar = styled.img`
	width: 28px;
	height: 28px;
	object-fit: cover;
	border-radius: 50%;
`;

const Avatars = () => (
	<StyledAvatars>
		{global.avatars.map((avatar, index) => (
			<Link key={index}>
				<Avatar src={avatar} />
			</Link>
		))}
	</StyledAvatars>
);

export default Avatars;
