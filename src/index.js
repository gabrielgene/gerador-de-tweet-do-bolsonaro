import React from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Export from './Export';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0 ;
    font-family: "Segoe UI",Arial,sans-serif;
    background: #74ebd5;
    background: linear-gradient(to right, #ACB6E5, #74ebd5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    overflow: hidden;
  }
`;

const Tweet = styled.div`
	width: 600px;
	min-height: 200px;
	height: auto;
	border-radius: 8px;
	padding: 35px;
	background: #fff;
	filter: drop-shadow(1px 4px 10px rgba(0, 0, 0, 0.3));
`;

function App() {
	return (
		<React.Fragment>
			<GlobalStyle />
			<Tweet id="tweet">
				<Header />
				<Content />
				<Footer />
			</Tweet>
			<Export />
		</React.Fragment>
	);
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
