import React from 'react';
import styled from 'styled-components';
import global from '../global';

const StyledPerson = styled.div`
	display: flex;
	align-items: center
`;

const Avatar = styled.img`
	width: 48px;
	height: 48px;
	object-fit: cover;
	border-radius: 50%;
	margin-right: 10px;
`;

const FullName = styled.h1`
	color: #14171a;
	margin: 0;
	font-size: 1.15em;
`;

const Verified = styled.img`
	position: absolute;
	top: 42px;
	left: 250px;
	width: 15px;
`;

const AliasName = styled.span`
	color: #657786;
	font-size: 0.96em;
`;

const Person = () => (
	<StyledPerson>
		<Avatar src={global.user.avatar} alt={global.user.twitter} title={global.user.fullName} />
		<div>
			<FullName>{global.user.fullName}</FullName>
			<Verified src={global.user.verified}></Verified>
			<AliasName>{global.user.twitter}</AliasName>
		</div>
	</StyledPerson>
);

export default Person;
