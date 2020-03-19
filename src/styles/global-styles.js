import { createGlobalStyle } from 'styled-components'
import {theme} from "./constants";

const colors = theme.colors;
const dims = theme.dims;

export const MosaicBaseStyle = createGlobalStyle`

  body {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0;
    margin: 0;
    background: ${colors.contentBackgroundColor};
  }

  ::-webkit-scrollbar {
    display: none;
  }

  h1, h2, h3, h4, h5, p, a, input, button, li{
    font-family: 'Inter', sans-serif;
    color: ${colors.primaryColor};
    margin: 0;
    padding: 0;
    background: transparent;
    text-decoration: none;
  }
  
  a{
    text-decoration: underline;
    cursor: pointer;
  }
  
  h2, h3 { font-weight: 400; }
  p, input, select, li{ font-size: 13px; }
  input { font-weight: 500; }
  h3 { margin-bottom: 16px; }
  h4 { margin-top: 28px; }

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





  input {
    display: block;
    background: transparent;
    border-color: ${colors.primaryColor};
    margin-top: 24px;
    border-width: 1px;
    border-radius: 3px;
    padding: 7px 10px;
    width: 350px;
    color: ${colors.primaryColor};
  }
  
  input::placeholder {
    opacity: 0.7;
    color: ${colors.primaryFontMuted};
  }
  
  input:focus {
    outline: none;
  }
  
  input[type=checkbox] {
    padding: 0;
    margin: 0;
    width: auto;
  }
  
  button {
    margin-top: 40px;
    background: tomato;
    border-width: 0;
    border-radius: 3px;
    padding: 8px 0;
    font-weight: 500;
  }
  
  button:focus {
    outline-color: white;
  }
  
  button:hover {
    cursor: pointer;
  }
  
  button:disabled {
    cursor: auto;
  }
  
  select {
    background: transparent;
    border-color: ${colors.primaryFont};
    margin: 0;
    border-width: 1.4px;
    border-radius: 4px;
    padding: 6px 10px;
    width: 350px;
    color: ${colors.primaryFont};
  }
  
  option {
    background: ${colors.itemBackgroundColor};
  }





  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    padding: 11px 4px;
    text-align: left;
  }
  
  tr, th {
    border-top: ${dims.tableBorderWidth} solid transparent;
    border-bottom: ${dims.tableBorderWidth} solid #ddd;
  }
  
  th p {
    font-weight: 600;
  }
  
  tr:last-child {
    border-bottom: ${dims.tableBorderWidth} solid transparent;
  }
`;
