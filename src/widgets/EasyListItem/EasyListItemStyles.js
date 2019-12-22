import styled from 'styled-components';

function selectedWidth(p){
  return p.selected ? "3px" : "3.0px";
}

function selectedColor(p){
  const {colors: c} = p.theme;
  return p.selected ? c.primaryColor : c.contentBackgroundColor;
}

const FlavorItem = styled.div`
  border-color: ${p => selectedColor(p)};
  border-width: ${p => selectedWidth(p)};
  border-style: solid;
  border-radius: 4px;
  padding: 12px;
  margin-top: 20px;
  cursor: ${p => p.selected ? 'default' : 'pointer'};
`;

const S = {
  FlavorItem
};

export default S;
