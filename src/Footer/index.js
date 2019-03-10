import React from 'react';
import styled from 'styled-components';
import Avatars from './Avatars';
import global from '../global';

const Wrapper = styled.ul`
	display: flex;
	border-top: 1px solid #e6ecf0;
	border-bottom: 1px solid #e6ecf0;
	padding: 0;
	margin-top: 15px;
`;

const RetAndLikeStyle = `
   display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.9em;
  color: #657786;
  margin-right: 10px;

  span {
    font-weight: bold;
    margin-right: 2.5px;
    color: #14171a;
  }
`;

const Retweets = styled.li`${RetAndLikeStyle};`;

const Likes = styled.li`${RetAndLikeStyle};`;

const Footer = () => (
	<Wrapper>
		<Retweets>
			<span>{global.retweets}</span> Retweets
		</Retweets>
		<Likes>
			<span>{global.likes}</span> Curtidas
		</Likes>
		<Avatars />
	</Wrapper>
);

export default Footer;
