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

const Warning = styled.div`
	text-align: center;
	font-size: 0.7em;
	position: absolute;
	width: calc(100% - 70px);
	color: #657786;
`;

const Footer = () => (
	<div>
		<Wrapper>
			<Retweets>
				<span>{global.retweets}</span> Retweets
			</Retweets>
			<Likes>
				<span>{global.likes}</span> Curtidas
			</Likes>
			<Avatars />
		</Wrapper>
		<Warning>
			Esse tweet foi gerado com o <i>Gerador de Tweet do Bolsonaro</i>, e não é necessariamente verdadeiro
		</Warning>
	</div>
);

export default Footer;
