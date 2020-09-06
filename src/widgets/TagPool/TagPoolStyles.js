import React from 'react'
import styled from "styled-components";
import Text from "./../../styles/text-styles";

const tagHeight = 24;

export const Container = styled.div`
  width: 100%;
  border-width: 0 0 0 0;
  border-style: solid;
  margin: 0;
  outline: none;
`;

export const InputWrapper = styled.div`
  background: #f7f6f6;
  border: none;
  width: ${p => p.width || '100%'};
  box-sizing: border-box;
  min-height: ${tagHeight + 10}px;
  border-radius: ${p => p.theme.dims.borderRadius};
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  outline: none;
  box-shadow: none;

  input {
    padding: 0;
    margin: 0;
    box-shadow: none;
    flex-grow: 1;
    border: none;
    border-radius: ${p => p.theme.dims.borderRadius};
    outline: none;
    background: transparent;
  }
`;

export const ListBox = styled.ul`
  margin: 2px 0 0;
  padding: 0;
  position: absolute;
  list-style: none;
  overflow: auto;
  max-height: 250px;
  z-index: 1;
  outline: none;

  & li {
    padding: 5px 12px;
    display: flex;

    & span {
      flex-grow: 1;
    }

    & svg {
      color: transparent;
    }
  }

  & li[aria-selected='true'] {
    background-color: #fafafa;
    font-weight: 600;

    & svg {
      color: #1890ff;
    }
  }

  & li[data-focus='true'] {
    background-color: #e6f7ff;
    cursor: pointer;

    & svg {
      color: #000;
    }
  }
`;







export const Tag = styled(({ label, onDelete, ...props }) => (
  <div {...props}>
    <p>{label}</p>
    <Text.Icon
      onClick={onDelete}
      calm
      name='close'
      size={.5}
      ml={0.4}
      mt={.12}
    />
  </div>
))`
  display: flex;
  align-items: center;
  height: ${tagHeight}px;
  margin: 2px;
  line-height: 22px;
  background-color: #fafafa;
  border: 1px solid #e8e8e8;
  border-radius: 2px;
  box-sizing: content-box;
  padding: 0 4px 0 10px;
  outline: none;
  overflow: hidden;

  &:hover{
    cursor: default;
  }
  
  &:focus {
    border-color: #40a9ff;
    background-color: #e6f7ff;
  }

  & span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  & svg {
    font-size: 12px;
    cursor: pointer;
    padding: 4px;
  }
`;
