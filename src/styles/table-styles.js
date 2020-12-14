import React from 'react'
import styled from "styled-components";
import {commonSizeAttrs} from "./constants";

const defBorderWidth = "1.0px";
const defBorderEmotion = '#ddd';

function innerBorderStyle(p){
  if(p.innerborder){
    return `${borWidth(p, p.innerBorderWidth)} solid ${borEmo(p)}`;
  }
}

const _Table = styled(props => (
  <table {...props}>
    <tbody>
    { props.children }
    </tbody>
  </table>
))`
    ${commonSizeAttrs};
    max-height: 100%;
    width: ${p => p.width || '100%'};
    border-collapse: collapse;
    th, td {
      padding: 11px 4px;
      text-align: left;
      &:nth-child(1){
      }
      &:last-child{
        text-align: left;
        border-right: none;
      }
      border-right: ${p => innerBorderStyle(p)};
    }
    
    tr {
      border-top: ${p => borWidth(p)} solid transparent;
      border-bottom: ${p => borWidth(p)} solid ${p => borEmo(p)};
    }
    
    th p {
      font-weight: 600;
    }
    
    tr:last-child {
      border-bottom: ${p => borWidth(p)} solid transparent;
    }
`;

function borWidth(p, backup){
  return p.borderWidth || backup || defBorderWidth;
}

function borEmo(p){
  return p.borderEmotion || defBorderEmotion;
}

const ModestHeader = styled.tr`
  th{
    p {
      font-weight: normal;
    }     
  }
`;

const SlimTable = styled(_Table)`
  tr{
    ${p => p.borderless ? 'border-style: none;' : 'solid'};
    td{
      padding: ${p => (p.space || 1) * 6}px;
    }
  }
`;

const SkinnyRow = styled.td`
  padding-top: 8px;
  padding-bottom: 8px;
`;

const Table = {
  Table: _Table,
  SlimTable,
  ModestHeader,
  SkinnyRow,
  borderWidth: defBorderWidth
};

export default Table;
