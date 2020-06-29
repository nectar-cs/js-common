import { createGlobalStyle } from 'styled-components'
import {theme} from "./constants";

const colors = theme.colors;

export const MosaicBaseStyle = createGlobalStyle`

  body {
    padding: 0;
    margin: 0;
  }

  h1, h2, h3, h4, h5, p, a, input, button, li, option {
    font-family: 'Inter', sans-serif;
    color: ${colors.primaryColor};
    margin: 0;
    padding: 0;
    background: transparent;
    text-decoration: none;       
  }
  
  p, a, input, select, li{ 
    font-size: 13px; 
  }
  
  a{
    text-decoration: underline;
    cursor: pointer;
  }
  
  :not(pre) > code[class*="language-"], pre[class*="language-"] {
    background: ${colors.primaryColor};
    padding: 12px 3px;
    border-radius: 4px;
    border-color: transparent;
  }
  
  pre[class*="language-"] {
    font-size: 15px;
    border-width: 0;
    box-shadow: none;
  }
  
  code[class*="language-"] {
    text-shadow: none;
  }
  
  li {
    margin-top: 8px;
  }
  
  .material-icons {
    color: ${colors.primaryColor};
  }

  :not(pre) > code[class*="language-"], pre[class*="language-"] {
    background: transparent;
    padding: 12px 3px;
    border-radius: 4px;
  }
  
  pre[class*="language-"] {
    font-size: 14px;
  }
  
  code {
    color: ${colors.primaryColor};
  }

  option {
    background: ${colors.itemBackgroundColor};
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  ::-webkit-scrollbar {
    display: none;
  }
`;
