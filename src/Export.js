import React from "react";
import styled from "styled-components";
import domtoimage from "dom-to-image";

const downloadTweet = async () => {
  const tweet = document.getElementById("tweet");

  const dataUrl = await domtoimage.toPng(tweet);

  var link = document.createElement("a");
  link.download = "tweet.png";
  link.href = dataUrl;
  link.click();
};

const StyledExport = styled.button`
  display: block;
  margin: 10px auto;
  outline: none;
  border: 1px solid #14171a;
  background-color: transparent;
  color: #14171a;
  font-weight: bold;
  padding: 10px 25px 10px 25px;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background-color: #14171a;
    color: #fff;
  }
`;

const Export = () => (
  <StyledExport onClick={downloadTweet} title="Download">
    Exportar para .png
  </StyledExport>
);

export default Export;
