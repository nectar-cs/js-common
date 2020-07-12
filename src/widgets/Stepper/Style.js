import styled from 'styled-components'

export const Outer = styled.div`
  width: 100%;
  margin: 12px 0 0 0;
  position: relative;
  height: 60px;
`;

export const Inner = styled.div`
  position: absolute;
  top: 12px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
`;

export const Line = styled.div`
  position: absolute;
  top: 20px;
  left: ${p => p.offset}px;
  right: ${p => p.offset}px;
  height: 3px;
  background: #d6d6d6;
`;

export const BallContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Ball = styled.div`
  width: 20px;
  height: 20px;
  background: black;
  border-radius: 50%;
  box-sizing: border-box;
`;

export default S;
