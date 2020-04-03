import React from 'react'
import styled, {css} from "styled-components";
import {commonSizeAttrs} from "./constants";

const borderWidth = "1.0px";

const _Table = styled(props => (
  <table {...props}>
    <tbody>
    { props.children }
    </tbody>
  </table>
))`
    ${commonSizeAttrs};
    width: ${p => p.width || '100%'};
    border-collapse: collapse;
    th, td {
      padding: 11px 4px;
      text-align: left;
      &:nth-child(1){
      }
      &:last-child{
        text-align: left;
      }
    }
    
    tr {
      border-top: ${borderWidth} solid transparent;
      border-bottom: ${borderWidth} solid #ddd;
    }
    
    th p {
      font-weight: 600;
    }
    
    tr:last-child {
      border-bottom: ${borderWidth} solid transparent;
    }
`;

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
  borderWidth
};

export default Table;
